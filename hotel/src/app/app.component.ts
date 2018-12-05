import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "hotel";

  // dogs = new Array<Dog>();
  constructor() {
    // this.dogs.push(new Dog("Karol", 4), new Dog("Szymon", 5));
  }
}
//  export class Dog {
//   constructor(public name: string, public age: number) {}
// }
