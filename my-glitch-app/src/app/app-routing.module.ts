import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
