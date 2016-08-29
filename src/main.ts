import { bootstrap } from '@angular/platform-browser-dynamic';
import { MockBackend } from '@angular/http/testing';
import { HTTP_PROVIDERS, Http, BaseRequestOptions } from '@angular/http';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent, environment } from './app/';

if (environment.production) {
    enableProdMode();
    bootstrap(AppComponent);
} else {
    bootstrap(AppComponent);
    // bootstrap(AppComponent, [
    //     HTTP_PROVIDERS,
    //     BaseRequestOptions,
    //     MockBackend,
    //     provide(Http, {
    //         useFactory: (backend, options) => {
    //             return new Http(backend, options);
    //         },
    //         deps: [MockBackend, BaseRequestOptions]
    //     })
    // ]
    // );
}
