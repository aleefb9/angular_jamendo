import { Component } from '@angular/core';
import { JamendoService } from '../jamendo.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})

export class CancionesComponent {
  canciones: any = [];
  constructor(public servicio: JamendoService){}

  listarCanciones(){
    
    let input: any = document.getElementById('canciones')
    let url = "https://api.jamendo.com/v3.0/albums/?client_id=2a8b17ae&artist=" + input.value;

    this.servicio.getMusica(url).subscribe(canciones => {
      this.canciones = canciones;
      console.log(canciones);
    });
    
  }
}
