import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IGenero } from 'app/shared/model/genero.model';
import { GeneroService } from './genero.service';

@Component({
  selector: 'jhi-genero-delete-dialog',
  templateUrl: './genero-delete-dialog.component.html'
})
export class GeneroDeleteDialogComponent {
  genero: IGenero;

  constructor(protected generoService: GeneroService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.generoService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'generoListModification',
        content: 'Deleted an genero'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-genero-delete-popup',
  template: ''
})
export class GeneroDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ genero }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(GeneroDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.genero = genero;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/genero', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/genero', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}
