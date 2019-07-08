import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IPlataforma } from 'app/shared/model/plataforma.model';
import { AccountService } from 'app/core';
import { PlataformaService } from './plataforma.service';

@Component({
  selector: 'jhi-plataforma',
  templateUrl: './plataforma.component.html'
})
export class PlataformaComponent implements OnInit, OnDestroy {
  plataformas: IPlataforma[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected plataformaService: PlataformaService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.plataformaService
      .query()
      .pipe(
        filter((res: HttpResponse<IPlataforma[]>) => res.ok),
        map((res: HttpResponse<IPlataforma[]>) => res.body)
      )
      .subscribe(
        (res: IPlataforma[]) => {
          this.plataformas = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInPlataformas();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPlataforma) {
    return item.id;
  }

  registerChangeInPlataformas() {
    this.eventSubscriber = this.eventManager.subscribe('plataformaListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
