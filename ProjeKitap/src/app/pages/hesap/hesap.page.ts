import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Bilgi, DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-hesap',
  templateUrl: './hesap.page.html',
  styleUrls: ['./hesap.page.scss'],
})
export class HesapPage implements OnInit {

  value:string='';
  aktifKullanici: any=null;
  bilgi: Bilgi=null;
  constructor(private db: DatabaseService,public navCtrl: NavController,public route:ActivatedRoute) { 

  }

  ngOnInit() {
    this.aktifKullanici = this.db.getAktif();
    this.db.getBilgi(this.aktifKullanici).then(data => {
      this.bilgi=data;
    });
    
  }

}
