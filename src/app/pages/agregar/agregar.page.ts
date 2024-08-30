import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  Comuna: string = "";
  Edad: number = 0;
  Usuario: string = "";
  
  constructor(private router: Router, private activedroute: ActivatedRoute) {
    //realizar la captura de la informacion que viene por navigationExtras
    this.activedroute.queryParams.subscribe(param =>{
      //validamos si viene o no información
      if(this.router.getCurrentNavigation()?.extras.state){
        //capturamos la informacion
        this.Usuario = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        this.Edad = this.router.getCurrentNavigation()?.extras?.state?.['ed'];
        this.Comuna = this.router.getCurrentNavigation()?.extras?.state?.['com'];

      }
    });
   }

  ngOnInit() {
  }

}
