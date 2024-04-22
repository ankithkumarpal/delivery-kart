import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'ipl' ,
  loadChildren: () =>
    import('./ipl/ipl.module').then((m) => m.IPLModule)
  },
  {path:'' ,
   loadChildren : () =>
                       import('./delivery/delivery.module').then((m)=>m.DeliveryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
