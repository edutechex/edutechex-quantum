import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit{
public allCareerData : any;
  constructor(public appService: AppService){}

  ngOnInit(): void {
    this.getCareer();
  }
  getCareer(){
    this.appService.getCareer().subscribe((res:any)=>{
      this.allCareerData = res;
    })
  }
}
