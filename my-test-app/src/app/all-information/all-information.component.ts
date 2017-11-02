import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-information',
  templateUrl: './all-information.component.html',
  styleUrls: ['./all-information.component.scss']
})
export class AllInformationComponent implements OnInit {

  @Input() product:object;

  constructor() { }

  ngOnInit() {
  }

}
