import { Component, OnInit } from '@angular/core';
import { ThewitcherService } from "./thewitcher.service";

@Component({
  selector: 'app-thewitcher',
  templateUrl: './thewitcher.page.html',
  styleUrls: ['./thewitcher.page.scss'],
})
export class ThewitcherPage implements OnInit {

  dataPg = []

  constructor() { 
    const service = new ThewitcherService();
    this.dataPg = service.getDatapg();
  }

  ngOnInit() {
  }

  
  }
