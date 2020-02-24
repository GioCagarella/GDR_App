import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThewitcherService {

  constructor() { }

  
  getDatapg() {
    return [
        {
          id: "1",
          name: "Eldjiarn",
          bio: "bebbo"
        },
        {
          id: "2",
          name: "Altred",
          bio: "skippitini"
        },
        {
          id: "3",
          name: "Aideen",
          bio: "Jhonny"
        },
        {
          id: "4",
          name: "Alfred",
          bio: "vlekke"
        }
    ]
  }
  
}
