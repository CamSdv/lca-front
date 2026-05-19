import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SellerService } from 'src/app/core/services/seller.service';

@Component({
  selector: 'app-sellers-create',
  templateUrl: './sellers-create.component.html',
  styleUrls: ['./sellers-create.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class SellersCreateComponent implements OnInit {

  dataForm!: FormGroup

  constructor(
    readonly fb: FormBuilder,
    readonly location: Location,
    readonly _sellerServ: SellerService,
  ) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
    })
  }

  create() {
    this._sellerServ.create(this.dataForm.value).subscribe({
      next: () => {
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.back()
      }
    })
  }

  back() {
    this.location.back()
  }

}
