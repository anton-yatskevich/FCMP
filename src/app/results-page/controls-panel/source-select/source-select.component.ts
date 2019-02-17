import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.scss']
})
export class SourceSelectComponent implements OnInit {
  public sources: string[] = ['Local news'];
  
  constructor(
    private apiService: ApiService,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.apiService.getSources().subscribe(
      (response) => this.sources = [...this.sources, ...response],
      (error) => console.log(error)
    );
    this.articlesService.updatedSource.emit(this.sources[0]);
  }

  onChangeOption(source: string): void {
    this.articlesService.updatedSource.emit(source);
  }
}
