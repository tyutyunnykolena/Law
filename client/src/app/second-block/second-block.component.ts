import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-block',
  templateUrl: './second-block.component.html',
  styleUrls: ['./second-block.component.scss']
})
export class SecondBlockComponent implements OnInit {

      public second_block=[
     {ImgSrc:"../../../assets/Images/block2_img1.png", text1:"Business Law", text2:" Phasellus iaculis posuere velit, congue", text3:"placerat duawi rhoncus vel. Maecenas", text4:"tortor orci, aliquet."},
     {ImgSrc:"../../../assets/Images/block2_img2.png", text1:"Civil Litigation", text2:" Phasellus iaculis posuere velit, congue", text3:"placerat duawi rhoncus vel. Maecenas", text4:"tortor orci, aliquet."},
     {ImgSrc:"../../../assets/Images/block2_img3.png", text1:"Insurance Defence", text2:" Phasellus iaculis posuere velit, congue", text3:"placerat duawi rhoncus vel. Maecenas", text4:"tortor orci, aliquet."},
     {ImgSrc:"../../../assets/Images/block2_img4.png", text1:"Business Litigation", text2:" Phasellus iaculis posuere velit, congue", text3:"placerat duawi rhoncus vel. Maecenas", text4:"tortor orci, aliquet."}
    ];

  constructor() { }

  ngOnInit() {
  }

}
