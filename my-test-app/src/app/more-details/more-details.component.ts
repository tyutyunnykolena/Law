import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {

  @Input() product: object;
  
  @Output() moreDetailsSaved = new EventEmitter();
  
  constructor() {
  }

  ngOnInit() {
    
  }

  SaveUserMoreDetails() {
    this.moreDetailsSaved.emit(this.product);
  }
}
