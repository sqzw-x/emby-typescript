// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TunerHostsAPI from './tuner-hosts';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tuners extends APIResource {
  /**
   * Requires authentication as user
   */
  discover(options?: RequestOptions): APIPromise<TunerDiscoverResponse> {
    return this._client.get('/LiveTv/Tuners/Discvover', options);
  }

  /**
   * Requires authentication as administrator
   */
  reset(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/LiveTv/Tuners/${id}/Reset`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type TunerDiscoverResponse = Array<TunerHostsAPI.TunerHostInfo>;

export declare namespace Tuners {
  export { type TunerDiscoverResponse as TunerDiscoverResponse };
}
