### While installing Angular, Angular ask to install Routing also but if you did not install it or you want to install it later please type the below command.
ng generate module app-routing --flat --module=app


import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
const routes: Routes = [
  {
    path: 'about',
    component: component
  },
  {
    path: 'contact',
    component: component
  },
  {
    path: '**', //wild card routing means when no one page is available then which page will be render means 404 page 
    component: component
  }
]
