import { Transferencia } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent{
  public historico: any[]

  constructor(private service: TransferenciaService){}

  ngOnInit(){
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.historico = transferencias
    })
  }
}
