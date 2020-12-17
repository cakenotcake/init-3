import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  text = '';
  @Output() request: EventEmitter<string>;

  constructor(public theme: ThemeService) {
    this.request = new EventEmitter();
  }

  ngOnInit(): void {
  }

  @HostListener('body:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
    if (event.code == 'Backspace') {
      event.preventDefault();
      this.text = this.text.slice(0, -1);
    } else if(event.code == 'Enter') {
      event.preventDefault();
      this.request.emit(this.text);
      this.text = '';
    } else if (/^[a-zA-Z0-9-_ /.]$/.test(event.key)) {
      event.preventDefault();
      if (this.text.length < 70)
        this.text += event.key;
    }
  }

}
