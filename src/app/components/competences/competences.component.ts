import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent {
  competences = {
    softSkills: [
      {name: 'Esprit d\'équipe', level: 95},
      {name: 'Communication', level: 90},
      {name: 'Polyvalence', level: 87},
      {name: 'Résolution de problèmes', level: 85},
      {name: 'Suivi de la qualité', level: 83},
      {name: 'Autonomie', level: 81},
      {name: 'Résilience', level: 78},
      {name: 'Force de proposition', level: 77}
    ],
    hardSkills: [
      {name: 'Java (8/17)', level: 90},
      {name: 'Spring 3', level: 85},
      {name: 'SQL', level: 85},
      {name: 'Javascript & Angular 15+', level: 77},
      {name: 'HTML & CSS', level: 68},
      {name: 'MongoDB', level: 65},
      {name: 'Flutter', level: 20}
    ],
    hardSkillsBis: [
      {name: 'Testing (Mockito / JUnit / Xray)', level: 88},
      {name: 'Git / Jira', level: 81},
      {name: 'CI/CD', level: 30},
      {name: 'Kubernetes', level: 15},
    ]
  };


}
