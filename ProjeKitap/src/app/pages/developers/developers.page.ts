import { DatabaseService, Cat } from '../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {
 
  kategoriler: Cat[] = [];
 
  products: Observable<any[]>;
 
  developer = {};
  product = {};
  kitap={};
  idNumber: Number;
  navCtrl:NavController
  constructor(private db: DatabaseService,private router:Router, ) { }
 
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getKategori().subscribe(devs => {
          this.kategoriler = devs;
          
        })
      }
    });
  }
 


  getId(id)
  {
    this.idNumber=id;
  }

 
  
 

}