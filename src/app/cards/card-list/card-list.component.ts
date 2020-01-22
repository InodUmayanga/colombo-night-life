import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Card } from '../../cards.model';
import { CardsService } from '../../cards.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnDestroy {

  cards: Card[] = [];
  private cardSub: Subscription;
  isLoading = false;
  action: string;
  mainFeatures: string[];
  constructor(public cardsService: CardsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.url[1]) {
      this.action = this.route.snapshot.url[1].path;
    }
    this.isLoading = true;
    this.cardsService.getPosts();
    this.cardSub = this.cardsService.getCardUpdateListner()
      .subscribe((cards: Card[]) => {
        this.isLoading = false;
        this.cards = cards;
        console.log('card list', this.cards);
        window.scrollTo(0, 0);

      });
  }

  onDelete(id: string) {
    this.cardsService.deleteCard(id);
  }

  onEdit(cardId: string) {
    setTimeout(() => {
      this.router.navigate(['admin/edit', cardId]);

    }, 250);
  }

  ngOnDestroy() {
    this.cardSub.unsubscribe();
  }

}
          // [routerLink]="['admin/edit', card._id]"

