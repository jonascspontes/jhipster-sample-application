import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
  GeneroComponent,
  GeneroDetailComponent,
  GeneroUpdateComponent,
  GeneroDeletePopupComponent,
  GeneroDeleteDialogComponent,
  generoRoute,
  generoPopupRoute
} from './';

const ENTITY_STATES = [...generoRoute, ...generoPopupRoute];

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [GeneroComponent, GeneroDetailComponent, GeneroUpdateComponent, GeneroDeleteDialogComponent, GeneroDeletePopupComponent],
  entryComponents: [GeneroComponent, GeneroUpdateComponent, GeneroDeleteDialogComponent, GeneroDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationGeneroModule {}
