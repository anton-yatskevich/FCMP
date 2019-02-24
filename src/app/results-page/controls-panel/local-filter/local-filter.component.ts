import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service'

@Component({
  selector: 'app-local-filter',
  templateUrl: './local-filter.component.html',
  styleUrls: ['./local-filter.component.scss']
})
export class LocalFilterComponent implements OnInit {
  public checked: boolean = false;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.updateLocalFilter.emit(this.checked);
  }

  public toggleFilterValue(e) {
    this.checked = e.target.checked;
    this.articlesService.updateLocalFilter.emit(this.checked);
  }
}
