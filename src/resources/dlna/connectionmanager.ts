// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Connectionmanager extends APIResource {
  /**
   * No authentication required
   */
  retrieve(uuID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Dlna/${uuID}/connectionmanager/connectionmanager`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * No authentication required
   */
  processControl(
    uuID: string,
    params: ConnectionmanagerProcessControlParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/Dlna/${uuID}/connectionmanager/control`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * No authentication required
   */
  retrieveXml(uuID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Dlna/${uuID}/connectionmanager/connectionmanager.xml`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ConnectionmanagerProcessControlParams {
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace Connectionmanager {
  export { type ConnectionmanagerProcessControlParams as ConnectionmanagerProcessControlParams };
}
