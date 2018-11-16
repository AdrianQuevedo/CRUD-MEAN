import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // incluimos la ruta login para que carge el componente de login
  { path: '', component: LoginComponent }
];

@NgModule({
  // llamamos a forRoot para inicializar en el nivel raiz la aplicación
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
