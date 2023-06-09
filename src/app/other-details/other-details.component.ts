import { Component } from '@angular/core';

@Component({
  selector: 'app-other-details',
  templateUrl: './other-details.component.html',
  styleUrls: ['./other-details.component.css']
})
export class OtherDetailsComponent {
  inputValue1: string | undefined;
  inputValue2: string | undefined;
  inputValue3: string | undefined;
  inputValue4: string | undefined;
  
  inputValue7: string = '';
  inputValue5: string = '';
  inputValue6: string = '';
  drop_edit: boolean = false;

  
  drop_edit_enabled() {
    this.drop_edit = !this.drop_edit;
    }
    invalidPhoneNumber: boolean | undefined;

  validatePhoneNumber() {
    const phoneNumberPattern = /^\d{10}$/; // Regular expression for 10 digits

    if (phoneNumberPattern.test(this.inputValue5)) {
      this.invalidPhoneNumber = false;
    } else {
      this.invalidPhoneNumber = true;
    }
  }
  invalidPAN: boolean | undefined;

  validatePAN() {
    const panPattern = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/; // Regular expression for PAN format

    if (panPattern.test(this.inputValue6)) {
      this.invalidPAN = false;
    } else {
      this.invalidPAN = true;
    }
  }
  invalidEmail: boolean | undefined;

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for email format

    if (emailPattern.test(this.inputValue7)) {
      this.invalidEmail = false;
    } else {
      this.invalidEmail = true;
    }
  }
}
