import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-autosuggest-input-field',
  templateUrl: './autosuggest-input-field.component.html',
  styleUrls: ['./autosuggest-input-field.component.scss']
})
export class AutosuggestInputFieldComponent implements OnInit {

  @Output() textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  demo(e: any){
    console.log(e.target.value);
    this.textChange.emit(e.target.value);
  }
}
