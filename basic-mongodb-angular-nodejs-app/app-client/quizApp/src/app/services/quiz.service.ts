import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { QuizModel } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizesUpdated = new Subject<QuizModel[]>();
  port = 3023;
  constructor(private http: HttpClient) { }


  get() {
    this.http.get<QuizModel>(`http://localhost:${this.port}/quiz`).subscribe(res => {
    console.log(res);
    console.log(23);
    })
  }

  getById(quizId) {
    this.http.get(`http://localhost:${this.port}/quiz/${quizId}`).subscribe(res => {
    console.log(res);
    })
  }
}
