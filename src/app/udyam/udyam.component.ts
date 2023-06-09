import { Component } from '@angular/core';

@Component({
  selector: 'app-udyam',
  templateUrl: './udyam.component.html',
  styleUrls: ['./udyam.component.css']
})
export class UdyamComponent {
 showError:boolean|undefined; 
inputValue8 = "";
formatInputValue(inputValue8: string): string {
  const sanitizedInput = inputValue8.replace(/[-\s]/g, '');
  let formattedInput = '-';

  for (let i = 0; i < sanitizedInput.length; i++) {
    if (i !== 0 && i % 2 === 0 && i <= 4) {
      formattedInput += '-';
    }
    formattedInput += sanitizedInput[i];
    this.showError = false;
  }

  // Check if the first two characters after the hyphen are alphabets
  const secondPair = formattedInput.split('-')[1];
  const alphabetsRegex = /^[A-Za-z]{2}$/;
  if (!alphabetsRegex.test(secondPair)) {
    // Display error message using ngIf or set a flag for error handling
    this.showError = true;
    // You can handle the error condition based on your application's requirements
  }

  return formattedInput;
}


}
