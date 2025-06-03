// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArtistsAPI from '../artists/artists';
import * as ItemsAPI from './items';
import {
  ItemAddParams,
  ItemAddResponse,
  ItemDeleteParams,
  ItemListParams,
  ItemMoveParams,
  ItemRemoveParams,
  Items,
} from './items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Playlists extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Requires authentication as user
   */
  create(
    params: PlaylistCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlaylistCreateResponse> {
    const { Ids, MediaType, Name } = params ?? {};
    return this._client.post('/Playlists', { query: { Ids, MediaType, Name }, ...options });
  }

  /**
   * Requires authentication as user
   */
  createInstantMix(
    id: string,
    query: PlaylistCreateInstantMixParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Playlists/${id}/InstantMix`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  retrieveAddToPlaylistInfo(
    id: string,
    query: PlaylistRetrieveAddToPlaylistInfoParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/Playlists/${id}/AddToPlaylistInfo`, { query, ...options });
  }
}

export interface PlaylistCreateResponse {
  Id?: string;

  ItemAddedCount?: number;

  Name?: string;
}

export type PlaylistRetrieveAddToPlaylistInfoResponse = unknown;

export interface PlaylistCreateParams {
  /**
   * Item Ids to add to the playlist
   */
  Ids?: string;

  /**
   * The playlist media type
   */
  MediaType?: string;

  /**
   * The name of the new playlist.
   */
  Name?: string;
}

export interface PlaylistCreateInstantMixParams {
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
   * Taglines, TrailerUrls
   */
  Fields?: string;

  /**
   * Optional, the max number of images to return, per image type
   */
  ImageTypeLimit?: number | null;

  /**
   * Optional. If specified, results will be filtered based on item type. This allows
   * multiple, comma delimeted.
   */
  IncludeItemTypes?: string;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface PlaylistRetrieveAddToPlaylistInfoParams {
  /**
   * Item id, comma delimited
   */
  Ids: string;

  /**
   * User Id
   */
  UserId?: string;
}

Playlists.Items = Items;

export declare namespace Playlists {
  export {
    type PlaylistCreateResponse as PlaylistCreateResponse,
    type PlaylistRetrieveAddToPlaylistInfoResponse as PlaylistRetrieveAddToPlaylistInfoResponse,
    type PlaylistCreateParams as PlaylistCreateParams,
    type PlaylistCreateInstantMixParams as PlaylistCreateInstantMixParams,
    type PlaylistRetrieveAddToPlaylistInfoParams as PlaylistRetrieveAddToPlaylistInfoParams,
  };

  export {
    Items as Items,
    type ItemAddResponse as ItemAddResponse,
    type ItemListParams as ItemListParams,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemAddParams as ItemAddParams,
    type ItemMoveParams as ItemMoveParams,
    type ItemRemoveParams as ItemRemoveParams,
  };
}
