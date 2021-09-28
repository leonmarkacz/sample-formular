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
  public submittedBeforeCheck = false;

  constructor(private formBuiler: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuiler.group({
      formControlCheckbox: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.formGroup.get('formControlCheckbox')?.pristine) {
      this.formGroup.get('formControlCheckbox')?.markAsTouched();
    }

    console.log(this.formGroup.get('formControlCheckbox'));
  }
}
