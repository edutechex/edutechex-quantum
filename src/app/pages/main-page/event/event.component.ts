import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  eventList =[
   
  // {
  //     'monthName':'November 2023',
  //     'image':'assets/images/car1.jpg',
  // },
  {
      'monthName':'December 2023',
      'image':'assets/images/event/dec.jpg',
  },
  {
    'monthName':'January 2024',
    'image':'assets/images/event.jpg',
},

  ]

  currentMonthIndex: number = 0;


  getEventData: any;
  currentEvent: any;
  currentEventImage: any;

  constructor( private appService : AppService){

  }

  ngOnInit(): void {
    this.currentEvent = this.eventList[0];

    // this.getEventData = this.appService.getEventList();
    // console.log(this.getEventData);
    // this.getAllEventDetails();
    // this.currentEvent = 'November 2023';
  }
  getAllEventDetails(){
    for(let event of this.getEventData){
        this.currentEvent = event.monthName;
        this.currentEventImage = event.image;
        console.log(this.currentEventImage);
    }
  }

  previousMonth(){
    this.currentMonthIndex--;
    if (this.currentMonthIndex < 0) {
      this.currentMonthIndex = this.eventList.length - 1;
    }
    this.currentEvent = this.eventList[this.currentMonthIndex];
  }

  nextMonth(){
    this.currentMonthIndex++;
    if (this.currentMonthIndex >= this.eventList.length) {
      this.currentMonthIndex = 0;
    }
    this.currentEvent = this.eventList[this.currentMonthIndex];
  }
}
