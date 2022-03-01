import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { PostsComponent } from "./posts/posts.component";
import { HttpClientModule } from "@angular/common/http";
import { DataProvider } from "./shared/services/data";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { ConfirmComponent } from "./shared/dialogs/confirm/confirm.component";
import { AddPostComponent } from "./shared/dialogs/add-post/add-post.component";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ConfirmComponent, AddPostComponent],
  providers: [DataProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
