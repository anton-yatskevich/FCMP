import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ControlsPanelComponent } from './results-page/controls-panel/controls-panel.component';
import { ArticleItemComponent } from './results-page/article-item/article-item.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { TextFilterComponent } from './results-page/controls-panel/text-filter/text-filter.component';
import { SourceSelectComponent } from './results-page/controls-panel/source-select/source-select.component';
import { LocalFilterComponent } from './results-page/controls-panel/local-filter/local-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditPageComponent,
    ArticlePageComponent,
    ControlsPanelComponent,
    ArticleItemComponent,
    ResultsPageComponent,
    TextFilterComponent,
    SourceSelectComponent,
    LocalFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
