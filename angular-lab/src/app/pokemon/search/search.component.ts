import { Component, 
  OnInit, 
  Output, 
  EventEmitter 
} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchData: EventEmitter<string> = new EventEmitter();

  public nameValue: string ;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.searchData.emit(this.nameValue);
  }

}
