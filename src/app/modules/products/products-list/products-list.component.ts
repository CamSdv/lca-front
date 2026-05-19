import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from 'src/app/core/services/product.service';
import { PricingTypePipe } from 'src/app/shared/pipe/pricing-type.pipe';
import { StatusPipe } from 'src/app/shared/pipe/status.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    StatusPipe,
    PricingTypePipe,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class ProductsListComponent implements OnInit {

  products: Array<any> = []
  displayedColumns: string[] = ['Nombre', 'Categoría', 'Presentación', 'Tipo', 'Precio', 'Estado', 'Fecha creación', 'Fecha modificación', 'Acciones']

  constructor(
    readonly _productServ: ProductService,
    readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this._productServ.getAll().subscribe({
      next: (data) => {
        this.products = data
      }
    })
  }

  update(data: any) {
    //
  }

  create(){
    this.router.navigate(['/products/create'])
  }

}
