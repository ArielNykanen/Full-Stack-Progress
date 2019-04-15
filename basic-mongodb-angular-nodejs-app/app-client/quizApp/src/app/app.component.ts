import { Component, OnInit } from '@angular/core';
import { QuizService } from './services/quiz.service';
import { QuizModel } from './models/quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'quizApp';
  allQuizes: QuizModel[];

  constructor(private quizServices: QuizService) { 
    this.allQuizes = [];
  }

  ngOnInit() {
    this.quizServices.quizesUpdated.subscribe(quizes => {
      this.allQuizes = quizes;
    });
    this.quizServices.get();
    
  }
}
