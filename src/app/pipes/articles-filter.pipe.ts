import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/Article';

@Pipe({
  name: 'articlesFilter'
})
export class ArticlesFilterPipe implements PipeTransform {

  transform(articles: Array<Article>, query: string): any {
    if(articles && query){
      return articles.filter((article) => {
        return article.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1;
      });
    }
    return articles;
  }
}
