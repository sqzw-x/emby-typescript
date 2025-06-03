// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StreamAPI from './stream';
import {
  Stream,
  StreamRetrieveParams,
  StreamRetrieveWithContainerParams,
  SubtitleDeliveryMethod,
} from './stream';
import * as UniversalAPI from './universal';
import { Universal, UniversalRetrieveParams, UniversalRetrieveWithContainerParams } from './universal';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Audio extends APIResource {
  universal: UniversalAPI.Universal = new UniversalAPI.Universal(this._client);
  stream: StreamAPI.Stream = new StreamAPI.Stream(this._client);

  /**
   * Requires authentication as user
   */
  retrieveHlsSegment(
    segmentContainer: string,
    params: AudioRetrieveHlsSegmentParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, PlaylistId, SegmentId } = params;
    return this._client.get(path`/Audio/${Id}/hls/${PlaylistId}/${SegmentId}.${segmentContainer}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveHls1Segment(
    segmentContainer: string,
    params: AudioRetrieveHls1SegmentParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, PlaylistId, SegmentId } = params;
    return this._client.get(path`/Audio/${Id}/hls1/${PlaylistId}/${SegmentId}.${segmentContainer}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveLiveStream(
    id: string,
    query: AudioRetrieveLiveStreamParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Audio/${id}/live.m3u8`, {
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
    query: AudioRetrieveMainStreamParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Audio/${id}/main.m3u8`, {
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
    query: AudioRetrieveMasterStreamParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Audio/${id}/master.m3u8`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveStreamFile(
    streamFileName: string,
    params: AudioRetrieveStreamFileParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, ...query } = params;
    return this._client.get(path`/Audio/${Id}/${streamFileName}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AudioRetrieveHlsSegmentParams {
  Id: string;

  PlaylistId: string;

  SegmentId: string;
}

export interface AudioRetrieveHls1SegmentParams {
  Id: string;

  PlaylistId: string;

  SegmentId: string;
}

export interface AudioRetrieveLiveStreamParams {
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

export interface AudioRetrieveMainStreamParams {
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

export interface AudioRetrieveMasterStreamParams {
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

export interface AudioRetrieveStreamFileParams {
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

Audio.Universal = Universal;
Audio.Stream = Stream;

export declare namespace Audio {
  export {
    type AudioRetrieveHlsSegmentParams as AudioRetrieveHlsSegmentParams,
    type AudioRetrieveHls1SegmentParams as AudioRetrieveHls1SegmentParams,
    type AudioRetrieveLiveStreamParams as AudioRetrieveLiveStreamParams,
    type AudioRetrieveMainStreamParams as AudioRetrieveMainStreamParams,
    type AudioRetrieveMasterStreamParams as AudioRetrieveMasterStreamParams,
    type AudioRetrieveStreamFileParams as AudioRetrieveStreamFileParams,
  };

  export {
    Universal as Universal,
    type UniversalRetrieveParams as UniversalRetrieveParams,
    type UniversalRetrieveWithContainerParams as UniversalRetrieveWithContainerParams,
  };

  export {
    Stream as Stream,
    type SubtitleDeliveryMethod as SubtitleDeliveryMethod,
    type StreamRetrieveParams as StreamRetrieveParams,
    type StreamRetrieveWithContainerParams as StreamRetrieveWithContainerParams,
  };
}
