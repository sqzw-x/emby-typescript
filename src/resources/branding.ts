// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Branding extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieveConfiguration(options?: RequestOptions): APIPromise<BrandingRetrieveConfigurationResponse> {
    return this._client.get('/Branding/Configuration', options);
  }

  /**
   * Requires authentication as user
   */
  retrieveCss(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/Branding/Css', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveCssFile(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/Branding/Css.css', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BrandingRetrieveConfigurationResponse {
  CustomCss?: string;

  LoginDisclaimer?: string;
}

export declare namespace Branding {
  export { type BrandingRetrieveConfigurationResponse as BrandingRetrieveConfigurationResponse };
}
