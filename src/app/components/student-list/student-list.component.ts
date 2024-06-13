import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.studentService.deleteStudent(id).subscribe(() => {
          this.students = this.students.filter(s => s.id !== id);
          this.snackBar.open('Aluno excluído com sucesso!', '', { duration: 3000 });
        });
      }
    });
  }
}
