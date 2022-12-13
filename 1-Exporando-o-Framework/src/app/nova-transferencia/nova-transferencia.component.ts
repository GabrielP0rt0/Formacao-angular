import { TransferenciaService } from '../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor : number = null
  destino : number = null

  constructor(private service: TransferenciaService, private router: Router){
  }

  transferir(){

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}

    if (valorEmitir.valor != null || valorEmitir.destino != null){
      this.service.adicionar(valorEmitir).subscribe(resultado => {
        this.limparCampos()
        this.router.navigateByUrl('extrato')
      },
      (error) => console.log(error))
    } else {
      alert("insira um valor válido")
    }

  }

  limparCampos(){
    this.valor = null
    this.destino = null
  }
}
