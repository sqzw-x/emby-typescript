// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ArtistsAPI from './artists/artists';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Songs extends APIResource {
  /**
   * Requires authentication as user
   */
  createInstantMix(
    id: string,
    query: SongCreateInstantMixParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Songs/${id}/InstantMix`, { query, ...options });
  }
}

export interface SongCreateInstantMixParams {
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

export declare namespace Songs {
  export { type SongCreateInstantMixParams as SongCreateInstantMixParams };
}
