import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {

  @Input() product: object;
  
  @Output() generalInformationSaved = new EventEmitter();
  file: File;
  public imageloaded = false;
  constructor() {
  }

  ngOnInit() {
  }
  getImage(event)
  {
    this.file = event.target.files[0];
    this.product["image"] = this.file.name;
    this.imageloaded  =true;
  }
  SaveUserGeneralInformation() {
    this.generalInformationSaved.emit(this.product);
  }

}
