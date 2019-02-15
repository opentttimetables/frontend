import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagComponent } from './tag/tag.component';
import { SharedModule } from '@shared/shared.module';
import { NewTagComponent } from './new-tag/new-tag.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [TagListComponent, TagComponent, NewTagComponent],
  imports: [
    CommonModule,
    SharedModule,
    ColorPickerModule,
  ],
  exports: [
    TagListComponent,
    TagComponent,
    NewTagComponent,
  ]
})
export class TagsModule { }
