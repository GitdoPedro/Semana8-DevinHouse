import { Component } from '@angular/core';
import { NOTIFICACOES } from './constants/notificacoes';


@Component({
  selector: 'ntap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'estrutura-projeto';
  
  notificacoes = NOTIFICACOES;

}

