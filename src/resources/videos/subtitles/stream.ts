// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Stream extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieve(format: string, params: StreamRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { Id, MediaSourceId, Index, ...query } = params;
    return this._client.get(path`/Videos/${Id}/${MediaSourceId}/Subtitles/${Index}/Stream.${format}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveWithPosition(
    format: string,
    params: StreamRetrieveWithPositionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, MediaSourceId, Index, StartPositionTicks, ...query } = params;
    return this._client.get(
      path`/Videos/${Id}/${MediaSourceId}/Subtitles/${Index}/${StartPositionTicks}/Stream.${format}`,
      { query, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface StreamRetrieveParams {
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

export interface StreamRetrieveWithPositionParams {
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

export declare namespace Stream {
  export {
    type StreamRetrieveParams as StreamRetrieveParams,
    type StreamRetrieveWithPositionParams as StreamRetrieveWithPositionParams,
  };
}
