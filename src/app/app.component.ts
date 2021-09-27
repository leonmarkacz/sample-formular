import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'sample-formular';

  public formGroup!: FormGroup;

  constructor(private formBuiler: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuiler.group({
      formControlCheckbox: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.formGroup.value);
  }
}
