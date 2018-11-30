import { LoginComponent } from './components/login/login.component';
import { IndexComponent} from './components/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // incluimos la ruta login para que carge el componente de login
  { path: '', component: IndexComponent },
  { path: './login', component: LoginComponent}
];

@NgModule({
  // llamamos a forRoot para inicializar en el nivel raiz la aplicación
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
