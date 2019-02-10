import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls-panel',
  templateUrl: './controls-panel.component.html',
  styleUrls: ['./controls-panel.component.scss']
})
export class ControlsPanelComponent implements OnInit {
  @Input() sources: string[];
  @Output() onChangeSource = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.onChangeSource.emit(this.sources[0]);
  }

  setSelectedOption(source: string): void {
    this.onChangeSource.emit(source);
  }
}
