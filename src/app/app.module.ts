import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
  ],
})
export class AppModule { }
