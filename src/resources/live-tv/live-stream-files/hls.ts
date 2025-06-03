// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Hls extends APIResource {
  /**
   * Requires authentication as user
   */
  getLive(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/LiveTv/LiveStreamFiles/${id}/hls/live.m3u8`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  getMaster(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/LiveTv/LiveStreamFiles/${id}/hls/master.m3u8`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  getSegment(segment: string, params: HlGetSegmentParams, options?: RequestOptions): APIPromise<void> {
    const { Id } = params;
    return this._client.get(path`/LiveTv/LiveStreamFiles/${Id}/hls/${segment}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface HlGetSegmentParams {
  Id: string;
}

export declare namespace Hls {
  export { type HlGetSegmentParams as HlGetSegmentParams };
}
