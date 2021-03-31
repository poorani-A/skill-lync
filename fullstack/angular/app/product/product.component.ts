import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    console.log(this,this.appService.getwelcomeStr());

     this.appService.counterSource.subscribe(data=>
     {
       console.log("data received for subject in productcomponent:",data)
     });
  }}