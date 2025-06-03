// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StreamAPI from '../audio/stream';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Profiles extends APIResource {
  /**
   * Requires authentication as administrator
   */
  create(body: ProfileCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Dlna/Profiles', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DlnaProfile> {
    return this._client.get(path`/Dlna/Profiles/${id}`, options);
  }

  /**
   * Requires authentication as administrator
   */
  update(id: string, body: ProfileUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Dlna/Profiles/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/Dlna/Profiles/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  retrieveDefault(options?: RequestOptions): APIPromise<DlnaProfile> {
    return this._client.get('/Dlna/Profiles/Default', options);
  }
}

export interface CodecProfile {
  ApplyConditions?: Array<ProfileCondition>;

  Codec?: string;

  Conditions?: Array<ProfileCondition>;

  Container?: string;

  Type?: 'Video' | 'VideoAudio' | 'Audio';
}

export interface ContainerProfile {
  Conditions?: Array<ProfileCondition>;

  Container?: string;

  Type?: DlnaProfileType;
}

export interface DirectPlayProfile {
  AudioCodec?: string;

  Container?: string;

  Type?: DlnaProfileType;

  VideoCodec?: string;
}

export interface DlnaProfile {
  AlbumArtPn?: string;

  CodecProfiles?: Array<CodecProfile>;

  ContainerProfiles?: Array<ContainerProfile>;

  DirectPlayProfiles?: Array<DirectPlayProfile>;

  EnableAlbumArtInDidl?: boolean;

  EnableSingleAlbumArtLimit?: boolean;

  EnableSingleSubtitleLimit?: boolean;

  FriendlyName?: string;

  Id?: string;

  Identification?: DlnaProfile.Identification;

  IgnoreTranscodeByteRangeRequests?: boolean;

  Manufacturer?: string;

  ManufacturerUrl?: string;

  MaxAlbumArtHeight?: number;

  MaxAlbumArtWidth?: number;

  MaxIconHeight?: number | null;

  MaxIconWidth?: number | null;

  MaxStaticMusicBitrate?: number | null;

  MaxStreamingBitrate?: number | null;

  ModelDescription?: string;

  ModelName?: string;

  ModelNumber?: string;

  ModelUrl?: string;

  MusicStreamingTranscodingBitrate?: number | null;

  Name?: string;

  Path?: string;

  ProtocolInfo?: string;

  ProtocolInfoDetection?: DlnaProfile.ProtocolInfoDetection;

  RequiresPlainFolders?: boolean;

  RequiresPlainVideoItems?: boolean;

  ResponseProfiles?: Array<ResponseProfile>;

  SerialNumber?: string;

  SubtitleProfiles?: Array<SubtitleProfile>;

  SupportedMediaTypes?: string;

  SupportsSamsungBookmark?: boolean;

  TimelineOffsetSeconds?: number;

  TranscodingProfiles?: Array<TranscodingProfile>;

  Type?: 'System' | 'User';

  UserId?: string;
}

export namespace DlnaProfile {
  export interface Identification {
    DeviceDescription?: string;

    FriendlyName?: string;

    Headers?: Array<Identification.Header>;

    Manufacturer?: string;

    ManufacturerUrl?: string;

    ModelDescription?: string;

    ModelName?: string;

    ModelNumber?: string;

    ModelUrl?: string;

    SerialNumber?: string;
  }

  export namespace Identification {
    export interface Header {
      Match?: 'Equals' | 'Regex' | 'Substring';

      Name?: string;

      Value?: string;
    }
  }

  export interface ProtocolInfoDetection {
    EnabledForAudio?: boolean;

    EnabledForPhotos?: boolean;

    EnabledForVideo?: boolean;
  }
}

export type DlnaProfileType = 'Audio' | 'Video' | 'Photo';

export interface ProfileCondition {
  Condition?: 'Equals' | 'NotEquals' | 'LessThanEqual' | 'GreaterThanEqual' | 'EqualsAny';

