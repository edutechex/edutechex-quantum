import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{

  contactUsForm: any = FormGroup;
  display : any;
  submitted: boolean = false;

  constructor(
    public fb: FormBuilder,
    private ds: AppService,
  ){}

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message:['', [Validators.required]],
      date: new Date(),
    });
  }

  get f() {
    return this.contactUsForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.contactUsForm.invalid) {
      return;
    }
    this.ds.createContactUs(this.contactUsForm.value).subscribe((res:any)=>{
      console.log(res);
      this.openModal();
    });
    setTimeout(()=>{
      this.onCloseHandled();
      this.contactUsForm.reset();
      this.submitted = false;
    },6000);
  }

  // Model Open Funcation
  openModal(){
    this.display='block';
  }

  // Model close Funcation
  onCloseHandled(){
    this.display='none'
  }
}
