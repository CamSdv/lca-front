import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
  ]
})
export class OrdersCreateComponent {

  dataForm: FormGroup = this.fb.group({
    customerName: ['', Validators.required],
    customerPhone: ['', Validators.required],
    sellerId: [null, Validators.required],
    deliveryDate: ['', Validators.required],
    items: this.fb.array([])
  })

  sellers: Array<any> = []

  constructor(
    private readonly fb: FormBuilder
  ) { }

  get items() {
    return this.dataForm.get('items') as FormArray;
  }

  addItem(product: any) {
    this.items.push(this.fb.group({
      productId: [product.id],
      quantity: [0],
      pricingType: [product.pricingType]
    }));
  }

  submit() {
    console.log(this.dataForm.value);
    
    //
  }

}
