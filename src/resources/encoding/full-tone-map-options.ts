// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FullToneMapOptionsAPI from './full-tone-map-options';

export class FullToneMapOptions extends APIResource {}

export interface EditObjectContainer {
  DefaultObject?: unknown;

  EditorRoot?: EditObjectContainer.EditorRoot;

  Object?: unknown;

  TypeName?: string;
}

export namespace EditObjectContainer {
  export interface EditorRoot {
    AllowEmpty?: boolean;

    Description?: string;

    DisplayName?: string;

    EditorItems?: Array<EditorRoot.EditorItem>;

    EditorType?: FullToneMapOptionsAPI.EditorTypes;

    FeatureRequiresPremiere?: boolean;

    Id?: string;

    IsAdvanced?: boolean;

    IsReadOnly?: boolean;

    Name?: string;

    ParentId?: string;

    PostbackActions?: Array<EditorRoot.PostbackAction>;

    PropertyConditions?: Array<EditorRoot.PropertyCondition>;

    TitleButton?: EditorRoot.TitleButton;
  }

  export namespace EditorRoot {
    export interface EditorItem {
      AllowEmpty?: boolean;

      Description?: string;

      DisplayName?: string;

      EditorType?: FullToneMapOptionsAPI.EditorTypes;

      FeatureRequiresPremiere?: boolean;

      Id?: string;

      IsAdvanced?: boolean;

      IsReadOnly?: boolean;

      Name?: string;

      ParentId?: string;
    }

    export interface PostbackAction {
      CommandParameterPropertyId?: string;

      PostbackCommandId?: string;

      TargetEditorId?: string;
    }

    export interface PropertyCondition {
      AffectedPropertyId?: string;

      ConditionType?: 'Visible' | 'Enabled';

      SimpleCondition?: 'IsTrue' | 'IsFalse' | 'IsNull' | 'IsNotNullOrEmpty';

      TargetPropertyId?: string;

      Value?: unknown;

      ValueCondition?:
        | 'IsEqual'
        | 'IsNotEqual'
        | 'IsGreater'
        | 'IsGreaterOrEqual'
        | 'IsLess'
        | 'IsLessOrEqual';
    }

    export interface TitleButton {
      AllowEmpty?: boolean;

      Description?: string;

      DisplayName?: string;

      EditorType?: FullToneMapOptionsAPI.EditorTypes;

      FeatureRequiresPremiere?: boolean;

      Id?: string;

      IsAdvanced?: boolean;

      IsReadOnly?: boolean;

      Name?: string;

      ParentId?: string;
    }
  }
}

export type EditorTypes =
  | 'Group'
  | 'Text'
  | 'Numeric'
  | 'Boolean'
  | 'SelectSingle'
  | 'SelectMultiple'
  | 'Date'
  | 'FilePath'
  | 'FolderPath'
  | 'StatusItem'
  | 'ProgressItem'
  | 'ButtonItem'
  | 'ButtonGroup'
  | 'CaptionItem'
  | 'LabelItem'
  | 'ItemList'
  | 'RadioGroup'
  | 'DxDataGrid'
  | 'DxPivotGrid'
  | 'SpacerItem';

export declare namespace FullToneMapOptions {
  export { type EditObjectContainer as EditObjectContainer, type EditorTypes as EditorTypes };
}
