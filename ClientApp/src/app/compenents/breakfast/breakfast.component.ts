import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  form: FormGroup;
  breakfast: Breakfast;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      roomNumber: [null, Validators.required]
    });
  }

  submit() {
    if (!this.form.valid) return;
    console.log("submitted");
  }

}
