import { Component, OnInit } from '@angular/core';
import { Cards } from '../cards';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
card:Cards[] =[]
  constructor(public cardService:CardsService) { }
  fetchCards(){
    this.cardService.cardsFunction().subscribe(data => {
      this.card = data;
      console.log(this.card)
      return (this.card);

    })
  }

  ngOnInit(): void {
    this.fetchCards()
  }

}