  IsRequired?: boolean;

  Property?:
    | 'AudioChannels'
    | 'AudioBitrate'
    | 'AudioProfile'
    | 'Width'
    | 'Height'
    | 'Has64BitOffsets'
    | 'PacketLength'
    | 'VideoBitDepth'
    | 'VideoBitrate'
    | 'VideoFramerate'
    | 'VideoLevel'
    | 'VideoProfile'
    | 'VideoTimestamp'
    | 'IsAnamorphic'
    | 'RefFrames'
    | 'NumAudioStreams'
    | 'NumVideoStreams'
    | 'IsSecondaryAudio'
    | 'VideoCodecTag'
    | 'IsAvc'
    | 'IsInterlaced'
    | 'AudioSampleRate'
    | 'AudioBitDepth'
    | 'VideoRange'
    | 'VideoRotation';

  Value?: string;
}

export interface ResponseProfile {
  AudioCodec?: string;

  Conditions?: Array<ProfileCondition>;

  Container?: string;

  MimeType?: string;

  OrgPn?: string;

  Type?: DlnaProfileType;

  VideoCodec?: string;
}

export interface SubtitleProfile {
  Container?: string;

  DidlMode?: string;

  Format?: string;

  Language?: string;

  Method?: StreamAPI.SubtitleDeliveryMethod;

  Protocol?: string;
}

export interface TranscodingProfile {
  AllowInterlacedVideoStreamCopy?: boolean;

  AudioCodec?: string;

  BreakOnNonKeyFrames?: boolean;

  Container?: string;

  Context?: 'Streaming' | 'Static';

  CopyTimestamps?: boolean;

  EnableMpegtsM2TsMode?: boolean;

  EstimateContentLength?: boolean;

  FillEmptySubtitleSegments?: boolean;

  ManifestSubtitles?: string;

  MaxAudioChannels?: string;

  MaxHeight?: number;

  MaxManifestSubtitles?: number;

  MaxWidth?: number;

  MinSegments?: number;

  Protocol?: string;

  SegmentLength?: number;

  TranscodeSeekInfo?: 'Auto' | 'Bytes';

  Type?: DlnaProfileType;

  VideoCodec?: string;
}

export interface ProfileCreateParams {
  AlbumArtPn?: string;

  CodecProfiles?: Array<CodecProfile>;

  ContainerProfiles?: Array<ContainerProfile>;

  DirectPlayProfiles?: Array<DirectPlayProfile>;

  EnableAlbumArtInDidl?: boolean;

  EnableSingleAlbumArtLimit?: boolean;

  EnableSingleSubtitleLimit?: boolean;

  FriendlyName?: string;

  Id?: string;

  Identification?: ProfileCreateParams.Identification;

  IgnoreTranscodeByteRangeRequests?: boolean;

  Manufacturer?: string;

  ManufacturerUrl?: string;

  MaxAlbumArtHeight?: number;

  MaxAlbumArtWidth?: number;

  MaxIconHeight?: number | null;

  MaxIconWidth?: number | null;

  MaxStaticMusicBitrate?: number | null;

  MaxStreamingBitrate?: number | null;

  ModelDescription?: string;

  ModelName?: string;

  ModelNumber?: string;

  ModelUrl?: string;

  MusicStreamingTranscodingBitrate?: number | null;

  Name?: string;

  Path?: string;

  ProtocolInfo?: string;

  ProtocolInfoDetection?: ProfileCreateParams.ProtocolInfoDetection;

  RequiresPlainFolders?: boolean;

  RequiresPlainVideoItems?: boolean;

  ResponseProfiles?: Array<ResponseProfile>;

  SerialNumber?: string;

  SubtitleProfiles?: Array<SubtitleProfile>;

  SupportedMediaTypes?: string;

  SupportsSamsungBookmark?: boolean;

  TimelineOffsetSeconds?: number;

