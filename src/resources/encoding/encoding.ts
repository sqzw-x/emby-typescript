// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebAPI from '../web';
import * as CodecInformationAPI from './codec-information';
import { BitRate, CodecInformation, SecondaryFrameworks } from './codec-information';
import * as CodecParametersAPI from './codec-parameters';
import { CodecParameterContext, CodecParameters } from './codec-parameters';
import * as FullToneMapOptionsAPI from './full-tone-map-options';
import { EditObjectContainer, EditorTypes, FullToneMapOptions } from './full-tone-map-options';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Encoding extends APIResource {
  fullToneMapOptions: FullToneMapOptionsAPI.FullToneMapOptions = new FullToneMapOptionsAPI.FullToneMapOptions(
    this._client,
  );
  codecParameters: CodecParametersAPI.CodecParameters = new CodecParametersAPI.CodecParameters(this._client);
  codecInformation: CodecInformationAPI.CodecInformation = new CodecInformationAPI.CodecInformation(
    this._client,
  );

  /**
   * Requires authentication as administrator
   */
  getCodecConfigurationDefaults(
    options?: RequestOptions,
  ): APIPromise<EncodingGetCodecConfigurationDefaultsResponse> {
    return this._client.get('/Encoding/CodecConfiguration/Defaults', options);
  }

  /**
   * Requires authentication as administrator
   */
  getCodecInformationVideo(options?: RequestOptions): APIPromise<EncodingGetCodecInformationVideoResponse> {
    return this._client.get('/Encoding/CodecInformation/Video', options);
  }

  /**
   * Requires authentication as user
   */
  getCodecParameters(
    query: EncodingGetCodecParametersParams,
    options?: RequestOptions,
  ): APIPromise<FullToneMapOptionsAPI.EditObjectContainer> {
    return this._client.get('/Encoding/CodecParameters', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getFfmpegOptions(options?: RequestOptions): APIPromise<FullToneMapOptionsAPI.EditObjectContainer> {
    return this._client.get('/Encoding/FfmpegOptions', options);
  }

  /**
   * Requires authentication as user
   */
  getFullToneMapOptions(options?: RequestOptions): APIPromise<FullToneMapOptionsAPI.EditObjectContainer> {
    return this._client.get('/Encoding/FullToneMapOptions', options);
  }

  /**
   * Requires authentication as user
   */
  getPublicToneMapOptions(options?: RequestOptions): APIPromise<FullToneMapOptionsAPI.EditObjectContainer> {
    return this._client.get('/Encoding/PublicToneMapOptions', options);
  }

  /**
   * Requires authentication as user
   */
  getSubtitleOptions(options?: RequestOptions): APIPromise<FullToneMapOptionsAPI.EditObjectContainer> {
    return this._client.get('/Encoding/SubtitleOptions', options);
  }

  /**
   * Requires authentication as administrator
   */
  getToneMapOptions(options?: RequestOptions): APIPromise<EncodingGetToneMapOptionsResponse> {
    return this._client.get('/Encoding/ToneMapOptions', options);
  }

  /**
   * Requires authentication as administrator
   */
  updateCodecParameters(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { CodecId, ParameterContext } = params;
    return this._client.post('/Encoding/CodecParameters', {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  updateFfmpegOptions(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/Encoding/FfmpegOptions', {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  updateFullToneMapOptions(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/Encoding/FullToneMapOptions', {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  updatePublicToneMapOptions(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/Encoding/PublicToneMapOptions', {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  updateSubtitleOptions(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/Encoding/SubtitleOptions', {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export type EncodingGetCodecConfigurationDefaultsResponse =
  Array<EncodingGetCodecConfigurationDefaultsResponse.EncodingGetCodecConfigurationDefaultsResponseItem>;

export namespace EncodingGetCodecConfigurationDefaultsResponse {
  export interface EncodingGetCodecConfigurationDefaultsResponseItem {
    CodecId?: string;

    IsEnabled?: boolean;

    Priority?: number;
  }
}

export type EncodingGetCodecInformationVideoResponse =
  Array<EncodingGetCodecInformationVideoResponse.EncodingGetCodecInformationVideoResponseItem>;

export namespace EncodingGetCodecInformationVideoResponse {
  export interface EncodingGetCodecInformationVideoResponseItem {
    CodecDeviceInfo?: EncodingGetCodecInformationVideoResponseItem.CodecDeviceInfo;

    CodecKind?: 'Audio' | 'Video' | 'SubTitles';

    DefaultPriority?: number;

    Description?: string;

    Direction?: 'Encoder' | 'Decoder';

    FrameworkCodec?: string;

    HeightAlignment?: number | null;

    Id?: string;

    IsEnabledByDefault?: boolean;

    IsHardwareCodec?: boolean;

    MaxBitRate?: CodecInformationAPI.BitRate;

    MaxHeight?: number | null;

    MaxInstanceCount?: number | null;

    MaxWidth?: number | null;

    MediaTypeName?: string;

    MinHeight?: number | null;

    MinWidth?: number | null;

    Name?: string;

    ProfileAndLevelInformation?: Array<EncodingGetCodecInformationVideoResponseItem.ProfileAndLevelInformation>;

    SecondaryFramework?: CodecInformationAPI.SecondaryFrameworks;

    SecondaryFrameworkCodec?: string;

    SupportedColorFormats?: Array<
      | 'Unknown'
      | 'yuv420p'
      | 'yuyv422'
      | 'rgb24'
      | 'bgr24'
      | 'yuv422p'
      | 'yuv444p'
      | 'yuv410p'
      | 'yuv411p'
      | 'gray'
      | 'monow'
      | 'monob'
      | 'pal8'
      | 'yuvj420p'
      | 'yuvj422p'
      | 'yuvj444p'
      | 'uyvy422'
      | 'uyyvyy411'
      | 'bgr8'
      | 'bgr4'
      | 'bgr4_byte'
      | 'rgb8'
      | 'rgb4'
      | 'rgb4_byte'
      | 'nv12'
      | 'nv21'
      | 'argb'
      | 'rgba'
      | 'abgr'
      | 'bgra'
      | 'gray16'
      | 'yuv440p'
      | 'yuvj440p'
      | 'yuva420p'
      | 'rgb48'
      | 'rgb565'
      | 'rgb555'
      | 'bgr565'
      | 'bgr555'
      | 'vaapi_moco'
      | 'vaapi_idct'
      | 'vaapi_vld'
      | 'yuv420p16'
      | 'yuv422p16'
      | 'yuv444p16'
      | 'dxva2_vld'
      | 'rgb444'
      | 'bgr444'
      | 'ya8'
      | 'bgr48'
      | 'yuv420p9'
      | 'yuv420p10'
      | 'yuv422p10'
      | 'yuv444p9'
      | 'yuv444p10'
      | 'yuv422p9'
      | 'gbrp'
      | 'gbrp9'
      | 'gbrp10'
      | 'gbrp16'
      | 'yuva422p'
      | 'yuva444p'
      | 'yuva420p9'
      | 'yuva422p9'
      | 'yuva444p9'
      | 'yuva420p10'
      | 'yuva422p10'
      | 'yuva444p10'
      | 'yuva420p16'
      | 'yuva422p16'
      | 'yuva444p16'
      | 'vdpau'
      | 'xyz12'
      | 'nv16'
      | 'nv20'
      | 'rgba64'
      | 'bgra64'
      | 'yvyu422'
      | 'ya16'
      | 'gbrap'
      | 'gbrap16'
      | 'qsv'
      | 'mmal'
      | 'd3d11va_vld'
      | 'cuda'
      | '_0rgb'
      | 'rgb0'
      | '_0bgr'
      | 'bgr0'
      | 'yuv420p12'
      | 'yuv420p14'
      | 'yuv422p12'
      | 'yuv422p14'
      | 'yuv444p12'
      | 'yuv444p14'
      | 'gbrp12'
      | 'gbrp14'
      | 'yuvj411p'
      | 'bayer_bggr8'
      | 'bayer_rggb8'
      | 'bayer_gbrg8'
      | 'bayer_grbg8'
      | 'bayer_bggr16'
      | 'bayer_rggb16'
      | 'bayer_gbrg16'
      | 'bayer_grbg16'
      | 'xvmc'
      | 'yuv440p10'
      | 'yuv440p12'
      | 'ayuv64'
      | 'videotoolbox_vld'
      | 'p010'
      | 'gbrap12'
      | 'gbrap10'
      | 'mediacodec'
      | 'gray12'
      | 'gray10'
      | 'gray14'
      | 'p016'
      | 'd3d11'
      | 'gray9'
      | 'gbrpf32'
      | 'gbrapf32'
      | 'drm_prime'
      | 'opencl'
      | 'grayf32'
      | 'yuva422p12'
      | 'yuva444p12'
      | 'nv24'
      | 'nv42'
    >;

    SupportedColorFormatStrings?: Array<string>;

    VideoMediaType?:
      | 'Unknown'
      | 'copy'
      | 'flv1'
      | 'h263'
      | 'h263p'
      | 'h264'
      | 'hevc'
      | 'mjpeg'
      | 'mpeg1video'
      | 'mpeg2video'
      | 'mpeg4'
      | 'msvideo1'
      | 'theora'
      | 'vc1image'
      | 'vc1'
      | 'vp8'
      | 'vp9'
      | 'wmv1'
      | 'wmv2'
      | 'wmv3'
      | '_012v'
      | '_4xm'
      | '_8bps'
      | 'a64_multi'
      | 'a64_multi5'
      | 'aasc'
      | 'aic'
      | 'alias_pix'
      | 'amv'
      | 'anm'
      | 'ansi'
      | 'apng'
      | 'asv1'
      | 'asv2'
      | 'aura'
      | 'aura2'
      | 'av1'
      | 'avrn'
      | 'avrp'
      | 'avs'
      | 'avui'
      | 'ayuv'
      | 'bethsoftvid'
      | 'bfi'
      | 'binkvideo'
      | 'bintext'
      | 'bitpacked'
      | 'bmp'
      | 'bmv_video'
      | 'brender_pix'
      | 'c93'
      | 'cavs'
      | 'cdgraphics'
      | 'cdxl'
      | 'cfhd'
      | 'cinepak'
      | 'clearvideo'
      | 'cljr'
      | 'cllc'
      | 'cmv'
      | 'cpia'
      | 'cscd'
      | 'cyuv'
      | 'daala'
      | 'dds'
      | 'dfa'
      | 'dirac'
      | 'dnxhd'
      | 'dpx'
      | 'dsicinvideo'
      | 'dvvideo'
      | 'dxa'
      | 'dxtory'
      | 'dxv'
      | 'escape124'
      | 'escape130'
      | 'exr'
      | 'ffv1'
      | 'ffvhuff'
      | 'fic'
      | 'fits'
      | 'flashsv'
      | 'flashsv2'
      | 'flic'
      | 'fmvc'
      | 'fraps'
      | 'frwu'
      | 'g2m'
      | 'gdv'
      | 'gif'
      | 'h261'
      | 'h263i'
      | 'hap'
      | 'hnm4video'
      | 'hq_hqa'
      | 'hqx'
      | 'huffyuv'
      | 'idcin'
      | 'idf'
      | 'iff_ilbm'
      | 'indeo2'
      | 'indeo3'
      | 'indeo4'
      | 'indeo5'
      | 'interplayvideo'
      | 'jpeg2000'
      | 'jpegls'
      | 'jv'
      | 'kgv1'
      | 'kmvc'
      | 'lagarith'
      | 'ljpeg'
      | 'loco'
      | 'm101'
      | 'mad'
      | 'magicyuv'
      | 'mdec'
      | 'mimic'
      | 'mjpegb'
      | 'mmvideo'
      | 'motionpixels'
      | 'msa1'
      | 'mscc'
      | 'msmpeg4v1'
      | 'msmpeg4v2'
      | 'msmpeg4v3'
      | 'msrle'
      | 'mss1'
      | 'mss2'
      | 'mszh'
      | 'mts2'
      | 'mvc1'
      | 'mvc2'
      | 'mxpeg'
      | 'nuv'
      | 'paf_video'
      | 'pam'
      | 'pbm'
      | 'pcx'
      | 'pgm'
      | 'pgmyuv'
      | 'pictor'
      | 'pixlet'
      | 'png'
      | 'ppm'
      | 'prores'
      | 'psd'
      | 'ptx'
      | 'qdraw'
      | 'qpeg'
      | 'qtrle'
      | 'r10k'
      | 'r210'
      | 'rawvideo'
      | 'rl2'
      | 'roq'
      | 'rpza'
      | 'rscc'
      | 'rv10'
      | 'rv20'
      | 'rv30'
      | 'rv40'
      | 'sanm'
      | 'scpr'
      | 'screenpresso'
      | 'sgi'
      | 'sgirle'
      | 'sheervideo'
      | 'smackvideo'
      | 'smc'
      | 'smvjpeg'
      | 'snow'
      | 'sp5x'
      | 'speedhq'
      | 'srgc'
      | 'sunrast'
      | 'svg'
      | 'svq1'
      | 'svq3'
      | 'targa'
      | 'targa_y216'
      | 'tdsc'
      | 'tgq'
      | 'tgv'
      | 'thp'
      | 'tiertexseqvideo'
      | 'tiff'
      | 'tmv'
      | 'tqi'
      | 'truemotion1'
      | 'truemotion2'
      | 'truemotion2rt'
      | 'tscc'
      | 'tscc2'
      | 'txd'
      | 'ulti'
      | 'utvideo'
      | 'v210'
      | 'v210x'
      | 'v308'
      | 'v408'
      | 'v410'
      | 'vb'
      | 'vble'
      | 'vcr1'
      | 'vixl'
      | 'vmdvideo'
      | 'vmnc'
      | 'vp3'
      | 'vp5'
      | 'vp6'
      | 'vp6a'
      | 'vp6f'
      | 'vp7'
      | 'webp'
      | 'wmv3image'
      | 'wnv1'
      | 'wrapped_avframe'
      | 'ws_vqa'
      | 'xan_wc3'
      | 'xan_wc4'
      | 'xbin'
      | 'xbm'
      | 'xface'
      | 'xpm'
      | 'xwd'
      | 'y41p'
      | 'ylc'
      | 'yop'
      | 'yuv4'
      | 'zerocodec'
      | 'zlib'
      | 'zmbv';

    WidthAlignment?: number | null;
  }

  export namespace EncodingGetCodecInformationVideoResponseItem {
    export interface CodecDeviceInfo {
      Adapter?: number;

      ApiVersion?: WebAPI.Version;

      Capabilities?: CodecDeviceInfo.Capabilities;

      Desription?: string;

      DeviceId?: number;

      DeviceIdentifier?: string;

      DeviceName?: string;

      DevPath?: string;

      Driver?: string;

      DriverVersion?: WebAPI.Version;

      DrmNode?: string;

      HardwareContextFramework?: CodecInformationAPI.SecondaryFrameworks;

      Name?: string;

      VendorId?: number;

      VendorName?: string;
    }

    export namespace CodecDeviceInfo {
      export interface Capabilities {
        Supports10BitProcessing?: boolean;

        SupportsHwDownload?: boolean;

        SupportsHwUpload?: boolean;

        SupportsNativeToneMapping?: boolean;

        SupportsStandaloneDeviceInit?: boolean;
      }
    }

    export interface ProfileAndLevelInformation {
      Level?: ProfileAndLevelInformation.Level;

      Profile?: ProfileAndLevelInformation.Profile;
    }

    export namespace ProfileAndLevelInformation {
      export interface Level {
        Description?: string;

        Id?: string;

        MaxBitRate?: CodecInformationAPI.BitRate;

        MaxBitRateDisplay?: string;

        Ordinal?: number | null;

        ResolutionRates?: Array<Level.ResolutionRate>;

        ResolutionRatesDisplay?: string;

        ResolutionRateStrings?: Array<string>;

        ShortName?: string;
      }

      export namespace Level {
        export interface ResolutionRate {
          FrameRate?: number;

          Height?: number;

          Resolution?: ResolutionRate.Resolution;

          Width?: number;
        }

        export namespace ResolutionRate {
          export interface Resolution {
            Height?: number;

            Width?: number;
          }
        }
      }

      export interface Profile {
        BitDepths?: Array<number>;

        Description?: string;

        Details?: string;

        Id?: string;

        ShortName?: string;
      }
    }
  }
}

export interface EncodingGetToneMapOptionsResponse {
  IsAnyHardwareToneMappingAvailable?: boolean;

  IsOpenClAvailable?: boolean;

  IsOpenClSuperTAvailable?: boolean;

  IsQuickSyncNativeAvailable?: boolean;

  IsSoftwareToneMappingAvailable?: boolean;

  IsVaapiNativeAvailable?: boolean;

  OperatingSystem?: 'Windows' | 'Linux' | 'OSX' | 'BSD' | 'Android';

  ShowAdvanced?: boolean;

  ShowNvidiaOptions?: boolean;

  ShowQuickSyncOptions?: boolean;

  ShowVaapiOptions?: boolean;
}

export interface EncodingGetCodecParametersParams {
  /**
   * Codec Id
   */
  CodecId: string;

  /**
   * Parameter Context
   */
  ParameterContext: CodecParametersAPI.CodecParameterContext;
}

Encoding.FullToneMapOptions = FullToneMapOptions;
Encoding.CodecParameters = CodecParameters;
Encoding.CodecInformation = CodecInformation;

export declare namespace Encoding {
  export {
    type EncodingGetCodecConfigurationDefaultsResponse as EncodingGetCodecConfigurationDefaultsResponse,
    type EncodingGetCodecInformationVideoResponse as EncodingGetCodecInformationVideoResponse,
    type EncodingGetToneMapOptionsResponse as EncodingGetToneMapOptionsResponse,
    type EncodingGetCodecParametersParams as EncodingGetCodecParametersParams,
  };

  export {
    FullToneMapOptions as FullToneMapOptions,
    type EditObjectContainer as EditObjectContainer,
    type EditorTypes as EditorTypes,
  };

  export { CodecParameters as CodecParameters, type CodecParameterContext as CodecParameterContext };

  export {
    CodecInformation as CodecInformation,
    type BitRate as BitRate,
    type SecondaryFrameworks as SecondaryFrameworks,
  };
}
