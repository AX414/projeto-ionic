import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'totoro',
    loadChildren: () => import('./filmes/totoro/totoro.module').then( m => m.TotoroPageModule)
  },
  {
    path: 'kiki',
    loadChildren: () => import('./filmes/kiki/kiki.module').then( m => m.KikiPageModule)
  },
  {
    path: 'chihiro',
    loadChildren: () => import('./filmes/chihiro/chihiro.module').then( m => m.ChihiroPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
