import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrendaComponent } from './components/prenda/prenda.component';
import { PrendasComponent } from './components/prendas/prendas.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'prendas', component:PrendasComponent},
  {path: 'prendaS/:id', component:PrendaComponent},
  {path: 'about', component:AboutComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
