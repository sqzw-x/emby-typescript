// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as KeysAPI from './keys';
import { KeyCreateParams, KeyListParams, Keys } from './keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);

  /**
   * Requires authentication as administrator
   */
  listProviders(options?: RequestOptions): APIPromise<AuthListProvidersResponse> {
    return this._client.get('/Auth/Providers', options);
  }
}

export interface NameIDPair {
  Id?: string;

  Name?: string;
}

export type AuthListProvidersResponse = Array<NameIDPair>;

Auth.Keys = Keys;

export declare namespace Auth {
  export { type NameIDPair as NameIDPair, type AuthListProvidersResponse as AuthListProvidersResponse };

  export { Keys as Keys, type KeyCreateParams as KeyCreateParams, type KeyListParams as KeyListParams };
}
