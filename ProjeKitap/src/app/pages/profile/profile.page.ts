import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
 
  constructor(public storage: Storage,public log:LoginPage ,public activatedRoute:ActivatedRoute,private router: Router, private toast: ToastController) { 
    
  }

  ngOnInit() {
   
  }

}
