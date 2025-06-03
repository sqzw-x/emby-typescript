// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HlsAPI from './hls';
import { HlGetSegmentParams, Hls } from './hls';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class LiveStreamFiles extends APIResource {
  hls: HlsAPI.Hls = new HlsAPI.Hls(this._client);

  /**
   * Requires authentication as user
   */
  retrieve(
    container: string,
    params: LiveStreamFileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id } = params;
    return this._client.get(path`/LiveTv/LiveStreamFiles/${Id}/stream.${container}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LiveStreamFileRetrieveParams {
  Id: string;
}

LiveStreamFiles.Hls = Hls;

export declare namespace LiveStreamFiles {
  export { type LiveStreamFileRetrieveParams as LiveStreamFileRetrieveParams };

  export { Hls as Hls, type HlGetSegmentParams as HlGetSegmentParams };
}
