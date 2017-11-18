import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  LoginUser(e)
  {
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if(username == "root" && password == "root")
    {
      alert('Hello World!');
    }
  }

}
