import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxGist } from './ngx-gist';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxGist],
  exports: [NgxGist]
})
export class NgxGistModule { }