import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { DetailComponent } from './detail/detail.component';
import { NamefilterPipe } from './pipes/namefilter.pipe';
import { LoggingService } from './services/logging.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    DetailComponent,
    NamefilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'directory', component: DirectoryComponent },
      { path: 'detail/:ninjaId', component: DetailComponent }
    ])
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
