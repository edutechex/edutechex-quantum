import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{

  contactUsForm: any = FormGroup;
  display : any;
  submitted: boolean = false;

  constructor(){}

  ngOnInit(): void {
    
  }

  get f() {
    return this.contactUsForm.controls;
  }

  onSubmit(){
    
  }
}
