import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public title: string;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.updatedHeader.subscribe((value: string) => {
      this.title = value;
    });
  }
}