import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { Source } from '../../../models/Source'

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.scss']
})
export class SourceSelectComponent implements OnInit {
  public sources: Array<Source> = [{name: 'Local news', id: 'local'}];
  
  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.articlesService.getSources().subscribe(
      (response) => this.sources = [...this.sources, ...response],
      (error) => console.log(error)
    );
    this.articlesService.onChangeSource(this.sources[0]);
  }

  onChangeOption(source: string): void {
    const newSource = this.sources.find(item => item.name === source);
    this.articlesService.onChangeSource(newSource);
  }
}
