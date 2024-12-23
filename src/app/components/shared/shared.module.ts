import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    GridModule
  ],
  exports: [TableComponent],
})
export class SharedModule { }
