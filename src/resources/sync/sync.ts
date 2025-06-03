// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArtistsAPI from '../artists/artists';
import * as ItemsAPI from './items';
import {
  ItemCancelItemsParams,
  ItemFileInfo,
  ItemListReadyItemsParams,
  ItemListReadyItemsResponse,
  Items,
} from './items';
import * as JobItemsAPI from './job-items';
import {
  JobItemGetAdditionalFilesParams,
  JobItemListJobItemsParams,
  JobItemListJobItemsResponse,
  JobItems,
} from './job-items';
import * as JobsAPI from './jobs';
import {
  JobCreateJobParams,
  JobCreateJobResponse,
  JobListJobsResponse,
  JobUpdateJobParams,
  Jobs,
  SyncJob,
  SyncJobItem,
} from './jobs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sync extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  jobItems: JobItemsAPI.JobItems = new JobItemsAPI.JobItems(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Requires authentication as user
   */
  getItemStatus(itemID: string, body: SyncGetItemStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Sync/${itemID}/Status`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  listOptions(query: SyncListOptionsParams, options?: RequestOptions): APIPromise<SyncListOptionsResponse> {
    return this._client.get('/Sync/Options', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  listTargets(query: SyncListTargetsParams, options?: RequestOptions): APIPromise<SyncListTargetsResponse> {
    return this._client.get('/Sync/Targets', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  reportOfflineAction(params: SyncReportOfflineActionParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/Sync/OfflineActions', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  syncData(params: SyncSyncDataParams, options?: RequestOptions): APIPromise<SyncSyncDataResponse> {
    const { TargetId, ...body } = params;
    return this._client.post('/Sync/Data', { query: { TargetId }, body, ...options });
  }
}

export type SyncCategory = 'Latest' | 'NextUp' | 'Resume';

export interface SyncTarget {
  Id?: string;

  Name?: string;
}

export interface SyncListOptionsResponse {
  Options?: Array<'Name' | 'Quality' | 'UnwatchedOnly' | 'SyncNewContent' | 'ItemLimit' | 'Profile'>;

  ProfileOptions?: Array<SyncListOptionsResponse.ProfileOption>;

  QualityOptions?: Array<SyncListOptionsResponse.QualityOption>;

  Targets?: Array<SyncTarget>;
}

export namespace SyncListOptionsResponse {
  export interface ProfileOption {
    Description?: string;

    EnableQualityOptions?: boolean;

    Id?: string;

    IsDefault?: boolean;

    Name?: string;
  }

  export interface QualityOption {
    Description?: string;

    Id?: string;

    IsDefault?: boolean;

    IsOriginalQuality?: boolean;

    Name?: string;
  }
}

export type SyncListTargetsResponse = Array<SyncTarget>;

export interface SyncSyncDataResponse {
  ItemIdsToRemove?: Array<string>;
}

export interface SyncGetItemStatusParams {
  Progress?: number | null;

  Status?: ArtistsAPI.SyncJobItemStatus;
}

export interface SyncListOptionsParams {
  /**
   * UserId
   */
  UserId: string;

  /**
   * Category
   */
  Category?: SyncCategory;

  /**
   * ItemIds
   */
  ItemIds?: string;

  /**
   * ParentId
   */
  ParentId?: string;

  /**
   * TargetId
   */
  TargetId?: string;
}

export interface SyncListTargetsParams {
  /**
   * UserId
   */
  UserId: string;
}

export interface SyncReportOfflineActionParams {
  body: Array<SyncReportOfflineActionParams.Body>;
}

export namespace SyncReportOfflineActionParams {
  export interface Body {
    Date?: string;

    Id?: string;

    IsFavorite?: boolean | null;

    ItemId?: string;

    Played?: boolean | null;

    PositionTicks?: number | null;

    ServerId?: string;

    Type?: 'PlayedItem' | 'MarkPlayed' | 'MarkFavorite';

    UserId?: string;
  }
}

export interface SyncSyncDataParams {
  /**
   * Query param: TargetId
   */
  TargetId: string;

  /**
   * Body param:
   */
  InternalTargetIds?: Array<number>;

  /**
   * Body param:
   */
  LocalItemIds?: Array<string>;
}

Sync.Jobs = Jobs;
Sync.JobItems = JobItems;
Sync.Items = Items;

export declare namespace Sync {
  export {
    type SyncCategory as SyncCategory,
    type SyncTarget as SyncTarget,
    type SyncListOptionsResponse as SyncListOptionsResponse,
    type SyncListTargetsResponse as SyncListTargetsResponse,
    type SyncSyncDataResponse as SyncSyncDataResponse,
    type SyncGetItemStatusParams as SyncGetItemStatusParams,
    type SyncListOptionsParams as SyncListOptionsParams,
    type SyncListTargetsParams as SyncListTargetsParams,
    type SyncReportOfflineActionParams as SyncReportOfflineActionParams,
    type SyncSyncDataParams as SyncSyncDataParams,
  };

  export {
    Jobs as Jobs,
    type SyncJob as SyncJob,
    type SyncJobItem as SyncJobItem,
    type JobCreateJobResponse as JobCreateJobResponse,
    type JobListJobsResponse as JobListJobsResponse,
    type JobCreateJobParams as JobCreateJobParams,
    type JobUpdateJobParams as JobUpdateJobParams,
  };

  export {
    JobItems as JobItems,
    type JobItemListJobItemsResponse as JobItemListJobItemsResponse,
    type JobItemGetAdditionalFilesParams as JobItemGetAdditionalFilesParams,
    type JobItemListJobItemsParams as JobItemListJobItemsParams,
  };

  export {
    Items as Items,
    type ItemFileInfo as ItemFileInfo,
    type ItemListReadyItemsResponse as ItemListReadyItemsResponse,
    type ItemCancelItemsParams as ItemCancelItemsParams,
    type ItemListReadyItemsParams as ItemListReadyItemsParams,
  };
}
