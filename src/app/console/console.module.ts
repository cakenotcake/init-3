import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { InputComponent } from './input/input.component';
import { TraceComponent } from './trace/trace.component';


@NgModule({
  declarations: [ConsoleComponent, InputComponent, TraceComponent],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
