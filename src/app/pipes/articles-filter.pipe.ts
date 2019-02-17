import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article';

@Pipe({
  name: 'articlesFilter'
})
export class ArticlesFilterPipe implements PipeTransform {

  transform(articles: Array<Article>, query: string): any {
    if(articles && query){
      return articles.filter((article) => {
        return article.title.indexOf(query) !== -1;
      });
    }
    return articles;
  }
}
