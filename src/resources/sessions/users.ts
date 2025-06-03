// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Requires authentication as user
   */
  addUser(userID: string, params: UserAddUserParams, options?: RequestOptions): APIPromise<void> {
    const { Id } = params;
    return this._client.post(path`/Sessions/${Id}/Users/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  deleteUser(userID: string, params: UserDeleteUserParams, options?: RequestOptions): APIPromise<void> {
    const { Id } = params;
    return this._client.post(path`/Sessions/${Id}/Users/${userID}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  removeUser(userID: string, params: UserRemoveUserParams, options?: RequestOptions): APIPromise<void> {
    const { Id } = params;
    return this._client.delete(path`/Sessions/${Id}/Users/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserAddUserParams {
  /**
   * Session Id
   */
  Id: string;
}

export interface UserDeleteUserParams {
  /**
   * Session Id
   */
  Id: string;
}

export interface UserRemoveUserParams {
  /**
   * Session Id
   */
  Id: string;
}

export declare namespace Users {
  export {
    type UserAddUserParams as UserAddUserParams,
    type UserDeleteUserParams as UserDeleteUserParams,
    type UserRemoveUserParams as UserRemoveUserParams,
  };
}
