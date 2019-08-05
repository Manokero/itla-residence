import { Component, OnInit } from "@angular/core";
import { ResidentService } from "../../resident.service";
import { Router } from "@angular/router";

@Component({
  selector: "create-horary",
  templateUrl: "create-horary.component.html",
  providers: [ResidentService]
})
export class CreateHoraryComponent implements OnInit {

  public weekDays = [];
  public bedroomsOrder: string; 
  public selectedFirstDate;
  public selectedLastDay;


  constructor(private residentService: ResidentService, private route: Router) {
    this.weekDays = [
      {'id': 1, 'name': 'Monday'},
      {'id': 2, 'name': 'Tuesday'},
      {'id': 3, 'name': 'Wednesday'},
      {'id': 4, 'name': 'Thursdays'},
      {'id': 5, 'name': 'Friday'},
      {'id': 6, 'name': 'Saturday'},
      {'id': 7, 'name': 'Sunday'},
    ]
  }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('horary_saved'))

    if(data){
      this.bedroomsOrder = data.bedroom;
      this.selectedFirstDate = data.first_day;
      this.selectedLastDay = data.last_name;
    }
  }

  cancel() {
    localStorage.removeItem('horary_saved')
    this.bedroomsOrder = '';
    this.selectedFirstDate = '';
    this.selectedLastDay = '';
  }

  save() {
    localStorage.setItem('horary_saved', 
                          JSON.stringify({"first_day": this.selectedFirstDate,
                                          "last_name": this.selectedLastDay,
                                          "bedroom": this.bedroomsOrder}))
  }

  saveAndSend() {
    this.save();
    let data = {
      "first_day": this.selectedFirstDate,
      "last_day": this.selectedLastDay,
      "order_bedrooms": this.bedroomsOrder,
      'resident_id':  JSON.parse(localStorage.getItem('user')).id
    };

    this.residentService.createHorary(data)
        .subscribe(data => {
          console.log(data);
        }, err => {
          console.log(err);
        })
  }

}
