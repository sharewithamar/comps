import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.append(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
    // document.body.removeChild(this.el.nativeElement);
  }
}
