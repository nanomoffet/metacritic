import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';
import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [GameService]
})
export class AppComponent implements OnInit {
  title = 'MetaCritic Rankings';
  games: Game[];
  mode = 'Observable';

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
