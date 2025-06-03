// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Connect extends APIResource {
  /**
   * Requires authentication as administrator
   */
  listPending(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/Connect/Pending', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveExchange(
    query: ConnectRetrieveExchangeParams,
    options?: RequestOptions,
  ): APIPromise<ConnectRetrieveExchangeResponse> {
    return this._client.get('/Connect/Exchange', { query, ...options });
  }
}

export interface ConnectRetrieveExchangeResponse {
  AccessToken?: string;

  LocalUserId?: string;
}

export interface ConnectRetrieveExchangeParams {
  /**
   * ConnectUserId
   */
  ConnectUserId: string;
}

export declare namespace Connect {
  export {
    type ConnectRetrieveExchangeResponse as ConnectRetrieveExchangeResponse,
    type ConnectRetrieveExchangeParams as ConnectRetrieveExchangeParams,
  };
}
