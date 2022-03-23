import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  loading:boolean;
  success:boolean;
  info:string;
  constructor(private helperService:HelperService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name:new FormControl("",Validators.required),
      email:new FormControl("",[Validators.required,Validators.email]),
      subject:new FormControl("",Validators.required),
      message:new FormControl("",[Validators.required,Validators.minLength(10)])
    })
  }
  onSubmit(){
    if(this.contactForm){
      this.helperService.sendMailForContact(this.contactForm.value).subscribe(data=>{
        this.success=true;
        this.contactForm.reset();
        this.info="Your message has been received. You will be returned as soon as possible.";
      },error=>{
        this.success=false;
        this.info="an error has occurred."
      });
    }
  }
}
