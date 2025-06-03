// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Media extends APIResource {
  /**
   * Requires authentication as user
   */
  reportUpdated(body: MediaReportUpdatedParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/Media/Updated', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MediaReportUpdatedParams {
  Updates?: Array<MediaReportUpdatedParams.Update>;
}

export namespace MediaReportUpdatedParams {
  export interface Update {
    Path?: string;

    UpdateType?: string;
  }
}

export declare namespace Media {
  export { type MediaReportUpdatedParams as MediaReportUpdatedParams };
}
