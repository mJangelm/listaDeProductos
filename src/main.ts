import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Esto registra HttpClient como proveedor
    ...appConfig.providers // Incluye cualquier otro proveedor definido en appConfig
  ]
}).catch((err) => console.error(err));
