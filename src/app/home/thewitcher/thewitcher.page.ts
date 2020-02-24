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
   * istanza di TheWitcherService (equivale a "const service = new ThewitcherService();").
   * Dichiarare il servizio in "provider" di app.module
   * La variabile array dichiarata precedentemente verrà riempita con i
   * valori che verranno chiamamati dal metodo "service.getDataPg"
   */
  constructor(private service: ThewitcherService) { 
    }
  
  /**
   * La variabile array dichiarata precedentemente verrà riempita con i
   * valori che verranno chiamamati dal metodo "service.getDataPg".
   * appena viene istanziato il componente si avvia il metodo ngOnInit()
   * che esegue la chiamata al servizio una sola volta per popolare i dati.
   */
  ngOnInit() {
    this.dataPg = this.service.getDatapg();
  }

  
  }
