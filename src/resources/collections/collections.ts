// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemsAPI from './items';
import { ItemAddParams, ItemDeleteParams, ItemRemoveParams, Items } from './items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Collections extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Requires authentication as user
   */
  create(
    params: CollectionCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionCreateResponse> {
    const { Ids, IsLocked, Name, ParentId } = params ?? {};
    return this._client.post('/Collections', { query: { Ids, IsLocked, Name, ParentId }, ...options });
  }
}

export interface CollectionCreateResponse {
  Id?: string;

  Name?: string;
}

export interface CollectionCreateParams {
  /**
   * Item Ids to add to the collection
   */
  Ids?: string;

  /**
   * Whether or not to lock the new collection.
   */
  IsLocked?: boolean;

  /**
   * The name of the new collection.
   */
  Name?: string;

  /**
   * Optional - create the collection within a specific folder
   */
  ParentId?: string;
}

Collections.Items = Items;

export declare namespace Collections {
  export {
    type CollectionCreateResponse as CollectionCreateResponse,
    type CollectionCreateParams as CollectionCreateParams,
  };

  export {
    Items as Items,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemAddParams as ItemAddParams,
    type ItemRemoveParams as ItemRemoveParams,
  };
}
