// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ImagesAPI from './images';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class RemoteImages extends APIResource {
  /**
   * Requires authentication as administrator
   */
  download(id: string, params: RemoteImageDownloadParams, options?: RequestOptions): APIPromise<void> {
    const { Type, ImageUrl, ProviderName } = params;
    return this._client.post(path`/Items/${id}/RemoteImages/Download`, {
      query: { Type, ImageUrl, ProviderName },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveAll(
    id: string,
    query: RemoteImageRetrieveAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RemoteImageRetrieveAllResponse> {
    return this._client.get(path`/Items/${id}/RemoteImages`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  retrieveProviders(id: string, options?: RequestOptions): APIPromise<RemoteImageRetrieveProvidersResponse> {
    return this._client.get(path`/Items/${id}/RemoteImages/Providers`, options);
  }
}

export interface RemoteImageRetrieveAllResponse {
  Images?: Array<RemoteImageRetrieveAllResponse.Image>;

  Providers?: Array<string>;

  TotalRecordCount?: number;
}

export namespace RemoteImageRetrieveAllResponse {
  export interface Image {
    CommunityRating?: number | null;

    DisplayLanguage?: string;

    Height?: number | null;

    Language?: string;

    ProviderName?: string;

    RatingType?: 'Score' | 'Likes';

    ThumbnailUrl?: string;

    Type?: ImagesAPI.ImageType;

    Url?: string;

    VoteCount?: number | null;

    Width?: number | null;
  }
}

export type RemoteImageRetrieveProvidersResponse =
  Array<RemoteImageRetrieveProvidersResponse.RemoteImageRetrieveProvidersResponseItem>;

export namespace RemoteImageRetrieveProvidersResponse {
  export interface RemoteImageRetrieveProvidersResponseItem {
    Name?: string;

    SupportedImages?: Array<ImagesAPI.ImageType>;
  }
}

export interface RemoteImageDownloadParams {
  /**
   * The image type
   */
  Type: ImagesAPI.ImageType;

  /**
   * The image url
   */
  ImageUrl?: string;

  /**
   * The image provider
   */
  ProviderName?: string;
}

export interface RemoteImageRetrieveAllParams {
  /**
   * Optional.
   */
  IncludeAllLanguages?: boolean;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. The image provider to use
   */
  ProviderName?: string;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number | null;

  /**
   * The image type
   */
  Type?: ImagesAPI.ImageType;
}

export declare namespace RemoteImages {
  export {
    type RemoteImageRetrieveAllResponse as RemoteImageRetrieveAllResponse,
    type RemoteImageRetrieveProvidersResponse as RemoteImageRetrieveProvidersResponse,
    type RemoteImageDownloadParams as RemoteImageDownloadParams,
    type RemoteImageRetrieveAllParams as RemoteImageRetrieveAllParams,
  };
}
