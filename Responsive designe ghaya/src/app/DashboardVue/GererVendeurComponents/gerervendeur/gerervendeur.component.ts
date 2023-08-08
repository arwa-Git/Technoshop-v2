import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
  test?:boolean

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
    this.test = true;
  }

  cardClicked(event: Event): void {
    this.test = false;
  }

  deleteUser(user: User) {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
    const id = user.id;
     alert(id);
    }
  }

  handleUpdateClick(user: User) {
    const confirmDelete = window.confirm('Are you sure you want to update this user?');
    if (confirmDelete) {
    const id = user.id;
     alert(id);
    }
  }


  
}
