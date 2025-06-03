// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Features extends APIResource {
  /**
   * Requires authentication as administrator
   */
  list(options?: RequestOptions): APIPromise<FeatureListResponse> {
    return this._client.get('/Features', options);
  }
}

export type FeatureListResponse = Array<FeatureListResponse.FeatureListResponseItem>;

export namespace FeatureListResponse {
  export interface FeatureListResponseItem {
    FeatureType?: 'System' | 'User';

    Id?: string;

    Name?: string;
  }
}

export declare namespace Features {
  export { type FeatureListResponse as FeatureListResponse };
}
