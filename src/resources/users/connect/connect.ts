// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LinkAPI from './link';
import { Link, LinkLinkParams, LinkLinkResponse } from './link';

export class Connect extends APIResource {
  link: LinkAPI.Link = new LinkAPI.Link(this._client);
}

Connect.Link = Link;

export declare namespace Connect {
  export { Link as Link, type LinkLinkResponse as LinkLinkResponse, type LinkLinkParams as LinkLinkParams };
}
