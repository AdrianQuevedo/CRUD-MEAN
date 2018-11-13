import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// declaro una variable m de materialize
declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService],
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  addUser(form: NgForm) {
    if (form.value._id) {
      this.userService.putUser(form.value).subscribe(
        res => {
          this.resetForm(form);
        M.toast({html: 'Usuario actualizado satisfactoriamente.', classes: 'rounded', });
        this.getUser();
        }
      );
    } else {
    this.userService.postUser(form.value).subscribe(
      // veo la respuesta del servidor
      res => {
        this.resetForm(form);
        M.toast({html: 'Usuario guarda satisfactoriamente.'});
        this.getUser();
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      // reseteo el formulario
      this.userService.selectedUser = new User();
    }
  }

  getUser() {
    this.userService.getUsers().subscribe(
      res => {
        this.userService.users = res as User[];
        console.log(res);
      });
  }

  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string) {
    if (confirm('Esta seguro que desea eliminar este usuario')) {
      this.userService.deleteUser(_id).subscribe(
        res => {
          console.log(res);
          M.toast({html: 'Usuario eliminado satisfactoriamente.'});
          this.getUser();
        });
    }
  }

}
