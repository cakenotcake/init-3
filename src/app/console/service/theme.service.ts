import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { OperationExecutor } from '../operation-executor';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OperationExecutor {

  readonly availableThemes = [
    'monochrome',
    'solarized'
  ]

  private themeBehaviourSubject: BehaviorSubject<string>;
  public theme: Observable<string>;

  constructor(private sanitizer: DomSanitizer) {
    this.themeBehaviourSubject = new BehaviorSubject('solarized');
    this.theme = this.themeBehaviourSubject.asObservable();
  }
  execute(args: string[]) {
    if(args.length > 0){
      return this.setTheme(args[0])
    } else {
      return this.sanitizer.bypassSecurityTrustHtml('<div class="error">Error: Inavlid arguments</div>');
    }
  }

  setTheme(themeName: string) {
    if(this.availableThemes.includes(themeName)){
      this.themeBehaviourSubject.next(themeName);
    } else {
      return `<div class="error">Error: Theme name not recognized. Available themes: ${this.availableThemes.join(', ')}</div>`
    }
  }
}
