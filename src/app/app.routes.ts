import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ExperiencesComponent} from "./components/experiences/experiences.component";
import {NgModule} from "@angular/core";
import {LoisirsComponent} from "./components/loisirs/loisirs.component";
import {FormationComponent} from "./components/formation/formation.component";
import {CompetencesComponent} from "./components/competences/competences.component";
import {AboutComponent} from "./components/about/about.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'about', component: AboutComponent},
      {path: 'experiences', component: ExperiencesComponent},
      {path: 'competences', component: CompetencesComponent},
      {path: 'loisirs', component: LoisirsComponent},
      {path: 'formation', component: FormationComponent},
      {path: '', redirectTo: '/about', pathMatch: 'full'},  // Page par défaut
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
