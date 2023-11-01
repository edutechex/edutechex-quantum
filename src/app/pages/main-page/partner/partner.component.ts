import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    this.clickFun();
  }

  clickFun(){
    
    // console.log('clicked');
    setTimeout(function(){
      document.getElementById('next')?.click();
    },7000);
  }
}
