import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IGenero } from 'app/shared/model/genero.model';
import { AccountService } from 'app/core';
import { GeneroService } from './genero.service';

@Component({
  selector: 'jhi-genero',
  templateUrl: './genero.component.html'
})
export class GeneroComponent implements OnInit, OnDestroy {
  generos: IGenero[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected generoService: GeneroService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.generoService
      .query()
      .pipe(
        filter((res: HttpResponse<IGenero[]>) => res.ok),
        map((res: HttpResponse<IGenero[]>) => res.body)
      )
      .subscribe(
        (res: IGenero[]) => {
          this.generos = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInGeneros();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IGenero) {
    return item.id;
  }

  registerChangeInGeneros() {
    this.eventSubscriber = this.eventManager.subscribe('generoListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
