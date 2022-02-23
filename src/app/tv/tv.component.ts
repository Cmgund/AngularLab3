import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';
import { TV } from './tv';
@Component({
  selector: 'app-tv',
  template: `
  <p> I work!</p>
  
  <div class = "TitleStyle"> <h1> Channels Available For Subscription </h1> </div>

<p *ngFor="let TV of channels"> {{TV.getChannelLogo()}} {{TV.getChannelName()}} </p>


  `,
  styles: [`
  .TitleStyle
  {
      margin:auto;
      background-color:Blue;
      width:50%;
      height:150px;
      border:3px solid green;
      border-radius:25px;
  }

  .ChannelBox
  {

  }
  
  `]
})
export class TVComponent implements OnInit {
  channels = Array<TV>();
  constructor(private data:DataService) { 
    this.channels = data.availableChannels();
  }

  ngOnInit(): void {
  }

}

