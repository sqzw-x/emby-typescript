// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StreamAPI from '../audio/stream';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Stream extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieve(id: string, query: StreamRetrieveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Videos/${id}/stream`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveStream(
    container: string,
    params: StreamRetrieveStreamParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, ...query } = params;
    return this._client.get(path`/Videos/${Id}/stream.${container}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface StreamRetrieveParams {
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

export interface StreamRetrieveStreamParams {
  /**
   * Path param: Item Id
   */
  Id: string;

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

export declare namespace Stream {
  export {
    type StreamRetrieveParams as StreamRetrieveParams,
    type StreamRetrieveStreamParams as StreamRetrieveStreamParams,
  };
}
