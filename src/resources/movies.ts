// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ArtistsAPI from './artists/artists';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Movies extends APIResource {
  /**
   * Requires authentication as user
   */
  getRecommendations(
    query: MovieGetRecommendationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MovieGetRecommendationsResponse> {
    return this._client.get('/Movies/Recommendations', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getSimilar(
    id: string,
    query: MovieGetSimilarParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Movies/${id}/Similar`, { query, ...options });
  }
}

export type MovieGetRecommendationsResponse =
  Array<MovieGetRecommendationsResponse.MovieGetRecommendationsResponseItem>;

export namespace MovieGetRecommendationsResponse {
  export interface MovieGetRecommendationsResponseItem {
    BaselineItemName?: string;

    CategoryId?: number;

    Items?: Array<ArtistsAPI.BaseItem>;

    RecommendationType?:
      | 'SimilarToRecentlyPlayed'
      | 'SimilarToLikedItem'
      | 'HasDirectorFromRecentlyPlayed'
      | 'HasActorFromRecentlyPlayed'
      | 'HasLikedDirector'
      | 'HasLikedActor';
  }
}

export interface MovieGetRecommendationsParams {
  /**
   * The max number of categories to return
   */
  CategoryLimit?: number;

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
   * Optional, the max number of images to return, per image type
   */
  ImageTypeLimit?: number | null;

  /**
   * The max number of items to return per category
   */
  ItemLimit?: number;

  /**
   * Specify this to localize the search to a specific item or folder. Omit to use
   * the root
   */
  ParentId?: string;

  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface MovieGetSimilarParams {
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

export declare namespace Movies {
  export {
    type MovieGetRecommendationsResponse as MovieGetRecommendationsResponse,
    type MovieGetRecommendationsParams as MovieGetRecommendationsParams,
    type MovieGetSimilarParams as MovieGetSimilarParams,
  };
}
