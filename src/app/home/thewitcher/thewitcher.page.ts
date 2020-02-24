import { Component, OnInit } from '@angular/core';
import { ThewitcherService } from "./thewitcher.service";

@Component({
  selector: 'app-thewitcher',
  templateUrl: './thewitcher.page.html',
  styleUrls: ['./thewitcher.page.scss'],
})
export class ThewitcherPage implements OnInit {

  /**
   * varibile che riceverà l'array dal servizio
   */
  dataPg = []

  /**
   * nel costruttore dichiaro una variabile "service" per creare una nuova
   * istanza di TheWitcherService.
   * La variabile array dichiarata precedentemente verrà riempita con i
   * valori che verranno chiamamati dal metodo "service.getDataPg"
   */
  constructor() { 
    const service = new ThewitcherService();
    this.dataPg = service.getDatapg();
  }

  ngOnInit() {
  }

  
  }
