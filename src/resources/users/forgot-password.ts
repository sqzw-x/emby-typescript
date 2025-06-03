// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ForgotPassword extends APIResource {
  /**
   * Requires authentication as user
   */
  initiate(
    body: ForgotPasswordInitiateParams,
    options?: RequestOptions,
  ): APIPromise<ForgotPasswordInitiateResponse> {
    return this._client.post('/Users/ForgotPassword', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  redeemPin(
    body: ForgotPasswordRedeemPinParams,
    options?: RequestOptions,
  ): APIPromise<ForgotPasswordRedeemPinResponse> {
    return this._client.post('/Users/ForgotPassword/Pin', { body, ...options });
  }
}

export interface ForgotPasswordInitiateResponse {
  Action?: 'ContactAdmin' | 'PinCode';

  PinExpirationDate?: string | null;

  PinFile?: string;
}

export interface ForgotPasswordRedeemPinResponse {
  Success?: boolean;

  UsersReset?: Array<string>;
}

export interface ForgotPasswordInitiateParams {
  EnteredUsername?: string;
}

export interface ForgotPasswordRedeemPinParams {
  Pin?: string;
}

export declare namespace ForgotPassword {
  export {
    type ForgotPasswordInitiateResponse as ForgotPasswordInitiateResponse,
    type ForgotPasswordRedeemPinResponse as ForgotPasswordRedeemPinResponse,
    type ForgotPasswordInitiateParams as ForgotPasswordInitiateParams,
    type ForgotPasswordRedeemPinParams as ForgotPasswordRedeemPinParams,
  };
}
