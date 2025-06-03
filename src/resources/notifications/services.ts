// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Services extends APIResource {
  /**
   * Requires authentication as user
   */
  getDefaults(options?: RequestOptions): APIPromise<UserNotificationInfo> {
    return this._client.get('/Notifications/Services/Defaults', options);
  }

  /**
   * Requires authentication as user
   */
  sendTest(body: ServiceSendTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Notifications/Services/Test', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserNotificationInfo {
  DeviceIds?: Array<string>;

  Enabled?: boolean;

  EventIds?: Array<string>;

  FriendlyName?: string;

  GroupItems?: boolean;

  Id?: string;

  IsSelfNotification?: boolean;

  LibraryIds?: Array<string>;

  NotifierKey?: string;

  Options?: Record<string, string>;

  PluginId?: string;

  ServiceName?: string;

  SetupModuleUrl?: string;

  UserId?: string;

  UserIds?: Array<string>;
}

export interface ServiceSendTestParams {
  DeviceIds?: Array<string>;

  Enabled?: boolean;

  EventIds?: Array<string>;

  FriendlyName?: string;

  GroupItems?: boolean;

  Id?: string;

  IsSelfNotification?: boolean;

  LibraryIds?: Array<string>;

  NotifierKey?: string;

  Options?: Record<string, string>;

  PluginId?: string;

  ServiceName?: string;

  SetupModuleUrl?: string;

  UserId?: string;

  UserIds?: Array<string>;
}

export declare namespace Services {
  export {
    type UserNotificationInfo as UserNotificationInfo,
    type ServiceSendTestParams as ServiceSendTestParams,
  };
}
