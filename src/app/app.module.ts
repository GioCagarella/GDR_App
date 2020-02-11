import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LexArcanaComponent } from './home/lex-arcana/lex-arcana.component';
import { TheWitcherComponent } from './home/the-witcher/the-witcher.component';

const routes: Routes = [
  {
      path: 'home/lexarcana',
      pathMatch: 'full',
      component: LexArcanaComponent
  },
  {
    path: 'home/thewitcher',
    pathMatch: 'full',
    component: TheWitcherComponent
  }


];

@NgModule({
  declarations: [AppComponent, LexArcanaComponent, TheWitcherComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
