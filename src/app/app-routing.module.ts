import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './conponents/component/cover/cover.component';
import { ComidaRapidaComponent } from './conponents/component/comida-rapida/comida-rapida.component';
import { PostresComponent } from './conponents/component/postres/postres.component';
import { BebidasComponent } from './conponents/component/bebidas/bebidas.component'



const routes: Routes = [
  { path: '', component: CoverComponent },
  { path: 'Comida', component: ComidaRapidaComponent },
  { path: 'Bebidas', component: BebidasComponent },
  { path: 'Postres', component: PostresComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
