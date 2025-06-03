// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Installing extends APIResource {
  /**
   * Requires authentication as administrator
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/Packages/Installing/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  cancelInstallation(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Packages/Installing/${id}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
