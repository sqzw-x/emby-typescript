// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class SchedulesDirect extends APIResource {
  /**
   * Requires authentication as administrator
   */
  listCountries(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/LiveTv/ListingProviders/SchedulesDirect/Countries', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
