import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HamiltonPage } from './hamilton';

@NgModule({
  declarations: [
    HamiltonPage,
  ],
  imports: [
    IonicPageModule.forChild(HamiltonPage),
  ],
})
export class HamiltonPageModule {}
