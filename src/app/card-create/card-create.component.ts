import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardsService } from '../cards.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Card } from '../cards.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {
  card: Card;
  private mode = 'create';
  private cardId: string;
  isLoading = false;
  imageView: string;
  form: FormGroup;

  constructor(public cardsService: CardsService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      mainFeatures: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      rating: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      reviews: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      price: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      location: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      address: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      telephone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10)]
      }),
      openHours: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      parking: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      description: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      image: new FormControl(null)
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('cardId')) {
        this.mode = 'edit';
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
            price: cardData.price,
            location: cardData.location,
            address: cardData.address,
            telephone: cardData.telephone,
            openHours: cardData.openHours,
            parking: cardData.parking,
            description: cardData.description,
            imagePath: cardData.imagePath
          };
          this.form.setValue({
            _id: this.card._id,
            name: this.card.name,
            mainFeatures: this.card.mainFeatures,
            rating: this.card.rating,
            reviews: this.card.reviews,
            price: this.card.price,
            location: this.card.location,
            address: this.card.address,
            telephone: this.card.telephone,
            openHours: this.card.openHours,
            parking: this.card.parking,
            description: this.card.description,
            imagePath: this.card.imagePath
          });
        });
      } else {
        this.mode = 'create';
        this.cardId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageView = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSaveCard() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      // tslint:disable-next-line: max-line-length
      this.cardsService.addCard(
        this.form.value.name,
        this.form.value.mainFeatures,
        this.form.value.rating,
        this.form.value.reviews,
        this.form.value.price,
        this.form.value.location,
        this.form.value.address,
        this.form.value.telephone,
        this.form.value.openHours,
        this.form.value.parking,
        this.form.value.description,
        this.form.value.image
      );
      this.form.reset();
    }
    // else {
    //   this.cardsService.updatePost(
    //     this.postId,
    //     this.form.value.title,
    //     this.form.value.content,
    //     this.form.value.image
    //   );
    // }

  }
}
