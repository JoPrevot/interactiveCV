import {Component} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";

@Component({
  selector: 'app-loisirs',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    Button
  ],
  templateUrl: './loisirs.component.html',
  styleUrl: './loisirs.component.scss'
})
export class LoisirsComponent {
  loisirs = [
    {
      name: 'Volley-Ball', description: '<strong>Poste :</strong> Réceptionneur-Attaquant<br>' +
        'Pratique en compétitions régionales / nationales depuis 2010.<br>' +
        'Capitanat, entraineur et bénévole.<br>' +
        'Le volleyball me pousse à me surpasser tout en cultivant l\'esprit d\'équipe 🏐🔥'
      , icon: 'sports_volleyball'
    },
    {
      name: 'Randonnée',
      description: '<strong>Top rando: </strong><a href="https://balades-naturalistes.fr/le-mont-humboldt/">Mont Humboldt - Nouvelle Calédonie</a><br>' +
        'Randonnées en bivouac sur plusieurs jours, GR.<br>' +
        '"La marche est le meilleur remède pour l’homme." 🌿🏔️<br>'
      ,
      icon: 'hiking'
    },
    {
      name: 'Cuisine',
      description: '<strong>Plat favori: </strong>Les lasagnes 🍴<br>' +
        'J\'adore cuisiner, mais surtout manger ! <br> La gourmandise est effectivement l\'un de mes plus grand défauts 😋',
      icon: 'cookie'
    },
    {
      name: 'Jeux de société',
      description: '<strong>Jeux favoris :</strong> Wingspan, Terraforming Mars, Seasons <br>' +
          'Grand fan de jeux de plateau et de TCG, notamment Magic The Gathering.<br>' +
          'La fatigue mentale d\'une partie de Dune équivaut à une journée de randonnée 😁'
      ,
      icon: 'space_dashboard'
    },
    {
      name: 'Lecture',
      description: 'Passionné de romans de science-fiction et de fantasy, Tolkien, Herbert et Asimov comptent parmi mes auteurs favoris.',
      icon: 'auto_stories'
    },
    {name: 'Jardinage', description: 'Production bio garantie 🍅', icon: 'yard'}

  ];

  selectedLoisir: any = null;

  expandLoisir(loisir: any) {
    this.selectedLoisir = this.selectedLoisir === loisir ? null : loisir;
  }


}
