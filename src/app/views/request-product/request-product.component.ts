import { Component } from "@angular/core";
import { ResidentService } from "../../resident.service";
import { Router } from "@angular/router";

@Component({
  selector: "request-product",
  templateUrl: "request-product.component.html",
  providers: [ResidentService]
})
export class RequestProductComponent {

  public productDetail: string = 'Una libra de sal con dos ajies morrones y 399 pesos de salami';
  
  
  constructor(private residentService: ResidentService,
              private route: Router) {}

  createObjectResquest() {
    let data = {
      'product_detail': this.productDetail,
      'resident_id': JSON.parse(localStorage.getItem('user')).id
    }
    this.residentService.addObjectRequest(data).subscribe(data => {
      if (data.hasOwnProperty('success') && !data.success) {
        this.route.navigate(['/login'])
      }
      // this.route.navigate(['/product-request/list'])
      location.reload();
    }, (err) => {
      console.log(err);
    })
  }

}
