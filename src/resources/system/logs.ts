// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Logs extends APIResource {
  /**
   * Requires authentication as administrator
   */
  retrieve(
    name: string,
    query: LogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/System/Logs/${name}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  listAvailable(
    query: LogListAvailableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogListAvailableResponse> {
    return this._client.get('/System/Logs/Query', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  retrieveLines(name: string, options?: RequestOptions): APIPromise<LogRetrieveLinesResponse> {
    return this._client.get(path`/System/Logs/${name}/Lines`, options);
  }
}

export interface LogListAvailableResponse {
  Items?: Array<LogListAvailableResponse.Item>;

  TotalRecordCount?: number;
}

export namespace LogListAvailableResponse {
  export interface Item {
    DateCreated?: string;

    DateModified?: string;

    Name?: string;

    Size?: number;
  }
}

export interface LogRetrieveLinesResponse {
  Items?: Array<string>;

  TotalRecordCount?: number;
}

export interface LogRetrieveParams {
  /**
   * Return sanitized log
   */
  Sanitize?: boolean;
}

export interface LogListAvailableParams {
  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number;
}

export declare namespace Logs {
  export {
    type LogListAvailableResponse as LogListAvailableResponse,
    type LogRetrieveLinesResponse as LogRetrieveLinesResponse,
    type LogRetrieveParams as LogRetrieveParams,
    type LogListAvailableParams as LogListAvailableParams,
  };
}
