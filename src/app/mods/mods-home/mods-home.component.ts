import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mods-home",
  templateUrl: "./mods-home.component.html",
  styleUrls: ["./mods-home.component.css"]
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: "Amar", content: "watching Kurulus osman" },
    { title: "Sowra", content: "wathcing pataka" },
    { title: "Anira", content: "Playing with Grandma" }
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
