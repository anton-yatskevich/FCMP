import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsPageComponent } from './results-page/results-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ArticlePageComponent } from './article-page/article-page.component'

const routes: Routes = [
  {path: '', redirectTo: 'results', pathMatch: 'full'},
  {path: 'results', component: ResultsPageComponent},
  {path: 'results/article/:id', component: ArticlePageComponent},
  {path: 'edit/:id', component: EditPageComponent},
  {path: 'create', component: EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
