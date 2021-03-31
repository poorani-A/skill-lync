import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.callbackPattern();
    this.promisePattern().then(data => {
      console.log("sucess in promise...", data);
      this.func1();
    }).catch(err => {
      console.log("error in promise...", err);
    })
    this.testAsyncAwait();
  }

  callbackPattern(){
    setTimeout(()=>{
      console.log("inside setTimeout:1");
      this.func1();
    },300)
  }

  promisePattern(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("inside settimeout 2");
        resolve(true)
      },300)
    })
  }
  async testAsyncAwait(){
    await this.promisePattern();
    console.log("inside testAsyncAwait");
    this.func1();
  }

  func1(){
    console.log("function 1 called....");
  }

}
