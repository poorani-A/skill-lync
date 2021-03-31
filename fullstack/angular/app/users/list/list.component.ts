import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getRequest(1);

  }
  usersArr: any = [];
  currentPage = 1;
  totalPage = 1;
  job='';
  name='';



  getRequest(page: any) {
    let params = new HttpParams();
    params = params.append("page", page);
    params = params.append("per_page", "3");
    this.currentPage = page;
    this.httpClient.get("https://reqres.in/api/users", { params: params }).subscribe(
      (response: any) => {
        console.log(response);
        this.usersArr = response.data;
        this.totalPage = response.total_pages;
      },
      (error) => {
        console.error(error);
      }


    );
  }


  //post method
  sendPostRequest() {
    console.log(this.name,this.job);
    this.httpClient.post("https://reqres.in/api/users",
    {
      name:this.name,
      job:this.job
    }
    ).subscribe(
      (response: any) => {
        console.log(response);
        alert("post sucessfull");

        this.name='';
        this.job='';
      },
      (error) => {
        console.error(error);
      }


    );
  }

}


