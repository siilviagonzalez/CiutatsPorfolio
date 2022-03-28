import { Component, OnInit } from '@angular/core';

import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  infopag: any ='';

  fecha: any = new Date().getFullYear();

  constructor(public infoservice: InfoService) { }

  ngOnInit(): void {

    this.infoservice.getInfoPagina()
      .subscribe((resp: any) =>{
        this.infopag=resp;
      });
  }

}
