import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

interface ExperienceSection {
  title: string;
  items: string[];
}

interface Experience {
  titre: string;
  date: string;
  client: string;
  image: string;
  intro?: string;
  sections: ExperienceSection[];
  techStack?: string;
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatExpansionModule,
    MatIcon,
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      titre: 'Développeur FullStack - Scrum Master',
      date: 'Mai 2025 - Présent',
      client: 'Sopra Steria - CRPN',
      image: 'crpn.png',
      intro:
        'Projet de refonte à long terme (6 ans), structuré en 5 équipes SAFe interconnectées (~50 personnes). ' +
        "Équipe de 10 membres agiles dont j'assure les rôles de <strong>Scrum Master</strong> et de <strong>développeur confirmé</strong>.",
      sections: [
        {
          title: 'Responsabilités techniques',
          items: [
            'Conception et développement de <strong>micro-services</strong> en architecture hexagonale',
            "Mise en place d'<strong>APIs</strong> via <strong>OpenAPI</strong>",
            "Contribution à la définition et à l'évolution du <strong>Design System</strong>",
            'Garant de la <strong>qualité du code</strong> (revues, standards, bonnes pratiques)',
            "Collaboration étroite avec l'<strong>architecture</strong> et les autres équipes",
          ],
        },
        {
          title: 'Responsabilités organisationnelles',
          items: [
            'Animation des <strong>cérémonies Scrum</strong>',
            'Pilotage du <strong>flux de travail</strong> et gestion des dépendances',
            'Coordination inter-équipes via <strong>Scrum of Scrums</strong>',
            "Accompagnement à la <strong>maturité Agile</strong> de l'équipe",
            'Travail rapproché avec les <strong>Product Owners</strong> sur le refinement et la priorisation',
          ],
        },
        {
          title: 'Résultats & impact',
          items: [
            'Amélioration de la <strong>fluidité inter-équipes</strong>',
            'Renforcement de la <strong>qualité des livraisons</strong>',
            "Contribution à l'<strong>alignement technique</strong> sur un projet multi-équipes",
          ],
        },
      ],
      techStack:
        'Java 21, Spring 3, React Native, OpenAPI Spec, DBeaver, Keycloak, Bruno, GitLab, Jira, Confluence',
    },
    {
      titre: 'Développeur FullStack - Responsable Technique',
      date: 'Avril 2024 - Mai 2025',
      client: 'Sopra Steria - NAM Modalis',
      image: 'modalis.png',
      intro:
        'Intervention en tant que <strong>développeur et référent technique</strong> sur un projet de mobilité à forte valeur ' +
        'métier (échelle régionale), avec une responsabilité complète sur le cycle de vie applicatif.',
      sections: [
        {
          title: 'Responsabilités principales',
          items: [
            "Référent technique de l'application : <strong>conception, développement et validation des choix techniques</strong>",
            "Réalisation de l'ensemble des <strong>développements Backend et Frontend</strong>",
            'Prise en charge de la <strong>MCO</strong> et <strong>correction des anomalies</strong>',
            'Analyse des incidents, support technique et amélioration de la qualité applicative',
            'Relation directe avec les <strong>clients et partenaires</strong> : recueil des besoins, échanges techniques et suivi des livraisons',
            'Mise en place, maintenance et amélioration des <strong>environnements DevOps</strong> (développement, intégration, recette)',
          ],
        },
        {
          title: 'Résultats & impact',
          items: [
            'Réalisation de <strong>mises en production</strong> régulières sans incident',
            'Contribution à la <strong>satisfaction</strong> du client final',
            "Haute disponibilité et stabilité de l'application",
          ],
        },
      ],
      techStack:
        'Java 21 (Kotlin), Spring 3, Angular 18+, outils DevOps (Kubernetes, Azure VM), GitLab, Jira',
    },
    {
      titre: 'Développeur Back-end',
      date: 'Mars 2023 - Avril 2024',
      client: "Sopra Steria - Ministère de l'intérieur",
      image: 'minis.png',
      intro:
        "Projet stratégique du <strong>Ministère de l'Intérieur</strong> regroupant 2 équipes multi-sites (environ 30 personnes), " +
        "dédié au maintien et à l'évolution d'outils critiques en lien étroit avec " +
        "l'<strong>espace Schengen</strong> et l'<strong>Union Européenne</strong>.",
      sections: [
        {
          title: 'Responsabilités principales',
          items: [
            'Intervention en tant que <strong>développeur Backend</strong> sur des applications à forts enjeux fonctionnels et réglementaires',
            "Participation active à l'<strong>élaboration des solutions techniques</strong> en collaboration étroite avec les équipes fonctionnelles",
            'Prise en compte de <strong>spécifications fonctionnelles très rigoureuses</strong> et de contraintes métiers fortes',
            'Rédaction de <strong>documents de conception technique détaillés</strong>',
            'Développement de fonctionnalités Backend complexes dans un contexte fortement normé',
            "Mise en œuvre de nombreuses phases de <strong>tests</strong> : Tests Unitaires (TU), Tests d'Intégration (TI) et Tests de Non-Régression (TNR)",
            'Relecture de code et respect des <strong>standards de qualité et de sécurité</strong>',
            'Gestion du <strong>versioning</strong> et participation aux phases de <strong>déploiement</strong>',
          ],
        },
        {
          title: 'Résultats & impact',
          items: [
            "Contribution aux activités de <strong>MCO</strong> avec un haut niveau de fiabilité et d'absence d'incident en production",
          ],
        },
      ],
      techStack:
        'Java 8, Spring, SOAP, Apache Camel, XSD, Oracle SQL, Azure, GitLab, Jira',
    },
    {
      titre: 'Développeur FullStack',
      date: 'Mai 2022 - Mars 2023',
      client: 'Sopra Steria - ENEDIS',
      image: 'enedis.png',
      intro:
        "Projet inédit à l'échelle Agile regroupant plusieurs micro-services, où mon objectif " +
        "était une montée en compétence sur le Back et le Front de l'application afin de devenir responsable des APIs.",
      sections: [
        {
          title: 'Responsabilités principales',
          items: [
            "<strong>Chiffrage</strong> des User Stories, <strong>développement</strong> d'API, rédaction de tests unitaires",
            "Affichage des API sur l'IHM, mise en place d'<strong>atomic design</strong> en Frontend",
            'Simplification et <strong>formalisation</strong> du code',
            'Point fonctionnel et présentation des évolutions avec le client',
          ],
        },
      ],
      techStack:
        'Java 17, Spring 3, Angular 15, REST API, PostgreSQL, HTML, CSS, Jira',
    },
    {
      titre: 'Docteur en chimie des matériaux',
      date: 'Juillet 2016 - Décembre 2020',
      client: 'Université de Nouvelle-Calédonie',
      image: 'unc.png',
      intro:
        '<em>Sujet : Etude structurale et mécanique sur le dépôt calco-magnésien en présence de granulats.</em>',
      sections: [
        {
          title: 'Réalisations',
          items: [
            "Gestion d'un <strong>projet de recherche</strong> de 4 ans à portée internationale",
            "Autonomie de la veille scientifique jusqu'à la mise en place des essais et l'interprétation des résultats",
            'Collaboration inter laboratoires, gestion de ressources et encadrement de stagiaires',
            'Communication scientifique à travers des articles, conférences et manuscrit de thèse (prix de la meilleure présentation aux doctoriales UNC 2019)',
            'Enseignements en classes supérieures et vulgarisation scientifiques',
          ],
        },
        {
          title: 'Résultats',
          items: [
            'Envie d\'en savoir plus ? ça se passe ici : <a href="https://www.youtube.com/watch?v=7pF01wbG2i4">soutenance de thèse</a>',
          ],
        },
      ],
    },
    {
      titre: 'Ingénieur en apprentissage',
      date: 'Septembre 2013 - Juin 2016',
      client: 'Vallourec',
      image: 'vallourec.jpg',
      intro:
        'Collaboration avec un chef de projet du service Traitement de Surface.',
      sections: [
        {
          title: 'Sujet de recherche',
          items: [
            'Estimation de la durée de vie de revêtements anti-corrosion via des essais accélérés',
            "Etude de l'adhésion de revêtement après vieillissement accéléré en laboratoire",
          ],
        },
      ],
    },
  ];

  readonly panelOpenState = signal(false);
}
