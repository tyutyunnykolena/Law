import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-featured',
  templateUrl: './set-featured.component.html',
  styleUrls: ['./set-featured.component.scss']
})
export class SetFeaturedComponent implements OnInit {
  @Input() product: object;
  
  @Output() setFeaturedSaved = new EventEmitter();
  @Output() allSaved = new EventEmitter();
  
    constructor(private router: Router) {
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
}
