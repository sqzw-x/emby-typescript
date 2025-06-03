// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class CodecInformation extends APIResource {}

export interface BitRate {
  bps?: number;

  kbps?: number;

  Mbps?: number;
}

export type SecondaryFrameworks =
  | 'Unknown'
  | 'None'
  | 'AmdAmf'
  | 'MediaCodec'
  | 'NvEncDec'
  | 'OpenMax'
  | 'QuickSync'
  | 'VaApi'
  | 'V4L2'
  | 'DxVa'
  | 'D3d11va'
  | 'VideoToolbox'
  | 'Mmal';

export declare namespace CodecInformation {
  export { type BitRate as BitRate, type SecondaryFrameworks as SecondaryFrameworks };
}
