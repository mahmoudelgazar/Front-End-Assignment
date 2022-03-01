import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPostComponent>,
    @Inject(MAT_DIALOG_DATA) { id, title, body }: any
  ) {
    this.title = title;

    this.form = fb.group({
      id: [id],
      title: [title, Validators.required],
      body: [body, Validators.required],
    });
  }

  ngOnInit() {}

  save() {
    const { value, valid } = this.form;
    if (valid) {
      this.dialogRef.close(value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
