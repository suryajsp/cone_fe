import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [TableComponent],
})
export class SharedModule { }
