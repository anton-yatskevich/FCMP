import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.scss']
})
export class SourceSelectComponent implements OnInit {
  @Input() sources: string[];
  @Output() onChangeSource = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onChangeOption(source: string): void {
    this.onChangeSource.emit(source);
  }

}
