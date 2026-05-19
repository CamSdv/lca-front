import { Component } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weights-update',
  templateUrl: './weights-update.component.html',
  styleUrls: ['./weights-update.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    FormsModule,
  ]
})
export class WeightsUpdateComponent {

  weights: any[] = []
  orderId!: number
  items: any

  constructor(
    private readonly _orderServ: OrderService
  ) { }

  update() {
    this._orderServ.updateWeights(this.orderId, this.weights)
      .subscribe(() => alert('Pesos actualizados'));
  }

}
