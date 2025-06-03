// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArtistsAPI from '../artists/artists';
import * as PlayingItemsAPI from '../users/playing-items';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Playing extends APIResource {
  /**
   * Requires authentication as user
   */
  issuePlaystateCommand(
    command: PlaystateCommand,
    params: PlayingIssuePlaystateCommandParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, ...body } = params;
    return this._client.post(path`/Sessions/${Id}/Playing/${command}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  ping(params: PlayingPingParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { PlaySessionId } = params ?? {};
    return this._client.post('/Sessions/Playing/Ping', {
      query: { PlaySessionId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  playItem(id: string, params: PlayingPlayItemParams, options?: RequestOptions): APIPromise<void> {
    const { ItemIds, PlayCommand, StartPositionTicks, ...body } = params;
    return this._client.post(path`/Sessions/${id}/Playing`, {
      query: { ItemIds, PlayCommand, StartPositionTicks },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  reportProgress(body: PlayingReportProgressParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Sessions/Playing/Progress', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  reportStarted(body: PlayingReportStartedParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Sessions/Playing', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  reportStopped(body: PlayingReportStoppedParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Sessions/Playing/Stopped', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PlaystateCommand =
  | 'Stop'
  | 'Pause'
  | 'Unpause'
  | 'NextTrack'
  | 'PreviousTrack'
  | 'Seek'
  | 'Rewind'
  | 'FastForward'
  | 'PlayPause'
  | 'SeekRelative';

export type ProgressEvent =
  | 'TimeUpdate'
  | 'Pause'
  | 'Unpause'
  | 'VolumeChange'
  | 'RepeatModeChange'
  | 'AudioTrackChange'
  | 'SubtitleTrackChange'
  | 'PlaylistItemMove'
  | 'PlaylistItemRemove'
  | 'PlaylistItemAdd'
  | 'QualityChange'
  | 'StateChange'
  | 'SubtitleOffsetChange'
  | 'PlaybackRateChange'
  | 'ShuffleChange';

export interface QueueItem {
  Id?: number;

  PlaylistItemId?: string;
}

export interface PlayingIssuePlaystateCommandParams {
  /**
   * Path param: Session Id
   */
  Id: string;

  /**
   * Body param:
   */
  body_Command?: PlaystateCommand;

  /**
   * Body param:
   */
  ControllingUserId?: string;

  /**
   * Body param:
   */
  SeekPositionTicks?: number | null;
}

export interface PlayingPingParams {
  PlaySessionId?: string;
}

export interface PlayingPlayItemParams {
  /**
   * Query param: The ids of the items to play, comma delimited
   */
  ItemIds: Array<number>;

  /**
   * Query param: The type of play command to issue (PlayNow, PlayNext, PlayLast).
   * Clients who have not yet implemented play next and play last may play now.
   */
  PlayCommand: 'PlayNow' | 'PlayNext' | 'PlayLast' | 'PlayInstantMix' | 'PlayShuffle';

  /**
   * Query param: The starting position of the first item.
   */
  StartPositionTicks?: number | null;

  /**
   * Body param:
   */
  AudioStreamIndex?: number | null;

  /**
   * Body param:
   */
  ControllingUserId?: string;

  /**
   * Body param:
   */
  MediaSourceId?: string;

  /**
   * Body param:
   */
  StartIndex?: number | null;

  /**
   * Body param:
   */
  SubtitleStreamIndex?: number | null;
}

export interface PlayingReportProgressParams {
  AspectRatio?: string;

  AudioStreamIndex?: number | null;

  Brightness?: number | null;

  CanSeek?: boolean;

  EventName?: ProgressEvent;

  IsMuted?: boolean;

  IsPaused?: boolean;

  Item?: ArtistsAPI.BaseItem;

  ItemId?: string;

  LiveStreamId?: string;

  MediaSourceId?: string;

  NowPlayingQueue?: Array<QueueItem>;

  PlaybackRate?: number;

  PlaybackStartTimeTicks?: number | null;

  PlaylistIndex?: number;

  PlaylistItemId?: string;

  PlaylistItemIds?: Array<string>;

  PlaylistLength?: number;

  PlayMethod?: PlayingItemsAPI.PlayMethod;

  PlaySessionId?: string;

  PositionTicks?: number | null;

  RepeatMode?: PlayingItemsAPI.RepeatMode;

  RunTimeTicks?: number | null;

  SessionId?: string;

  Shuffle?: boolean;

  SubtitleOffset?: number;

  SubtitleStreamIndex?: number | null;

  VolumeLevel?: number | null;
}

export interface PlayingReportStartedParams {
  AspectRatio?: string;

  AudioStreamIndex?: number | null;

  Brightness?: number | null;

  CanSeek?: boolean;

  EventName?: ProgressEvent;

  IsMuted?: boolean;

  IsPaused?: boolean;

  Item?: ArtistsAPI.BaseItem;

  ItemId?: string;

  LiveStreamId?: string;

  MediaSourceId?: string;

  NowPlayingQueue?: Array<QueueItem>;

  PlaybackRate?: number;

  PlaybackStartTimeTicks?: number | null;

  PlaylistIndex?: number;

  PlaylistItemId?: string;

  PlaylistItemIds?: Array<string>;

  PlaylistLength?: number;

  PlayMethod?: PlayingItemsAPI.PlayMethod;

  PlaySessionId?: string;

  PositionTicks?: number | null;

  RepeatMode?: PlayingItemsAPI.RepeatMode;

  RunTimeTicks?: number | null;

  SessionId?: string;

  Shuffle?: boolean;

  SubtitleOffset?: number;

  SubtitleStreamIndex?: number | null;

  VolumeLevel?: number | null;
}

export interface PlayingReportStoppedParams {
  Failed?: boolean;

  IsAutomated?: boolean;

  Item?: ArtistsAPI.BaseItem;

  ItemId?: string;

  LiveStreamId?: string;

  MediaSourceId?: string;

  NextMediaType?: string;

  NowPlayingQueue?: Array<QueueItem>;

  PlaylistIndex?: number;

  PlaylistItemId?: string;

  PlaylistLength?: number;

  PlaySessionId?: string;

  PositionTicks?: number | null;

  SessionId?: string;
}

export declare namespace Playing {
  export {
    type PlaystateCommand as PlaystateCommand,
    type ProgressEvent as ProgressEvent,
    type QueueItem as QueueItem,
    type PlayingIssuePlaystateCommandParams as PlayingIssuePlaystateCommandParams,
    type PlayingPingParams as PlayingPingParams,
    type PlayingPlayItemParams as PlayingPlayItemParams,
    type PlayingReportProgressParams as PlayingReportProgressParams,
    type PlayingReportStartedParams as PlayingReportStartedParams,
    type PlayingReportStoppedParams as PlayingReportStoppedParams,
  };
}
