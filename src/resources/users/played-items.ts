// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FavoriteItemsAPI from './favorite-items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PlayedItems extends APIResource {
  /**
   * Requires authentication as user
   */
  update(
    id: string,
    params: PlayedItemUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FavoriteItemsAPI.UserItemData> {
    const { UserId, DatePlayed } = params;
    return this._client.post(path`/Users/${UserId}/PlayedItems/${id}`, { query: { DatePlayed }, ...options });
  }

  /**
   * Requires authentication as user
   */
  delete(
    id: string,
    params: PlayedItemDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FavoriteItemsAPI.UserItemData> {
    const { UserId } = params;
    return this._client.post(path`/Users/${UserId}/PlayedItems/${id}/Delete`, options);
  }
}

export interface PlayedItemUpdateParams {
  /**
   * Path param: User Id
   */
  UserId: string;

  /**
   * Query param: The date the item was played (if any). Format = yyyyMMddHHmmss
   */
  DatePlayed?: string;
}

export interface PlayedItemDeleteParams {
  /**
   * User Id
   */
  UserId: string;
}

export declare namespace PlayedItems {
  export {
    type PlayedItemUpdateParams as PlayedItemUpdateParams,
    type PlayedItemDeleteParams as PlayedItemDeleteParams,
  };
}
