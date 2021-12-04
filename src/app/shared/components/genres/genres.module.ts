import { GenresService } from './genres.service';
import { GenresComponent } from './genres.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [GenresComponent],
  imports: [
    CommonModule
  ],
  exports: [GenresComponent],
  providers: [GenresService],
})
export class GenresModule { }
