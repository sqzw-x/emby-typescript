// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HlsAPI from './hls';
import { HlGetSegmentParams, Hls } from './hls';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class LiveRecordings extends APIResource {
  hls: HlsAPI.Hls = new HlsAPI.Hls(this._client);

  /**
   * Requires authentication as user
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/LiveTv/LiveRecordings/${id}/stream`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

LiveRecordings.Hls = Hls;

export declare namespace LiveRecordings {
  export { Hls as Hls, type HlGetSegmentParams as HlGetSegmentParams };
}
