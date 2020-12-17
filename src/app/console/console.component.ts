import { Component, OnInit, ViewChild } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { OperationFactoryService, OPERATION_TYPES } from './operation-factory.service';
import { HistoryService } from './service/history.service';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  constructor(public theme: ThemeService, private operationFactory: OperationFactoryService, private history: HistoryService) { }

  ngOnInit(): void {
    this.scrollToBottom();
  }

  @ViewChild('consoleContainer', { static: false }) consoleContainer;

  processCommand(command: string) {
    const parts = command.split(' ');
    let output: SafeHtml;
    if(!!this.getOpType(parts[0])){
      const executor = this.operationFactory.getInstance(this.getOpType(parts[0]))
      output = executor.execute(parts.slice(1));
      
    }
    this.history.addElement({
      command: '→ ' + command,
      output
    })
    this.scrollToBottom();
  }

  getOpType(operationType: string): OPERATION_TYPES | undefined {
    for(let val of Object.keys(OPERATION_TYPES)) {
      
      if(operationType == OPERATION_TYPES[val]){
        return OPERATION_TYPES[val];
      }
      
    }
    return undefined;
  }

  scrollToBottom() {
    setTimeout(() => {
      const el: HTMLDivElement = this.consoleContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }, 50);
  }

}
