import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  day: string | undefined = undefined;
month: string | undefined = undefined;
  year: number | undefined = undefined;
  dateError: boolean | undefined;

  validateDate(field: number): void {
    const dayValue = this.day !== undefined ? parseInt(this.day) : 0; // or any other default value
    const monthValue = this.month !== undefined ? parseInt(this.month) : 0; // or any other default value
    
      const yearValue = this.year !== undefined ? parseInt(this.year.toString()) : 0; // or any other default value


      if (field === 1 && (dayValue < 1 || dayValue > 31)) {
          this.dateError = true;
      } else if (field === 2 && (monthValue < 1 || monthValue > 12)) {
          this.dateError = true;
      } else if (field === 3 && (yearValue < 1900 || yearValue > 2100)) {
          this.dateError = true;
      } else {
          this.dateError = false;
      }

      if (!this.dateError && field !== 3) {
          const lastDayOfMonth = new Date(yearValue, monthValue, 0).getDate();

          if (dayValue > lastDayOfMonth) {
              this.dateError = true;
          }
      }

      if (!this.dateError && field === 3) {
          if (monthValue === 2 && !this.isLeapYear(yearValue)) {
              const lastDayOfFebruary = 28;
              if (dayValue > lastDayOfFebruary) {
                  this.dateError = true;
              }
          }
      }
  }

  isLeapYear(year: number): boolean {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  onKeyDown(event: KeyboardEvent): void {
      const allowedKeys = [8, 9, 13, 37, 39]; // Backspace, Tab, Enter, Left Arrow, Right Arrow
      if (!allowedKeys.includes(event.keyCode) && !(event.keyCode >= 48 && event.keyCode <= 57)) {
          event.preventDefault();
      }
  }
  

}
