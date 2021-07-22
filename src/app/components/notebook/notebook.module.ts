import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotebookComponent } from './notebook.component';

import { NotebookRoutingModule } from './notebook-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotebookRoutingModule
  ],
  declarations: [NotebookComponent]
})
export class NotebookModule {}
