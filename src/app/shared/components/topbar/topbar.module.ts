import { TopBarComponent } from './topbar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule
  ],
  exports: [TopBarComponent],
  providers: [],
})
export class TopBarModule { }
