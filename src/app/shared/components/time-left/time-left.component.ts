import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-left',
  templateUrl: './time-left.component.html',
  styleUrls: ['./time-left.component.scss']
})
export class TimeLeftComponent implements OnInit {
  @Input() time: string;
  timeLeft: string | null;

  constructor() { }

  ngOnInit(): void {
    this.timeLeft = this.getDuration(this.time)
  }

  getDuration(time: string){

    let minutes = Math.floor(parseInt(time) / 60000);
    let hours = Math.round(minutes / 60);
    let days = Math.round(hours / 24);
  
    return days ? `${days} days ${hours} hours ${minutes} minutes` 
            : hours ? `${hours} hours ${minutes} minutes` 
            : minutes ? `${minutes} minutes` : null 
  };

}
