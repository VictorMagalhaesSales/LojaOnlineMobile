import { CartService } from './../services/domain/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { CategoriaService } from './../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptors/error.interceptor';
import { AuthService } from './../services/auth.service';
import { AuthInterceptorProvider } from './../interceptors/auth.interceptor';
import { ClienteService } from './../services/domain/cliente.service';
import { ProdutoService } from './../services/domain/produto.service';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoriaService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    ClienteService,
    ProdutoService,
    CartService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
