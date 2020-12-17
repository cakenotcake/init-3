import { Injectable } from '@angular/core';
import { OperationExecutor } from './operation-executor';
import { ThemeService } from './service/theme.service';
import { InitService } from './service/init.service';

@Injectable({
  providedIn: 'root'
})
export class OperationFactoryService {

  constructor(private themeService: ThemeService, private initService: InitService) { }

  getInstance(operationType: OPERATION_TYPES): OperationExecutor {
    let executor: OperationExecutor;
    switch (operationType) {
      case OPERATION_TYPES.SET_THEME:
        executor = this.themeService;
        break;
      case OPERATION_TYPES.INIT:
        executor = this.initService
        break;
    }

    return executor;
  }

}

export enum OPERATION_TYPES {
  SET_THEME = 'set-theme',
  INIT = 'init'
}
