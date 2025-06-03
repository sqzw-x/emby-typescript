// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArtistsAPI from '../artists/artists';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Requires authentication as user
   */
  list(
    id: string,
    query: ItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Playlists/${id}/Items`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  delete(id: string, params: ItemDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { EntryIds } = params;
    return this._client.post(path`/Playlists/${id}/Items/Delete`, {
      query: { EntryIds },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  add(id: string, params: ItemAddParams, options?: RequestOptions): APIPromise<ItemAddResponse> {
    const { Ids, UserId } = params;
    return this._client.post(path`/Playlists/${id}/Items`, { query: { Ids, UserId }, ...options });
  }

  /**
   * Requires authentication as user
   */
  move(newIndex: number, params: ItemMoveParams, options?: RequestOptions): APIPromise<void> {
    const { Id, ItemId } = params;
    return this._client.post(path`/Playlists/${Id}/Items/${ItemId}/Move/${newIndex}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  remove(id: string, params: ItemRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { EntryIds } = params;
    return this._client.delete(path`/Playlists/${id}/Items`, {
      query: { EntryIds },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ItemAddResponse {
  Id?: string;

  ItemAddedCount?: number;
}

export interface ItemListParams {
  /**
   * Optional, include image information in output
   */
  EnableImages?: boolean | null;

  /**
   * Optional. The image types to include in the output.
   */
  EnableImageTypes?: string;

  /**
   * Optional, include user data
   */
  EnableUserData?: boolean | null;

  /**
   * Optional. Specify additional fields of information to return in the output. This
   * allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated,
   * Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path,
   * People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios,
   * Taglines
   */
  Fields?: string;

  /**
   * Optional, the max number of images to return, per image type
   */
  ImageTypeLimit?: number | null;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number | null;

  /**
   * User Id
   */
  UserId?: string;
}

export interface ItemDeleteParams {
  EntryIds: string;
}

export interface ItemAddParams {
  /**
   * Item id, comma delimited
   */
  Ids: string;

  /**
   * User Id
   */
  UserId?: string;
}

export interface ItemMoveParams {
  Id: string;

  /**
   * ItemId
   */
  ItemId: number;
}

export interface ItemRemoveParams {
  EntryIds: string;
}

export declare namespace Items {
  export {
    type ItemAddResponse as ItemAddResponse,
    type ItemListParams as ItemListParams,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemAddParams as ItemAddParams,
    type ItemMoveParams as ItemMoveParams,
    type ItemRemoveParams as ItemRemoveParams,
  };
}
