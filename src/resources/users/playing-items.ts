// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PlayingAPI from '../sessions/playing';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PlayingItems extends APIResource {
  /**
   * Requires authentication as user
   */
  update(id: string, params: PlayingItemUpdateParams, options?: RequestOptions): APIPromise<void> {
    const {
      UserId,
      MediaSourceId,
      AudioStreamIndex,
      CanSeek,
      LiveStreamId,
      PlayMethod,
      PlaySessionId,
      SubtitleStreamIndex,
    } = params;
    return this._client.post(path`/Users/${UserId}/PlayingItems/${id}`, {
      query: {
        MediaSourceId,
        AudioStreamIndex,
        CanSeek,
        LiveStreamId,
        PlayMethod,
        PlaySessionId,
        SubtitleStreamIndex,
      },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  delete(id: string, params: PlayingItemDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { UserId, MediaSourceId, NextMediaType, LiveStreamId, PlaySessionId, PositionTicks } = params;
    return this._client.post(path`/Users/${UserId}/PlayingItems/${id}/Delete`, {
      query: { MediaSourceId, NextMediaType, LiveStreamId, PlaySessionId, PositionTicks },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  progress(id: string, params: PlayingItemProgressParams, options?: RequestOptions): APIPromise<void> {
    const {
      UserId,
      MediaSourceId,
      AudioStreamIndex,
      IsMuted,
      IsPaused,
      LiveStreamId,
      PlaybackRate,
      PlayMethod,
      PlaySessionId,
      PositionTicks,
      RepeatMode,
      SubtitleOffset,
      SubtitleStreamIndex,
      VolumeLevel,
      ...body
    } = params;
    return this._client.post(path`/Users/${UserId}/PlayingItems/${id}/Progress`, {
      query: {
        MediaSourceId,
        AudioStreamIndex,
        IsMuted,
        IsPaused,
        LiveStreamId,
        PlaybackRate,
        PlayMethod,
        PlaySessionId,
        PositionTicks,
        RepeatMode,
        SubtitleOffset,
        SubtitleStreamIndex,
        VolumeLevel,
      },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PlayMethod = 'Transcode' | 'DirectStream' | 'DirectPlay';

export type RepeatMode = 'RepeatNone' | 'RepeatAll' | 'RepeatOne';

export interface PlayingItemUpdateParams {
  /**
   * Path param: User Id
   */
  UserId: string;

  /**
   * Query param: The id of the MediaSource
   */
  MediaSourceId: string;

  /**
   * Query param:
   */
  AudioStreamIndex?: number | null;

  /**
   * Query param: Indicates if the client can seek
   */
  CanSeek?: boolean;

  /**
   * Query param:
   */
  LiveStreamId?: string;

  /**
   * Query param:
   */
  PlayMethod?: PlayMethod;

  /**
   * Query param:
   */
  PlaySessionId?: string;

  /**
   * Query param:
   */
  SubtitleStreamIndex?: number | null;
}

export interface PlayingItemDeleteParams {
  /**
   * Path param: User Id
   */
  UserId: string;

  /**
   * Query param: The id of the MediaSource
   */
  MediaSourceId: string;

  /**
   * Query param: The next media type that will play
   */
  NextMediaType: string;

  /**
   * Query param:
   */
  LiveStreamId?: string;

  /**
   * Query param:
   */
  PlaySessionId?: string;

  /**
   * Query param: Optional. The position, in ticks, where playback stopped. 1ms =
   * 10000 ticks.
   */
  PositionTicks?: number | null;
}

export interface PlayingItemProgressParams {
  /**
   * Path param: User Id
   */
  UserId: string;

  /**
   * Query param: The id of the MediaSource
   */
  MediaSourceId: string;

  /**
   * Query param:
   */
  AudioStreamIndex?: number | null;

  /**
   * Query param: Indicates if the player is muted.
   */
  IsMuted?: boolean;

  /**
   * Query param: Indicates if the player is paused.
   */
  IsPaused?: boolean;

  /**
   * Query param:
   */
  LiveStreamId?: string;

  /**
   * Query param:
   */
  PlaybackRate?: number;

  /**
   * Query param:
   */
  PlayMethod?: PlayMethod;

  /**
   * Query param:
   */
  PlaySessionId?: string;

  /**
   * Query param: Optional. The current position, in ticks. 1ms = 10000 ticks.
   */
  PositionTicks?: number | null;

  /**
   * Query param:
   */
  RepeatMode?: RepeatMode;

  /**
   * Query param:
   */
  SubtitleOffset?: number;

  /**
   * Query param:
   */
  SubtitleStreamIndex?: number | null;

  /**
   * Query param: Scale of 0-100
   */
  VolumeLevel?: number | null;

  /**
   * Body param:
   */
  EventName?: PlayingAPI.ProgressEvent;

  /**
   * Body param:
   */
  PlaylistIndex?: number;

  /**
   * Body param:
   */
  PlaylistLength?: number;

  /**
   * Body param:
   */
  Shuffle?: boolean;
}

export declare namespace PlayingItems {
  export {
    type PlayMethod as PlayMethod,
    type RepeatMode as RepeatMode,
    type PlayingItemUpdateParams as PlayingItemUpdateParams,
    type PlayingItemDeleteParams as PlayingItemDeleteParams,
    type PlayingItemProgressParams as PlayingItemProgressParams,
  };
}
