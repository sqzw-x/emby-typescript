// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Link extends APIResource {
  /**
   * Requires authentication as administrator
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Users/${id}/Connect/Link/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  deleteLink(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/Users/${id}/Connect/Link`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  link(id: string, params: LinkLinkParams, options?: RequestOptions): APIPromise<LinkLinkResponse> {
    const { ConnectUsername } = params;
    return this._client.post(path`/Users/${id}/Connect/Link`, { query: { ConnectUsername }, ...options });
  }
}

export interface LinkLinkResponse {
  GuestDisplayName?: string;

  IsNewUserInvitation?: boolean;

  IsPending?: boolean;
}

export interface LinkLinkParams {
  /**
   * Connect username
   */
  ConnectUsername: string;
}

export declare namespace Link {
  export { type LinkLinkResponse as LinkLinkResponse, type LinkLinkParams as LinkLinkParams };
}
