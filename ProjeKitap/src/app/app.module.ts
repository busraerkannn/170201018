import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,IonicStorageModule.forRoot(),ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    SQLitePorter,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
