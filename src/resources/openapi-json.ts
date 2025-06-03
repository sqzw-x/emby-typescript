// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class OpenAPIJson extends APIResource {
  /**
   * No authentication required
   */
  retrieve(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/openapi.json', options);
  }
}

export type OpenAPIJsonRetrieveResponse = string;

export declare namespace OpenAPIJson {
  export { type OpenAPIJsonRetrieveResponse as OpenAPIJsonRetrieveResponse };
}
