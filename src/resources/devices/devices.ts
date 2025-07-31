// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CameraUploadsAPI from './camera-uploads';
import { CameraUploadListResponse, CameraUploads } from './camera-uploads';
import * as OptionsAPI from './options';
import { DeviceOptions, OptionRetrieveParams, OptionUpdateParams, Options } from './options';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Devices extends APIResource {
  options: OptionsAPI.Options = new OptionsAPI.Options(this._client);
  cameraUploads: CameraUploadsAPI.CameraUploads = new CameraUploadsAPI.CameraUploads(this._client);

  /**
   * Requires authentication as administrator
   */
  list(
    query: DeviceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceListResponse> {
    return this._client.get('/Devices', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  delete(params: DeviceDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { Id } = params;
    return this._client.delete('/Devices', {
      query: { Id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  deleteDevice(params: DeviceDeleteDeviceParams, options?: RequestOptions): APIPromise<void> {
    const { Id } = params;
    return this._client.post('/Devices/Delete', {
      query: { Id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  retrieveInfo(query: DeviceRetrieveInfoParams, options?: RequestOptions): APIPromise<DeviceInfo> {
    return this._client.get('/Devices/Info', { query, ...options });
  }
}

export interface DeviceInfo {
  AppName?: string;

  AppVersion?: string;

  DateLastActivity?: string;

  IconUrl?: string;

  Id?: string;

  InternalId?: number;

  IpAddress?: string;

  LastUserId?: string;

  LastUserName?: string;

  Name?: string;

  ReportedDeviceId?: string;
}

export interface DeviceListResponse {
  Items?: Array<DeviceInfo>;

  TotalRecordCount?: number;
}

export interface DeviceListParams {
  /**
   * Sort Order - Ascending,Descending
   */
  SortOrder?: string;
}

export interface DeviceDeleteParams {
  /**
   * Device Id
   */
  Id: string;
}

export interface DeviceDeleteDeviceParams {
  /**
   * Device Id
   */
  Id: string;
}

export interface DeviceRetrieveInfoParams {
  /**
   * Device Id
   */
  Id: string;
}

Devices.Options = Options;
Devices.CameraUploads = CameraUploads;

export declare namespace Devices {
  export {
    type DeviceInfo as DeviceInfo,
    type DeviceListResponse as DeviceListResponse,
    type DeviceListParams as DeviceListParams,
    type DeviceDeleteParams as DeviceDeleteParams,
    type DeviceDeleteDeviceParams as DeviceDeleteDeviceParams,
    type DeviceRetrieveInfoParams as DeviceRetrieveInfoParams,
  };

  export {
    Options as Options,
    type DeviceOptions as DeviceOptions,
    type OptionRetrieveParams as OptionRetrieveParams,
    type OptionUpdateParams as OptionUpdateParams,
  };

  export { CameraUploads as CameraUploads, type CameraUploadListResponse as CameraUploadListResponse };
}
