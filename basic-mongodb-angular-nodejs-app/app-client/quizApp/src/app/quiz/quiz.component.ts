import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { QuizModel } from '../models/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  allQuizes: QuizModel[];
  constructor(private quizServices: QuizService) { }

  ngOnInit() {
    this.quizServices.quizesUpdated.subscribe(quizes => {
      this.allQuizes = quizes;
    });
    this.quizServices.get();
  }

}
