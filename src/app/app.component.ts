import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NHK';
  youkoso = "ＮＨＫにようこそ！"

  ngOnInit(){

    console.log("もしもし、うぇえあぼおです")
  }
}
