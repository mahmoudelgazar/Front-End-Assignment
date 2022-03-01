import { PostsComponent } from "./posts/posts.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router

const routes: Routes = [
  { path: "posts", component: PostsComponent },
  { path: "", redirectTo: "/posts", pathMatch: "full" }, // redirect to `posts`
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
