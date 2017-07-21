import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Second } from './second';

@NgModule({
  declarations: [
    Second,
  ],
  imports: [
    IonicPageModule.forChild(Second),
  ],
  exports: [
    Second
  ]
})
export class SecondModule {}
