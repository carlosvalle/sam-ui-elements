import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SamCommentsComponent } from './comments.component';
import { SamCommentComponent } from './comment';
import { CommentsService } from './comments.service';

import { SamPipesModule } from '../../pipes';
import { SamTextAreaModule } from '../../form-controls/textarea';
import { AccordionsModule } from '../accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SamTextAreaModule,
    AccordionsModule,
    SamPipesModule
  ],
  declarations: [
    SamCommentsComponent,
    SamCommentComponent,
  ],
  exports: [
    SamCommentsComponent,
    SamCommentComponent,
  ],
})
export class SamCommentsModule {}