import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/*Define o primeiro componente a ser renderizado na tela. Aqui está configurado para ser o AppComponent;*/
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
