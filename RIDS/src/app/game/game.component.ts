import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {GameService} from '../game.service';
import {AuthService} from '../auth.service'

import * as p5 from 'p5';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  public cities = [];
  public players = [];
  public map;
  @ViewChild('file') file;
  profileJson: object = null;
  private p5;
  constructor(private _gameService: GameService, public auth: AuthService ) { }


  ngOnInit() {

      this.auth.userProfile$.subscribe(
        profile => {this.profileJson = profile}
      );
  
    this._gameService.getPlayers('this.profileJson.sub.substr(6)').subscribe(data => this.players = data)

  }

  showMap() {
    this.file.nativeElement.style.display = 'none';
  }

  ngAfterViewInit() {
    this.map = document.getElementsByClassName('map')[0]
  }
}




