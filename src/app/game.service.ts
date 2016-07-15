import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Game } from './game';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {
  private gamesUrl = 'http://www.cheapshark.com/api/1.0/deals';

  constructor(private http: Http) { }

  getGames(): Observable<Game[]> {
    return this.http.get(this.gamesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
