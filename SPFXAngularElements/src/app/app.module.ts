import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HelloSpfxWebPartComponent } from './hello-spfx-web-part/hello-spfx-web-part.component';

@NgModule({
  declarations: [
    HelloSpfxWebPartComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HelloSpfxWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(HelloSpfxWebPartComponent, { injector: this.injector });
    customElements.define('app-hello-spfx-web-part', el);
  }
}
