import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuard]// faqat admin huquqiga ega bo'lgan foydalanuvchilar kirishi mumkin

  },
  //  boshqa routerlar



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
