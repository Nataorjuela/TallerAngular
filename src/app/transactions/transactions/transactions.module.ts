import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { FormsModule } from '@angular/forms';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { AngularSlickgridModule, ContainerService } from 'angular-slickgrid';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    MatTabsModule,
    FormsModule,
    CommonModule,
    TransactionsRoutingModule,
    AngularSlickgridModule.forRoot({
      enableCellNavigation: true,
      autoHeight: false,
      enableRowSelection: true,
      enableFiltering: true,
      gridMenu: {hideForceFitButton: true}
    })
  ],
  providers: [ContainerService]
})
export class TransactionsModule { }
