import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'test';
  
  month: string | undefined;
  year: number | undefined;
  dateError: boolean = false;

  inputValue6: string = '';
  dateOfBirth: string = '';
  dobInvalid: boolean = false;
  dobFuture: boolean = false;
  dobLeapYear: boolean = false;
  sliderValue = 50000;
  pencil_edit: boolean = false;
constructor(private router:Router){

}
  onSliderChange(event: Event) {
    this.sliderValue = parseInt((event.target as HTMLInputElement).value, 10);
    
  }
  
  pencil_edit_enabled() {
    this.pencil_edit = !this.pencil_edit;
    }
  selectedGender: string | undefined;
  gender!: string;
  public printGender(arg: string){
    this.gender=arg;
    console.log(this.gender);
  }
  onContinue(): void {
    // Add your continue button logic here
    console.log('Continue button clicked');
    this.router.navigate(['/Slider']);
    // Add additional functionality or navigation logic as needed
  }
  
  validateDate() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    // Reset error message
    this.dateError = false;

    // Validate month
    if (this.month && (parseInt(this.month) < 1 || parseInt(this.month) > 12)) {
      this.dateError = true;
      return;
    }

    // Validate year
    if (this.year && (this.year < 1990 || this.year > currentYear)) {
      this.dateError = true;
      return;
    }

    // Additional validation logic if needed

    // Business start date is valid, perform further operations
    console.log('Business start date:', this.month, this.year);
    // Replace the console.log with your desired logic
  }

  onKeyDown(event: KeyboardEvent) {
    // Allow only numbers for the year input
    const allowedKeyCodes = [8, 9, 37, 39]; // Backspace, Tab, Left arrow, Right arrow
    if (allowedKeyCodes.indexOf(event.keyCode) === -1 && isNaN(parseInt(event.key))) {
      event.preventDefault();
    }
  }
  

  validateDateOfBirth() {
    this.dobInvalid = false;
    this.dobFuture = false;
    this.dobLeapYear = false;
    
    const dobParts = this.dateOfBirth.split('/');
    if (dobParts.length !== 3) {
      this.dobInvalid = true;
      return;
    }

    const day = parseInt(dobParts[0], 10);
    const month = parseInt(dobParts[1], 10);
    const year = parseInt(dobParts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      this.dobInvalid = true;
      return;
    }

    const currentDate = new Date();
    const inputDate = new Date(year, month - 1, day);

    if (inputDate > currentDate) {
      this.dobFuture = true;
      return;
    }

    if (month < 1 || month > 12 || day < 1 || day > 31) {
      this.dobInvalid = true;
      return;
    }

    // Leap year validation
    if (month === 2 && day === 29) {
      if ((year % 4 !== 0) || (year % 100 === 0 && year % 400 !== 0)) {
        this.dobLeapYear = true;
        return;
      }
    }
  }

  invalidPin: boolean | undefined;

  validatePin() {
    const panPattern = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/; // Regular expression for PAN format

    if (panPattern.test(this.inputValue6)) {
      this.invalidPin = false;
    } else {
      this.invalidPin = true;
    }
  }
  
  pincodeValue: string = '';
  invalidPincode: boolean | undefined;

  validatePincode() {
    const pincodePattern = /^\d{6}$/; // Regular expression for 6-digit pincode format

    if (pincodePattern.test(this.pincodeValue)) {
      this.invalidPincode = false;
    } else {
      this.invalidPincode = true;
    }
  }


}
