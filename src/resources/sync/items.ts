// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemsAPI from './items';
import * as ArtistsAPI from '../artists/artists';
import * as ImagesAPI from '../items/images';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Requires authentication as user
   */
  cancelItems(
    targetID: string,
    params: ItemCancelItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { ItemIds } = params ?? {};
    return this._client.post(path`/Sync/${targetID}/Items/Delete`, {
      query: { ItemIds },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  listReadyItems(
    query: ItemListReadyItemsParams,
    options?: RequestOptions,
  ): APIPromise<ItemListReadyItemsResponse> {
    return this._client.get('/Sync/Items/Ready', { query, ...options });
  }
}

export interface ItemFileInfo {
  ImageType?: ImagesAPI.ImageType;

  Index?: number;

  Name?: string;

  Path?: string;

  Type?: 'Media' | 'Image' | 'Subtitles';
}

export type ItemListReadyItemsResponse = Array<ItemListReadyItemsResponse.ItemListReadyItemsResponseItem>;

export namespace ItemListReadyItemsResponse {
  export interface ItemListReadyItemsResponseItem {
    AdditionalFiles?: Array<ItemsAPI.ItemFileInfo>;

    Item?: ArtistsAPI.BaseItem;

    OriginalFileName?: string;

    ServerId?: string;

    SyncJobDateCreated?: string;

    SyncJobId?: number;

    SyncJobItemId?: number;

    SyncJobName?: string;

    UserId?: string;
  }
}

export interface ItemCancelItemsParams {
  /**
   * ItemIds
   */
  ItemIds?: string;
}

export interface ItemListReadyItemsParams {
  /**
   * TargetId
   */
  TargetId: string;
}

export declare namespace Items {
  export {
    type ItemFileInfo as ItemFileInfo,
    type ItemListReadyItemsResponse as ItemListReadyItemsResponse,
    type ItemCancelItemsParams as ItemCancelItemsParams,
    type ItemListReadyItemsParams as ItemListReadyItemsParams,
  };
}
