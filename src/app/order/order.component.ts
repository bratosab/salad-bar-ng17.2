import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  orderForm = this.fb.group({
    name: ['', Validators.required],
    tel: ['']
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  startOrder() {
    if(this.orderForm.valid) {
      this.router.navigate(['salad'])
    }
  }
}
