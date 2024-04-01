import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
declare var $: any;

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit{
  public allPartnerData: any;
  internationalPartner: any[] = [];
  nationalPartner: any[] = [];

  constructor(public appService: AppService){}
  ngOnInit(): void {
    this.clickFun();
    $('#carouselExampleAutoplaying').carousel();
    this.clickFunTwo();

    this.getPartners();
  }

  clickFun(){
    setTimeout(function(){
      document.getElementById('next')?.click();
    },7000);
  }

  clickFunTwo(){
    interval(8000).subscribe(() => {
      $('#nextOne').click();
      // console.log("clicked");
    });
  }

  getPartners(){
    this.appService.getPartner().subscribe((res:any)=>{
      this.allPartnerData = res;
      for(let type of this.allPartnerData){
        if(type.type == 'International'){
          this.internationalPartner.push(type);
          // console.log(this.internationalPartner)
        }

        if(type.type == 'National'){
          this.nationalPartner.push(type);
          console.log(this.nationalPartner)
        }
      }
    })
  }
}
