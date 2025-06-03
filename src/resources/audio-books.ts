// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ArtistsAPI from './artists/artists';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AudioBooks extends APIResource {
  /**
   * Requires authentication as user
   */
  listNextUp(
    query: AudioBookListNextUpParams,
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get('/AudioBooks/NextUp', { query, ...options });
  }
}

export interface AudioBookListNextUpParams {
  /**
   * User Id
   */
  UserId: string;

  /**
   * Optional. Filter by series id
   */
  AlbumId?: string;

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
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Specify this to localize the search to a specific item or folder. Omit to use
   * the root
   */
  ParentId?: string;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number | null;
}

export declare namespace AudioBooks {
  export { type AudioBookListNextUpParams as AudioBookListNextUpParams };
}
