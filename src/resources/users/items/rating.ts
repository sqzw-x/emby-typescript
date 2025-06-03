// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FavoriteItemsAPI from '../favorite-items';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Rating extends APIResource {
  /**
   * Requires authentication as user
   */
  delete(
    id: string,
    params: RatingDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FavoriteItemsAPI.UserItemData> {
    const { UserId } = params;
    return this._client.post(path`/Users/${UserId}/Items/${id}/Rating/Delete`, options);
  }

  /**
   * Requires authentication as user
   */
  deleteRating(
    id: string,
    params: RatingDeleteRatingParams,
    options?: RequestOptions,
  ): APIPromise<FavoriteItemsAPI.UserItemData> {
    const { UserId } = params;
    return this._client.delete(path`/Users/${UserId}/Items/${id}/Rating`, options);
  }

  /**
   * Requires authentication as user
   */
  rating(
    id: string,
    params: RatingRatingParams,
    options?: RequestOptions,
  ): APIPromise<FavoriteItemsAPI.UserItemData> {
    const { UserId, Likes } = params;
    return this._client.post(path`/Users/${UserId}/Items/${id}/Rating`, { query: { Likes }, ...options });
  }
}

export interface RatingDeleteParams {
  /**
   * User Id
   */
  UserId: string;
}

export interface RatingDeleteRatingParams {
  /**
   * User Id
   */
  UserId: string;
}

export interface RatingRatingParams {
  /**
   * Path param: User Id
   */
  UserId: string;

  /**
   * Query param: Whether the user likes the item or not. true/false
   */
  Likes: boolean;
}

export declare namespace Rating {
  export {
    type RatingDeleteParams as RatingDeleteParams,
    type RatingDeleteRatingParams as RatingDeleteRatingParams,
    type RatingRatingParams as RatingRatingParams,
  };
}
