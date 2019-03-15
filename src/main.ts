import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import config from './aws-exports';

if (environment.production) {
  enableProdMode();
}

// Amplify.configure({
// 	Amplify: {
// 				identityPoolId: 'us-east-2:c0841e3d-805d-4cd3-bc35-53d05a0fe8c8',
// 				region: 'us-east-2',
// 				userPoolId: 'us-east-2_1PnaMFKRK',
// 				clientId: '4sslmmgv9pn5lb5087aaj5r599'
// 			}
// 	});
Amplify.configure(config);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

