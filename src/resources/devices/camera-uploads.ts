// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class CameraUploads extends APIResource {
  /**
   * Requires authentication as user
   */
  list(options?: RequestOptions): APIPromise<CameraUploadListResponse> {
    return this._client.get('/Devices/CameraUploads', options);
  }

  /**
   * Requires authentication as user
   */
  upload(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Album, Id, Name } = params;
    return this._client.post('/Devices/CameraUploads', {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface CameraUploadListResponse {
  DeviceId?: string;

  FilesUploaded?: Array<CameraUploadListResponse.FilesUploaded>;
}

export namespace CameraUploadListResponse {
  export interface FilesUploaded {
    Album?: string;

    Id?: string;

    MimeType?: string;

    Name?: string;
  }
}

export declare namespace CameraUploads {
  export { type CameraUploadListResponse as CameraUploadListResponse };
}
