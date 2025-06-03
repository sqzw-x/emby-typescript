// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class OpenAPI extends APIResource {
  /**
   * No authentication required
   */
  retrieve(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/openapi', options);
  }
}

export type OpenAPIRetrieveResponse = string;

export declare namespace OpenAPI {
  export { type OpenAPIRetrieveResponse as OpenAPIRetrieveResponse };
}
