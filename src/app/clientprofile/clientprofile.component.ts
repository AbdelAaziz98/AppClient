import { Component, OnInit } from '@angular/core';
import { ClientdataService} from '../clientdata.service';
@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css']
})
export class ClientprofileComponent implements OnInit {

  constructor(private cAjout:ClientdataService) { }

  ngOnInit(): void {
  }

}
