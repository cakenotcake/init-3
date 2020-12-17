import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HistoryService } from '../service/history.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TraceComponent implements OnInit {

  constructor(public history: HistoryService, public theme: ThemeService) { }

  ngOnInit(): void {
  }

}
