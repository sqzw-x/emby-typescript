// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Swagger extends APIResource {
  /**
   * No authentication required
   */
  retrieve(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/swagger', options);
  }
}

export type SwaggerRetrieveResponse = string;

export declare namespace Swagger {
  export { type SwaggerRetrieveResponse as SwaggerRetrieveResponse };
}
