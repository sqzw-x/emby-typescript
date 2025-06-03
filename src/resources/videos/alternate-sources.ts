// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AlternateSources extends APIResource {
  /**
   * Requires authentication as administrator
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/Videos/${id}/AlternateSources`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  deleteActive(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Videos/${id}/AlternateSources/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
