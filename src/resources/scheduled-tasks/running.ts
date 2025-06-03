// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Running extends APIResource {
  /**
   * Requires authentication as administrator
   */
  forceStop(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ScheduledTasks/Running/${id}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  start(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ScheduledTasks/Running/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  stop(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ScheduledTasks/Running/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
