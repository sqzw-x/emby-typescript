// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArtistsAPI from '../artists/artists';
import * as RecordingsAPI from './recordings';
import * as SeriesTimersAPI from './series-timers';
import * as ScheduledTasksAPI from '../scheduled-tasks/scheduled-tasks';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Timers extends APIResource {
  /**
   * Requires authentication as user
   */
  create(body: TimerCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/LiveTv/Timers', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TimerInfoDto> {
    return this._client.get(path`/LiveTv/Timers/${id}`, options);
  }

  /**
   * Requires authentication as user
   */
  update(id: string, body: TimerUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/LiveTv/Timers/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  list(
    query: TimerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimerListResponse> {
    return this._client.get('/LiveTv/Timers', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/LiveTv/Timers/${id}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  getDefaults(
    query: TimerGetDefaultsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeriesTimerInfoDto> {
    return this._client.get('/LiveTv/Timers/Defaults', { query, ...options });
  }
}

export type KeepUntil = 'UntilDeleted' | 'UntilSpaceNeeded' | 'UntilWatched' | 'UntilDate';

export interface SeriesTimerInfoDto {
  ChannelId?: string;

  ChannelIds?: Array<string>;

  ChannelName?: string;

  ChannelNumber?: string;

  ChannelPrimaryImageTag?: string;

  Days?: Array<ScheduledTasksAPI.DayOfWeek>;

  EndDate?: string;

  Id?: string;

  ImageTags?: { [key: string]: string };

  IsPostPaddingRequired?: boolean;

  IsPrePaddingRequired?: boolean;

  KeepUntil?: KeepUntil;

  KeepUpTo?: number;

  Keywords?: Array<SeriesTimersAPI.KeywordInfo>;

  MatchExistingItemsWithAnyLibrary?: boolean;

  MaxRecordingSeconds?: number;

  Name?: string;

  Overview?: string;

  ParentBackdropImageTags?: Array<string>;

  ParentBackdropItemId?: string;

  ParentFolderId?: string;

  ParentPrimaryImageItemId?: string;

  ParentPrimaryImageTag?: string;

  ParentThumbImageTag?: string;

  ParentThumbItemId?: string;

  PostPaddingSeconds?: number;

  PrePaddingSeconds?: number;

  Priority?: number;

  ProgramId?: string;

  RecordAnyChannel?: boolean;

  RecordAnyTime?: boolean;

  RecordNewOnly?: boolean;

  SeriesId?: string;

  ServerId?: string;

  SkipEpisodesInLibrary?: boolean;

  StartDate?: string;

  TimerType?: ArtistsAPI.LiveTvTimerType;

  Type?: string;
}

export interface TimerInfoDto {
  ChannelId?: string;

  ChannelName?: string;

  ChannelNumber?: string;

  ChannelPrimaryImageTag?: string;

  EndDate?: string;

  Id?: string;

  IsPostPaddingRequired?: boolean;

  IsPrePaddingRequired?: boolean;

  KeepUntil?: KeepUntil;

  Name?: string;

  Overview?: string;

  ParentBackdropImageTags?: Array<string>;

  ParentBackdropItemId?: string;

  ParentFolderId?: string;

  PostPaddingSeconds?: number;

  PrePaddingSeconds?: number;

  Priority?: number;

  ProgramId?: string;

  ProgramInfo?: ArtistsAPI.BaseItem;

  RunTimeTicks?: number | null;

  SeriesTimerId?: string;

  ServerId?: string;

  StartDate?: string;

  Status?: RecordingsAPI.RecordingStatus;

  TimerType?: ArtistsAPI.LiveTvTimerType;

  Type?: string;
}

export interface TimerListResponse {
  Items?: Array<TimerInfoDto>;

  TotalRecordCount?: number;
}

export interface TimerCreateParams {
  ChannelId?: string;

  ChannelName?: string;

  ChannelNumber?: string;

  ChannelPrimaryImageTag?: string;

  EndDate?: string;

  Id?: string;

  IsPostPaddingRequired?: boolean;

  IsPrePaddingRequired?: boolean;

  KeepUntil?: KeepUntil;

  Name?: string;

  Overview?: string;

  ParentBackdropImageTags?: Array<string>;

  ParentBackdropItemId?: string;

  ParentFolderId?: string;

  PostPaddingSeconds?: number;

  PrePaddingSeconds?: number;

  Priority?: number;

  ProgramId?: string;

  ProgramInfo?: ArtistsAPI.BaseItem;

  RunTimeTicks?: number | null;

  SeriesTimerId?: string;

  ServerId?: string;

  StartDate?: string;

  Status?: RecordingsAPI.RecordingStatus;

  TimerType?: ArtistsAPI.LiveTvTimerType;

  Type?: string;
}

export interface TimerUpdateParams {
  ChannelId?: string;

  ChannelName?: string;

  ChannelNumber?: string;

  ChannelPrimaryImageTag?: string;

  EndDate?: string;

  body_Id?: string;

  IsPostPaddingRequired?: boolean;

  IsPrePaddingRequired?: boolean;

  KeepUntil?: KeepUntil;

  Name?: string;

  Overview?: string;

  ParentBackdropImageTags?: Array<string>;

  ParentBackdropItemId?: string;

  ParentFolderId?: string;

  PostPaddingSeconds?: number;

  PrePaddingSeconds?: number;

  Priority?: number;

  ProgramId?: string;

  ProgramInfo?: ArtistsAPI.BaseItem;

  RunTimeTicks?: number | null;

  SeriesTimerId?: string;

  ServerId?: string;

  StartDate?: string;

  Status?: RecordingsAPI.RecordingStatus;

  TimerType?: ArtistsAPI.LiveTvTimerType;

  Type?: string;
}

export interface TimerListParams {
  /**
   * Optional filter by channel id.
   */
  ChannelId?: string;

  /**
   * Optional filter by timers belonging to a series timer
   */
  SeriesTimerId?: string;
}

export interface TimerGetDefaultsParams {
  /**
   * Optional, to attach default values based on a program.
   */
  ProgramId?: string;
}

export declare namespace Timers {
  export {
    type KeepUntil as KeepUntil,
    type SeriesTimerInfoDto as SeriesTimerInfoDto,
    type TimerInfoDto as TimerInfoDto,
    type TimerListResponse as TimerListResponse,
    type TimerCreateParams as TimerCreateParams,
    type TimerUpdateParams as TimerUpdateParams,
    type TimerListParams as TimerListParams,
    type TimerGetDefaultsParams as TimerGetDefaultsParams,
  };
}
