import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  kitaplar: Observable<any[]>;

  constructor(private db: DatabaseService,private router:Router,private route: ActivatedRoute) {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
       this.kitaplar = this.db.getAnasayfa();
      }
    });
  }


  ngOnInit() {
  }

}
