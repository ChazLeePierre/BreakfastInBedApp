import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { BreakfastService } from '../../services/breakfast.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  form: FormGroup;
  platterItems: PlatterItem[];
  beverageItems: BeverageItem[];
  deliveryTimes: DeliveryTimes[];
  platterList: Observable<any>;
  
  constructor(private service: BreakfastService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      customerID: [Math.floor(Math.random() * 1000)],
      roomNumber: [null, Validators.required],
      noOfOccupants: [null, Validators.required],
      beverages: new FormArray([]),
      platter: [null],
      delivery: [null, Validators.required]
    });

    this.service.getBeverageItems().subscribe(b => {
      b.forEach(() => this.beverages.push(new FormControl()))
      this.beverageItems = b;
    });
    this.service.getPlatterItems().subscribe(p => {
      this.platterItems = p;
    });
    this.service.getDeliveryTimes().subscribe(d => {
      this.deliveryTimes = d;
    });
    this.platterList = this.form.controls['platter'].valueChanges;
  }

  onSubmit() {
    if (!this.form.valid) return;
   
    let order = {
      customerID: this.customerID.value,
      roomNumber: parseInt(this.roomNumber.value),
      noOfOccupants: parseInt(this.noOfOccupants.value),
      // parse beverage and platter ids
      beverageIds: this.parseBeverages(),
      platterIds: this.parsePlatter(),
      deliveryStart: this.delivery.value[0],
      deliveryEnd: this.deliveryTimes.find((d: DeliveryTimes) => d.start == this.delivery.value)?.end
    };
    
    this.service.addOrder(order);
  }

  get beveragesPreview() {
    let arr = this.parseBeverages();
    return arr.map(id => this.beverageItems.find(b => b.id == id)?.name);
  }

  get platterPreview() {
    return this.platter.value;
  }

  // Helper Functions

  parseBeverages() {
    return this.beverages.value.map((b, i) => { if (b) return i + 1 }).filter(b => b);
  }

  parsePlatter() {
    let platIDs = [];
    this.platter.value.forEach((p: string) => {
      let obj = this.platterItems.find((pi: PlatterItem) => pi.name == p.trim());
      if (obj) platIDs.push(obj.id);
    });
    return platIDs;
  }

  // Form Controls

  get customerID() {
    return this.form.get('customerID');
  }

  get roomNumber() {
    return this.form.get('roomNumber');
  }

  get noOfOccupants() {
    return this.form.get('noOfOccupants');
  }

  get beverages() {
    return this.form.get('beverages') as FormArray;
  }

  get platter() {
    return this.form.get('platter');
  }

  get delivery() {
    return this.form.get('delivery');
  }

}
