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

  items = [
    {
      image: "assets/images/couch.jpeg",
      title: "couch",
      description: "Fantastic Couch"
    },
    {
      image: "assets/images/dresser.jpeg",
      title: "Dresser",
      description: "Fantastic Dresser"
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
