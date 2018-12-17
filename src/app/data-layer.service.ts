import { Injectable } from "@angular/core";
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
  constructor(private title: Title) {
    this.initializeDataLayer();
  }

  addPageViewEvent(path: string) {
    const title = this.title.getTitle();
    window.dataLayer.push({
      event: "pageview",
      page: {
        path,
        title
      }
    });
  }

  initializeDataLayer() {
    window.dataLayer = window.dataLayer || [];
  }
}
