import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputNum: number
  result: number | string;


  findMeOut(n: number): number | string {
    n = +n
    for (let i = 2; i < Infinity; i++) {
      if (this.sumOfDigits(n * i) === n) {
        return n * i;
      }
    }
    return "not available"
  }

  callFun(n: number) {
    this.result = this.findMeOut(n);
  }

  reset() {
    if (!this.inputNum) {
      this.result = '';
    }
  }

  sumOfDigits(num: number): number {
    let numStr: string = num.toString();
    let newNum: string[] = numStr.split('');
    return newNum.reduce((a, c) => a + parseInt(c), 0);
  }

}
