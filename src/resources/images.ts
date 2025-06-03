// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Images extends APIResource {
  /**
   * Requires authentication as administrator
   */
  retrieveRemote(query: ImageRetrieveRemoteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/Images/Remote', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ImageRetrieveRemoteParams {
  /**
   * The image url
   */
  ImageUrl: string;
}

export declare namespace Images {
  export { type ImageRetrieveRemoteParams as ImageRetrieveRemoteParams };
}
