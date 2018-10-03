import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService as AuthGuard} from "./shared/services/authentication/auth-guard.service";
import { RoleGuardService } from "./shared/services/authentication/role-guard.service";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: "../app/admin/admin.module#AdminModule",
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    } 
  },
  {
    path: "user",
    loadChildren: "../app/user/user.module#UserModule"
  },
  {
    path: "examples",
    loadChildren: "../app/examples/examples.module#ExamplesModule"
  },
  {
    path: "login",
    loadChildren: "../app/login/login.module#LoginModule"
  },
  { path: '', redirectTo: '/examples', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}