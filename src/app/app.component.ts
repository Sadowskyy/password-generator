import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generatedPassword = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  includeBigLetters = false;

  whenButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const bigLetters = letters.toUpperCase();
    const symbols = '!@#$%^&*(){}|\';",./?`~`=-_';

    let validChars = '';
    if (this.includeBigLetters) {
      validChars += bigLetters;
    }
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let randomPassword = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);

      randomPassword += validChars[index];
    }
    this.generatedPassword = randomPassword;
  }

  getPassword() {
    return this.generatedPassword;
  }

  useLetters() {
    this.includeLetters = !this.includeLetters;
  }

  useBigLetters() {
    this.includeBigLetters = !this.includeBigLetters;
  }

  useNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  useSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  setLength(value: string) {
    let parsedValue: number;
    parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
