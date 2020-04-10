import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generatedPassword = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  whenButtonClick() {
    console.log(this.includeLetters);
    this.generatedPassword = 'GENERATED PASSWORD';
  }

  getPassword() {
    return this.generatedPassword;
  }

  useLetters() {
    console.log(this.includeLetters);
    this.includeLetters = !this.includeLetters;
  }

  useNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  useSymbols() {
    this.includeNumbers = !this.includeSymbols;
  }
}
