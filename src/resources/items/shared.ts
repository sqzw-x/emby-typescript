// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Shared extends APIResource {
  /**
   * Requires authentication as user
   */
  leave(body: SharedLeaveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Items/Shared/Leave', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SharedLeaveParams {
  ItemIds?: Array<string>;

  UserId?: string;
}

export declare namespace Shared {
  export { type SharedLeaveParams as SharedLeaveParams };
}
