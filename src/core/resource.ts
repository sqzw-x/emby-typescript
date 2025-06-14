// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Emby } from '../client';

export abstract class APIResource {
  protected _client: Emby;

  constructor(client: Emby) {
    this._client = client;
  }
}
