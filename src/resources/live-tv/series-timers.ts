// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArtistsAPI from '../artists/artists';
import * as ProgramsAPI from './programs';
import * as TimersAPI from './timers';
import * as ScheduledTasksAPI from '../scheduled-tasks/scheduled-tasks';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SeriesTimers extends APIResource {
  /**
   * Requires authentication as user
   */
  create(body: SeriesTimerCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/LiveTv/SeriesTimers', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TimersAPI.TimerInfoDto> {
    return this._client.get(path`/LiveTv/SeriesTimers/${id}`, options);
  }

  /**
   * Requires authentication as user
   */
  update(id: string, body: SeriesTimerUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/LiveTv/SeriesTimers/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  list(
    query: SeriesTimerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeriesTimerListResponse> {
    return this._client.get('/LiveTv/SeriesTimers', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/LiveTv/SeriesTimers/${id}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface KeywordInfo {
  Keyword?: string;

  KeywordType?: ProgramsAPI.KeywordType;
}

export interface SeriesTimerInfo {
  ChannelId?: string;

  ChannelIds?: Array<string>;

  Days?: Array<ScheduledTasksAPI.DayOfWeek>;

  EndDate?: string;

  Id?: string;

  IsPostPaddingRequired?: boolean;

  IsPrePaddingRequired?: boolean;

  KeepUntil?: TimersAPI.KeepUntil;

  KeepUpTo?: number;

  Keywords?: Array<KeywordInfo>;

  MatchExistingItemsWithAnyLibrary?: boolean;

  MaxRecordingSeconds?: number;

  Name?: string;

  Overview?: string;

  ParentFolderId?: number;

  PostPaddingSeconds?: number;

  PrePaddingSeconds?: number;

  Priority?: number;

  ProgramId?: string;

  ProviderIds?: Record<string, string>;

  RecordAnyTime?: boolean;

  RecordNewOnly?: boolean;

  SeriesId?: string;

  ServiceName?: string;

  SkipEpisodesInLibrary?: boolean;

  StartDate?: string;

  TimerType?: ArtistsAPI.LiveTvTimerType;
}

export type SortOrder = 'Ascending' | 'Descending';

export interface SeriesTimerListResponse {
  Items?: Array<TimersAPI.SeriesTimerInfoDto>;

  TotalRecordCount?: number;
}

export interface SeriesTimerCreateParams {
  ChannelId?: string;

  ChannelIds?: Array<string>;

  Days?: Array<ScheduledTasksAPI.DayOfWeek>;

  EndDate?: string;

  Id?: string;

  IsPostPaddingRequired?: boolean;

  IsPrePaddingRequired?: boolean;

  KeepUntil?: TimersAPI.KeepUntil;

  KeepUpTo?: number;

  Keywords?: Array<KeywordInfo>;

  MatchExistingItemsWithAnyLibrary?: boolean;

  MaxRecordingSeconds?: number;

  Name?: string;

  Overview?: string;

  ParentFolderId?: number;

  PostPaddingSeconds?: number;

  PrePaddingSeconds?: number;

  Priority?: number;

  ProgramId?: string;

  ProviderIds?: Record<string, string>;

  RecordAnyTime?: boolean;

  RecordNewOnly?: boolean;

  SeriesId?: string;

  ServiceName?: string;

  SkipEpisodesInLibrary?: boolean;

  StartDate?: string;

  TimerType?: ArtistsAPI.LiveTvTimerType;
}

export interface SeriesTimerUpdateParams {
  ChannelId?: string;

  ChannelIds?: Array<string>;

  Days?: Array<ScheduledTasksAPI.DayOfWeek>;

  EndDate?: string;

  body_Id?: string;

  IsPostPaddingRequired?: boolean;

  IsPrePaddingRequired?: boolean;

  KeepUntil?: TimersAPI.KeepUntil;

  KeepUpTo?: number;

  Keywords?: Array<KeywordInfo>;

  MatchExistingItemsWithAnyLibrary?: boolean;

  MaxRecordingSeconds?: number;

  Name?: string;

  Overview?: string;

  ParentFolderId?: number;

  PostPaddingSeconds?: number;

  PrePaddingSeconds?: number;

  Priority?: number;

  ProgramId?: string;

  ProviderIds?: Record<string, string>;

  RecordAnyTime?: boolean;

  RecordNewOnly?: boolean;

  SeriesId?: string;

  ServiceName?: string;

  SkipEpisodesInLibrary?: boolean;

  StartDate?: string;

  TimerType?: ArtistsAPI.LiveTvTimerType;
}

export interface SeriesTimerListParams {
  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. Sort by SortName or Priority
   */
  SortBy?: string;

  /**
   * Optional. Sort in Ascending or Descending order
   */
  SortOrder?: SortOrder;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number;
}

export declare namespace SeriesTimers {
  export {
    type KeywordInfo as KeywordInfo,
    type SeriesTimerInfo as SeriesTimerInfo,
    type SortOrder as SortOrder,
    type SeriesTimerListResponse as SeriesTimerListResponse,
    type SeriesTimerCreateParams as SeriesTimerCreateParams,
    type SeriesTimerUpdateParams as SeriesTimerUpdateParams,
    type SeriesTimerListParams as SeriesTimerListParams,
  };
}
