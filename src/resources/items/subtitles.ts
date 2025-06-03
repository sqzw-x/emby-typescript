// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subtitles extends APIResource {
  /**
   * Requires authentication as user
   */
  delete(index: number, params: SubtitleDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { Id, MediaSourceId } = params;
    return this._client.delete(path`/Items/${Id}/Subtitles/${index}`, {
      query: { MediaSourceId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  deleteExternal(
    index: number,
    params: SubtitleDeleteExternalParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, MediaSourceId } = params;
    return this._client.post(path`/Items/${Id}/Subtitles/${index}/Delete`, {
      query: { MediaSourceId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  stream(format: string, params: SubtitleStreamParams, options?: RequestOptions): APIPromise<void> {
    const { Id, MediaSourceId, Index, ...query } = params;
    return this._client.get(path`/Items/${Id}/${MediaSourceId}/Subtitles/${Index}/Stream.${format}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  streamWithPosition(
    format: string,
    params: SubtitleStreamWithPositionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, MediaSourceId, Index, StartPositionTicks, ...query } = params;
    return this._client.get(
      path`/Items/${Id}/${MediaSourceId}/Subtitles/${Index}/${StartPositionTicks}/Stream.${format}`,
      { query, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
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

export interface SubtitleDeleteExternalParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: MediaSourceId
   */
  MediaSourceId: string;
}

export interface SubtitleStreamParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Path param: MediaSourceId
   */
  MediaSourceId: string;

  /**
   * Path param: The subtitle stream index
   */
  Index: number;

  /**
   * Query param: CopyTimestamps
   */
  CopyTimestamps?: boolean;

  /**
   * Query param: EndPositionTicks
   */
  EndPositionTicks?: number | null;

  /**
   * Query param: StartPositionTicks
   */
  StartPositionTicks?: number;
}

export interface SubtitleStreamWithPositionParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Path param: MediaSourceId
   */
  MediaSourceId: string;

  /**
   * Path param: The subtitle stream index
   */
  Index: number;

  /**
   * Path param: StartPositionTicks
   */
  StartPositionTicks: number;

  /**
   * Query param: CopyTimestamps
   */
  CopyTimestamps?: boolean;

  /**
   * Query param: EndPositionTicks
   */
  EndPositionTicks?: number | null;
}

export declare namespace Subtitles {
  export {
    type SubtitleDeleteParams as SubtitleDeleteParams,
    type SubtitleDeleteExternalParams as SubtitleDeleteExternalParams,
    type SubtitleStreamParams as SubtitleStreamParams,
    type SubtitleStreamWithPositionParams as SubtitleStreamWithPositionParams,
  };
}
