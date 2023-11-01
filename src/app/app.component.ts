import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'edutechex-quantum';
  loader = true ;

  ngOnInit(): void {
    setTimeout(()=>{
      this.loader = false
    },1000);
  }
}
