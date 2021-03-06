import { NgModule } from '@angular/core';

import { SharedModule } from '@/shared';

import { DiffsRoutingModule } from './diffs-routing.module';
import { DiffsComponent } from './diffs.component';

@NgModule({
  imports: [
    SharedModule,
    DiffsRoutingModule,
  ],
  declarations: [
    DiffsComponent,
  ],
  providers: [],
})
export class DiffsModule { }
export function DiffsModuleFactory() {
  return DiffsModule;
}
