import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'plataforma',
        loadChildren: './plataforma/plataforma.module#JhipsterSampleApplicationPlataformaModule'
      },
      {
        path: 'genero',
        loadChildren: './genero/genero.module#JhipsterSampleApplicationGeneroModule'
      },
      {
        path: 'game',
        loadChildren: './game/game.module#JhipsterSampleApplicationGameModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