  TranscodingProfiles?: Array<TranscodingProfile>;

  Type?: 'System' | 'User';

  UserId?: string;
}

export namespace ProfileCreateParams {
  export interface Identification {
    DeviceDescription?: string;

    FriendlyName?: string;

    Headers?: Array<Identification.Header>;

    Manufacturer?: string;

    ManufacturerUrl?: string;

    ModelDescription?: string;

    ModelName?: string;

    ModelNumber?: string;

    ModelUrl?: string;

    SerialNumber?: string;
  }

  export namespace Identification {
    export interface Header {
      Match?: 'Equals' | 'Regex' | 'Substring';

      Name?: string;

      Value?: string;
    }
  }

  export interface ProtocolInfoDetection {
    EnabledForAudio?: boolean;

    EnabledForPhotos?: boolean;

    EnabledForVideo?: boolean;
  }
}

export interface ProfileUpdateParams {
  AlbumArtPn?: string;

  CodecProfiles?: Array<CodecProfile>;

  ContainerProfiles?: Array<ContainerProfile>;

  DirectPlayProfiles?: Array<DirectPlayProfile>;

  EnableAlbumArtInDidl?: boolean;

  EnableSingleAlbumArtLimit?: boolean;

  EnableSingleSubtitleLimit?: boolean;

  FriendlyName?: string;

  body_Id?: string;

  Identification?: ProfileUpdateParams.Identification;

  IgnoreTranscodeByteRangeRequests?: boolean;

  Manufacturer?: string;

  ManufacturerUrl?: string;

  MaxAlbumArtHeight?: number;

  MaxAlbumArtWidth?: number;

  MaxIconHeight?: number | null;

  MaxIconWidth?: number | null;

  MaxStaticMusicBitrate?: number | null;

  MaxStreamingBitrate?: number | null;

  ModelDescription?: string;

  ModelName?: string;

  ModelNumber?: string;

  ModelUrl?: string;

  MusicStreamingTranscodingBitrate?: number | null;

  Name?: string;

  Path?: string;

  ProtocolInfo?: string;

  ProtocolInfoDetection?: ProfileUpdateParams.ProtocolInfoDetection;

  RequiresPlainFolders?: boolean;

  RequiresPlainVideoItems?: boolean;

  ResponseProfiles?: Array<ResponseProfile>;

  SerialNumber?: string;

  SubtitleProfiles?: Array<SubtitleProfile>;

  SupportedMediaTypes?: string;

  SupportsSamsungBookmark?: boolean;

  TimelineOffsetSeconds?: number;

  TranscodingProfiles?: Array<TranscodingProfile>;

  Type?: 'System' | 'User';

  UserId?: string;
}

export namespace ProfileUpdateParams {
  export interface Identification {
    DeviceDescription?: string;

    FriendlyName?: string;

    Headers?: Array<Identification.Header>;

    Manufacturer?: string;

    ManufacturerUrl?: string;

    ModelDescription?: string;

    ModelName?: string;

    ModelNumber?: string;

    ModelUrl?: string;

    SerialNumber?: string;
  }

  export namespace Identification {
    export interface Header {
      Match?: 'Equals' | 'Regex' | 'Substring';

      Name?: string;

      Value?: string;
    }
  }

  export interface ProtocolInfoDetection {
    EnabledForAudio?: boolean;

    EnabledForPhotos?: boolean;

    EnabledForVideo?: boolean;
  }
}

export declare namespace Profiles {
  export {
    type CodecProfile as CodecProfile,
    type ContainerProfile as ContainerProfile,
    type DirectPlayProfile as DirectPlayProfile,
    type DlnaProfile as DlnaProfile,
    type DlnaProfileType as DlnaProfileType,
    type ProfileCondition as ProfileCondition,
    type ResponseProfile as ResponseProfile,
    type SubtitleProfile as SubtitleProfile,
    type TranscodingProfile as TranscodingProfile,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
  };
}
