// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Channels extends APIResource {
  /**
   * Requires authentication as administrator
   */
  list(
    query: ChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChannelManagementInfo> {
    return this._client.get('/LiveTv/Manage/Channels', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  setDisabled(
    id: string,
    body: ChannelSetDisabledParams,
    options?: RequestOptions,
  ): APIPromise<ChannelManagementInfo> {
    return this._client.post(path`/LiveTv/Manage/Channels/${id}/Disabled`, { body, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  setSortIndex(
    id: string,
    body: ChannelSetSortIndexParams,
    options?: RequestOptions,
  ): APIPromise<ChannelManagementInfo> {
    return this._client.post(path`/LiveTv/Manage/Channels/${id}/SortIndex`, { body, ...options });
  }
}

export interface ChannelManagementInfo {
  Items?: Array<ChannelManagementInfo.Item>;

  TotalRecordCount?: number;
}

export namespace ChannelManagementInfo {
  export interface Item {
    Id?: string;

    Name?: string;
  }
}

export interface ChannelListParams {
  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. Specify one or more sort orders, comma delimeted. Options: Name,
   * StartDate
   */
  SortBy?: string;

  /**
   * Sort Order - Ascending,Descending
   */
  SortOrder?: string;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number | null;
}

export interface ChannelSetDisabledParams {
  Disabled?: boolean;

  body_Id?: string;

  ManagementId?: string;
}

export interface ChannelSetSortIndexParams {
  body_Id?: string;

  ManagementId?: string;

  NewIndex?: number;
}

export declare namespace Channels {
  export {
    type ChannelManagementInfo as ChannelManagementInfo,
    type ChannelListParams as ChannelListParams,
    type ChannelSetDisabledParams as ChannelSetDisabledParams,
    type ChannelSetSortIndexParams as ChannelSetSortIndexParams,
  };
}
