// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Configuration extends APIResource {
  /**
   * Requires authentication as user
   */
  update(id: string, body: ConfigurationUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Users/${id}/Configuration`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  updatePartial(
    id: string,
    params: ConfigurationUpdatePartialParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/Users/${id}/Configuration/Partial`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface UserConfiguration {
  AudioLanguagePreference?: string;

  DisplayMissingEpisodes?: boolean;

  /**
   * @deprecated
   */
  EnableLocalPassword?: boolean;

  EnableNextEpisodeAutoPlay?: boolean;

  HidePlayedInLatest?: boolean;

  HidePlayedInMoreLikeThis?: boolean;

  HidePlayedInSuggestions?: boolean;

  IntroSkipMode?: 'ShowButton' | 'AutoSkip' | 'None';

  LatestItemsExcludes?: Array<string>;

  MyMediaExcludes?: Array<string>;

  OrderedViews?: Array<string>;

  PlayDefaultAudioTrack?: boolean;

  ProfilePin?: string;

  RememberAudioSelections?: boolean;

  RememberSubtitleSelections?: boolean;

  ResumeRewindSeconds?: number;

  SubtitleLanguagePreference?: string;

  SubtitleMode?: 'Default' | 'Always' | 'OnlyForced' | 'None' | 'Smart' | 'HearingImpaired';
}

export interface ConfigurationUpdateParams {
  AudioLanguagePreference?: string;

  DisplayMissingEpisodes?: boolean;

  /**
   * @deprecated
   */
  EnableLocalPassword?: boolean;

  EnableNextEpisodeAutoPlay?: boolean;

  HidePlayedInLatest?: boolean;

  HidePlayedInMoreLikeThis?: boolean;

  HidePlayedInSuggestions?: boolean;

  IntroSkipMode?: 'ShowButton' | 'AutoSkip' | 'None';

  LatestItemsExcludes?: Array<string>;

  MyMediaExcludes?: Array<string>;

  OrderedViews?: Array<string>;

  PlayDefaultAudioTrack?: boolean;

  ProfilePin?: string;

  RememberAudioSelections?: boolean;

  RememberSubtitleSelections?: boolean;

  ResumeRewindSeconds?: number;

  SubtitleLanguagePreference?: string;

  SubtitleMode?: 'Default' | 'Always' | 'OnlyForced' | 'None' | 'Smart' | 'HearingImpaired';
}

export interface ConfigurationUpdatePartialParams {
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace Configuration {
  export {
    type UserConfiguration as UserConfiguration,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
    type ConfigurationUpdatePartialParams as ConfigurationUpdatePartialParams,
  };
}
