import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service'

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() { }

  public onFilterClick(value: string) {
    this.articlesService.updateFiterValue.emit(value);
  }
}
