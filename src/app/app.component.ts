import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'edutechex-quantum';
  loader = true ;
  visitorDetails: any;

  constructor(private appSrvc : AppService){}
  ngOnInit(): void {
    setTimeout(()=>{
      this.loader = false
    },1000);

    this.appSrvc.getIpAddress().subscribe((res:any)=>{
      localStorage.setItem('visitorDetails', JSON.stringify(res));
      
      setTimeout(() => {
        this.submitVisitorDetails();
      }, 5000);
    });
  }

  submitVisitorDetails(){
    this.visitorDetails = localStorage.getItem('visitorDetails');
    const visitorData = JSON.parse(this.visitorDetails);
    console.log(visitorData);

    if(visitorData){
      const { ip, city, region, postal, country_name } = visitorData;
      const dataToSend = { 
        iPaddress: ip,
      city: city,
      region: region,
      post_code: postal,
      country: country_name
      }; 
      // this.appSrvc.addIpAddress(dataToSend).subscribe((res:any)=>{
      //   console.log(res);
      //   console.log("success");
      //   localStorage.removeItem('visitorDetails');
      // })
    }

  }
}
