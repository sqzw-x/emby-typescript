// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from '../auth/auth';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Requires authentication as user
   */
  delete(id: string, body: TagDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Items/${id}/Tags/Delete`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  add(id: string, body: TagAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Items/${id}/Tags/Add`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TagDeleteParams {
  Tags?: Array<AuthAPI.NameIDPair>;
}

export interface TagAddParams {
  Tags?: Array<AuthAPI.NameIDPair>;
}

export declare namespace Tags {
  export { type TagDeleteParams as TagDeleteParams, type TagAddParams as TagAddParams };
}
