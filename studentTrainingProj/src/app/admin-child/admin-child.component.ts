import { Component, OnInit ,Input} from '@angular/core';
import { AdminData } from '../admin-data';

@Component({
  selector: 'app-admin-child',
  templateUrl: './admin-child.component.html',
  styleUrls: ['./admin-child.component.css']
})
export class AdminChildComponent implements OnInit {

    @Input() adminD : AdminData; 
  constructor() { }

  ngOnInit() {
  }

}
