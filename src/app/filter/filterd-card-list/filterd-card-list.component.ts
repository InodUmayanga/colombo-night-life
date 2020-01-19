import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Card } from '../../cards.model';
import { CardsService } from '../../cards.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-filterd-card-list',
  templateUrl: './filterd-card-list.component.html',
  styleUrls: ['./filterd-card-list.component.css']
})
export class FilterdCardListComponent implements OnInit, OnDestroy {

  cards: Card[] = [];
  private cardSub: Subscription;
  isLoading = false;
  action: string;
  mainFeatures: string[];
  filterAction: string;
  constructor(public cardsService: CardsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.isLoading = true;
      this.filterAction = paramMap.get('filterAction');
      this.cardsService.getFilteredCards(this.filterAction);
    });

    this.cardSub = this.cardsService.getCardUpdateListner()
      .subscribe((cards: Card[]) => {
        this.isLoading = false;
        this.cards = cards;
        // console.log('card list', this.cards);
        window.scrollTo(0, 0);
      });
  }

  ngOnDestroy() {
    this.cardSub.unsubscribe();
  }

}


