import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { KardexService } from 'src/app/core/services/kardex.service';
import { InventoryMovement } from 'src/app/shared/models/inventory-movement.model';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class KardexComponent implements OnInit {

  service = inject(KardexService);

  movements: InventoryMovement[] = [];

  displayedColumns: string[] = [
    'date',
    'supply',
    'type',
    'quantity',
    'balance',
    'reference'
  ];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.getMovements().subscribe({
      next: (data) => {
        this.movements = data
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

