import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { InicioFormularioComponent } from "./inicio-formulario/inicio-formulario.component";
const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component:LoginComponent},
    {path: 'inicio-formulario', component:InicioFormularioComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] =[]
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)