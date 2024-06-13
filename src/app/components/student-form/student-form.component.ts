import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: Student = new Student();
  isEdit = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.studentService.getStudent(+id).subscribe(data => {
        this.student = data;
      });
    }
  }

  saveStudent(): void {
    if (this.isEdit) {
      this.studentService.updateStudent(this.student).subscribe(() => {
        this.snackBar.open('Aluno atualizado com sucesso!', '', { duration: 3000 });
        this.router.navigate(['/students']);
      });
    } else {
      this.studentService.createStudent(this.student).subscribe(() => {
        this.snackBar.open('Aluno criado com sucesso!', '', { duration: 3000 });
        this.router.navigate(['/students']);
      });
    }
  }
}
