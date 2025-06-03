// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SessionsAPI from './sessions';
import * as ArtistsAPI from '../artists/artists';
import * as CapabilitiesAPI from './capabilities';
import { Capabilities, CapabilityUpdateFullParams, CapabilityUpdateParams } from './capabilities';
import * as CommandAPI from './command';
import { Command, CommandIssueCommandParams, CommandIssueSpecificCommandParams } from './command';
import * as PlayingAPI from './playing';
import {
  Playing,
  PlayingIssuePlaystateCommandParams,
  PlayingPingParams,
  PlayingPlayItemParams,
  PlayingReportProgressParams,
  PlayingReportStartedParams,
  PlayingReportStoppedParams,
  PlaystateCommand,
  ProgressEvent,
  QueueItem,
} from './playing';
import * as UsersAPI from './users';
import { UserAddUserParams, UserDeleteUserParams, UserRemoveUserParams, Users } from './users';
import * as PlayingItemsAPI from '../users/playing-items';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sessions extends APIResource {
  capabilities: CapabilitiesAPI.Capabilities = new CapabilitiesAPI.Capabilities(this._client);
  playing: PlayingAPI.Playing = new PlayingAPI.Playing(this._client);
  command: CommandAPI.Command = new CommandAPI.Command(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Requires authentication as user
   */
  list(
    query: SessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionListResponse> {
    return this._client.get('/Sessions', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getPlayQueue(
    query: SessionGetPlayQueueParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get('/Sessions/PlayQueue', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  issueSystemCommand(
    command: string,
    params: SessionIssueSystemCommandParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id } = params;
    return this._client.post(path`/Sessions/${Id}/System/${command}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  logout(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Sessions/Logout', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  sendMessage(id: string, params: SessionSendMessageParams, options?: RequestOptions): APIPromise<void> {
    const { Header, Text, TimeoutMs } = params;
    return this._client.post(path`/Sessions/${id}/Message`, {
      query: { Header, Text, TimeoutMs },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  viewItem(id: string, params: SessionViewItemParams, options?: RequestOptions): APIPromise<void> {
    const { ItemId, ItemName, ItemType } = params;
    return this._client.post(path`/Sessions/${id}/Viewing`, {
      query: { ItemId, ItemName, ItemType },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SessionInfo {
  AdditionalUsers?: Array<SessionInfo.AdditionalUser>;

  AppIconUrl?: string;

  ApplicationVersion?: string;

  Client?: string;

  DeviceId?: string;

  DeviceName?: string;

  DeviceType?: string;

  Id?: string;

  InternalDeviceId?: number;

  LastActivityDate?: string;

  NowPlayingItem?: ArtistsAPI.BaseItem;

  PlayableMediaTypes?: Array<string>;

  PlaylistIndex?: number;

  PlaylistItemId?: string;

  PlaylistLength?: number;

  PlayState?: SessionInfo.PlayState;

  Protocol?: string;

  RemoteEndPoint?: string;

  ServerId?: string;

  SupportedCommands?: Array<string>;

  SupportsRemoteControl?: boolean;

  TranscodingInfo?: SessionInfo.TranscodingInfo;

  UserId?: string;

  UserName?: string;

  UserPrimaryImageTag?: string;
}

export namespace SessionInfo {
  export interface AdditionalUser {
    UserId?: string;

    UserInternalId?: number;

    UserName?: string;
  }

  export interface PlayState {
    AudioStreamIndex?: number | null;

    CanSeek?: boolean;

    IsMuted?: boolean;

    IsPaused?: boolean;

    MediaSourceId?: string;

    PlaybackRate?: number;

    PlayMethod?: PlayingItemsAPI.PlayMethod;

    PositionTicks?: number | null;

    RepeatMode?: PlayingItemsAPI.RepeatMode;

    Shuffle?: boolean;

    SubtitleOffset?: number;

    SubtitleStreamIndex?: number | null;

    VolumeLevel?: number | null;
  }

  export interface TranscodingInfo {
    AudioBitrate?: number | null;

    AudioChannels?: number | null;

    AudioCodec?: string;

    /**
     * @deprecated Deprecated, please use ProcessStatistics instead
     */
    AverageCpuUsage?: number | null;

    Bitrate?: number | null;

    CompletionPercentage?: number | null;

    Container?: string;

    /**
     * @deprecated Deprecated, please use ProcessStatistics instead
     */
    CpuHistory?: Array<TranscodingInfo.CPUHistory>;

    /**
     * @deprecated Deprecated, please use ProcessStatistics instead
     */
    CurrentCpuUsage?: number | null;

    CurrentThrottle?: number | null;

    Framerate?: number | null;

    Height?: number | null;

    IsAudioDirect?: boolean;

    IsVideoDirect?: boolean;

    ProcessStatistics?: TranscodingInfo.ProcessStatistics;

    SubProtocol?: string;

    SubtitlePipelineInfos?: Array<Array<SessionsAPI.VpStepInfo>>;

    TranscodeReasons?: Array<
      | 'ContainerNotSupported'
      | 'VideoCodecNotSupported'
      | 'AudioCodecNotSupported'
      | 'ContainerBitrateExceedsLimit'
      | 'AudioBitrateNotSupported'
      | 'AudioChannelsNotSupported'
      | 'VideoResolutionNotSupported'
      | 'UnknownVideoStreamInfo'
      | 'UnknownAudioStreamInfo'
      | 'AudioProfileNotSupported'
      | 'AudioSampleRateNotSupported'
      | 'AnamorphicVideoNotSupported'
      | 'InterlacedVideoNotSupported'
      | 'SecondaryAudioNotSupported'
      | 'RefFramesNotSupported'
      | 'VideoBitDepthNotSupported'
      | 'VideoBitrateNotSupported'
      | 'VideoFramerateNotSupported'
      | 'VideoLevelNotSupported'
      | 'VideoProfileNotSupported'
      | 'AudioBitDepthNotSupported'
      | 'SubtitleCodecNotSupported'
      | 'DirectPlayError'
      | 'VideoRangeNotSupported'
      | 'SubtitleContentOptionsEnabled'
    >;

    TranscodingPositionTicks?: number | null;

    TranscodingStartPositionTicks?: number | null;

    VideoBitrate?: number | null;

    VideoCodec?: string;

    VideoDecoder?: string;

    VideoDecoderHwAccel?: string;

    VideoDecoderIsHardware?: boolean;

    VideoDecoderMediaType?: string;

    VideoEncoder?: string;

    VideoEncoderHwAccel?: string;

    VideoEncoderIsHardware?: boolean;

    VideoEncoderMediaType?: string;

    VideoPipelineInfo?: Array<SessionsAPI.VpStepInfo>;

    Width?: number | null;
  }

  export namespace TranscodingInfo {
    export interface CPUHistory {
      Item1?: number;

      Item2?: number;
    }

    export interface ProcessStatistics {
      AverageCpu?: number;

      CurrentCpu?: number;

      CurrentVirtualMemory?: number;

      CurrentWorkingSet?: number;

      Metrics?: Array<ProcessStatistics.Metric>;
    }

    export namespace ProcessStatistics {
      export interface Metric {
        CpuPercent?: number;

        Time?: string;

        VirtualMemory?: number;

        WorkingSet?: number;
      }
    }
  }
}

export interface VpStepInfo {
  FfmpegDescription?: string;

  FfmpegName?: string;

  FfmpegOptions?: string;

  HardwareContextName?: string;

  IsHardwareContext?: boolean;

  Name?: string;

  Param?: string;

  ParamShort?: string;

  Short?: string;

  StepType?:
    | 'Decoder'
    | 'Encoder'
    | 'Scaling'
    | 'Deinterlace'
    | 'SubtitleOverlay'
    | 'ToneMapping'
    | 'ColorConversion'
    | 'SplitCaptions'
    | 'TextSub2Video'
    | 'GraphicSub2Video'
    | 'GraphicSub2Text'
    | 'BurnInTextSubs'
    | 'BurnInGraphicSubs'
    | 'ScaleSubs'
    | 'TextMod'
    | 'Censor'
    | 'ShowSpeaker'
    | 'StripStyles'
    | 'ConnectTo';

  StepTypeName?: string;
}

export type SessionListResponse = Array<SessionInfo>;

export interface SessionListParams {
  /**
   * Optional. Filter by sessions that a given user is allowed to remote control.
   */
  ControllableByUserId?: string;

  /**
   * Optional. Filter by device id.
   */
  DeviceId?: string;

  /**
   * Optional. Filter by session id.
   */
  Id?: string;
}

export interface SessionGetPlayQueueParams {
  /**
   * Optional. Filter by device id.
   */
  DeviceId?: string;

  /**
   * Optional. Filter by session id.
   */
  Id?: string;
}

export interface SessionIssueSystemCommandParams {
  /**
   * Session Id
   */
  Id: string;
}

export interface SessionSendMessageParams {
  /**
   * The message header.
   */
  Header: string;

  /**
   * The message text.
   */
  Text: string;

  /**
   * The message timeout. If omitted the user will have to confirm viewing the
   * message.
   */
  TimeoutMs?: number | null;
}

export interface SessionViewItemParams {
  /**
   * The Id of the item.
   */
  ItemId: string;

  /**
   * The name of the item.
   */
  ItemName: string;

  /**
   * The type of item to browse to.
   */
  ItemType: string;
}

Sessions.Capabilities = Capabilities;
Sessions.Playing = Playing;
Sessions.Command = Command;
Sessions.Users = Users;

export declare namespace Sessions {
  export {
    type SessionInfo as SessionInfo,
    type VpStepInfo as VpStepInfo,
    type SessionListResponse as SessionListResponse,
    type SessionListParams as SessionListParams,
    type SessionGetPlayQueueParams as SessionGetPlayQueueParams,
    type SessionIssueSystemCommandParams as SessionIssueSystemCommandParams,
    type SessionSendMessageParams as SessionSendMessageParams,
    type SessionViewItemParams as SessionViewItemParams,
  };

  export {
    Capabilities as Capabilities,
    type CapabilityUpdateParams as CapabilityUpdateParams,
    type CapabilityUpdateFullParams as CapabilityUpdateFullParams,
  };

  export {
    Playing as Playing,
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

  export {
    Command as Command,
    type CommandIssueCommandParams as CommandIssueCommandParams,
    type CommandIssueSpecificCommandParams as CommandIssueSpecificCommandParams,
  };

  export {
    Users as Users,
    type UserAddUserParams as UserAddUserParams,
    type UserDeleteUserParams as UserDeleteUserParams,
    type UserRemoveUserParams as UserRemoveUserParams,
  };
}
