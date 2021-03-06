import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './products/product-guard.service';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [BrowserModule, HttpClientModule, ProductModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
