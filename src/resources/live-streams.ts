// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LiveStreamsAPI from './live-streams';
import * as StreamAPI from './audio/stream';
import * as ProfilesAPI from './dlna/profiles';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class LiveStreams extends APIResource {
  /**
   * Requires authentication as user
   */
  close(params: LiveStreamCloseParams, options?: RequestOptions): APIPromise<void> {
    const { LiveStreamId } = params;
    return this._client.post('/LiveStreams/Close', {
      query: { LiveStreamId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  getMediaInfo(params: LiveStreamGetMediaInfoParams, options?: RequestOptions): APIPromise<void> {
    const { LiveStreamId } = params;
    return this._client.post('/LiveStreams/MediaInfo', {
      query: { LiveStreamId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  open(body: LiveStreamOpenParams, options?: RequestOptions): APIPromise<LiveStreamOpenResponse> {
    return this._client.post('/LiveStreams/Open', { body, ...options });
  }
}

export interface DeviceProfile {
  CodecProfiles?: Array<ProfilesAPI.CodecProfile>;

  ContainerProfiles?: Array<ProfilesAPI.ContainerProfile>;

  DirectPlayProfiles?: Array<ProfilesAPI.DirectPlayProfile>;

  Id?: string;

  MaxStaticMusicBitrate?: number | null;

  MaxStreamingBitrate?: number | null;

  MusicStreamingTranscodingBitrate?: number | null;

  Name?: string;

  ResponseProfiles?: Array<ProfilesAPI.ResponseProfile>;

  SubtitleProfiles?: Array<ProfilesAPI.SubtitleProfile>;

  SupportedMediaTypes?: string;

  TranscodingProfiles?: Array<ProfilesAPI.TranscodingProfile>;
}

export type MediaProtocol = 'File' | 'Http' | 'Rtmp' | 'Rtsp' | 'Udp' | 'Rtp' | 'Ftp' | 'Mms';

export interface MediaSourceInfo {
  AddApiKeyToDirectStreamUrl?: boolean;

  /**
   * @deprecated
   */
  AnalyzeDurationMs?: number | null;

  Bitrate?: number | null;

  /**
   * @deprecated
   */
  BufferMs?: number | null;

  Container?: string;

  ContainerStartTimeTicks?: number | null;

  DefaultAudioStreamIndex?: number | null;

  DefaultSubtitleStreamIndex?: number | null;

  DirectStreamUrl?: string;

  EncoderPath?: string;

  EncoderProtocol?: MediaProtocol;

  Formats?: Array<string>;

  HasMixedProtocols?: boolean;

  Id?: string;

  IsInfiniteStream?: boolean;

  IsRemote?: boolean;

  ItemId?: string;

  LiveStreamId?: string;

  MediaStreams?: Array<MediaSourceInfo.MediaStream>;

  Name?: string;

  OpenToken?: string;

  Path?: string;

  ProbePath?: string;

  ProbeProtocol?: MediaProtocol;

  Protocol?: MediaProtocol;

  /**
   * @deprecated
   */
  ReadAtNativeFramerate?: boolean;

  RequiredHttpHeaders?: { [key: string]: string };

  RequiresClosing?: boolean;

  RequiresLooping?: boolean;

  RequiresOpening?: boolean;

  RunTimeTicks?: number | null;

  ServerId?: string;

  Size?: number | null;

  SortName?: string;

  SupportsDirectPlay?: boolean;

  SupportsDirectStream?: boolean;

  /**
   * @deprecated
   */
  SupportsProbing?: boolean;

  SupportsTranscoding?: boolean;

  Timestamp?: 'None' | 'Zero' | 'Valid';

  TrancodeLiveStartIndex?: number | null;

  TranscodingContainer?: string;

  TranscodingSubProtocol?: string;

  TranscodingUrl?: string;

  Type?: 'Default' | 'Grouping' | 'Placeholder';

  Video3DFormat?: 'HalfSideBySide' | 'FullSideBySide' | 'FullTopAndBottom' | 'HalfTopAndBottom' | 'MVC';

  WallClockStart?: string | null;
}

export namespace MediaSourceInfo {
  export interface MediaStream {
    AspectRatio?: string;

    AttachmentSize?: number | null;

    AverageFrameRate?: number | null;

    BitDepth?: number | null;

    BitRate?: number | null;

    ChannelLayout?: string;

    Channels?: number | null;

    Codec?: string;

    CodecTag?: string;

    ColorPrimaries?: string;

    ColorSpace?: string;

    ColorTransfer?: string;

    Comment?: string;

    DeliveryMethod?: StreamAPI.SubtitleDeliveryMethod;

    DeliveryUrl?: string;

    DisplayLanguage?: string;

    DisplayTitle?: string;

    ExtendedVideoSubType?:
      | 'None'
      | 'Hdr10'
      | 'HyperLogGamma'
      | 'Hdr10Plus0'
      | 'DoviProfile02'
      | 'DoviProfile10'
      | 'DoviProfile22'
      | 'DoviProfile30'
      | 'DoviProfile42'
      | 'DoviProfile50'
      | 'DoviProfile61'
      | 'DoviProfile76'
      | 'DoviProfile81'
      | 'DoviProfile82'
      | 'DoviProfile83'
      | 'DoviProfile84'
      | 'DoviProfile85'
      | 'DoviProfile92';

    ExtendedVideoSubTypeDescription?: string;

    ExtendedVideoType?: 'None' | 'Hdr10' | 'Hdr10Plus' | 'HyperLogGamma' | 'DolbyVision';

    Extradata?: string;

    Height?: number | null;

    Index?: number;

    IsAnamorphic?: boolean | null;

    /**
     * @deprecated
     */
    IsAVC?: boolean | null;

    IsDefault?: boolean;

    IsExternal?: boolean;

    IsExternalUrl?: boolean | null;

    IsForced?: boolean;

    IsHearingImpaired?: boolean;

    IsInterlaced?: boolean;

    IsTextSubtitleStream?: boolean;

    ItemId?: string;

    Language?: string;

    Level?: number | null;

    MimeType?: string;

    NalLengthSize?: string;

    Path?: string;

    PixelFormat?: string;

    Profile?: string;

    Protocol?: LiveStreamsAPI.MediaProtocol;

    RealFrameRate?: number | null;

    RefFrames?: number | null;

    Rotation?: number | null;

    SampleRate?: number | null;

    ServerId?: string;

    StreamStartTimeTicks?: number | null;

    SubtitleLocationType?: 'InternalStream' | 'VideoSideData';

    SupportsExternalStream?: boolean;

    TimeBase?: string;

    Title?: string;

    Type?: 'Unknown' | 'Audio' | 'Video' | 'Subtitle' | 'EmbeddedImage' | 'Attachment' | 'Data';

    VideoRange?: string;

    Width?: number | null;
  }
}

export interface LiveStreamOpenResponse {
  MediaSource?: MediaSourceInfo;
}

export interface LiveStreamCloseParams {
  /**
   * LiveStreamId
   */
  LiveStreamId: string;
}

export interface LiveStreamGetMediaInfoParams {
  /**
   * LiveStreamId
   */
  LiveStreamId: string;
}

export interface LiveStreamOpenParams {
  AllowAudioStreamCopy?: boolean;

  AllowInterlacedVideoStreamCopy?: boolean;

  AllowVideoStreamCopy?: boolean;

  AudioStreamIndex?: number | null;

  DeviceProfile?: DeviceProfile;

  DirectPlayProtocols?: Array<MediaProtocol>;

  EnableDirectPlay?: boolean;

  EnableDirectStream?: boolean;

  EnableTranscoding?: boolean;

  ItemId?: number;

  MaxAudioChannels?: number | null;

  MaxStreamingBitrate?: number | null;

  OpenToken?: string;

  PlaySessionId?: string;

  StartTimeTicks?: number | null;

  SubtitleStreamIndex?: number | null;

  UserId?: string;
}

export declare namespace LiveStreams {
  export {
    type DeviceProfile as DeviceProfile,
    type MediaProtocol as MediaProtocol,
    type MediaSourceInfo as MediaSourceInfo,
    type LiveStreamOpenResponse as LiveStreamOpenResponse,
    type LiveStreamCloseParams as LiveStreamCloseParams,
    type LiveStreamGetMediaInfoParams as LiveStreamGetMediaInfoParams,
    type LiveStreamOpenParams as LiveStreamOpenParams,
  };
}
