// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Series extends APIResource {
  /**
   * Requires authentication as user
   */
  added(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/Series/Added', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  updated(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/Series/Updated', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
