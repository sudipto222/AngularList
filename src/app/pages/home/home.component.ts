import { Component, OnInit } from '@angular/core';
import { TariffService } from 'src/service/tariff.service';
// import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // All of the main logic lies here ! 
  // We will be using ngx-order-pipe to sort the data by properties &
  // We will be using ng2-search-filter to filter the data 
  // order property specify the object property on which currently filter is active
  // reverse -> asending & descending sorting track 
  
  title = "Home Component"
  order: string = 'tariffName';
  reverse: boolean = false;
  caseInsensitive: boolean = false;
  collection = [];
  searchText = ""

  constructor(public _TariffService: TariffService) {
  }

  ngOnInit(): void {
    // calling MOCK API to GET DATA
    this._TariffService.getTariffData().subscribe(
      (data: any) => {
        // Setting in Collection
        this.collection = data
      },
      (err) => {
        alert(err)
      }
    )
  }

  // Called when filter Buttons are Clicked
  setOrder(value: string) {
    // this function property name to be filtered by and control asending decending order
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

}
