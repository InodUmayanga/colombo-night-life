import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Card } from '../cards.model';
import { CardsService } from '../cards.service';




@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  private cardId: string;
  isLoading = false;
  card: Card;
  form: FormGroup;
  featuresArray: string[];



  // latitude = 51.678418;
  // longitude = 7.809007;

  constructor(public cardsService: CardsService, public route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('cardId')) {
        this.cardId = paramMap.get('cardId');

        this.isLoading = true;

        this.cardsService.getCard(this.cardId).subscribe(cardData => {
          this.isLoading = false;
          this.card = {
            _id: cardData._id,
            name: cardData.name,
            mainFeatures: cardData.mainFeatures,
            rating: cardData.rating,
            reviews: cardData.reviews,
            imagePath: cardData.imagePath
          };
          this.featuresArray = this.card.mainFeatures.split(',');
          console.log(this.card.name);
        });

      }
    });
  }
}
