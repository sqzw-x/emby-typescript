// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class FavoriteItems extends APIResource {
  /**
   * Requires authentication as user
   */
  update(id: string, params: FavoriteItemUpdateParams, options?: RequestOptions): APIPromise<UserItemData> {
    const { UserId } = params;
    return this._client.post(path`/Users/${UserId}/FavoriteItems/${id}`, options);
  }

  /**
   * Requires authentication as user
   */
  delete(id: string, params: FavoriteItemDeleteParams, options?: RequestOptions): APIPromise<UserItemData> {
    const { UserId } = params;
    return this._client.post(path`/Users/${UserId}/FavoriteItems/${id}/Delete`, options);
  }
}

export interface UserItemData {
  IsFavorite?: boolean;

  ItemId?: string;

  Key?: string;

  LastPlayedDate?: string | null;

  PlaybackPositionTicks?: number;

  PlayCount?: number | null;

  Played?: boolean;

  PlayedPercentage?: number | null;

  Rating?: number | null;

  ServerId?: string;

  UnplayedItemCount?: number | null;
}

export interface FavoriteItemUpdateParams {
  /**
   * User Id
   */
  UserId: string;
}

export interface FavoriteItemDeleteParams {
  /**
   * User Id
   */
  UserId: string;
}

export declare namespace FavoriteItems {
  export {
    type UserItemData as UserItemData,
    type FavoriteItemUpdateParams as FavoriteItemUpdateParams,
    type FavoriteItemDeleteParams as FavoriteItemDeleteParams,
  };
}
