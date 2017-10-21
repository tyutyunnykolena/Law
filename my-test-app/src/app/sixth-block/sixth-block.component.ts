import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-block',
  templateUrl: './sixth-block.component.html',
  styleUrls: ['./sixth-block.component.scss']
})
export class SixthBlockComponent implements OnInit {

    public block6_right_small_block=[
    {ImgSrc:"../../../assets/Images/Numbers/1.png", text1:"Free Consultation", text2:"Lorem ipsum dolor sit amet, consectetur adipisicing", text3:"elitsed do eiusmod tempor incididunt ut labore"},
    {ImgSrc:"../../../assets/Images/Numbers/2.png", text1:"Quality Representation", text2:"Lorem ipsum dolor sit amet, consectetur adipisicing", text3:"elitsed do eiusmod tempor incididunt ut labore"},
  
     {ImgSrc:"../../../assets/Images/Numbers/3.png",text1:"Fair Fees", text2:"Lorem ipsum dolor sit amet, consectetur adipisicing", text3:"elitsed do eiusmod tempor incididunt ut labore"},
    {ImgSrc:"../../../assets/Images/Numbers/4.png", text1:"Litigation", text2:"Lorem ipsum dolor sit amet, consectetur adipisicing", text3:"elitsed do eiusmod tempor incididunt ut labore"},
   ];

  constructor() { }

  ngOnInit() {
  }

}
