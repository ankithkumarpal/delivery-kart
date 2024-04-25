import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {

  @Output() filters: EventEmitter<any> = new EventEmitter<any>();

  playersOptions!:any[];
  battingTypeOptions!:any[];
  bowlingStyleOptions! : any[];
  totalWicketsOptions!:any[];

  selectedPlayers : any[] = [];
  selectedBattingType : any[] = [];
  selectedBowlingType : any[] = [];
  selectedTotalWickets :any[] = [];

  allSelectedFilters = {
    name :  [],
    battingtype  :[],
    bowlingtype  :[],
    totalwickets : []
  }

    selectedCities!: any[];
    ngOnInit() {
        this.playersOptions = [
            {name: 'Rohit Sharma'},
            {name: 'KL Rahul'},
            {name: 'Suresh Raina'},
            {name: 'MS Dhoni'},
            {name: 'Virat Kohli'}
        ];
        this.battingTypeOptions = [
          {name:"Right Hand"},
          {name:"Left Hand"},
        ];
        this.bowlingStyleOptions = [
          {name: 'Fast pace over'},
          {name: 'Fast-medium'},
          {name: 'Medium-fast'},
          {name: 'Medium-pace'},
          {name: 'Leg-spin'}
        ];
        this.totalWicketsOptions = [
          {name : "10"},
          {name : "20"},
          {name : "50"},
          {name : "100"},
          {name : "500"},
          {name : "1000"}
        ]
    }

    applyFilter(){
      this.allSelectedFilters.name = this.selectedPlayers;
      this.allSelectedFilters.battingtype = this.selectedBattingType;
      this.allSelectedFilters.bowlingtype = this.selectedBowlingType;
      this.allSelectedFilters.totalwickets = this.selectedTotalWickets;
      this.filters.emit(this.allSelectedFilters);
    }

    clearFilter(){
      this.selectedPlayers = [];
      this.selectedBattingType = [];
      this.selectedBowlingType = [];
      this.selectedTotalWickets = [];
      this.applyFilter();
    }
}
