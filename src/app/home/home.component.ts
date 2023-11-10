import {Component} from '@angular/core';
import {FormBuilder,FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class HomeComponent {
  isLinear = true; // Set to true for linear, false for non-linear
  isVertical = false; // Set to true for vertical, false for horizontal

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  constructor(private _formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) {
    // Update isLinear based on screen width
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(map((result) => result.matches))
      .subscribe((isSmallScreen) => {
        this.isLinear = isSmallScreen;
        this.isVertical = !isSmallScreen;
      });

    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      pin: ['', Validators.required],
    });
  }


  onSubmit(){
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      const formValues = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
      };

      console.log('Form Records:', formValues);
    } else {
    }
  }

}
