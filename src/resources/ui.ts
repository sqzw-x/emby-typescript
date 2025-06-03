// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ui extends APIResource {
  /**
   * Requires authentication as user
   */
  executeCommand(body: UiExecuteCommandParams, options?: RequestOptions): APIPromise<UiViewInfo> {
    return this._client.post('/UI/Command', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  retrieveView(query: UiRetrieveViewParams, options?: RequestOptions): APIPromise<UiViewInfo> {
    return this._client.get('/UI/View', { query, ...options });
  }
}

export interface UiViewInfo {
  Caption?: string;

  Commands?: Array<UiViewInfo.Command>;

  EditObjectContainer?: UiViewInfo.EditObjectContainer;

  IsInSequence?: boolean;

  IsPageChangeInfo?: boolean;

  PageId?: string;

  PluginId?: string;

  RedirectViewUrl?: string;

  ShowDialogFullScreen?: boolean;

  SubCaption?: string;

  TabPageInfos?: Array<UiViewInfo.TabPageInfo>;

  ViewId?: string;

  ViewType?: 'RegularPage' | 'Dialog' | 'Wizard';
}

export namespace UiViewInfo {
  export interface Command {
    Caption?: string;

    CommandId?: string;

    CommandType?:
      | 'Custom'
      | 'WizardCancel'
      | 'WizardBack'
      | 'WizardNext'
      | 'WizardFinish'
      | 'DialogCancel'
      | 'DialogOk'
      | 'PageSave'
      | 'PageBack'
      | 'WizardButton1'
      | 'WizardButton2'
      | 'WizardButton3';

    ConfirmationPrompt?: string;

    IsEnabled?: boolean;

    IsVisible?: boolean;

    SetFocus?: boolean;
  }

  export interface EditObjectContainer {
    DefaultObject?: unknown;

    Object?: unknown;

    TypeName?: string;
  }

  export interface TabPageInfo {
    DisplayName?: string;

    Href?: string;

    Index?: number;

    NavKey?: string;

    PageId?: string;

    PluginId?: string;
  }
}

export interface UiExecuteCommandParams {
  ClientLocale?: string;

  CommandId?: string;

  Data?: string;

  ItemId?: string;

  PageId?: string;
}

export interface UiRetrieveViewParams {
  /**
   * Locale identifier of the client
   */
  ClientLocale: string;

  /**
   * Id of the page controller
   */
  PageId: string;
}

export declare namespace Ui {
  export {
    type UiViewInfo as UiViewInfo,
    type UiExecuteCommandParams as UiExecuteCommandParams,
    type UiRetrieveViewParams as UiRetrieveViewParams,
  };
}
