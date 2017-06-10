import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor() {
    super();

    // set the default content-type header
    this.headers.set('Content-Type', 'application/json');
  }
}

export const requestOptionsProvider = {
  provide: RequestOptions,
  useClass: DefaultRequestOptions
};
