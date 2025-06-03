// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChannelsAPI from './channels';
import {
  ChannelListParams,
  ChannelManagementInfo,
  ChannelSetDisabledParams,
  ChannelSetSortIndexParams,
  Channels,
} from './channels';

export class Manage extends APIResource {
  channels: ChannelsAPI.Channels = new ChannelsAPI.Channels(this._client);
}

Manage.Channels = Channels;

export declare namespace Manage {
  export {
    Channels as Channels,
    type ChannelManagementInfo as ChannelManagementInfo,
    type ChannelListParams as ChannelListParams,
    type ChannelSetDisabledParams as ChannelSetDisabledParams,
    type ChannelSetSortIndexParams as ChannelSetSortIndexParams,
  };
}
