import { Injectable } from '@angular/core';
import { TV } from './tv/tv';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  tvArray:Array<TV> =[];

  availableChannels()
  {
    let ch1 = new TV(1, "MTV", "Entertainment", '/Users/calebgundberg/angular_projects/Lab3/src/assets/images/Mtv.png', false);
    let ch2 = new TV(2, "CNN", "News", '/Users/calebgundberg/angular_projects/Lab3/src/assets/images/Cnn.png', false);
    let ch3 = new TV(3, "DISCOVERY", "Entertainment", '/Users/calebgundberg/angular_projects/Lab3/src/assets/images/Discovery.png', false);
    let ch4 = new TV(4, "HDTV", "Entertainment", '/Users/calebgundberg/angular_projects/Lab3/src/assets/images/Hdtv.png', false);
    let ch5 = new TV(5, "ESPN", "Sports", '/Users/calebgundberg/angular_projects/Lab3/src/assets/images/Espn.png', false);
    let ch6 = new TV(6, "Travel", "Entertainment", '/Users/calebgundberg/angular_projects/Lab3/src/assets/images/Travel.png', false);
    let ch7 = new TV(7, "Food TV", "Entertainment", '/Users/calebgundberg/angular_projects/Lab3/src/assets/images/Food.png', false);
    let ch8 = new TV(8, "SiFi", "Entertainment", '/Users/calebgundberg/angular_projects/Lab3/src/assets/images/Sifi.png', false);

    this.tvArray.push(ch1);
    this.tvArray.push(ch2);
    this.tvArray.push(ch3);
    this.tvArray.push(ch4);
    this.tvArray.push(ch5);
    this.tvArray.push(ch6);
    this.tvArray.push(ch7);
    this.tvArray.push(ch8);
    return this.tvArray; 
  }
}
