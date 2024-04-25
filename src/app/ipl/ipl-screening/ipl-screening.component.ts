import { ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-ipl-screening',
  templateUrl: './ipl-screening.component.html',
  styleUrls: ['./ipl-screening.component.css']
})
export class IplScreeningComponent {

  cols!: any[];
  totalRecords! : number
  data! : any[]
  filteredData! : any[]
  filter!:any
  offSet! : number;
  limit!: number;

  constructor(private cdr: ChangeDetectorRef , private ngZone: NgZone){}


  ngOnInit() {
    this.totalRecords = 12;
    this.data = [
      {
        "name" : "Rohit Sharma",
        "battingtype" : "Right Hand",
        "totalruns" : '45000',
        "bowlingtype" : 'Fast-medium',
        "totalwickets" : '100'
      },
      {
        "name" : "KL Rahul",
        "battingtype" : "Left Hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Fast-medium',
        "totalwickets" : '20'
      },
        {
        "name" : "KL Rahul",
        "battingtype" : "Left Hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Fast-medium',
        "totalwickets" : '1'
      },
      {
        "name" : "KL Rahul",
        "battingtype" : "Left Hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Fast-medium',
        "totalwickets" : '2'
      },
      {
        "name" : "KL Rahul",
        "battingtype" : "Left Hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Fast-medium',
        "totalwickets" : '3'
      },
      {
        "name" : "MS Dhoni",
        "battingtype" : "Left hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Fast-medium',
        "totalwickets" : '20'
      },
      {
        "name" : "MS Dhoni",
        "battingtype" : "Left hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Left hand',
        "totalwickets" : '20'
      }, {
        "name" : "Virat Kohli",
        "battingtype" : "Left hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Fast pace over',
        "totalwickets" : '10'
      }, {
        "name" : "Rishab Pant",
        "battingtype" : "Left hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Left hand',
        "totalwickets" : '10'
      }, {
        "name" : "KL Rahul",
        "battingtype" : "Left hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Left hand',
        "totalwickets" : '50'
      }, {
        "name" : "KL Rahul",
        "battingtype" : "Left hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Left hand',
        "totalwickets" : '20'
      }, {
        "name" : "Virat Kohli",
        "battingtype" : "Left hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Left hand',
        "totalwickets" : '50'
      }, {
        "name" : "Suresh Raina",
        "battingtype" : "Left Hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Right Hand',
        "totalwickets" : '50'
      }, {
        "name" : "MS Dhoni",
        "battingtype" : "Right Hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Right Hand',
        "totalwickets" : '100'
      },
      {
        "name" : "KL Rahul",
        "battingtype" : "Left Hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Fast-medium',
        "totalwickets" : '89'
      },
      {
        "name" : "Suresh Raina",
        "battingtype" : "Left hand",
        "totalruns" : '27000',
        "bowlingtype" : 'Right Hand',
        "totalwickets" : '10'
      }
    ]
      this.cols = [
          { feild: 'name', header: 'Name' },
          { feild: 'battingtype', header: 'Batting Type' },
          {feild : 'totalruns' , header: 'Total Runs'},
          { feild: 'bowlingtype', header: 'Bowling Style' },
          {feild : 'totalwickets' , header: 'Total Wickets'}
      ];
      this.filteredData = this.data;
  }

  isValid(obj : any) : boolean {
    if (this.filter === undefined) return true;
    if (this.filter.name.length != 0 && !this.filter.name.includes(obj.name)) return false;
    if (this.filter.bowlingtype.length != 0 && !this.filter.bowlingtype.includes(obj.bowlingtype)) return false;
    if (this.filter.totalwickets.length != 0 && !this.filter.totalwickets.includes(obj.totalwickets)) return false;
    if (this.filter.battingtype.length != 0 && !this.filter.battingtype.includes(obj.battingtype)) return false;
    return true;
  }

  fetchRecords() {
    this.filteredData = this.data.filter(obj => this.isValid(obj));
    this.applyPagination();
  }

  applyPagination() {
    let temp = [];
    let n = Math.min(this.offSet + this.limit, this.filteredData.length);
    for(let i = this.offSet; i < n ; i++){
      temp.push(this.filteredData[i]);
    }
    this.totalRecords = this.filteredData.length;
    this.filteredData = [...temp];
  }

  applyFilter(event : any){
    this.filter = event;
    this.fetchRecords();
    this.filteredData = [...this.filteredData];
  }

  onPageChange(event : any){
     this.offSet = event.offSet;
     this.limit = event.limit;
     this.fetchRecords();
  }
}
