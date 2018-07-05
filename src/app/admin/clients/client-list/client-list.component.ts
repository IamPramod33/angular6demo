import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../shared/services/admin/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  public clientList: Array<ClientInfo> = [];
  constructor(private _clientService: ClientService) { }

  ngOnInit() {
    this.loadClientData()
  }

  public loadClientData() {
    this._clientService.getClients().subscribe((data: any) => {
      this.clientList = data;
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