import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SupplyService } from 'src/app/core/services/supply.service';

@Component({
  selector: 'app-supply-create',
  templateUrl: './supply-create.component.html',
  styleUrls: ['./supply-create.component.scss'],
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
export class SupplyCreateComponent implements OnInit {

  dataForm!: FormGroup
  typeList = [
    'ENVASE',
    'BOTELLA',
    'ETIQUETA',
    'BOLSA',
    'TAPA'
  ]
  categoryList = [
    {value:'YOGURT_ARTESANAL', name: 'YOGURT ARTESANAL'},
    {value:'YOGURT_GRIEGO', name: 'YOGURT GRIEGO'},
    {value:'KUMIS', name: 'KUMIS'},
    {value:'KÉFIR', name: 'KÉFIR'},
    {value:'QUESO', name: 'QUESO'},
    {value:'CUAJADA', name: 'CUAJADA'},
    {value:'MANTEQUILLA', name: 'MANTEQUILLA'},
    {value:'POSTRE', name: 'POSTRE'},
    {value:'CHICHARRON_CUAJADA', name: 'CHICHARRON DE CUAJADA'}
  ]

  constructor(
    readonly fb: FormBuilder,
    readonly location: Location,
    readonly _supplyServ: SupplyService,
  ) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      type: ['', Validators.required],
      category: ['', Validators.required],
      presentation: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }

  create() {
    this._supplyServ.create(this.dataForm.value).subscribe({
      next:() => {
        this.back()
      },
      error:(err) => {
        console.log(err)
      },
      complete:() => {
      }
    })
  }

  back() {
    this.location.back()
  }

}
