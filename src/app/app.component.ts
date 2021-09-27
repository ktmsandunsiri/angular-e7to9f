import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Kastane Dropdown demo';

  selectedQuestionType : number = 1;

  questionTypes = [
    {id : 0, name : 'Single Choice'},
    {id : 1, name : 'Multiple Choice'},
  ]

  changeQuestionTypeTemp = (type : number) => {
    console.log(type);
     this.selectedQuestionType = type;
  }

}
