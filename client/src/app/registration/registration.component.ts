import { Component, OnInit, Input } from '@angular/core';

import {DatePickerComponent} from 'ng2-date-picker';

import {HttpClient } from '@angular/common/http';

import {UserService} from '../user/user.service';



@Component({

  selector: 'app-registration',

  templateUrl: './registration.component.html',

  styleUrls: ['./registration.component.scss']

})

export class RegistrationComponent implements OnInit {

@Input() updateproduct:object; 
public step1saved=false;
public step2saved=false;
public step3saved=false;
public isauction='';
public step=1;
public product: object={
	_id:'', 

  	image:'',

  	title: '',

	description:'',

	price:'',

	quantity:'',

	category:'',

	startdate:'',

	enddate:'',

	startprice:'',

	cardnumber:'',

	month:'',

	year:'',

	cvc:'',

	email:''

};

  constructor(private http:HttpClient,private userService:UserService) {

  	 }



  	API_URL='http://localhost:8000/app/v1/product';

  ngOnInit() {
	this.product=this.updateproduct ? this.updateproduct : {};
 }



gotoPage(isNext){

this.step+=(isNext)?1:-1;

}

SaveUserGeneralInformation(product: object)

{

this.step++;

this.product = product;

this.step1saved=true;

}

SaveUserMoreDetails(product: object)

{

this.step++;

this.product = product;

this.step2saved=true;

}

SaveUserSetFeatured(product: object)

{

this.product = product;

this.step3saved=true;

 console.log(this.product);

}

finish(product: object)

{

 this.step++;

 console.log(this.product);

 this.userService.setUser(this.API_URL,this.product);

}

}