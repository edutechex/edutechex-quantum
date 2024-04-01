import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
public allServiceList: any;
  constructor(public appServicec : AppService){}

  ngOnInit(): void {
    this.getServices();
  }
  getServices(){
    this.appServicec.getServices().subscribe((res:any)=>{
      this.allServiceList = res;
    })
  }
}
