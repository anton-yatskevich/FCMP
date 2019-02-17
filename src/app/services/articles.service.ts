import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public updatedSource: EventEmitter<string> = new EventEmitter();

  constructor() { }

  changeSource(source: string){
    this.updatedSource.emit(source)
  }
}
