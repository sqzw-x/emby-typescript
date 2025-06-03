// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SwaggerJson extends APIResource {
  /**
   * No authentication required
   */
  retrieve(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/swagger.json', options);
  }
}

export type SwaggerJsonRetrieveResponse = string;

export declare namespace SwaggerJson {
  export { type SwaggerJsonRetrieveResponse as SwaggerJsonRetrieveResponse };
}
