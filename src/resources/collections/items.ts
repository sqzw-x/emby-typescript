// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Requires authentication as user
   */
  delete(id: string, params: ItemDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { Ids } = params;
    return this._client.post(path`/Collections/${id}/Items/Delete`, {
      query: { Ids },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  add(id: string, params: ItemAddParams, options?: RequestOptions): APIPromise<void> {
    const { Ids } = params;
    return this._client.post(path`/Collections/${id}/Items`, {
      query: { Ids },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  remove(id: string, params: ItemRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { Ids } = params;
    return this._client.delete(path`/Collections/${id}/Items`, {
      query: { Ids },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ItemDeleteParams {
  /**
   * Item id, comma delimited
   */
  Ids: string;
}

export interface ItemAddParams {
  /**
   * Item id, comma delimited
   */
  Ids: string;
}

export interface ItemRemoveParams {
  /**
   * Item id, comma delimited
   */
  Ids: string;
}

export declare namespace Items {
  export {
    type ItemDeleteParams as ItemDeleteParams,
    type ItemAddParams as ItemAddParams,
    type ItemRemoveParams as ItemRemoveParams,
  };
}
