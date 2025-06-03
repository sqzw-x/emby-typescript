// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ActivityLog extends APIResource {
  /**
   * Requires authentication as administrator
   */
  listEntries(
    query: ActivityLogListEntriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActivityLogListEntriesResponse> {
    return this._client.get('/System/ActivityLog/Entries', { query, ...options });
  }
}

export interface ActivityLogListEntriesResponse {
  Items?: Array<ActivityLogListEntriesResponse.Item>;

  TotalRecordCount?: number;
}

export namespace ActivityLogListEntriesResponse {
  export interface Item {
    Date?: string;

    Id?: number;

    ItemId?: string;

    Name?: string;

    Overview?: string;

    Severity?: 'Info' | 'Debug' | 'Warn' | 'Error' | 'Fatal';

    ShortOverview?: string;

    Type?: string;

    UserId?: string;

    UserPrimaryImageTag?: string;
  }
}

export interface ActivityLogListEntriesParams {
  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. The minimum date. Format = ISO
   */
  MinDate?: string;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number | null;
}

export declare namespace ActivityLog {
  export {
    type ActivityLogListEntriesResponse as ActivityLogListEntriesResponse,
    type ActivityLogListEntriesParams as ActivityLogListEntriesParams,
  };
}
