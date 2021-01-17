import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  user:string='';
  constructor( public storage: Storage,private db: DatabaseService,private fb: FormBuilder,private alertController: AlertController,private router: Router,private loadingController: LoadingController) {
    this.loginForm = this.fb.group({
      email: ['ornek1@gmail.com', [Validators.required, Validators.email]],
      password: ['-456789', [Validators.required, Validators.minLength(6)]],
    });
   }

  ngOnInit() {

  }

  async login() {
     const loading = await this.loadingController.create();
     await loading.present();
    let str=this.loginForm.get('email').value;
    let str2=this.loginForm.get('password').value;
    let st:string= str; 
    await this.delay(3000);
    console.log(str);
    (await this.db.getLoginState(str,str2)).subscribe(async rdy => {
      await this.delay(12000);
      if (rdy) {
        await loading.dismiss(); 
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
      }
      else{
        await loading.dismiss(); 
          const alert = await this.alertController.create({
                  header: 'Login failed',
                  buttons: ['OK'],
                });
                await alert.present();
      }
      });
     
  }
  
   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  get email() {
    return this.loginForm.get('email');
  }
  
  get password() {
    return this.loginForm.get('password');
  }
}

