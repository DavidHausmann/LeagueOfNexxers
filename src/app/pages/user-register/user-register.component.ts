import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { ToastrService } from 'ngx-toastr';
import { IRegisterPayload } from 'src/app/common/models/common.model';

import { ServicesService } from 'src/app/common/services/service/services.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  userRegisterFormGroup: FormGroup;
  hidePassword = true;
  loading = false;
  constructor(
    private service: ServicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.userRegisterFormGroup = this.formBuilder.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      userName: ['', Validators.required],
      birthDate: ['',  [Validators.required, this.checkFormatDate]],
    });
  }

  createUser(): void {
    if (this.userRegisterFormGroup.valid) {
      this.loading = true;
      this.service.postRegister(this.getRegisterPayload()).subscribe(
        success => {
          this.router.navigateByUrl('login');
          this.toastr.success(success.message);
        },
        error => {
          this.toastr.error(error.error?.message);
        }
      ).add(() => this.loading = false);
    }
  }

  checkFormatDate(input: FormControl): { invalidDate: true } | null {
    return moment(input.value, 'DDMMYYYY').isValid() ? null : { invalidDate: true };
  }

  getRegisterPayload(): IRegisterPayload {
    return {
      name: this.userRegisterFormGroup.value.userName,
      birthDate: moment(this.userRegisterFormGroup.value.birthDate, 'DDMMYYYY').format('YYYY-MM-DD'),
      username: this.userRegisterFormGroup.value.user,
      password: this.userRegisterFormGroup.value.password,
    }
  }

  backToLogin(): void {
    this.router.navigateByUrl('login');
  }
  
}
