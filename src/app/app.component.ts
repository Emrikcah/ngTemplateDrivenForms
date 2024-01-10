import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  template: `
    <section class="container" [ngClass]="{'form-shadow':registrationForm.touched}">
      <header>Registration Form</header>
<!-- ngForm is storing a reference to this form via the templte ref variable registrationForm-->
      <form class="form" (ngSubmit)="OnFormSubmitted()" #registrationForm="ngForm">
        <div class="column">
          <div class="input-box">
            <input type="text" placeholder="First Name" name="firstname" ngModel/>
          </div>

          <div class="input-box">
            <input type="text" placeholder="Last Name" name="lastname"  ngModel/>
          </div>
        </div>

        <div class="input-box">
          <input type="text" placeholder="Email" name="email" ngModel/>
        </div>

        <div class="column">
          <div class="input-box">
            <input type="number" placeholder="Phone Number" name="phone" ngModel/>
          </div>
          <div class="input-box">
            <input type="date" placeholder="Date of Birth" name="dob" ngModel/>
          </div>
        </div>

        <div class="input-box">
          <input type="text" placeholder="username" />
          <button class="btn-gen-username">Create a Username</button>
        </div>

        <div class="gender-box">
          <h3>Gender</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="gender"  value="male"  ngModel/>
              <label for="check-male">male</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-female" name="gender" value="female" ngModel/>
              <label for="check-female">Female</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-other" name="gender" value="other" ngModel/>
              <label for="check-other">prefer not to say</label>
            </div>
          </div>
        </div>

        <div class="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Street address" required name="street1" ngModel/>
          <input type="text" placeholder="Street address line 2" name="street2" ngModel/>
          <div class="column">
            <div class="select-box">
              <select name="country" ngModel>
                <option hidden>Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
            <input type="text" placeholder="City" name="city" ngModel/>
          </div>
          <div class="column">
            <input type="text" placeholder="Region" name="region" ngModel/>
            <input type="number" placeholder="Postal code" name="postal" ngModel/>
          </div>
        </div>
        <input type="submit" value="Submit" class="submit-btn" />
      </form>
    </section>
  `,
  styleUrls: ['app.css'],
})
export class AppComponent {

  @ViewChild('registrationForm') form: NgForm 
  
  //this method is attached to the form 
  OnFormSubmitted() {
    console.log(this.form);
    //access the form control values. firstname is the name of the input control
    console.log(this.form.value.firstname);
    console.log(this.form.controls['lastname'].value);
    
  }
}

//name and ngModel are needed
//the name attribute is how the form controls are created in the ngForm object
//ngModel will tell angular that the input element is a control for the form. with it we can access the value and the control objects
//controls located on the ngForm object
