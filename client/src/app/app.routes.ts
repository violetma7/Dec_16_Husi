import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {JobComponent} from "./job/job.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'job',
    component: JobComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

export const appRoutes =
  RouterModule.forRoot(routes);
