import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../shared/services/admin/client.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {
  public clientList: ClientInfo = {
    description: "",
    name: "",
    id: ""
  } ;
  private _clientId: string;
  constructor(private _clientService: ClientService, private _route:ActivatedRoute) { 
    this._route.params.subscribe((res:any) => {
      this._clientId = res.clientId
    });
  }

  ngOnInit() {
    this.loadClientInfo();
  }

  public loadClientInfo() {
    this._route.snapshot.queryParamMap.get('id')
    this._clientService.getClientDetails().subscribe((data: any) => {
      data.map((item)=>{
        if(item.id === this._clientId)
        this.clientList = item;
      })
    }, (error) => {
      console.log("Error in Client List call");
    });
  }

}

export interface ClientInfo {
  description: string,
  name: string,
  id: string
}
