import { Injectable } from '@angular/core';

import {HttpClient/*,HttpResponse,HttpHeaders*/ } from '@angular/common/http';

import {Observable } from 'rxjs/Observable';

import {Subject } from 'rxjs';



const USER_DATA_URL='http://localhost:8000/app/v1/product';

@Injectable()

export class UserService {

private isuserloggedin;

public users=new Subject<any[]>();

private body:object;



constructor(private http:HttpClient) {

  	this.isuserloggedin=false;

    this.body={};



   }

   ngOninit(){

   }

  setUserLoggedIn() {

  	this.isuserloggedin = true;

  }



  getUserLoggedIn() {

  	return this.isuserloggedin;

  }

  uploadUsers() {

    this.http

    .get(USER_DATA_URL)

    .forEach(res => {

      this.setUsers(res);

    });

  }



  setUsers(newUsers: any) {

    this.users.next(newUsers);

  }

  getUsers():Observable<any[]>{

    return this.users.asObservable();

  }

  setUser(API_URL,product)

  {

    return this.http.post(API_URL, product)

      .forEach(res => {

        const result = res;

        console.log('result', result);});

  }

  deleteUser(id){

    this.http.delete(USER_DATA_URL+'/'+id).subscribe(id=>console.log(id));

  }

  updateUser(product){

    this.http.put(USER_DATA_URL+'/'+product["_id"],product).subscribe(product=>console.log(product));

  }



}
