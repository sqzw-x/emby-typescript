// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArtistsAPI from '../artists/artists';
import * as StreamAPI from '../audio/stream';
import * as ActiveEncodingsAPI from './active-encodings';
import {
  ActiveEncodingDeleteActiveParams,
  ActiveEncodingDeleteParams,
  ActiveEncodings,
} from './active-encodings';
import * as AlternateSourcesAPI from './alternate-sources';
import { AlternateSources } from './alternate-sources';
import * as VideosStreamAPI from './stream';
import { Stream, StreamRetrieveParams, StreamRetrieveStreamParams } from './stream';
import * as SubtitlesAPI from './subtitles/subtitles';
import { SubtitleDeleteActiveParams, SubtitleDeleteParams, Subtitles } from './subtitles/subtitles';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Videos extends APIResource {
  activeEncodings: ActiveEncodingsAPI.ActiveEncodings = new ActiveEncodingsAPI.ActiveEncodings(this._client);
  alternateSources: AlternateSourcesAPI.AlternateSources = new AlternateSourcesAPI.AlternateSources(
    this._client,
  );
  stream: VideosStreamAPI.Stream = new VideosStreamAPI.Stream(this._client);
  subtitles: SubtitlesAPI.Subtitles = new SubtitlesAPI.Subtitles(this._client);

  /**
   * Requires authentication as administrator
   */
  mergeVersions(
    params: VideoMergeVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Ids } = params ?? {};
    return this._client.post('/Videos/MergeVersions', {
      query: { Ids },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveAdditionalParts(
    id: string,
    query: VideoRetrieveAdditionalPartsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Videos/${id}/AdditionalParts`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  retrieveHlsSegment(
    segmentContainer: string,
    params: VideoRetrieveHlsSegmentParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, PlaylistId, SegmentId } = params;
    return this._client.get(path`/Videos/${Id}/hls/${PlaylistId}/${SegmentId}.${segmentContainer}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveHlsSegment1(
    segmentContainer: string,
    params: VideoRetrieveHlsSegment1Params,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, PlaylistId, SegmentId } = params;
    return this._client.get(path`/Videos/${Id}/hls1/${PlaylistId}/${SegmentId}.${segmentContainer}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveIndexBif(
    id: string,
    query: VideoRetrieveIndexBifParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Videos/${id}/index.bif`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveLiveStream(
    id: string,
    query: VideoRetrieveLiveStreamParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Videos/${id}/live.m3u8`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveLiveSubtitlesPlaylist(
    id: string,
    query: VideoRetrieveLiveSubtitlesPlaylistParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Videos/${id}/live_subtitles.m3u8`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveMainStream(
    id: string,
    query: VideoRetrieveMainStreamParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Videos/${id}/main.m3u8`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveMasterStream(
    id: string,
    query: VideoRetrieveMasterStreamParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Videos/${id}/master.m3u8`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveStream(
    streamFileName: string,
    params: VideoRetrieveStreamParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, ...query } = params;
    return this._client.get(path`/Videos/${Id}/${streamFileName}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveSubtitlesPlaylist(
    id: string,
    query: VideoRetrieveSubtitlesPlaylistParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Videos/${id}/subtitles.m3u8`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VideoMergeVersionsParams {
  /**
   * Item id list. This allows multiple, comma delimited.
   */
  Ids?: string;
}

export interface VideoRetrieveAdditionalPartsParams {
  /**
   * Optional, include image information in output
   */
  EnableImages?: boolean | null;

  /**
   * Optional. The image types to include in the output.
   */
  EnableImageTypes?: string;

  /**
   * Optional, include user data
   */
  EnableUserData?: boolean | null;

  /**
   * Optional. Specify additional fields of information to return in the output. This
   * allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated,
   * Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path,
   * People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios,
   * Taglines, TrailerUrls
   */
  Fields?: string;

  /**
   * Optional, the max number of images to return, per image type
   */
  ImageTypeLimit?: number | null;

  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface VideoRetrieveHlsSegmentParams {
  Id: string;

  PlaylistId: string;

  SegmentId: string;
}

export interface VideoRetrieveHlsSegment1Params {
  Id: string;

  PlaylistId: string;

  SegmentId: string;
}

export interface VideoRetrieveIndexBifParams {
  Width: number;
}

export interface VideoRetrieveLiveStreamParams {
  /**
   * Container
   */
  Container: string;

  /**
   * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this
   * will be left to encoder defaults.
   */
  AudioBitRate?: number | null;

  /**
   * Optional. Specify a specific number of audio channels to encode to, e.g. 2
   */
  AudioChannels?: number | null;

  /**
   * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server
   * will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
   */
  AudioCodec?: string;

  /**
   * Optional. Specify a specific audio sample rate, e.g. 44100
   */
  AudioSampleRate?: number | null;

  /**
   * Optional. The index of the audio stream to use. If omitted the first audio
   * stream will be used.
   */
  AudioStreamIndex?: number | null;

  /**
   * Whether or not to copy timestamps when transcoding with an offset. Defaults to
   * false.
   */
  CopyTimestamps?: boolean;

  /**
   * The device id of the client requesting. Used to stop encoding processes when
   * needed.
   */
  DeviceId?: string;

  /**
   * Optional. The dlna device profile id to utilize.
   */
  DeviceProfileId?: string;

  /**
   * Whether or not to allow automatic stream copy if requested values match the
   * original source. Defaults to true.
   */
  EnableAutoStreamCopy?: boolean;

  /**
   * Optional. The fixed vertical resolution of the encoded video.
   */
  Height?: number | null;

  /**
   * Optional. Specify a maximum number of audio channels to encode to, e.g. 2
   */
  MaxAudioChannels?: number | null;

  /**
   * Optional. The maximum vertical resolution of the encoded video.
   */
  MaxHeight?: number | null;

  /**
   * Optional.
   */
  MaxVideoBitDepth?: number | null;

  /**
   * Optional. The maximum horizontal resolution of the encoded video.
   */
  MaxWidth?: number | null;

  /**
   * Optional. Specify a starting offset, in ticks. 1ms = 10000 ticks.
   */
  StartTimeTicks?: number | null;

  /**
   * Optional. If true, the original file will be streamed statically without any
   * encoding. Use either no url extension or the original file extension. true/false
   */
  Static?: boolean;

  /**
   * Optional. Specify the subtitle delivery method.
   */
  SubtitleMethod?: StreamAPI.SubtitleDeliveryMethod;

  /**
   * Optional. The index of the subtitle stream to use. If omitted no subtitles will
   * be used.
   */
  SubtitleStreamIndex?: number | null;

  /**
   * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this
   * will be left to encoder defaults.
   */
  VideoBitRate?: number | null;

  /**
   * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server
   * will auto-select using the url's extension. Options: h264, mpeg4, theora, vpx,
   * wmv.
   */
  VideoCodec?: string;

  /**
   * Optional. The index of the video stream to use. If omitted the first video
   * stream will be used.
   */
  VideoStreamIndex?: number | null;

  /**
   * Optional. The fixed horizontal resolution of the encoded video.
   */
  Width?: number | null;
}

export interface VideoRetrieveLiveSubtitlesPlaylistParams {
  /**
   * The subtitle segment format
   */
  ManifestSubtitles: string;

  /**
   * The subtitle segment length
   */
  SubtitleSegmentLength: number;
}

export interface VideoRetrieveMainStreamParams {
  /**
   * Container
   */
  Container: string;

  /**
   * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this
   * will be left to encoder defaults.
   */
  AudioBitRate?: number | null;

  /**
   * Optional. Specify a specific number of audio channels to encode to, e.g. 2
   */
  AudioChannels?: number | null;

  /**
   * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server
   * will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
   */
  AudioCodec?: string;

  /**
   * Optional. Specify a specific audio sample rate, e.g. 44100
   */
  AudioSampleRate?: number | null;

  /**
   * Optional. The index of the audio stream to use. If omitted the first audio
   * stream will be used.
   */
  AudioStreamIndex?: number | null;

  /**
   * Whether or not to copy timestamps when transcoding with an offset. Defaults to
   * false.
   */
  CopyTimestamps?: boolean;

  /**
   * The device id of the client requesting. Used to stop encoding processes when
   * needed.
   */
  DeviceId?: string;

  /**
   * Optional. The dlna device profile id to utilize.
   */
  DeviceProfileId?: string;

  /**
   * Whether or not to allow automatic stream copy if requested values match the
   * original source. Defaults to true.
   */
  EnableAutoStreamCopy?: boolean;

  /**
   * Optional. The fixed vertical resolution of the encoded video.
   */
  Height?: number | null;

  /**
   * Optional. Specify a maximum number of audio channels to encode to, e.g. 2
   */
  MaxAudioChannels?: number | null;

  /**
   * Optional. The maximum vertical resolution of the encoded video.
   */
  MaxHeight?: number | null;

  /**
   * Optional.
   */
  MaxVideoBitDepth?: number | null;

  /**
   * Optional. The maximum horizontal resolution of the encoded video.
   */
  MaxWidth?: number | null;

  /**
   * Optional. Specify a starting offset, in ticks. 1ms = 10000 ticks.
   */
  StartTimeTicks?: number | null;

  /**
   * Optional. If true, the original file will be streamed statically without any
   * encoding. Use either no url extension or the original file extension. true/false
   */
  Static?: boolean;

  /**
   * Optional. Specify the subtitle delivery method.
   */
  SubtitleMethod?: StreamAPI.SubtitleDeliveryMethod;

  /**
   * Optional. The index of the subtitle stream to use. If omitted no subtitles will
   * be used.
   */
  SubtitleStreamIndex?: number | null;

  /**
   * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this
   * will be left to encoder defaults.
   */
  VideoBitRate?: number | null;

  /**
   * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server
   * will auto-select using the url's extension. Options: h264, mpeg4, theora, vpx,
   * wmv.
   */
  VideoCodec?: string;

  /**
   * Optional. The index of the video stream to use. If omitted the first video
   * stream will be used.
   */
  VideoStreamIndex?: number | null;

  /**
   * Optional. The fixed horizontal resolution of the encoded video.
   */
  Width?: number | null;
}

export interface VideoRetrieveMasterStreamParams {
  /**
   * Container
   */
  Container: string;

  /**
   * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this
   * will be left to encoder defaults.
   */
  AudioBitRate?: number | null;

  /**
   * Optional. Specify a specific number of audio channels to encode to, e.g. 2
   */
  AudioChannels?: number | null;

  /**
   * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server
   * will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
   */
  AudioCodec?: string;

  /**
   * Optional. Specify a specific audio sample rate, e.g. 44100
   */
  AudioSampleRate?: number | null;

  /**
   * Optional. The index of the audio stream to use. If omitted the first audio
   * stream will be used.
   */
  AudioStreamIndex?: number | null;

  /**
   * Whether or not to copy timestamps when transcoding with an offset. Defaults to
   * false.
   */
  CopyTimestamps?: boolean;

  /**
   * The device id of the client requesting. Used to stop encoding processes when
   * needed.
   */
  DeviceId?: string;

  /**
   * Optional. The dlna device profile id to utilize.
   */
  DeviceProfileId?: string;

  /**
   * Whether or not to allow automatic stream copy if requested values match the
   * original source. Defaults to true.
   */
  EnableAutoStreamCopy?: boolean;

  /**
   * Optional. The fixed vertical resolution of the encoded video.
   */
  Height?: number | null;

  /**
   * Optional. Specify a maximum number of audio channels to encode to, e.g. 2
   */
  MaxAudioChannels?: number | null;

  /**
   * Optional. The maximum vertical resolution of the encoded video.
   */
  MaxHeight?: number | null;

  /**
   * Optional.
   */
  MaxVideoBitDepth?: number | null;

  /**
   * Optional. The maximum horizontal resolution of the encoded video.
   */
  MaxWidth?: number | null;

  /**
   * Optional. Specify a starting offset, in ticks. 1ms = 10000 ticks.
   */
  StartTimeTicks?: number | null;

  /**
   * Optional. If true, the original file will be streamed statically without any
   * encoding. Use either no url extension or the original file extension. true/false
   */
  Static?: boolean;

  /**
   * Optional. Specify the subtitle delivery method.
   */
  SubtitleMethod?: StreamAPI.SubtitleDeliveryMethod;

  /**
   * Optional. The index of the subtitle stream to use. If omitted no subtitles will
   * be used.
   */
  SubtitleStreamIndex?: number | null;

  /**
   * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this
   * will be left to encoder defaults.
   */
  VideoBitRate?: number | null;

  /**
   * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server
   * will auto-select using the url's extension. Options: h264, mpeg4, theora, vpx,
   * wmv.
   */
  VideoCodec?: string;

  /**
   * Optional. The index of the video stream to use. If omitted the first video
   * stream will be used.
   */
  VideoStreamIndex?: number | null;

  /**
   * Optional. The fixed horizontal resolution of the encoded video.
   */
  Width?: number | null;
}

export interface VideoRetrieveStreamParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: Container
   */
  Container: string;

  /**
   * Query param: Optional. Specify an audio bitrate to encode to, e.g. 128000. If
   * omitted this will be left to encoder defaults.
   */
  AudioBitRate?: number | null;

  /**
   * Query param: Optional. Specify a specific number of audio channels to encode to,
   * e.g. 2
   */
  AudioChannels?: number | null;

  /**
   * Query param: Optional. Specify a audio codec to encode to, e.g. mp3. If omitted
   * the server will auto-select using the url's extension. Options: aac, mp3,
   * vorbis, wma.
   */
  AudioCodec?: string;

  /**
   * Query param: Optional. Specify a specific audio sample rate, e.g. 44100
   */
  AudioSampleRate?: number | null;

  /**
   * Query param: Optional. The index of the audio stream to use. If omitted the
   * first audio stream will be used.
   */
  AudioStreamIndex?: number | null;

  /**
   * Query param: Whether or not to copy timestamps when transcoding with an offset.
   * Defaults to false.
   */
  CopyTimestamps?: boolean;

  /**
   * Query param: The device id of the client requesting. Used to stop encoding
   * processes when needed.
   */
  DeviceId?: string;

  /**
   * Query param: Optional. The dlna device profile id to utilize.
   */
  DeviceProfileId?: string;

  /**
   * Query param: Whether or not to allow automatic stream copy if requested values
   * match the original source. Defaults to true.
   */
  EnableAutoStreamCopy?: boolean;

  /**
   * Query param: Optional. The fixed vertical resolution of the encoded video.
   */
  Height?: number | null;

  /**
   * Query param: Optional. Specify a maximum number of audio channels to encode to,
   * e.g. 2
   */
  MaxAudioChannels?: number | null;

  /**
   * Query param: Optional. The maximum vertical resolution of the encoded video.
   */
  MaxHeight?: number | null;

  /**
   * Query param: Optional.
   */
  MaxVideoBitDepth?: number | null;

  /**
   * Query param: Optional. The maximum horizontal resolution of the encoded video.
   */
  MaxWidth?: number | null;

  /**
   * Query param: Optional. Specify a starting offset, in ticks. 1ms = 10000 ticks.
   */
  StartTimeTicks?: number | null;

  /**
   * Query param: Optional. If true, the original file will be streamed statically
   * without any encoding. Use either no url extension or the original file
   * extension. true/false
   */
  Static?: boolean;

  /**
   * Query param: Optional. Specify the subtitle delivery method.
   */
  SubtitleMethod?: StreamAPI.SubtitleDeliveryMethod;

  /**
   * Query param: Optional. The index of the subtitle stream to use. If omitted no
   * subtitles will be used.
   */
  SubtitleStreamIndex?: number | null;

  /**
   * Query param: Optional. Specify a video bitrate to encode to, e.g. 500000. If
   * omitted this will be left to encoder defaults.
   */
  VideoBitRate?: number | null;

  /**
   * Query param: Optional. Specify a video codec to encode to, e.g. h264. If omitted
   * the server will auto-select using the url's extension. Options: h264, mpeg4,
   * theora, vpx, wmv.
   */
  VideoCodec?: string;

  /**
   * Query param: Optional. The index of the video stream to use. If omitted the
   * first video stream will be used.
   */
  VideoStreamIndex?: number | null;

  /**
   * Query param: Optional. The fixed horizontal resolution of the encoded video.
   */
  Width?: number | null;
}

export interface VideoRetrieveSubtitlesPlaylistParams {
  /**
   * The subtitle segment format
   */
  ManifestSubtitles: string;

  /**
   * The subtitle segment length
   */
  SubtitleSegmentLength: number;
}

Videos.ActiveEncodings = ActiveEncodings;
Videos.AlternateSources = AlternateSources;
Videos.Stream = Stream;
Videos.Subtitles = Subtitles;

export declare namespace Videos {
  export {
    type VideoMergeVersionsParams as VideoMergeVersionsParams,
    type VideoRetrieveAdditionalPartsParams as VideoRetrieveAdditionalPartsParams,
    type VideoRetrieveHlsSegmentParams as VideoRetrieveHlsSegmentParams,
    type VideoRetrieveHlsSegment1Params as VideoRetrieveHlsSegment1Params,
    type VideoRetrieveIndexBifParams as VideoRetrieveIndexBifParams,
    type VideoRetrieveLiveStreamParams as VideoRetrieveLiveStreamParams,
    type VideoRetrieveLiveSubtitlesPlaylistParams as VideoRetrieveLiveSubtitlesPlaylistParams,
    type VideoRetrieveMainStreamParams as VideoRetrieveMainStreamParams,
    type VideoRetrieveMasterStreamParams as VideoRetrieveMasterStreamParams,
    type VideoRetrieveStreamParams as VideoRetrieveStreamParams,
    type VideoRetrieveSubtitlesPlaylistParams as VideoRetrieveSubtitlesPlaylistParams,
  };

  export {
    ActiveEncodings as ActiveEncodings,
    type ActiveEncodingDeleteParams as ActiveEncodingDeleteParams,
    type ActiveEncodingDeleteActiveParams as ActiveEncodingDeleteActiveParams,
  };

  export { AlternateSources as AlternateSources };

  export {
    Stream as Stream,
    type StreamRetrieveParams as StreamRetrieveParams,
    type StreamRetrieveStreamParams as StreamRetrieveStreamParams,
  };

  export {
    Subtitles as Subtitles,
    type SubtitleDeleteParams as SubtitleDeleteParams,
    type SubtitleDeleteActiveParams as SubtitleDeleteActiveParams,
  };
}
