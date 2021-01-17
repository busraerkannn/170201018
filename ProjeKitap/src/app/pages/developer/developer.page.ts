import { DatabaseService, Cat, Kitaplar} from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DevelopersPage } from '../developers/developers.page';
 
@Component({
  selector: 'app-developer',
  templateUrl: './developer.page.html',
  styleUrls: ['./developer.page.scss'],
})
export class DeveloperPage implements OnInit {
  kategori: Cat = null;
  // product: Pro[]=[];
  // products: Observable<Pro[]>;
  kitaplar2: Kitaplar[] = [];
  product2: Kitaplar = null;
  kitaplar: Observable<any[]>;
  
  constructor(private route: ActivatedRoute, private db: DatabaseService, private router: Router, private toast: ToastController) { }
 
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.route.paramMap.subscribe(params => {
          let devId = params.get('id');
        this.kitaplar = this.db.getKitaplar(devId);
      });
    this.route.paramMap.subscribe(params => {
      let devId = params.get('id');
 
      this.db.getKategoriID(devId).then(data => {
        this.kategori = data;
      });
    });

    

    
    
      }
  });


  }
 
  
  }
