// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TrackSelections extends APIResource {
  /**
   * Requires authentication as user
   */
  delete(trackType: string, params: TrackSelectionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { Id } = params;
    return this._client.post(path`/Users/${Id}/TrackSelections/${trackType}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TrackSelectionDeleteParams {
  Id: string;
}

export declare namespace TrackSelections {
  export { type TrackSelectionDeleteParams as TrackSelectionDeleteParams };
}
