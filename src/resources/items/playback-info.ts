// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LiveStreamsAPI from '../live-streams';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PlaybackInfoResource extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieve(
    id: string,
    query: PlaybackInfoRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PlaybackInfo> {
    return this._client.get(path`/Items/${id}/PlaybackInfo`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  update(id: string, body: PlaybackInfoUpdateParams, options?: RequestOptions): APIPromise<PlaybackInfo> {
    return this._client.post(path`/Items/${id}/PlaybackInfo`, { body, ...options });
  }
}

export interface PlaybackInfo {
  ErrorCode?: 'NotAllowed' | 'NoCompatibleStream' | 'RateLimitExceeded';

  MediaSources?: Array<LiveStreamsAPI.MediaSourceInfo>;

  PlaySessionId?: string;
}

export interface PlaybackInfoRetrieveParams {
  /**
   * User Id
   */
  UserId: string;
}

export interface PlaybackInfoUpdateParams {
  AllowAudioStreamCopy?: boolean;

  AllowInterlacedVideoStreamCopy?: boolean;

  AllowVideoStreamCopy?: boolean;

  AudioStreamIndex?: number | null;

  AutoOpenLiveStream?: boolean;

  CurrentPlaySessionId?: string;

  DeviceProfile?: LiveStreamsAPI.DeviceProfile;

  DirectPlayProtocols?: Array<LiveStreamsAPI.MediaProtocol>;

  EnableDirectPlay?: boolean;

  EnableDirectStream?: boolean;

  EnableTranscoding?: boolean;

  body_Id?: string;

  IsPlayback?: boolean;

  LiveStreamId?: string;

  MaxAudioChannels?: number | null;

  MaxStreamingBitrate?: number | null;

  MediaSourceId?: string;

  StartTimeTicks?: number | null;

  SubtitleStreamIndex?: number | null;

  UserId?: string;
}

export declare namespace PlaybackInfoResource {
  export {
    type PlaybackInfo as PlaybackInfo,
    type PlaybackInfoRetrieveParams as PlaybackInfoRetrieveParams,
    type PlaybackInfoUpdateParams as PlaybackInfoUpdateParams,
  };
}
