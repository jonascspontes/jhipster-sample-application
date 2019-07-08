import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
  GameComponent,
  GameDetailComponent,
  GameUpdateComponent,
  GameDeletePopupComponent,
  GameDeleteDialogComponent,
  gameRoute,
  gamePopupRoute
} from './';

const ENTITY_STATES = [...gameRoute, ...gamePopupRoute];

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [GameComponent, GameDetailComponent, GameUpdateComponent, GameDeleteDialogComponent, GameDeletePopupComponent],
  entryComponents: [GameComponent, GameUpdateComponent, GameDeleteDialogComponent, GameDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationGameModule {}
