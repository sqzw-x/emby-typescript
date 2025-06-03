// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthAPI from './auth/auth';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class BackupRestore extends APIResource {
  /**
   * Requires authentication as administrator
   */
  backupInfo(options?: RequestOptions): APIPromise<BackupRestoreBackupInfoResponse> {
    return this._client.get('/BackupRestore/BackupInfo', options);
  }

  /**
   * Requires authentication as administrator
   */
  restore(body: BackupRestoreRestoreParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/BackupRestore/Restore', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  restoreData(body: BackupRestoreRestoreDataParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/BackupRestore/RestoreData', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BackupInfo {
  CanRestore?: boolean;

  DateCreated?: string;

  IsFullBackup?: boolean;

  Name?: string;

  PluginVersion?: string;

  ServerVersion?: string;

  Users?: Array<AuthAPI.NameIDPair>;
}

export interface BackupRestoreBackupInfoResponse {
  FullBackupInfo?: BackupInfo;

  LightBackups?: Array<BackupInfo>;
}

export interface BackupRestoreRestoreParams {
  RestoreServerId?: boolean;

  UseFiles?: string;
}

export interface BackupRestoreRestoreDataParams {
  Users?: Array<BackupRestoreRestoreDataParams.User>;
}

export namespace BackupRestoreRestoreDataParams {
  export interface User {
    SourceUserId?: string;

    TargetUserId?: string;
  }
}

export declare namespace BackupRestore {
  export {
    type BackupInfo as BackupInfo,
    type BackupRestoreBackupInfoResponse as BackupRestoreBackupInfoResponse,
    type BackupRestoreRestoreParams as BackupRestoreRestoreParams,
    type BackupRestoreRestoreDataParams as BackupRestoreRestoreDataParams,
  };
}
