import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ]
})
export class ProductsCreateComponent implements OnInit {

  dataForm!: FormGroup

  constructor(
    readonly fb: FormBuilder,
    readonly location: Location
  ) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      presentation: ['', Validators.required],
      price: [0, Validators.required],
      pricingType: ['WEIGHT', Validators.required],

      supplies: this.fb.array([
        this.create()
      ])
    });
  }

  create() {
    console.log(this.dataForm)
  }

  get supplies(): FormArray {
    return this.dataForm.get('supplies') as FormArray;
  }

  addSupply(): void {
    this.supplies.push(this.create());
  }

  removeSupply(index: number): void {
    this.supplies.removeAt(index);
  }

  back() {
    this.location.back()
  }

}
