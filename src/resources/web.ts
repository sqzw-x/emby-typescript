// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WebAPI from './web';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Web extends APIResource {
  /**
   * Requires authentication as user
   */
  listConfigurationPages(options?: RequestOptions): APIPromise<WebListConfigurationPagesResponse> {
    return this._client.get('/web/ConfigurationPages', options);
  }

  /**
   * Requires authentication as user
   */
  listStrings(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/web/strings', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveConfigurationPage(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/web/ConfigurationPage', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveStringSet(options?: RequestOptions): APIPromise<WebRetrieveStringSetResponse> {
    return this._client.get('/web/stringset', options);
  }
}

export interface Version {
  Build?: number;

  Major?: number;

  MajorRevision?: number;

  Minor?: number;

  MinorRevision?: number;

  Revision?: number;
}

export type WebListConfigurationPagesResponse =
  Array<WebListConfigurationPagesResponse.WebListConfigurationPagesResponseItem>;

export namespace WebListConfigurationPagesResponse {
  export interface WebListConfigurationPagesResponseItem {
    ConfigurationPageType?: 'PluginConfiguration' | 'None';

    DisplayName?: string;

    EnableInMainMenu?: boolean;

    EnableInUserMenu?: boolean;

    FeatureId?: string;

    Href?: string;

    MenuIcon?: string;

    MenuSection?: string;

    Name?: string;

    NavMenuId?: string;

    Plugin?: WebListConfigurationPagesResponseItem.Plugin;

    PluginId?: string;

    Translations?: Array<string>;
  }

  export namespace WebListConfigurationPagesResponseItem {
    export interface Plugin {
      AssemblyFilePath?: string;

      DataFolderPath?: string;

      Description?: string;

      Id?: string;

      Name?: string;

      Version?: WebAPI.Version;
    }
  }
}

export type WebRetrieveStringSetResponse = Array<string>;

export declare namespace Web {
  export {
    type Version as Version,
    type WebListConfigurationPagesResponse as WebListConfigurationPagesResponse,
    type WebRetrieveStringSetResponse as WebRetrieveStringSetResponse,
  };
}
