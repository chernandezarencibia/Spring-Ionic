import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'update-form/:id', loadChildren: './update-form/update-form.module#UpdateFormPageModule' }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
