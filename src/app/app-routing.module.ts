import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardcoverComponent } from './hardcover/hardcover.component';

const routes: Routes = [
  {path:'',component:HardcoverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
