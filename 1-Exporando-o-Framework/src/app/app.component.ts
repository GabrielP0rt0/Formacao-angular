import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1-Exporando-o-Framework';

  transferencia : any

  transferir($event){
    this.transferencia = $event
  }

}
