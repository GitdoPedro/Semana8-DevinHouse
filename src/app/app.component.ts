import { Component } from '@angular/core';

@Component({
  selector: 'ntap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'estrutura-projeto';

  notificacoes = [
    {
      titulo : 'Instagram',
      subtitulo: 'Instagram é uma rede social visual, criativa e interativa. Possibilita o compartilhamento de imagens e vídeos de curta duração diretamente do aplicativo de celular. Nele, também é possível seguir usuários, curtir, comentar e compartilhar as publicações.',
      data : 'há 2 minutos'
    },

    {
      titulo : 'Uber',
      subtitulo: 'O Uber é um serviço de carro sob demanda que permite solicitar os serviços de um motorista particular por meio de um aplicativo em execução no iPhone e Android.',
      data : 'há 5 minutos'
    },

    {
      titulo : 'Youtube',
      subtitulo: 'YouTube é uma plataforma online que permite a criação e o consumo de conteúdos em vídeo via streaming.',
      data : 'há 30 minutos'
    }
  ]

}

