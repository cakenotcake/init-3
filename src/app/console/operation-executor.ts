import { SafeHtml } from '@angular/platform-browser';

export interface OperationExecutor {
    execute(args: string[]): SafeHtml;
}
