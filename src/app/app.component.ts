import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';
import './rxjs-operators';

import { OrderByPipe } from './order-by.pipe';
import { GroupByPipe } from './group-by.pipe';
import { LessThanPipe } from './less-than.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [GameService],
  pipes: [OrderByPipe, GroupByPipe, LessThanPipe]
})
export class AppComponent implements OnInit {
  title = 'MetaCritic Rankings';
  games: Game[];


  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService
      .getGames()
      .subscribe (
        games => this.games = games
      );
  }



}
