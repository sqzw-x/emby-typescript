// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemsImagesAPI from '../items/images';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Images extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieve(index: number, params: ImageRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { Name, Type, ...query } = params;
    return this._client.get(path`/Genres/${Name}/Images/${Type}/${index}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  list(type: ItemsImagesAPI.ImageType, params: ImageListParams, options?: RequestOptions): APIPromise<void> {
    const { Name, ...query } = params;
    return this._client.get(path`/Genres/${Name}/Images/${type}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ImageRetrieveParams {
  /**
   * Path param: Item name
   */
  Name: string;

  /**
   * Path param: Image Type
   */
  Type: ItemsImagesAPI.ImageType;

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

export interface ImageListParams {
  /**
   * Path param: Item name
   */
  Name: string;

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

export declare namespace Images {
  export { type ImageRetrieveParams as ImageRetrieveParams, type ImageListParams as ImageListParams };
}
