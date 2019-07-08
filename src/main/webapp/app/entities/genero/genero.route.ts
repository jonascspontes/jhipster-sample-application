import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Genero } from 'app/shared/model/genero.model';
import { GeneroService } from './genero.service';
import { GeneroComponent } from './genero.component';
import { GeneroDetailComponent } from './genero-detail.component';
import { GeneroUpdateComponent } from './genero-update.component';
import { GeneroDeletePopupComponent } from './genero-delete-dialog.component';
import { IGenero } from 'app/shared/model/genero.model';

@Injectable({ providedIn: 'root' })
export class GeneroResolve implements Resolve<IGenero> {
  constructor(private service: GeneroService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGenero> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Genero>) => response.ok),
        map((genero: HttpResponse<Genero>) => genero.body)
      );
    }
    return of(new Genero());
  }
}

export const generoRoute: Routes = [
  {
    path: '',
    component: GeneroComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Generos'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: GeneroDetailComponent,
    resolve: {
      genero: GeneroResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Generos'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: GeneroUpdateComponent,
    resolve: {
      genero: GeneroResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Generos'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: GeneroUpdateComponent,
    resolve: {
      genero: GeneroResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Generos'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const generoPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: GeneroDeletePopupComponent,
    resolve: {
      genero: GeneroResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Generos'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
