import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from './cards';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
  card:Cards []=[]
  card_url = 'http://127.0.0.1:8000/flashcards/';

  constructor(public cardHttp:HttpClient) { }
  cardsFunction():Observable <any>{
    return this.cardHttp.get(this.card_url)
  }

}
