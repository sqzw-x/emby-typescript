// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subtitles extends APIResource {
  /**
   * Requires authentication as user
   */
  add(
    subtitleID: string,
    params: SubtitleAddParams,
    options?: RequestOptions,
  ): APIPromise<SubtitleAddResponse> {
    const { Id, MediaSourceId } = params;
    return this._client.post(path`/Items/${Id}/RemoteSearch/Subtitles/${subtitleID}`, {
      query: { MediaSourceId },
      ...options,
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveByLanguage(
    language: string,
    params: SubtitleRetrieveByLanguageParams,
    options?: RequestOptions,
  ): APIPromise<SubtitleRetrieveByLanguageResponse> {
    const { Id, ...query } = params;
    return this._client.get(path`/Items/${Id}/RemoteSearch/Subtitles/${language}`, { query, ...options });
  }
}

export interface SubtitleAddResponse {
  NewIndex?: number | null;
}

export type SubtitleRetrieveByLanguageResponse =
  Array<SubtitleRetrieveByLanguageResponse.SubtitleRetrieveByLanguageResponseItem>;

export namespace SubtitleRetrieveByLanguageResponse {
  export interface SubtitleRetrieveByLanguageResponseItem {
    Author?: string;

    Comment?: string;

    CommunityRating?: number | null;

    DateCreated?: string | null;

    DownloadCount?: number | null;

    Format?: string;

    Id?: string;

    IsForced?: boolean | null;

    IsHashMatch?: boolean | null;

    IsHearingImpaired?: boolean | null;

    Language?: string;

    Name?: string;

    ProviderName?: string;

    /**
     * @deprecated Use language instead to return the language specified by the
     * subtitle provider
     */
    ThreeLetterISOLanguageName?: string;
  }
}

export interface SubtitleAddParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: MediaSourceId
   */
  MediaSourceId: string;
}

export interface SubtitleRetrieveByLanguageParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: MediaSourceId
   */
  MediaSourceId: string;

  /**
   * Query param: IsForced
   */
  IsForced?: boolean | null;

  /**
   * Query param: IsHearingImpaired
   */
  IsHearingImpaired?: boolean | null;

  /**
   * Query param: IsPerfectMatch
   */
  IsPerfectMatch?: boolean | null;
}

export declare namespace Subtitles {
  export {
    type SubtitleAddResponse as SubtitleAddResponse,
    type SubtitleRetrieveByLanguageResponse as SubtitleRetrieveByLanguageResponse,
    type SubtitleAddParams as SubtitleAddParams,
    type SubtitleRetrieveByLanguageParams as SubtitleRetrieveByLanguageParams,
  };
}
