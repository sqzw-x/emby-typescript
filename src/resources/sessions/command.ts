// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Command extends APIResource {
  /**
   * Requires authentication as user
   */
  issueCommand(id: string, body: CommandIssueCommandParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Sessions/${id}/Command`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  issueSpecificCommand(
    command: string,
    params: CommandIssueSpecificCommandParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id } = params;
    return this._client.post(path`/Sessions/${Id}/Command/${command}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CommandIssueCommandParams {
  Arguments?: { [key: string]: string };

  ControllingUserId?: string;

  Name?: string;
}

export interface CommandIssueSpecificCommandParams {
  /**
   * Session Id
   */
  Id: string;
}

export declare namespace Command {
  export {
    type CommandIssueCommandParams as CommandIssueCommandParams,
    type CommandIssueSpecificCommandParams as CommandIssueSpecificCommandParams,
  };
}
