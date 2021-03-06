import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Card } from './cards.model';
import { environment } from '../environments/environment';

const BACKEND_URL = environment.apiUrl + '/cards';

@Injectable({ providedIn: 'root' })
export class CardsService {
  private cards: Card[] = [];
  private cardsUpdated = new Subject<Card[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getPosts() {
    this.http
      .get<{ message: string, cards: any }>(BACKEND_URL).pipe(map((cardData) => {
        return cardData.cards.map(card => {
          return {
            _id: card._id,
            name: card.name,
            mainFeatures: card.mainFeatures,
            rating: card.rating,
            reviews: card.reviews,
            imagePath: card.imagePath
          };
        });
      }))
      .subscribe((transformedCards) => {
        this.cards = transformedCards;
        this.cardsUpdated.next([...this.cards]);
      });
  }

  getCardUpdateListner() {
    return this.cardsUpdated.asObservable();
  }

  getCard(id: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<{ _id: string, name: string, mainFeatures: string, rating: string, reviews: string, imagePath: string }>(BACKEND_URL + '/' + id);
  }

  addCard(name: string, mainFeatures: string, rating: string, reviews: string, image: File) {

    const cardData = new FormData();
    cardData.append('name', name);
    cardData.append('mainFeatures', mainFeatures.toString());
    cardData.append('rating', rating);
    cardData.append('reviews', reviews);
    cardData.append('image', image, name);

    this.http
      .post<{ message: string, card: Card }>(BACKEND_URL, cardData)
      .subscribe((responseData) => {
        const card: Card = {
          _id: responseData.card._id,
          name,
          mainFeatures,
          rating,
          reviews,
          imagePath: responseData.card.imagePath
        };
        this.cards.push(card);
        this.cardsUpdated.next([...this.cards]);
        this.router.navigate(['/']);
      });
  }

  updatePost(id: string, title: string, content: string, image: File | string) {
    // let postData: Post | FormData;
    // if (typeof (image) === 'object') {
    //   postData = new FormData();
    //   postData.append('id', id);
    //   postData.append('title', title);
    //   postData.append('content', content);
    //   postData.append('image', image, title);

    // } else {
    //   postData = {
    //     id,
    //     title,
    //     content,
    //     imagePath: image
    //   };
    // }

    // this.http.put(BACKEND_URL + '/' + id, postData)
    //   .subscribe(response => {
    //     const updatedPosts = [...this.posts];
    //     const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
    //     const post: Post = {
    //       id,
    //       title,
    //       content,
    //       imagePath: 'response.imagePath'
    //     };
    //     updatedPosts[oldPostIndex] = post;
    //     this.posts = updatedPosts;
    //     this.postsUpdated.next([...this.posts]);
    //     this.router.navigate(['/']);
    //   });
  }

  deleteCard(cardId: string) {
    this.http.delete(BACKEND_URL + '/' + cardId)
      .subscribe(() => {
        const updatedCards = this.cards.filter(card => card._id !== cardId);
        this.cards = updatedCards;
        this.cardsUpdated.next([...this.cards]);
      });
  }
}
