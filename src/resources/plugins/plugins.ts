// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigurationAPI from './configuration';
import { Configuration } from './configuration';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Plugins extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);

  /**
   * Requires authentication as administrator
   */
  list(options?: RequestOptions): APIPromise<PluginListResponse> {
    return this._client.get('/Plugins', options);
  }

  /**
   * Requires authentication as administrator
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/Plugins/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveThumb(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Plugins/${id}/Thumb`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  uninstall(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Plugins/${id}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PluginListResponse = Array<PluginListResponse.PluginListResponseItem>;

export namespace PluginListResponse {
  export interface PluginListResponseItem {
    ConfigurationFileName?: string;

    Description?: string;

    Id?: string;

    ImageTag?: string;

    Name?: string;

    Version?: string;
  }
}

Plugins.Configuration = Configuration;

export declare namespace Plugins {
  export { type PluginListResponse as PluginListResponse };

  export { Configuration as Configuration };
}
