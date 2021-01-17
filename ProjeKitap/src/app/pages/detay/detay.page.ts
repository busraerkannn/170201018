import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DatabaseService, Kitaplar } from 'src/app/services/database.service';
@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  kitap: Kitaplar= null;
  aktifKullanici: any=null;

  constructor(private route: ActivatedRoute, private db: DatabaseService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let devId = params.get('id');
 
      this.db.getKitap(devId).then(data => {
        this.kitap = data;
        
      });
    });
    this.aktifKullanici = this.db.getAktif();
  }
  addSepet()
  {
    this.db.addSepet(this.aktifKullanici,this.kitap.id);
  }
}
