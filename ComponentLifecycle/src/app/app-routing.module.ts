import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HookCycleComponent } from './Component/hook-cycle/hook-cycle.component';

const routes: Routes = [
  {
    path: '',component:HookCycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
