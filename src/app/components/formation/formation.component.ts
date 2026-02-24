import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss',
})
export class FormationComponent implements OnInit {
  selectedFormation: any;
  selectedIndex: number = 0;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  formations = [
    {
      date: '2026',
      titre: 'Certification SAFe Scrum Master',
      universite: 'Scaled Agile, Inc.',
      description:
        'Certification SAFe Scrum Master validant la maîtrise du cadre SAFe et du rôle de Scrum Master à l’échelle.',
      competences:
        'Animation des cérémonies Agile, facilitation d’équipes, amélioration continue, coordination dans un train Agile (ART).',
    },
    {
      date: '2022',
      titre: 'POEI Java Full Stack',
      universite: 'M2I Formation & Sopra Steria Group',
      description:
        "Formation de reconvertion orientée Fullstack (Java, Angular) avec une approche Agile. Projet fil rouge avec développement d'une application complète.",
      competences:
        'Java, Angular, Agile, Gestion de projet, Développement logiciel.',
    },
    {
      date: '2016 - 2020',
      titre: 'Doctorat en chimie des Matériaux',
      universite:
        'Institut des Sciences Exactes et Appliquées - Nouméa',
      description:
        'Thèse scientifique menée en laboratoire (Nouméa et La Rochelle) via un financement ministériel.',
      competences:
        'Chimie des matériaux, Analyse de données, Modélisation, Publication scientifique.',
    },
    {
      date: '2014 - 2016',
      titre: 'Master professionnel en Ingénierie de la Chimie',
      universite: 'Université Polytechnique Hauts-de-France - Valenciennes',
      description:
        'Master effectué en apprentissage au centre de R&D de Vallourec.',
      competences:
        'Chimie, Recherche et Développement, Analyse de données, Gestion de projet.',
    },
  ];

  ngOnInit() {
    this.selectedFormation = this.formations[0];
  }

  selectFormation(index: number) {
    this.selectedIndex = index;
  }

  scrollToFormation(index: number) {
    this.selectedIndex = index;
    if (this.scrollContainer) {
      const scrollHeight = this.scrollContainer.nativeElement.scrollHeight;
      const clientHeight = this.scrollContainer.nativeElement.clientHeight;
      const scrollPosition = (scrollHeight / this.formations.length) * index;

      this.scrollContainer.nativeElement.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    const scrollTop = element.scrollTop;
    const itemHeight = element.scrollHeight / this.formations.length;
    const newIndex = Math.round(scrollTop / itemHeight);

    if (
      newIndex !== this.selectedIndex &&
      newIndex >= 0 &&
      newIndex < this.formations.length
    ) {
      this.selectedIndex = newIndex;
    }
  }
}
