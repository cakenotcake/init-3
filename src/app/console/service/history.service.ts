import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

export interface HistoryElement {
  command: string;
  output: SafeHtml;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private historyElements: Array<HistoryElement>;
  private historyElementsBehaviourSubject: BehaviorSubject<Array<HistoryElement>>;
  public elements: Observable<Array<HistoryElement>>;

  constructor() {
    this.historyElements = []
    this.historyElementsBehaviourSubject = new BehaviorSubject(this.historyElements);
    this.elements = this.historyElementsBehaviourSubject.asObservable();
  }

  addElement(element: HistoryElement) {
    this.historyElements.push(element);
    this.historyElementsBehaviourSubject.next(this.historyElements);
  }
}
