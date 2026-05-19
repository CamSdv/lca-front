import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { SupplyService } from 'src/app/core/services/supply.service';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class SupplyListComponent implements OnInit {

  supplies: Array<any> = []
  displayedColumns: string[] = ['Tipo', 'Categoría', 'Presentación', 'Existencias', 'Fecha creación', 'Fecha modificación']

  constructor(
    readonly _supplyService: SupplyService,
    readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.getSupplys()
  }

  getSupplys() {
    this._supplyService.getAll().subscribe({
      next: (data) => {
        this.supplies = data
      }
    })
  }

  create() {
    this.router.navigate(['/supplies/create'])
  }
}
