import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leaderservice: LeaderService) { }

  ngOnInit(): void {
    this.leaderservice.getLeaders()
    .then(leaders=>this.leaders=leaders);
  }

}
