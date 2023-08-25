import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  activeButton: number = 1; 
  scheduleData1: any[] = [
    { date: '25 Nov 2016', startingPoint: 'Vestibukum Viverra' },
    { date: '29 Nov 2016', startingPoint: 'Kulu Valley' },
    { date: '08 Dec 2016', startingPoint: 'Tosh River' },
    { date: '15 Dec 2016', startingPoint: 'Manali Town' },
  ];
  scheduleData2: any[] = [
    { date: '01 Jan 2016', startingPoint: 'Manali Town' },
    { date: '08 Feb 2016', startingPoint: 'Silgudi Valley' },
    { date: '09 Feb 2016', startingPoint: 'Tosh River' },
    { date: '15 Dec 2016', startingPoint: 'Kulu River' },
  ];
  scheduleData:any[]=this.scheduleData1;

setScheduleData() {
  if (this.activeButton === 1) {
    this.scheduleData =this.scheduleData1
  } else if (this.activeButton === 2) {
    this.scheduleData = this.scheduleData2;
  }
}
}
