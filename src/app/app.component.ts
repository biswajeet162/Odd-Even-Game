import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 0;

  odd:number;
  even:number;
  curr_num: String;

  onStart(mynum : number){
    this.title=mynum;

    if(mynum % 2 === 0){
      this.even=mynum;
      this.curr_num="Evens";
    }
    else{
      this.odd=mynum;
      this.curr_num="Odds";
    }
   
   
  }

}
