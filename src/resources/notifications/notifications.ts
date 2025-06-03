// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ServicesAPI from './services';
import { ServiceSendTestParams, Services, UserNotificationInfo } from './services';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Notifications extends APIResource {
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);

  /**
   * Requires authentication as user
   */
  listTypes(options?: RequestOptions): APIPromise<NotificationListTypesResponse> {
    return this._client.get('/Notifications/Types', options);
  }

  /**
   * Requires authentication as user
   */
  sendToAdmin(params: NotificationSendToAdminParams, options?: RequestOptions): APIPromise<void> {
    const { Description, Name, ImageUrl, Level, Url } = params;
    return this._client.post('/Notifications/Admin', {
      query: { Description, Name, ImageUrl, Level, Url },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type NotificationListTypesResponse =
  Array<NotificationListTypesResponse.NotificationListTypesResponseItem>;

export namespace NotificationListTypesResponse {
  export interface NotificationListTypesResponseItem {
    Events?: Array<NotificationListTypesResponseItem.Event>;

    Id?: string;

    Name?: string;
  }

  export namespace NotificationListTypesResponseItem {
    export interface Event {
      CategoryId?: string;

      CategoryName?: string;

      Id?: string;

      Name?: string;
    }
  }
}

export interface NotificationSendToAdminParams {
  /**
   * The notification's description
   */
  Description: string;

  /**
   * The notification's name
   */
  Name: string;

  /**
   * The notification's image url
   */
  ImageUrl?: string;

  /**
   * The notification level
   */
  Level?: string;

  /**
   * The notification's info url
   */
  Url?: string;
}

Notifications.Services = Services;

export declare namespace Notifications {
  export {
    type NotificationListTypesResponse as NotificationListTypesResponse,
    type NotificationSendToAdminParams as NotificationSendToAdminParams,
  };

  export {
    Services as Services,
    type UserNotificationInfo as UserNotificationInfo,
    type ServiceSendTestParams as ServiceSendTestParams,
  };
}
