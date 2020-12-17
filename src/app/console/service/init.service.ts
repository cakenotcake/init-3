import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OperationExecutor } from '../operation-executor';

@Injectable({
  providedIn: 'root'
})
export class InitService implements OperationExecutor {

  constructor(private router: Router, private sanitizer: DomSanitizer) { }
  execute(args: string[]) {
    if(args.length != 1){
      return this.sanitizer.bypassSecurityTrustHtml('<div class="error">Error: Invalid arguments.</div>');
    }
    if(args[0] != '5'){
      return this.sanitizer.bypassSecurityTrustHtml('<div class="error">Error: Mode not supported. Did you mean <span class="accent">init 5</span>?</div>');
    }
    this.router.navigate(['']);
  }
}
