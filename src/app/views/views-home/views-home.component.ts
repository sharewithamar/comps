import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-views-home",
  templateUrl: "./views-home.component.html",
  styleUrls: ["./views-home.component.css"]
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 20, label: "age" },
    { value: 10000, label: "Runs" },
    { value: 45, label: "Avg" }
  ];
  constructor() {}

  ngOnInit(): void {}
}
