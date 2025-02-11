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
      name: 'Volley-Ball', description: 'Pratique en compétitions régionales / nationales depuis 2010.<br>' +
        'Capitanat, entraineur et bénévole.<br>' +
        '<strong>Poste :</strong> Réceptionneur-Attaquant'
      , icon: 'sports_volleyball'
    },
    {
      name: 'Randonnée', description: 'Randonnées en bivouac sur plusieurs jours, GR.<br>' +
        '<strong>Top rando: </strong>Mont Humboldt - Nouvelle Calédonie', icon: 'hiking'
    },
    {name: 'Cuisine', description: '<strong>Plat favori: </strong>Les lasagnes !', icon: 'cookie'},
    {
      name: 'Jeux de société',
      description: 'Grand fan de jeux de plateau et de TCG, notamment Magic The Gathering.<br>' +
        '<strong>Jeux favoris :</strong> Wingspan, Terraforming Mars, Seasons '
      ,
      icon: 'space_dashboard'
    },
    {
      name: 'Lecture',
      description: 'Passionné de romans de science-fiction et de fantasy, Tolkien, Herbert et Asimov comptent parmi mes auteurs favoris.',
      icon: 'auto_stories'
    },
    {name: 'Jardinage', description: 'Production bio garantie', icon: 'yard'}

  ];

  selectedLoisir: any = null;

  expandLoisir(loisir: any) {
    this.selectedLoisir = this.selectedLoisir === loisir ? null : loisir;
  }


}
