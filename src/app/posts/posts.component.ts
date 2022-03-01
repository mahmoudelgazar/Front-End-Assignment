import { AddPostComponent } from "../shared/dialogs/add-post/add-post.component";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DataProvider } from "../shared/services/data";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DialogService } from "../shared/services/dialog.service";
import { MatDialogConfig, MatDialog } from "@angular/material";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ["title", "body", "id"];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private dataProvider: DataProvider,
    private dialog: DialogService,
    private MatDialog: MatDialog
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.dataProvider.getAll<any>(environment.apiUrl + "/posts").subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource<PeriodicElement>(res);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  editPost(postId) {
    let post = this.dataSource.data.filter((p) => p.id == postId);
    console.log(post);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: postId,
      title: post[0].title,
      body: post[0].body,
    };
    const dialogRef = this.MatDialog.open(AddPostComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        console.log(val);
        post[0].title = val.title;
        post[0].body = val.body;
      }
    });
  }
  addpost() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      title: "",
      body: "",
    };

    const dialogRef = this.MatDialog.open(AddPostComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        this.dataSource.data.push(val);
        this.dataSource._updateChangeSubscription();
      }
    });
  }
  deletePost(post) {
    this.dialog
      .confirmDialog({
        title: "Are you sure?",
        message: "Are you sure you want to do this?",
        confirmCaption: "Yes",
        cancelCaption: "No",
      })
      .subscribe((yes) => {
        if (yes) {
          this.dataSource.data = this.dataSource.data.filter(
            (p) => p.id !== post
          );
        }
      });
  }
}
export interface PeriodicElement {
  userId: number;
  title: string;
  body: string;
}
