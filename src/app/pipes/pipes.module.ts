import { SafePipe } from './safe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {VirgulaPipe} from "./virgula.pipe";

@NgModule({
  declarations: [VirgulaPipe, SafePipe],
  imports: [
    CommonModule,
  ],
    exports: [VirgulaPipe, SafePipe]
})
export class PipesModule { }
