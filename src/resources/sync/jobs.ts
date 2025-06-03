// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LiveStreamsAPI from '../live-streams';
import * as ArtistsAPI from '../artists/artists';
import * as ItemsAPI from './items';
import * as SyncAPI from './sync';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Requires authentication as user
   */
  cancelJob(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Sync/Jobs/${id}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  createJob(body: JobCreateJobParams, options?: RequestOptions): APIPromise<JobCreateJobResponse> {
    return this._client.post('/Sync/Jobs', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  listJobs(options?: RequestOptions): APIPromise<JobListJobsResponse> {
    return this._client.get('/Sync/Jobs', options);
  }

  /**
   * Requires authentication as user
   */
  retrieveJob(id: string, options?: RequestOptions): APIPromise<SyncJob> {
    return this._client.get(path`/Sync/Jobs/${id}`, options);
  }

  /**
   * Requires authentication as user
   */
  updateJob(id: number, body: JobUpdateJobParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Sync/Jobs/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SyncJob {
  AudioCodec?: string;

  Bitrate?: number | null;

  Category?: SyncAPI.SyncCategory;

  Container?: string;

  DateCreated?: string;

  DateLastModified?: string;

  Id?: number;

  InternalTargetId?: number;

  ItemCount?: number;

  ItemId?: number;

  ItemLimit?: number | null;

  Name?: string;

  ParentId?: number;

  ParentName?: string;

  PrimaryImageItemId?: string;

  PrimaryImageTag?: string;

  Profile?: string;

  Progress?: number;

  Quality?: string;

  RequestedItemIds?: Array<number>;

  Status?:
    | 'Queued'
    | 'Converting'
    | 'ReadyToTransfer'
    | 'Transferring'
    | 'Completed'
    | 'CompletedWithError'
    | 'Failed';

  SyncNewContent?: boolean;

  TargetId?: string;

  TargetName?: string;

  UnwatchedOnly?: boolean;

  UserId?: number;

  VideoCodec?: string;
}

export interface SyncJobItem {
  AdditionalFiles?: Array<ItemsAPI.ItemFileInfo>;

  DateCreated?: string;

  Id?: number;

  InternalTargetId?: number;

  ItemId?: number;

  ItemName?: string;

  JobId?: number;

  MediaSource?: LiveStreamsAPI.MediaSourceInfo;

  MediaSourceId?: string;

  OutputPath?: string;

  PrimaryImageItemId?: string;

  PrimaryImageTag?: string;

  Progress?: number | null;

  Status?: ArtistsAPI.SyncJobItemStatus;

  TargetId?: string;

  TemporaryPath?: string;
}

export interface JobCreateJobResponse {
  Job?: SyncJob;

  JobItems?: Array<SyncJobItem>;
}

export interface JobListJobsResponse {
  Items?: Array<SyncJob>;

  TotalRecordCount?: number;
}

export interface JobCreateJobParams {
  AudioCodec?: string;

  Bitrate?: number | null;

  Category?: SyncAPI.SyncCategory;

  Container?: string;

  Downloaded?: boolean;

  ItemIds?: Array<string>;

  ItemLimit?: number | null;

  Name?: string;

  ParentId?: string;

  Profile?: string;

  Quality?: string;

  SyncNewContent?: boolean;

  TargetId?: string;

  UnwatchedOnly?: boolean;

  UserId?: string;

  VideoCodec?: string;
}

export interface JobUpdateJobParams {
  AudioCodec?: string;

  Bitrate?: number | null;

  Category?: SyncAPI.SyncCategory;

  Container?: string;

  DateCreated?: string;

  DateLastModified?: string;

  body_Id?: number;

  InternalTargetId?: number;

  ItemCount?: number;

  ItemId?: number;

  ItemLimit?: number | null;

  Name?: string;

  ParentId?: number;

  ParentName?: string;

  PrimaryImageItemId?: string;

  PrimaryImageTag?: string;

  Profile?: string;

  Progress?: number;

  Quality?: string;

  RequestedItemIds?: Array<number>;

  Status?:
    | 'Queued'
    | 'Converting'
    | 'ReadyToTransfer'
    | 'Transferring'
    | 'Completed'
    | 'CompletedWithError'
    | 'Failed';

  SyncNewContent?: boolean;

  TargetId?: string;

  TargetName?: string;

  UnwatchedOnly?: boolean;

  UserId?: number;

  VideoCodec?: string;
}

export declare namespace Jobs {
  export {
    type SyncJob as SyncJob,
    type SyncJobItem as SyncJobItem,
    type JobCreateJobResponse as JobCreateJobResponse,
    type JobListJobsResponse as JobListJobsResponse,
    type JobCreateJobParams as JobCreateJobParams,
    type JobUpdateJobParams as JobUpdateJobParams,
  };
}
