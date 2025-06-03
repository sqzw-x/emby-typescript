// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StreamAPI from './stream';
import { Stream, StreamRetrieveParams, StreamRetrieveWithPositionParams } from './stream';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subtitles extends APIResource {
  stream: StreamAPI.Stream = new StreamAPI.Stream(this._client);

  /**
   * Requires authentication as user
   */
  delete(index: number, params: SubtitleDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { Id, MediaSourceId } = params;
    return this._client.delete(path`/Videos/${Id}/Subtitles/${index}`, {
      query: { MediaSourceId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  deleteActive(
    index: number,
    params: SubtitleDeleteActiveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, MediaSourceId } = params;
    return this._client.post(path`/Videos/${Id}/Subtitles/${index}/Delete`, {
      query: { MediaSourceId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubtitleDeleteParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: MediaSourceId
   */
  MediaSourceId: string;
}

export interface SubtitleDeleteActiveParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: MediaSourceId
   */
  MediaSourceId: string;
}

Subtitles.Stream = Stream;

export declare namespace Subtitles {
  export {
    type SubtitleDeleteParams as SubtitleDeleteParams,
    type SubtitleDeleteActiveParams as SubtitleDeleteActiveParams,
  };

  export {
    Stream as Stream,
    type StreamRetrieveParams as StreamRetrieveParams,
    type StreamRetrieveWithPositionParams as StreamRetrieveWithPositionParams,
  };
}
