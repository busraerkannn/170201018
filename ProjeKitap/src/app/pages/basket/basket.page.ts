import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  kitaplar: Observable<any[]>;

  constructor(private db: DatabaseService,private router:Router,private route: ActivatedRoute) {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
       this.kitaplar = this.db.getSepet();
      }
    });
  }

  ngOnInit() {
  }

}
