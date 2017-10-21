import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-block',
  templateUrl: './fourth-block.component.html',
  styleUrls: ['./fourth-block.component.scss']
})
export class FourthBlockComponent implements OnInit {

  public employer=[
    {index:"1", ImgSrc:"../../../assets/Images/employer_photo1.png", text1:"Alex Smith", text2:"Owner, Partner"},
    {index:"2", ImgSrc:"../../../assets/Images/employer_photo2.png", text1:"Susan Tylor", text2:"CEO"},
  
    {index:"3", ImgSrc:"../../../assets/Images/employer_photo3.png",text1:"George Smith", text2:"Partner"},
    {index:"4", ImgSrc:"../../../assets/Images/employer_photo4.png", text1:"Lexi Tylor", text2:"Partner"},
   ];

  constructor() { }

  ngOnInit() {
  }

}
