import { Component, OnInit, Inject  } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInout]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  errMess: string;
  constructor(private leadersService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.leadersService.getLeaders()
    .subscribe((leaders) => this.leaders = leaders,
    errmess => this.errMess = <any>errmess);
  }

}