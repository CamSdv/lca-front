import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SellerService } from 'src/app/core/services/seller.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-sellers-list',
  templateUrl: './sellers-list.component.html',
  styleUrls: ['./sellers-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class SellersListComponent implements OnInit {

  sellers: Array<any> = []
  displayedColumns: string[] = ['Vendedor', 'Estado', 'Acciones']

  constructor(
    readonly _sellerServ: SellerService,
    readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.getSellers()
  }

  getSellers() {
    this._sellerServ.getAll().subscribe({
      next: (data) => {
        this.sellers = data
      }
    })
  }

  create() {
    this.router.navigate(['/sellers/create'])
  }

  update(data: any) {
    //
  }

  updateStatus(data: any) {
    this._sellerServ.updateSatus(data.id, data.status).subscribe({
      next: () => {
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getSellers()
      }
    })
  }

}
