// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubtitlesAPI from './subtitles';
import { Subtitles } from './subtitles';

export class Providers extends APIResource {
  subtitles: SubtitlesAPI.Subtitles = new SubtitlesAPI.Subtitles(this._client);
}

Providers.Subtitles = Subtitles;

export declare namespace Providers {
  export { Subtitles as Subtitles };
}
