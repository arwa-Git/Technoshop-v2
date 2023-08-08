import { Component, OnInit } from '@angular/core';
import { client } from '../../model/client.model';
import { ClientService } from '../../service/client/client.service';
import { User } from 'src/app/classes/User';
import { UserService } from 'src/app/Services/UserService/user.service';


@Component({
  selector: 'app-gerervendeur',
  templateUrl: './gerervendeur.component.html',
  styleUrls: ['./gerervendeur.component.css'],
})
export class GerervendeurComponent implements OnInit {
  clients?: User[] = [];
  searchclients: User[];
  selectedClient: User | null = null;
  role?:string;

  constructor(private clientService: ClientService,private userService:UserService) {
    this.clients = [];
    this.searchclients = this.clients;
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      users => {
        this.clients = users;
      },
      error => {
        alert("Error fetching users:");
      }
    );
  }

  searchv: any;

  showClientDetails(client: User): void {
    this.selectedClient = client;
  }



  deleteClient(client: client) {
    const confirmDelete = window.confirm(
      'Êtes-vous sûr de supprimer le vendeur ?'
    );
    if (confirmDelete) {
      // Call the client service to remove the vendor from the list
      this.clientService.supprimerclient(client);
      // Fetch the updated clients list from the service
      this.clients = this.clientService.listeclient();
      // Reset the selectedClient to hide the card
      //this.selectedClient = undefined;
    }
  }
}
