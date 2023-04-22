import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IUserInterface } from '../interface/userInterface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-docs',
  templateUrl: './user-docs.component.html',
  styleUrls: ['./user-docs.component.scss']
})
export class UserDocsComponent implements OnInit{
  @Input('userData') users: IUserInterface[] =[];
 
  emailFormControl = new FormControl('abc@gmail.com', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('disabled', [Validators.required])

  customerForm! :  FormGroup;
  constructor(private fb : FormBuilder, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(element => console.log(element));
    let name = this.activatedRoute.queryParams.subscribe(data => console.log(data['name']));
    console.log(name);
  }

  ngOnInit(): void {
    console.log(this.users);
    this.customerForm = this.fb.group({
      nameFormControl : [null,[Validators.required]],
      emailFormControl : [null,[Validators.required]]
    });

    let obsData = Observable.create((observer: any) => {
      observer.next('Hi observer');
    })
    obsData.subscribe((data: any) => console.log(data));


    let p = new Promise((resolve) => {
      resolve('Hi resolved');
    });
    p.then((element) => console.log(element));
  }

 
}
