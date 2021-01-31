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


//Example
#create a module
ng g m users // This will create users module in app module

#Create 2 Components under the Users Module
ng g c users/login
ng g c users/signup

# In the users module ts file export users module component to call in another components.
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

# also export components by adding below code
  exports: [
    LoginComponent,
    SignupComponent
  ]

# Import users module in the app module ts file
import { UsersModule } from './users/users.module';
  imports: [
    UsersModule
  ]

# Add Users components in app routing modules ts file
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

# Add navigation in app component html file
<ul>
    <li>
        <a routerLink="login">Login</a>
    </li>
    <li>
        <a routerLink="signup">Sign up</a>
    </li>
</ul>
<router-outlet></router-outlet>
