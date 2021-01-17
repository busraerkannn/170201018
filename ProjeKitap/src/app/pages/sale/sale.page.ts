import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService, Cat } from 'src/app/services/database.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
   
  kategoriler: Cat[] = [];
 
  products: Observable<any[]>;
  inputKitapAdi: String ="";
  inputYazarAdi: String ="";
  inputISBN: String ="";
  inputURL: String ="";
  inputFiyat: String ="";
  inputSayfaSayisi: String ="";
  getSelectedValue: Number;
  getSelectedDilAdi:String="";
  getDilAdi:String="";
  product={};
  constructor(private db: DatabaseService) { }

  kategoriData:Kategori[]=[
    {'id':1,'kategoriAdi':'Edebiyat'},
    {'id':2,'kategoriAdi':'Bilim'},
    {'id':3,'kategoriAdi':'Tarih'},
    {'id':4,'kategoriAdi':'Çocuk ve Gençlik'},
    {'id':5,'kategoriAdi':'Çizgi Roman'},
    {'id':6,'kategoriAdi':'Sanat'},
    {'id':7,'kategoriAdi':'Din Tasavvuf'},
    {'id':8,'kategoriAdi':'Felsefe'},
    {'id':9,'kategoriAdi':'Hobi'},
    {'id':10,'kategoriAdi':'Ders ve Sınav Kitapları'},
  ]
  dilData:Dil[]=[
    {'id':1,'dilAdi':'Türkçe'},
    {'id':2,'dilAdi':'İngilizce'},
    {'id':3,'dilAdi':'Almanca'},
    {'id':4,'dilAdi':'Fransızca'},
    {'id':5,'dilAdi':'İtalyanca'},
    {'id':6,'dilAdi':'Diğer'},
  ]
  ngOnInit() {
  
  }
 
  addKitap() {
    this.db.addKitap(this.inputKitapAdi,this.getSelectedValue,this.inputURL, this.inputYazarAdi,Number(this.inputISBN),Number(this.inputSayfaSayisi),this.getDilAdi,Number(this.inputFiyat))
    .then(_ => {
      this.product = {};
    });
  }
  getSelectedKategori(){
    let term=this.kategoriData.filter(person => person.id ==Number(this.getSelectedValue));
  }
  getSelectedDil(){
    let term=this.dilData.filter(person => person.id ==Number(this.getSelectedDilAdi));
    this.getDilAdi=term[0].dilAdi;
  }
}
export class Kategori{
  id:Number;
  kategoriAdi:String;
}

export class Dil{
  id:Number;
  dilAdi:String;
}