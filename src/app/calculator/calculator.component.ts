import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  display: string = '0';

  constructor() { }

  ngOnInit(): void {
  }

  keyClicked(number: string) {
    this.display += number;
  }

  reset() {
    this.display = '';
  }

}
