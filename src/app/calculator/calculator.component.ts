import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title = 'app';
  
    myNumber = 0;  
    myNumber1;
    myNumber2;
    result = 0; 
  
    RandomNumber(){
      this.myNumber = Math.random();
    } 
  
    fAddition(){
      this.result = this.myNumber1 + this.myNumber2;
    }
  
    fDeduction(){
      this.result = this.myNumber1 - this.myNumber2;
    }
  
    fMultiply(){
      this.result = this.myNumber1 * this.myNumber2; 
    }
  
    fDivision(){
      this.result = this.myNumber1 / this.myNumber2;
    }

}
