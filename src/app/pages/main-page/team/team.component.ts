import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  public allTeamData: any;

  constructor(public appService: AppService){}

  ngOnInit(): void {
    this.getTeamData();
  }

  getTeamData(){
    this.appService.getTeam().subscribe((res:any)=>{
      this.allTeamData = res;
    })
  }
}
