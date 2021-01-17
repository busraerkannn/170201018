import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-arama',
  templateUrl: './arama.page.html',
  styleUrls: ['./arama.page.scss'],
})

export class AramaPage implements OnInit {
  kitapAdlari: Observable<any[]>;
  public items: Array<{ title: string}> = [];
  public items2: Array<{ title: string; id: Number}> = [];
  public allItems: Array<{ title: string}> = [];
  constructor(private db: DatabaseService,private router:Router,private route: ActivatedRoute) {
   
    }
      

  ionChange(event)
  {
      this.db.getDatabaseState().subscribe(rdy => {
        if (rdy) {
         
          this.kitapAdlari = this.db.getKitapAdlari2(event.detail.value);
        }
      });
  }


  ngOnInit() {
  }

  getList()
  {
    
  }


}
