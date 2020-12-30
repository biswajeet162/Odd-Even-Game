import { Component, OnInit, EventEmitter, Output  } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

 
  @Output() num = new EventEmitter<number>();
  mynumber : number =0;

  interval: any;

  constructor() { }

  ngOnInit(): void {
  } 

  onStart(){
    this.interval=setInterval(
      ()=> this.num.emit(this.mynumber++)
      
      ,1000);
  }

  onPause(){
    clearInterval(this.interval);
  }



}
 