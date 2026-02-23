import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss',
})
export class CompetencesComponent {
  competences = {
    softSkills: [
      {
        name: "Esprit d'équipe",
        level: 95,
        info: 'Collaboration efficace et écoute active',
      },
      {
        name: 'Communication',
        level: 90,
        info: 'Capacité à transmettre des idées clairement',
      },
      {
        name: 'Polyvalence',
        level: 87,
        info: 'Adaptabilité rapide à différents contextes',
      },
      {
        name: 'Résolution de problèmes',
        level: 85,
        info: 'Analyse, modélisation et approche méthodique des défis complexes',
      },
      {
        name: 'Suivi de la qualité',
        level: 83,
        info: 'Sens du détail, amélioration continue, démarche TDD',
      },
      {
        name: 'Leadership Agile / Scrum',
        level: 82,
        info: "Animation des cérémonies, accompagnement de l'équipe, facilitation",
      },
      {
        name: 'Autonomie',
        level: 81,
        info: 'Prise d’initiative, gestion indépendante du travail et du planning',
      },
      {
        name: 'Résilience',
        level: 78,
        info: 'Capacité à gérer la pression et rebondir face aux défis',
      },
      {
        name: 'Force de proposition',
        level: 77,
        info: "Apport d'idées innovantes et optimisations",
      },
    ],
    backend: [
      {
        name: 'Java (8/17/21)',
        level: 90,
        info: 'Développement backend avancé, microservices, bonnes pratiques',
      },
      {
        name: 'Testing (JUnit / Mockito)',
        level: 88,
        info: 'Tests unitaires et d’intégration automatisés, approche TDD',
      },
      {
        name: 'Spring 3+',
        level: 85,
        info: 'Spring Boot, Spring Data, Spring Security',
      },
      { name: 'REST API', level: 80, info: 'OpenAPI Specification, Swagger' },
      {
        name: 'Architecture microservices',
        level: 75,
        info: 'Conception, communication inter-services, résilience',
      },
      {
        name: 'Sécurité / Authentification (Keycloak)',
        level: 70,
        info: 'Gestion des accès (OAuth2 / OIDC)',
      },
      { name: 'SOAP', level: 40, info: "Contrat d'interface XML" },
      {
        name: 'Flutter',
        level: 20,
        info: 'Développement mobile cross-platform',
      },
    ],

    frontend: [
      {
        name: 'Javascript & Angular 18+',
        level: 80,
        info: 'Développement front-end réactif, dynamique et maintenable',
      },
      {
        name: 'HTML & CSS',
        level: 68,
        info: 'Mise en page responsive et design adaptatif',
      },
      {
        name: 'React Native',
        level: 65,
        info: 'Développement front-end réactif et dynamique',
      },
      {
        name: 'Design atomique',
        level: 60,
        info: 'Création de composants UI réutilisables',
      },
    ],

    databases: [
      {
        name: 'BDD SQL',
        level: 85,
        info: 'Optimisation des requêtes, PL/SQL, PostgreSQL, MySQL, DBeaver',
      },
      {
        name: 'BDD MongoDB',
        level: 60,
        info: 'Gestion de bases NoSQL, liens avec CosmosDB',
      },
      {
        name: 'Firestore',
        level: 20,
        info: 'Gestion de bases NoSQL dans le cloud, intégration avec Flutter',
      },
    ],

    devops: [
      {
        name: 'Azure VM',
        level: 40,
        info: 'Création et gestion de machines virtuelles Azure',
      },
      {
        name: 'CI/CD',
        level: 35,
        info: 'Automatisation des déploiements, GitLab CI',
      },
      {
        name: 'Conteneurisation (Docker / Podman)',
        level: 25,
        info: 'Création et exécution de conteneurs, Docker, Podman',
      },
    ],

    tools: [
      {
        name: 'IntelliJ IDEA Ultimate / VS Code',
        level: 85,
        info: 'IDE principal pour le développement Java / Spring et front-end',
      },
      {
        name: 'Git / GitKraken',
        level: 83,
        info: 'Gestion de version, branches, merges',
      },
      {
        name: 'Jira',
        level: 80,
        info: 'Workflows Agile/Scrum, suivi d’incréments et de releases',
      },
      {
        name: 'Postman / Insomnia',
        level: 80,
        info: 'Tests et documentation d’API REST',
      },
      {
        name: 'Scrum / SAFe',
        level: 78,
        info: 'Scrum Master certifié SAFe, pilotage Agile multi-équipes',
      },
      {
        name: 'SonarQube',
        level: 60,
        info: 'Analyse de la qualité de code, dette technique, couverture',
      },
    ],
  };

  selectedSection: string = '';
  notSelectedSection: string = '';
  showSoftSkills: boolean = true;
  currentCategoryIndex: number = 0;

  hardSkillsCategories = [
    { key: 'backend', title: 'Backend' },
    { key: 'frontend', title: 'Frontend' },
    { key: 'databases', title: 'Gestion de Données' },
    { key: 'devops', title: 'DevOps / Cloud' },
    { key: 'tools', title: 'Outils' },
  ];

  selectSection(section: string) {
    if (this.selectedSection == section) {
      this.selectedSection = '';
      return;
    }
    this.selectedSection = section;
    if (section === 'hard') {
      this.notSelectedSection = 'soft';
    }
  }

  toggleSkillType(showSoft: boolean) {
    this.showSoftSkills = showSoft;
    if (!showSoft) {
      this.currentCategoryIndex = 0;
    }
  }

  nextCategory() {
    this.currentCategoryIndex =
      (this.currentCategoryIndex + 1) % this.hardSkillsCategories.length;
  }

  previousCategory() {
    this.currentCategoryIndex =
      this.currentCategoryIndex === 0
        ? this.hardSkillsCategories.length - 1
        : this.currentCategoryIndex - 1;
  }

  goToCategory(index: number) {
    this.currentCategoryIndex = index;
  }

  getCurrentCategorySkills() {
    const categoryKey =
      this.hardSkillsCategories[this.currentCategoryIndex].key;
    return this.competences[categoryKey as keyof typeof this.competences] || [];
  }
}
