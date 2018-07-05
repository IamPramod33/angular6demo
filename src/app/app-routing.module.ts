import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: "../app/admin/admin.module#AdminModule"
  },
  {
    path: "user",
    loadChildren: "../app/user/user.module#UserModule"
  },
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}