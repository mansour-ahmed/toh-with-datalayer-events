import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

declare global {
  interface Window {
    dataLayer: Array<any>;
  }
}

@Injectable({
  providedIn: "root"
})
export class DataLayerService {
  constructor(private router: Router, private title: Title) {
    window.dataLayer = window.dataLayer || [];
  }

  addPageViewEvent(path?: string, title?: string) {
    const pagePath = path || this.router.url;
    const pageTitle = title || this.title.getTitle();
    window.dataLayer.push({
      event: "pageview",
      page: {
        path: pagePath,
        title: pageTitle
      }
    });
  }
}
