import {Component, signal} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    NgForOf,
    MatExpansionModule,
    MatIcon
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experiences = [
    {
      titre: 'Développeur FullStack - responsable technique',
      date: 'Septembre 2024 - Présent',
      client: 'Sopra Steria - NAM Modalis',
      image: 'modalis.png',
      description: 'Sur un projet à l\'échelle régionale, j\'interviens actuellement en tant que <strong>responsable technique</strong> afin d\'assurer l\'aspect évolution technique et suivi qualité de l\'application.<br>' +
        '- Rédaction et validation de <strong>devis technique</strong><br>' +
        '- Développpement, testing, déploiement<br>' +
        '- Assurance <strong>MCO</strong>, suivi et corrections des anomalies<br>' +
        '- <strong>Relation et communication</strong> inter-partenaires afin d\'assurer les liens entre APIS<br>' +
        '<u>Environnement technique/fonctionnel:</u> Java 21 (Kotlin), Spring 3, Angular 19, MongoDB (NoSQL), Keycloak, Sendgrid, Azure (VM et CosmosDB), GitLab, Jira '
    },
    {
      titre: 'Développeur Back-end',
      date: 'Juin 2023 - Septembre 2024',
      client: 'Sopra Steria - Ministère de l\'intérieur',
      image: 'minis.png',
      description: 'Projet regroupant 2 équipes multi-sites (30 personnes) dont la mission a été le maintien et l\'évolution d’outils ' +
        'internes au ministère, en lien étroit avec l\'espace Schengen et l\'Union Européenne.<br>' +
        '- Participation à l’<strong>élaboration des solutions techniques</strong> en lien avec le fonctionnel<br>' +
        '- Rédaction de <strong>conceptions techniques</strong><br>' +
        '- Développement, <strong>Testing</strong> (TU, TI, TNR) et relecture de code<br>' +
        '- Déploiement et versioning<br>' +
        '- Support technique<br>' +
        '<u>Environnement technique/fonctionnel:</u> Java 8, Spring, SOAP, Camel, XSD, OracleSQL, Azure, GitLab, Jira '
    },
    {
      titre: 'Développeur FullStack',
      date: 'Septembre 2022 - Juin 2023',
      client: 'Sopra Steria - ENEDIS',
      image: 'enedis.png',
      description: 'Projet inédit à l\'échelle Agile regroupant plusieurs micro-services, où mon objectif était une montée en compétence sur le Back et le Front de l\'application afin de devenir responsable des APIs.<br>' +
        '- <strong>Chiffrage</strong> des User Stories, <strong>développement</strong> d’API, rédaction de tests unitaires<br>' +
        '- Affichage des API sur l\'IHM, mise en place d’<strong>atomic design</strong> en Frontend<br>' +
        '- Simplification et <strong>formalisation</strong> du code<br>' +
        '- Point fonctionnel et présentation des évolutions avec le client<br>' +
        '<u>Environnement technique/fonctionnel:</u> Java 17, Spring 3, Angular 15, REST API, PostgreSQL, HTML,\n' +
        'CSS, Jira'
    },
    {
      titre: 'Docteur en chimie des matériaux',
      date: 'Juillet 2016 - Décembre 2020',
      client: 'Université de Nouvelle-Calédonie',
      image: 'unc.png',
      description: '<u>Sujet:</u> <em>Etude structurale et mécanique sur le dépôt calco-magnésien en présence de granulats.</em><br>' +
        '<strong>Gestion d’un projet</strong> de recherche de 4 ans à portée internationale.<br>' +
        '<strong>Autonomie</strong> de la veille scientifique jusqu’à la mise en place des essais et l’interprétation des résultats.<br>' +
        '<strong>Collaboration</strong> inter laboratoires, gestion de ressources et encadrement de stagiaires.<br>' +
        '<strong>Communication scientifique</strong> à travers des articles, conférences et manuscrit de thèse (prix de la meilleure présentation aux doctoriales UNC 2019). Enseignements en classes supérieures et vulgarisation scientifiques.'
    }
    ,
    {
      titre: 'Ingénieur en apprentissage',
      date: 'Septembre 2013 - Juin 2016',
      client: 'Vallourec',
      image: 'vallourec.png',
      description: 'Collaboration avec un chef de projet du service Traitement de Surface.<br>' +
        'Sujet de recherche mené sur :<br>' +
        '- Estimation de la durée de vie de revêtements anti-corrosion via des essais accélérés.<br>' +
        '- Etude de l\'adhésion de revêtement après vieillissement accéléré en laboratoire.'
    }
  ];

  readonly panelOpenState = signal(false);

}
