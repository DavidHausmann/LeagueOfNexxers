import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/common/services/service/services.service';
import { StorageService } from 'src/app/common/services/storage/storage.service';

export interface ILoginPayload {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  hidePassword = true;
  loading = false;
  constructor(
    private service: ServicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: StorageService,
    private toastr: ToastrService,
  ) {
    this.loginFormGroup = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.loading = true;
    this.service.postLogin(this.getLoginPayload()).subscribe(
      userData => {
        this.storage.currentUser = userData.token;
        this.router.navigateByUrl('listar-campeoes');
      },
      error => {
        this.toastr.error(error.error?.message)
      }
    ).add(() => this.loading = false);
  }

  getLoginPayload(): ILoginPayload {
    return {
      username: this.loginFormGroup.value.user,
      password: this.loginFormGroup.value.password,
    }
  }

  navigateToRegister(): void {
    this.router.navigateByUrl('registrar-usuario');
  }
}
