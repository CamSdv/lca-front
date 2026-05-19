import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { OrderService } from 'src/app/core/services/order.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class OrdersListComponent implements OnInit {

  orders: Array<any> = []
  displayedColumns: string[] = ['Cliente', 'Estado', 'Fecha pedido', 'Total', 'Acciones']

  constructor(
    readonly _orderServ: OrderService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this._orderServ.getAll().subscribe({
      next: (data) => {
        this.orders = data
      }
    })
  }

  create() {
    this.router.navigate(['/orders/create'])
  }

  goToWeights(asd: any) {
    //
  }

  confirm(asd: any) {
    //
  }

}
