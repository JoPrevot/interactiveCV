import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { NgForOf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    NgForOf,
    MatExpansionModule,
    MatIcon,
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiences = [
    {
      titre: 'Développeur FullStack - Scrum Master',
      date: 'Août 2025 - Présent',
      client: 'Sopra Steria - CRPN',
      image: 'crpn.png',
      description:
        "J'interviens actuellement en tant que <strong>développeur Fullstack confirmé</strong>, avec une forte casquette de <strong>Scrum Master</strong>, sur un projet de refonte prévu sur 6 ans (équipe Agile d’environ 50 personnes).<br>" +
        '- Développement Backend de <strong>micro-services</strong> en architecture hexagonale via <strong>OpenAPI Specification</strong><br>' +
        '- Développement Frontend de <strong>composants atomiques (Design System)</strong> et de pages consommant les APIs backend<br>' +
        '- Animation et facilitation des <strong>cérémonies Scrum</strong> (Sprint Planning, Daily, Review, Rétrospective)<br>' +
        '- Accompagnement des équipes dans l’<strong>adoption des pratiques Agile</strong> et l’amélioration continue<br>' +
        '- Collaboration étroite avec les <strong>Product Owners</strong> pour le refinement et la priorisation du backlog<br>' +
        '- Coordination et communication entre <strong>5 équipes Agile</strong> (Scrum of Scrums) afin d’assurer la cohérence des sprints et des incréments<br>' +
        '<u>Environnement technique/fonctionnel :</u> Java 21, Spring 3, React Native, OpenAPI Spec, DBeaver, Keycloak, Bruno, GitLab, Jira',
    },
    {
      titre: 'Développeur FullStack - Responsable Technique',
      date: 'Septembre 2024 - Août 2025',
      client: 'Sopra Steria - NAM Modalis',
      image: 'modalis.png',
      description:
        'Je suis intervenu en tant que <strong>développeur et référent technique</strong> sur un projet de mobilité à forte valeur métier (échelle régionale), avec une responsabilité complète sur le cycle de vie applicatif.<br>' +
        '- Référent technique de l’application : <strong>conception, développement et validation des choix techniques</strong><br>' +
        '- Réalisation de l’ensemble des <strong>développements Backend et Frontend</strong><br>' +
        '- Prise en charge de la <strong>MCO</strong> et <strong>correction des anomalies</strong><br>' +
        '- Analyse des incidents, support technique et amélioration de la qualité applicative<br>' +
        '- Relation directe avec les <strong>clients et partenaires</strong> : recueil des besoins, échanges techniques et suivi des livraisons<br>' +
        '- Mise en place, maintenance et amélioration des <strong>environnements DevOps</strong> (développement, intégration, recette)<br>' +
        '<u>Environnement technique/fonctionnel :</u> Java 21 (Kotlin), Spring 3, Angular 18+, outils DevOps (Kubernetes, Azure VM), GitLab, Jira',
    },
    {
      titre: 'Développeur Back-end',
      date: 'Juin 2023 - Septembre 2024',
      client: "Sopra Steria - Ministère de l'intérieur",
      image: 'minis.png',
      description:
        'Projet stratégique du <strong>Ministère de l’Intérieur</strong> regroupant 2 équipes multi-sites (environ 30 personnes), dédié au maintien et à l’évolution d’outils critiques en lien étroit avec l’<strong>espace Schengen</strong> et l’<strong>Union Européenne</strong>.<br>' +
        '- Intervention en tant que <strong>développeur Backend</strong> sur des applications à forts enjeux fonctionnels et réglementaires<br>' +
        '- Participation active à l’<strong>élaboration des solutions techniques</strong> en collaboration étroite avec les équipes fonctionnelles<br>' +
        '- Prise en compte de <strong>spécifications fonctionnelles très rigoureuses</strong> et de contraintes métiers fortes<br>' +
        '- Rédaction de <strong>documents de conception technique détaillés</strong><br>' +
        '- Développement de fonctionnalités Backend complexes dans un contexte fortement normé<br>' +
        '- Mise en œuvre de nombreuses phases de <strong>tests</strong> : Tests Unitaires (TU), Tests d’Intégration (TI) et Tests de Non-Régression (TNR)<br>' +
        '- Relecture de code et respect des <strong>standards de qualité et de sécurité</strong><br>' +
        '- Gestion du <strong>versioning</strong> et participation aux phases de <strong>déploiement</strong><br>' +
        '<u>Environnement technique/fonctionnel :</u> Java 8, Spring, SOAP, Apache Camel, XSD, Oracle SQL, Azure, GitLab, Jira',
    },

    {
      titre: 'Développeur FullStack',
      date: 'Septembre 2022 - Juin 2023',
      client: 'Sopra Steria - ENEDIS',
      image: 'enedis.png',
      description:
        "Projet inédit à l'échelle Agile regroupant plusieurs micro-services, où mon objectif était une montée en compétence sur le Back et le Front de l'application afin de devenir responsable des APIs.<br>" +
        '- <strong>Chiffrage</strong> des User Stories, <strong>développement</strong> d’API, rédaction de tests unitaires<br>' +
        "- Affichage des API sur l'IHM, mise en place d’<strong>atomic design</strong> en Frontend<br>" +
        '- Simplification et <strong>formalisation</strong> du code<br>' +
        '- Point fonctionnel et présentation des évolutions avec le client<br>' +
        '<u>Environnement technique/fonctionnel:</u> Java 17, Spring 3, Angular 15, REST API, PostgreSQL, HTML,\n' +
        'CSS, Jira',
    },
    {
      titre: 'Docteur en chimie des matériaux',
      date: 'Juillet 2016 - Décembre 2020',
      client: 'Université de Nouvelle-Calédonie',
      image: 'unc.png',
      description:
        '<u>Sujet:</u> <em>Etude structurale et mécanique sur le dépôt calco-magnésien en présence de granulats.</em><br>' +
        '<strong>Gestion d’un projet</strong> de recherche de 4 ans à portée internationale.<br>' +
        '<strong>Autonomie</strong> de la veille scientifique jusqu’à la mise en place des essais et l’interprétation des résultats.<br>' +
        '<strong>Collaboration</strong> inter laboratoires, gestion de ressources et encadrement de stagiaires.<br>' +
        '<strong>Communication scientifique</strong> à travers des articles, conférences et manuscrit de thèse (prix de la meilleure présentation aux doctoriales UNC 2019). Enseignements en classes supérieures et vulgarisation scientifiques.<br>' +
        '<br>Envie d\'en savoir plus ? ça se passe ici : <a href="https://www.youtube.com/watch?v=7pF01wbG2i4">soutenance de thèse</a> ',
    },
    {
      titre: 'Ingénieur en apprentissage',
      date: 'Septembre 2013 - Juin 2016',
      client: 'Vallourec',
      image: 'vallourec.jpg',
      description:
        'Collaboration avec un chef de projet du service Traitement de Surface.<br>' +
        'Sujet de recherche mené sur :<br>' +
        '- Estimation de la durée de vie de revêtements anti-corrosion via des essais accélérés.<br>' +
        "- Etude de l'adhésion de revêtement après vieillissement accéléré en laboratoire.",
    },
  ];

  readonly panelOpenState = signal(false);
}
