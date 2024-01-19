import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadComponent: () => import('./components/crud-list/crud-list.component').then( c=> c.CrudListComponent) },
  { path:'add', loadComponent: () => import('./components/crud-add-edit/crud-add-edit.component').then( c=>c.CrudAddEditComponent)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
