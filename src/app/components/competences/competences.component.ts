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
      {name: 'Esprit d\'équipe', level: 95, info: "Collaboration efficace et écoute active"},
      {name: 'Communication', level: 90, info: "Capacité à transmettre des idées clairement"},
      {name: 'Polyvalence', level: 87, info: "Adaptabilité rapide à différents contextes"},
      {name: 'Résolution de problèmes', level: 85, info: "Analyse et approche méthodique des défis"},
      {name: 'Suivi de la qualité', level: 83, info: "Sens du détail et amélioration continue"},
      {name: 'Autonomie', level: 81, info: "Prise d’initiative et gestion indépendante du travail"},
      {name: 'Résilience', level: 78, info: "Capacité à gérer la pression et rebondir face aux défis"},
      {name: 'Force de proposition', level: 77, info: "Apport d'idées innovantes et optimisations"}
    ],
    backend: [
      {name: 'Java (8/17)', level: 90, info: "Développement backend avancé"},
      {name: 'Testing (JUnit / Mockito / Xray)', level: 88, info: "Tests unitaires et d’intégration automatisés"},
      {name: 'Spring 3', level: 85, info: "Spring Boot, Spring Data"},
      {name: 'REST API', level: 80, info: "OpenAPI Specification, Swagger"},
      {name: 'SOAP', level: 25, info: "Contrat d'interface XML"},
      {name: 'Flutter', level: 20, info: "Développement mobile cross-platform"}
    ],

    frontend: [
      {name: 'Javascript & Angular 15+', level: 77, info: "Développement front-end réactif et dynamique"},
      {name: 'HTML & CSS', level: 68, info: "Mise en page responsive et design adaptatif"}
    ],

    databases: [
      {name: 'BDD SQL', level: 85, info: "Optimisation des requêtes, PL/SQL, PostgreSQL, MySQL, DBeaver"},
      {name: 'BDD MongoDB', level: 60, info: "Gestion de bases NoSQL, liens avec CosmosDB"}
    ],

    tools: [
      {name: 'Git / Jira', level: 81, info: "Gestion de version, workflows Agile/Scrum"},
      {name: 'CI/CD', level: 30, info: "Automatisation des déploiements, GitLab CI"},
      {name: 'Conteneurisation', level: 15, info: "Orchestration de conteneurs, Docker, Podman"}
    ]
  };

  selectedSection: string = '';
  notSelectedSection: string = '';

  selectSection(section: string) {
    if (this.selectedSection == section) {
      this.selectedSection = '';
      return
    }
    this.selectedSection = section;
    if (section === 'hard') {
      this.notSelectedSection = 'soft';
    }
  }


}
