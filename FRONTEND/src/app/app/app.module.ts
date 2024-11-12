import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importar FormsModule para usar ngModel
import { MensajeComponent } from './../components/mensaje/mensaje.component';  // Importar tu componente de mensajes

@NgModule({
  declarations: [
    MensajeComponent  // Declarar el componente MensajeComponent
  ],
  imports: [
    BrowserModule,    // Importar el módulo para aplicaciones en el navegador
    FormsModule       // Asegúrate de importar FormsModule para usar ngModel
  ],
  providers: [],
  bootstrap: [MensajeComponent]  // Usamos MensajeComponent como componente raíz
})
export class AppModule { }
