import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent implements OnInit {
  selectedFormation: any;

  selectedIndex: number = 0;

  formations = [

    {
      date: '2022',
      titre: 'POEI Java Full Stack',
      universite: 'M2I Formation & Sopra Steria Group',
      description: 'Formation de reconvertion orientée Fullstack (Java Angular), méthodologie Agile et travail de groupe sur un projet fil rouge.'
    },
    {
      date: '2016 - 2020',
      titre: 'Doctorat en chimie des Matériaux',
      universite: 'Université de Nouvelle-Calédonie <br>Institut des Sciences Exactes et Appliquées - Nouméa',
      description: 'Thèse scientifique menée en laboratoire (Nouméa et La Rochelle) via un financement ministériel.'
    },
    {
      date: '2014 - 2016',
      titre: 'Master professionnel en Ingénierie de la Chimie',
      universite: 'Université Polytechnique Hauts-de-France - Valenciennes',
      description: 'Master effectué en apprentissage au centre de R&D de Vallourec.'
    },
    {
      date: '2013 - 2014',
      titre: 'Licence professionnelle Analyse, Contrôle et Expertise',
      universite: 'Université de Lille 1 - Villeneuve d\'Ascq',
      description: ''
    }
  ]

  ngOnInit() {
    this.selectedFormation = this.formations[0];
  }

  selectFormation(index: number) {
    this.selectedIndex = index;
  }

}
