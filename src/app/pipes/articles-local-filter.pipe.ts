import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/Article';

@Pipe({
  name: 'articlesLocalFilter'
})
export class ArticlesLocalFilterPipe implements PipeTransform {

  transform(articles: Array<Article>, isLocal: boolean): any {
    if (articles && isLocal) {
      return articles.filter((article) => article.isLocal);
    }
    return articles;
  }

}