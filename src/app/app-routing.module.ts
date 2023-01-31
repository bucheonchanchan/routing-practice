import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Acomponent } from './acomponent/acomponent.component';
import { Bcomponent } from './bcomponent/bcomponent.component';
import { Ccomponent } from './ccomponent/ccomponent.component';
import { Dcomponent } from './dcomponent/dcomponent.component';
import { Ecomponent } from './ecomponent/ecomponent.component';

const routes: Routes = [
  {
    path: 'A',
    component: Acomponent,
    children: [
      { path: 'C', component: Ccomponent },
      { path: 'D', component: Dcomponent },
      { path: ':id', component: Ecomponent }
    ]
  },
  {
    path: 'B',
    component: Bcomponent,
    children: [
      { path: 'C', component: Ccomponent },
      { path: 'D', component: Dcomponent },
      { path: ':id', component: Ecomponent }
    ]
  },
  {
    path: '',
    redirectTo: 'A',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
