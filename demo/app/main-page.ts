import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { ImageSource, fromResource } from 'tns-core-modules/image-source';
import { HelloWorldModel } from './main-view-model';
import { ImageZoom } from 'nativescript-image-zoom';

let image: ImageZoom;

export function pageLoaded(args: observable.EventData) {
  let page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();
  image = page.getViewById('image') as ImageZoom;
}

export function loadRemoteSrc() {
  if (image) {
    image.src =
      'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1951&q=100';
  }
}

export function loadResource() {
  if (image) {
    image.src = 'res://image_302063';
  }
}

export function loadImgSrc() {
  if (image) {
    image.src = <any>fromResource('image_302063');
  }
}
