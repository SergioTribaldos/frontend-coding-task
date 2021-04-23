import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

const DEFAULT_MSG_DURATION = 3000;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {
  }

  showErrorMessage(message: string, duration = DEFAULT_MSG_DURATION): void {
    this.snackBar.open(message, '', {duration, panelClass: ['error-snackbar']});
  }

  showSuccessMessage(message: string, duration = DEFAULT_MSG_DURATION): void {
    this.snackBar.open(message, '', {duration, panelClass: ['success-snackbar']});
  }
}
