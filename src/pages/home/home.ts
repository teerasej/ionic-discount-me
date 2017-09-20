import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message;

  constructor(public navCtrl: NavController) {

  }

  calculate(price, discount){

    if(price != undefined && discount != undefined)
    {
      let result = (price * (100 - discount))/100;
      this.message = result + ' บาท';
    }
    else 
    {
      this.message = "ใส่ราคา และส่วนลดให้ครบด้วยค่ะ";
    }

  }

}
