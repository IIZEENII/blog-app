import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/shared/presentation/app.config';
import AppComponent from './app/shared/presentation/pages/App.layout';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
