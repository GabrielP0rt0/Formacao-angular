import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent{
  historico: any[]

  constructor(private service: TransferenciaService){}

  ngOnInit(){
    this.historico = this.service.transferencias
  }
}
