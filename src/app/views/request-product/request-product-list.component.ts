import { Component, OnInit } from "@angular/core";
import { ResidentService } from "../../resident.service";

@Component({
  selector: "request-product-list",
  templateUrl: "request-product-list.component.html",
  providers: [ResidentService]
})
export class RequestProductListComponent implements OnInit {
  
  public objectRequestList;
  public currentId: number;
  public dateTo = new Date();
  public dateFrom = new Date();

  
  constructor(private residentService: ResidentService) {
    this.currentId = +JSON.parse(localStorage.getItem('user')).id
  }

  ngOnInit() {
    this.residentService.getObjectRequests()
        .subscribe(data => {
          this.objectRequestList = data;
          console.log(data);
        }, err=> {
          console.log(err);
        })
  }

  filterByDate() {
    let dates = {
      'date_to': this.dateTo,
      'date_from': this.dateFrom
    }
   this.residentService.getObjectRequestsByDates(dates)
        .subscribe(data => {
          this.objectRequestList = data;
          console.log(data);
        }, err => {
          console.log(err)
        }) 
  }
 
  cancelObjectRequest(id) {
    let user = {
      'objectrequest_id': id
    }
    this.residentService.cancelObjectRequest(user)
        .subscribe(data => {
          location.reload();
        }, err => {
          console.log(err);
        })
  }

  acceptObjectRequest(id) {
    let user = {
      'current_id': this.currentId,
      'objectrequest_id': id
    }
    this.residentService.acceptObjectRequest(user)
        .subscribe(data => {
          console.log(data);
          location.reload();
        }, err => {
          console.log(err);
        })
  }

}
