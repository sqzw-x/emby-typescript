// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ImagesAPI from '../../items/images';
import * as DeleteAPI from './delete';
import { Delete, DeleteDeleteParams } from './delete';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Images extends APIResource {
  delete: DeleteAPI.Delete = new DeleteAPI.Delete(this._client);

  /**
   * Requires authentication as user
   */
  retrieve(index: number, params: ImageRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { Id, Type, ...query } = params;
    return this._client.get(path`/Users/${Id}/Images/${Type}/${index}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  update(
    index: number,
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: ImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, Type } = params;
    return this._client.post(path`/Users/${Id}/Images/${Type}/${index}`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface ImageRetrieveParams {
  /**
   * Path param: User Id
   */
  Id: string;

  /**
   * Path param: Image Type
   */
  Type: ImagesAPI.ImageType;

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

export interface ImageUpdateParams {
  /**
   * Path param: User Id
   */
  Id: string;

  /**
   * Path param: Image Type
   */
  Type: ImagesAPI.ImageType;
}

Images.Delete = Delete;

export declare namespace Images {
  export { type ImageRetrieveParams as ImageRetrieveParams, type ImageUpdateParams as ImageUpdateParams };

  export { Delete as Delete, type DeleteDeleteParams as DeleteDeleteParams };
}
