import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() searchTerm='';
  @Input() booksArr:any=[];
  @Output() informParent=new EventEmitter();

  constructor(private appService:AppService) { }

  ngOnChange(){
    console.log("childcomponent-ngonchange called.....");
  }
  subs:any

  ngOnInit(): void {
    this.subs=this.appService.counterSource.subscribe((data)=>{
      console.log("data received for subject in childcomponent:",data);
      this.subs.unsubscribe();
    });
  }

  onRowClick(book:any){
    this.informParent.emit(book)
  }

}
