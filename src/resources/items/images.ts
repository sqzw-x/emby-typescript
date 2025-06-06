// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ImagesAPI from './images';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Images extends APIResource {
  /**
   * Requires authentication as user
   */
  list(id: string, options?: RequestOptions): APIPromise<ImageListResponse> {
    return this._client.get(path`/Items/${id}/Images`, options);
  }

  /**
   * Requires authentication as administrator
   */
  delete(type: ImageType, params: ImageDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { Id, Index } = params;
    return this._client.post(path`/Items/${Id}/Images/${type}/Delete`, {
      query: { Index },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  deleteByType(type: ImageType, params: ImageDeleteByTypeParams, options?: RequestOptions): APIPromise<void> {
    const { Id, Index } = params;
    return this._client.delete(path`/Items/${Id}/Images/${type}`, {
      query: { Index },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  deleteByTypeAndIndex(
    index: number,
    params: ImageDeleteByTypeAndIndexParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, Type } = params;
    return this._client.post(path`/Items/${Id}/Images/${Type}/${index}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveByType(
    type: ImageType,
    params: ImageRetrieveByTypeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, ...query } = params;
    return this._client.get(path`/Items/${Id}/Images/${type}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveByTypeAndIndex(
    index: number,
    params: ImageRetrieveByTypeAndIndexParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, Type, ...query } = params;
    return this._client.get(path`/Items/${Id}/Images/${Type}/${index}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveDetailed(
    unPlayedCount: number,
    params: ImageRetrieveDetailedParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, Type, Index, Tag, Format, MaxWidth, MaxHeight, PercentPlayed, ...query } = params;
    return this._client.get(
      path`/Items/${Id}/Images/${Type}/${Index}/${Tag}/${Format}/${MaxWidth}/${MaxHeight}/${PercentPlayed}/${unPlayedCount}`,
      { query, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Requires authentication as administrator
   */
  updateIndex(index: number, params: ImageUpdateIndexParams, options?: RequestOptions): APIPromise<void> {
    const { Id, Type, NewIndex } = params;
    return this._client.post(path`/Items/${Id}/Images/${Type}/${index}/Index`, {
      query: { NewIndex },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  updateURL(index: number, params: ImageUpdateURLParams, options?: RequestOptions): APIPromise<void> {
    const { Id, Type, Url } = params;
    return this._client.post(path`/Items/${Id}/Images/${Type}/${index}/Url`, {
      query: { Url },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  upload(type: ImageType, params: ImageUploadParams, options?: RequestOptions): APIPromise<void> {
    const { Id, body, Index } = params;
    return this._client.post(path`/Items/${Id}/Images/${type}`, {
      query: { Index },
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  uploadByTypeAndIndex(
    index: number,
    params: ImageUploadByTypeAndIndexParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, Type, body } = params;
    return this._client.post(path`/Items/${Id}/Images/${Type}/${index}`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export type ImageType =
  | 'Primary'
  | 'Art'
  | 'Backdrop'
  | 'Banner'
  | 'Logo'
  | 'Thumb'
  | 'Disc'
  | 'Box'
  | 'Screenshot'
  | 'Menu'
  | 'Chapter'
  | 'BoxRear'
  | 'Thumbnail'
  | 'LogoLight'
  | 'LogoLightColor';

export type ImageListResponse = Array<ImageListResponse.ImageListResponseItem>;

export namespace ImageListResponse {
  export interface ImageListResponseItem {
    Filename?: string;

    Height?: number | null;

    ImageIndex?: number | null;

    ImageType?: ImagesAPI.ImageType;

    Path?: string;

    Size?: number;

    Width?: number | null;
  }
}

export interface ImageDeleteParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: Image Index
   */
  Index?: number;
}

export interface ImageDeleteByTypeParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: Image Index
   */
  Index?: number;
}

export interface ImageDeleteByTypeAndIndexParams {
  /**
   * Item Id
   */
  Id: string;

  /**
   * Image Type
   */
  Type: ImageType;
}

export interface ImageRetrieveByTypeParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: Set to true to force normalization of orientation in the event the
   * renderer does not support it.
   */
  AutoOrient?: boolean;

  /**
   * Query param: Optional. Apply a background color for transparent images.
   */
  BackgroundColor?: string;

  /**
   * Query param: Specify if whitespace should be cropped out of the image.
   * True/False. If unspecified, whitespace will be cropped from logos and clear art.
   */
  CropWhitespace?: boolean | null;

  /**
   * Query param: Enable or disable image enhancers such as cover art.
   */
  EnableImageEnhancers?: boolean;

  /**
   * Query param: Optional. Apply a foreground layer on top of the image.
   */
  ForegroundLayer?: string;

  /**
   * Query param: Determines the output foramt of the image - original,gif,jpg,png
   */
  Format?: string;

  /**
   * Query param: The fixed image height to return.
   */
  Height?: number;

  /**
   * Query param: Image Index
   */
  Index?: number;

  /**
   * Query param: Set to true to retain image animation (when supported).
   */
  KeepAnimation?: boolean;

  /**
   * Query param: The maximum image height to return.
   */
  MaxHeight?: number;

  /**
   * Query param: The maximum image width to return.
   */
  MaxWidth?: number;

  /**
   * Query param: Optional quality setting, from 0-100. Defaults to 90 and should
   * suffice in most cases.
   */
  Quality?: number;

  /**
   * Query param: Optional. Supply the cache tag from the item object to receive
   * strong caching headers.
   */
  Tag?: string;

  /**
   * Query param: The fixed image width to return.
   */
  Width?: number;
}

export interface ImageRetrieveByTypeAndIndexParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Path param: Image Type
   */
  Type: ImageType;

  /**
   * Query param: Set to true to force normalization of orientation in the event the
   * renderer does not support it.
   */
  AutoOrient?: boolean;

  /**
   * Query param: Optional. Apply a background color for transparent images.
   */
  BackgroundColor?: string;

  /**
   * Query param: Specify if whitespace should be cropped out of the image.
   * True/False. If unspecified, whitespace will be cropped from logos and clear art.
   */
  CropWhitespace?: boolean | null;

  /**
   * Query param: Enable or disable image enhancers such as cover art.
   */
  EnableImageEnhancers?: boolean;

  /**
   * Query param: Optional. Apply a foreground layer on top of the image.
   */
  ForegroundLayer?: string;

  /**
   * Query param: Determines the output foramt of the image - original,gif,jpg,png
   */
  Format?: string;

  /**
   * Query param: The fixed image height to return.
   */
  Height?: number;

  /**
   * Query param: Set to true to retain image animation (when supported).
   */
  KeepAnimation?: boolean;

  /**
   * Query param: The maximum image height to return.
   */
  MaxHeight?: number;

  /**
   * Query param: The maximum image width to return.
   */
  MaxWidth?: number;

  /**
   * Query param: Optional quality setting, from 0-100. Defaults to 90 and should
   * suffice in most cases.
   */
  Quality?: number;

  /**
   * Query param: Optional. Supply the cache tag from the item object to receive
   * strong caching headers.
   */
  Tag?: string;

  /**
   * Query param: The fixed image width to return.
   */
  Width?: number;
}

export interface ImageRetrieveDetailedParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Path param: Image Type
   */
  Type: ImageType;

  /**
   * Path param: Image Index
   */
  Index: number;

  /**
   * Path param: Optional. Supply the cache tag from the item object to receive
   * strong caching headers.
   */
  Tag: string;

  /**
   * Path param: Determines the output foramt of the image - original,gif,jpg,png
   */
  Format: string;

  /**
   * Path param: The maximum image width to return.
   */
  MaxWidth: number;

  /**
   * Path param: The maximum image height to return.
   */
  MaxHeight: number;

  /**
   * Path param:
   */
  PercentPlayed: number;

  /**
   * Query param: Set to true to force normalization of orientation in the event the
   * renderer does not support it.
   */
  AutoOrient?: boolean;

  /**
   * Query param: Optional. Apply a background color for transparent images.
   */
  BackgroundColor?: string;

  /**
   * Query param: Specify if whitespace should be cropped out of the image.
   * True/False. If unspecified, whitespace will be cropped from logos and clear art.
   */
  CropWhitespace?: boolean | null;

  /**
   * Query param: Enable or disable image enhancers such as cover art.
   */
  EnableImageEnhancers?: boolean;

  /**
   * Query param: Optional. Apply a foreground layer on top of the image.
   */
  ForegroundLayer?: string;

  /**
   * Query param: The fixed image height to return.
   */
  Height?: number;

  /**
   * Query param: Set to true to retain image animation (when supported).
   */
  KeepAnimation?: boolean;

  /**
   * Query param: Optional quality setting, from 0-100. Defaults to 90 and should
   * suffice in most cases.
   */
  Quality?: number;

  /**
   * Query param: The fixed image width to return.
   */
  Width?: number;
}

export interface ImageUpdateIndexParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Path param: Image Type
   */
  Type: ImageType;

  /**
   * Query param: The new image index
   */
  NewIndex: number;
}

export interface ImageUpdateURLParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Path param: Image Type
   */
  Type: ImageType;

  /**
   * Query param: The url for the new image
   */
  Url: string;
}

export interface ImageUploadParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Body param:
   */
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;

  /**
   * Query param: Image Index
   */
  Index?: number;
}

export interface ImageUploadByTypeAndIndexParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Path param: Image Type
   */
  Type: ImageType;

  /**
   * Body param:
   */
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace Images {
  export {
    type ImageType as ImageType,
    type ImageListResponse as ImageListResponse,
    type ImageDeleteParams as ImageDeleteParams,
    type ImageDeleteByTypeParams as ImageDeleteByTypeParams,
    type ImageDeleteByTypeAndIndexParams as ImageDeleteByTypeAndIndexParams,
    type ImageRetrieveByTypeParams as ImageRetrieveByTypeParams,
    type ImageRetrieveByTypeAndIndexParams as ImageRetrieveByTypeAndIndexParams,
    type ImageRetrieveDetailedParams as ImageRetrieveDetailedParams,
    type ImageUpdateIndexParams as ImageUpdateIndexParams,
    type ImageUpdateURLParams as ImageUpdateURLParams,
    type ImageUploadParams as ImageUploadParams,
    type ImageUploadByTypeAndIndexParams as ImageUploadByTypeAndIndexParams,
  };
}
