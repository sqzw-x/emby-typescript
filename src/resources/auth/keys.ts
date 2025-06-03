// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Requires authentication as administrator
   */
  create(params: KeyCreateParams, options?: RequestOptions): APIPromise<void> {
    const { App } = params;
    return this._client.post('/Auth/Keys', {
      query: { App },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  list(query: KeyListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/Auth/Keys', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  delete(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/Auth/Keys/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  forceDelete(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Auth/Keys/${key}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface KeyCreateParams {
  /**
   * App
   */
  App: string;
}

export interface KeyListParams {
  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number;
}

export declare namespace Keys {
  export { type KeyCreateParams as KeyCreateParams, type KeyListParams as KeyListParams };
}
