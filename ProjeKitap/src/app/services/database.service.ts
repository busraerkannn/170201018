
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { DeveloperPage } from '../pages/developer/developer.page';
import { DevelopersPage } from '../pages/developers/developers.page';
import { ActivatedRoute } from '@angular/router';
 
export interface Cat {
  id: number,
  name: string,
  img: string
}
export interface Bilgi {
  id: number,
  email:string,
  sifre:string,
  name: string,
}
export interface Kitaplar {
  id: number,
  name: string,
  creatorId: number,
  img: string,
  yazarAdi: string,
  noISBN:number,
  sayfaSayisi:number,
  dil: string,
  fiyat:number
}
 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private control: BehaviorSubject<boolean> = new BehaviorSubject(false);
  dv:DevelopersPage;
  aktifkullanici = new BehaviorSubject([]);
  kategoriler = new BehaviorSubject([]);
  products = new BehaviorSubject([]);
  kitaplar= new BehaviorSubject([]);
  kitapAdlari = new BehaviorSubject([]);
  anasayfaKitap = new BehaviorSubject([]);
  activatedRoute: any;
  alertController: any;
  loadingController: any;
  user:any=null;
  sepetKitap = new BehaviorSubject([]);
  constructor(private plt: Platform,private sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'projeKitap.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.dbReady.next(true);
            } else {
              this.seedDatabase();
            }
          });
      });
    });
  }
 
  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadKategori();
          this.loadAnaSayfa();
          this.dbReady.next(true);
          this.storage.set('database_filled', true);
        })
        .catch(e => console.error(e));
    });
  }
 
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
  async getLoginState(email,sifre) {
    this.loginKontrol(email,sifre);
    await this.delay(10000);
    return this.control.asObservable();
  }
 
  getKategori(): Observable<Cat[]> {
    return this.kategoriler.asObservable();
  }
  getKitaplar(id): Observable<any[]> {
    this.loadKitap(id);
    return this.kitaplar.asObservable();
  }
  getKitapAdlari2(value): Observable<any[]> {
    this.loadKitapAdi(value);
    return this.kitapAdlari.asObservable();
  }
  getAnasayfa(): Observable<any[]> {
    return this.anasayfaKitap.asObservable();
  }
  getSepet(): Observable<any[]> {
    this.loadSepet();
    return this.sepetKitap.asObservable();
  }
  getAktif(): Promise<any> {
    
    return this.user;
  }
loadKategori() {
    return this.database.executeSql('SELECT * FROM kategori', []).then(data => {
      let developers: Cat[] = [];
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          developers.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            img: data.rows.item(i).img
           });
        }
      }
      this.kategoriler.next(developers);
    });
  }

  loadKitap(id) {
    return this.database.executeSql('SELECT * FROM kitap WHERE creatorId = ?', [id]).then(data => {
      let kitap = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          kitap.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            creatorId: data.rows.item(i).creatorId,
            img: data.rows.item(i).img,
            yazarAdi: data.rows.item(i).yazarAdi,
            noISBN: data.rows.item(i).noISBN,
            sayfaSayisi: data.rows.item(i).sayfaSayisi,
            dil: data.rows.item(i).dil,
            fiyat: data.rows.item(i).fiyat
           });
        }
      }
      this.kitaplar.next(kitap);
    });
  }

  getKategoriID(id): Promise<Cat> {
    return this.database.executeSql('SELECT * FROM kategori WHERE id = ?', [id]).then(data => {
      return {
        id: data.rows.item(0).id,
        name: data.rows.item(0).name, 
        img: data.rows.item(0).img
      }
    });
  }
  getKitap(id): Promise<Kitaplar> {
    return this.database.executeSql('SELECT * FROM kitap WHERE id = ?', [id]).then(data => {
        return  {
        id: data.rows.item(0).id,
        name: data.rows.item(0).name, 
        creatorId: data.rows.item(0).creatorId,
        img: data.rows.item(0).img,
        yazarAdi: data.rows.item(0).yazarAdi,
        noISBN: data.rows.item(0).noISBN,
        sayfaSayisi: data.rows.item(0).sayfaSayisi,
        dil: data.rows.item(0).dil,
        fiyat: data.rows.item(0).fiyat
      }
  
    });
  }
 

 
  addKitap(name,kategori,img,yazar,no,sayfa,dil,fiyat) {
    let creator=kategori;
    let data = [name, creator,img,yazar,no,sayfa,dil,fiyat];
    return this.database.executeSql('INSERT INTO kitap (name, creatorId,img,yazarAdi,noISBN,sayfaSayisi,dil,fiyat) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', data).then(data => {
       this.loadKitap(creator);
       
    });
  }

  loadKitapAdi(value)
  {
    return this.database.executeSql('SELECT name,id FROM kitap WHERE name= ?', [value]).then(data => {
      let kitapAdi = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          kitapAdi.push({ 
            name: data.rows.item(i).name,
            id: data.rows.item(i).id,
           });
        }
      }
      this.kitapAdlari.next(kitapAdi);
    });
  }

  loadAnaSayfa()
  {
    return this.database.executeSql('SELECT name,id,fiyat,img FROM kitap', []).then(data => {
      let kitapAdi = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          kitapAdi.push({ 
            name: data.rows.item(i).name,
            id: data.rows.item(i).id,
            img:data.rows.item(i).img,
            fiyat: data.rows.item(i).fiyat,
           });
        }
      }
      this.anasayfaKitap.next(kitapAdi);
    });
  }

 loginKontrol(email,sifre) 
{
  let str:string=email;
  let tmp:string=sifre;
  return this.database.executeSql('SELECT * FROM kullanici', []).then(async data => {
    let dizi=[];
    if (data.rows.length > 0) {
      for (var i = 0; i < data.rows.length; i++) {
        let str2:string=data.rows.item(i).email;
        let str3:string=data.rows.item(i).sifre;
        
        let index:number=str.localeCompare(str2);
        let index2:number=tmp.localeCompare(str3);
        if(index==0 && index2==0)
        {
          dizi.push({
            user: data.rows.item(i).email
          });
          this.control.next(true);
          this.aktifkullanici.next(dizi);
          this.user=data.rows.item(i).email;
          
        }
        else{
          this.control.next(false);
        }
    }
  }

  });
}

getBilgi(item): Promise<Bilgi>
{
  return this.database.executeSql('SELECT * FROM kullanici WHERE email = ?', [item]).then(data => {
    return {
      id: data.rows.item(0).id,
      email: data.rows.item(0).email,
      sifre: data.rows.item(0).sifre,
      name: data.rows.item(0).userName, 
    }
  });
}
loadSepet()
  {
    return this.database.executeSql('SELECT kitap.name, kitap.id,kitap.img,kitap.yazarAdi, kitap.fiyat FROM kitap JOIN sepet ON kitap.id = sepet.KitapId', []).then(data => {
      let kitapAdi = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          kitapAdi.push({ 
            name: data.rows.item(i).name,
            id: data.rows.item(i).id,
            yazarAdi: data.rows.item(i).yazarAdi,
            img:data.rows.item(i).img,
            fiyat: data.rows.item(i).fiyat,
           });
        }
      }
      this.sepetKitap.next(kitapAdi);
    });
  }
addSepet(userEmail,kitapId)
{
     let data = [userEmail,kitapId];
     return this.database.executeSql('INSERT INTO sepet (userEmail,kitapId) VALUES (?, ?)', data).then(data => {
        this.loadSepet();   
     });
}

delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
}