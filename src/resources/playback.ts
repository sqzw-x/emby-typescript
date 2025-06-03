// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Playback extends APIResource {
  /**
   * Requires authentication as user
   */
  bitrateTest(query: PlaybackBitrateTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/Playback/BitrateTest', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PlaybackBitrateTestParams {
  /**
   * Size
   */
  Size: number;
}

export declare namespace Playback {
  export { type PlaybackBitrateTestParams as PlaybackBitrateTestParams };
}
