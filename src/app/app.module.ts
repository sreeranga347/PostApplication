import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostService } from './posts/post.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { MatDialogModule } from '@angular/material/dialog';
import { AlertCustomDialogComponent } from './customeDialog/alert-custom-dialog/alert-custom-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './mainPage/home/home.component';
import { HeaderComponent } from './header/header.component'
import { TokenInterceptor } from './auth/token.interceptor';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'






@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,     
    AlertCustomDialogComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule
    
    
    
  ],
  providers: [PostService,CdkColumnDef,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
