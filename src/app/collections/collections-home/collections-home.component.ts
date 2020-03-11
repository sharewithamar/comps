import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collections-home",
  templateUrl: "./collections-home.component.html",
  styleUrls: ["./collections-home.component.css"]
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: "James", age: 24, job: "designer", employed: true },
    { name: "Jill", age: 23, job: "builder", employed: false },
    { name: "Amar", age: 30, job: "decorator", employed: true }
  ];
  headers = [
    { key: "employed", label: "Has a job?" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "job", label: "Job" }
  ];
  constructor() {}

  ngOnInit(): void {}
}
