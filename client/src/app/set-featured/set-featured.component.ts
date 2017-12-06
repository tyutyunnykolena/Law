import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user/user.service'; 
@Component({
  selector: 'app-set-featured',
  templateUrl: './set-featured.component.html',
  styleUrls: ['./set-featured.component.scss']
})
export class SetFeaturedComponent implements OnInit {
  @Input() product: object;
  
  @Output() setFeaturedSaved = new EventEmitter();
  @Output() allSaved = new EventEmitter();

  public payment={ 
    
  email:'', 
  number:'', 
  month:'', 
  year:'', 
  code:'', 
  price:'' 
   }; 
  
    constructor(private router:Router,private userService:UserService) {

    }
  
    ngOnInit() {
      
    }
    SaveUserSetFeatured() 
    {
    this.setFeaturedSaved.emit(this.product);
    }
    finish()
    {
      this.allSaved.emit(this.product);
    }
    
update(){ 
  
  
this.userService.updateUser(this.product); 
  
} 
  
  pay(product){ 
  
  this.payment["email"]=this.product["email"]; 
  this.payment["number"]=this.product["cardnumber"]; 
  this.payment["year"]=this.product["year"]; 
  this.payment["month"]=this.product["month"]; 
  this.payment["code"]=this.product["cvc"]; 
  this.payment["price"]=this.product["price"]; 
  console.log(this.payment); 
  this.userService.pay(this.payment); 
  
  
  } 
}
