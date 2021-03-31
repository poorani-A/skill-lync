import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';
  counter = 0;
  showState = "Hide";
  color = "blue";
  bgColor = "";
  testStr = 'all are in lower case';
  testDt = new Date;
  testNum1 = 0.7;
  testNum = 1123000.4567;
  booksObj = {
    N1: 200,
    N2: 500,
    N3: 112
  }
searchTerm="";

  haveElem = true;
  booksArr = [
    { name: "Name1", q: 20 },
    { name: "Nam2", q: 23 },
    { name: "Na3", q: 42 }
  ];
  emotion = "confused12";

  incrementVal() {
    this.counter++;
  }

  showHide() {
    this.showState = this.showState == 'show' ? 'hide' : 'show';
    this.haveElem = !this.haveElem;
  }
  changeColor() {
    this.color = this.color == "blue" ? "red" : "blue"
  }

  receiveColor(color: string) {
    console.log("receiveColor.......", color);
  }

  passColor = '';
  passStr = '';
  passwordStr = "";
  validatePassword() {
    console.log(this.passwordStr);
    if (this.passwordStr.length < 5) {
      this.passColor = 'red';
      this.passStr = "poor";
    }
    else if (this.passwordStr.length < 10){
      this.passColor = 'red';
      this.passStr = "medium";
    }
    else{
      this.passColor = 'green';
      this.passStr = "good";

    }


  }
  searchterm='';
  constructor(private router:Router,private appService:AppService){}
  nevigateMe(){
    this.appService.setwelcomeStr("am navigating...");
    var val=Number(prompt('Entar the number'));
    if(val==0){
      return;

    }
    if(val<0){
      this.router.navigate(["/sales"]);
    }else{
      this.router.navigate(["/products"]);
    }
  }

  receiveBook(bookVal:any){
    console.log("Book val received in parent...",bookVal);
  }
  incrCounter(){
    this.counter++;
    this.appService.setCounterSource(this.counter);
  }


}
