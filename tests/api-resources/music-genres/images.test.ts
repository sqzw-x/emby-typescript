// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // Prism tests are disabled
  test.skip('retrieveByType: only required params', async () => {
    const responsePromise = client.musicGenres.images.retrieveByType('Primary', { Name: 'Name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveByType: required and optional params', async () => {
    const response = await client.musicGenres.images.retrieveByType('Primary', {
      Name: 'Name',
      AutoOrient: true,
      BackgroundColor: 'BackgroundColor',
      CropWhitespace: true,
      EnableImageEnhancers: true,
      ForegroundLayer: 'ForegroundLayer',
      Format: 'Format',
      Height: 0,
      Index: 0,
      KeepAnimation: true,
      MaxHeight: 0,
      MaxWidth: 0,
      Quality: 0,
      Tag: 'Tag',
      Width: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieveByTypeAndIndex: only required params', async () => {
    const responsePromise = client.musicGenres.images.retrieveByTypeAndIndex(0, {
      Name: 'Name',
      Type: 'Primary',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveByTypeAndIndex: required and optional params', async () => {
    const response = await client.musicGenres.images.retrieveByTypeAndIndex(0, {
      Name: 'Name',
      Type: 'Primary',
      AutoOrient: true,
      BackgroundColor: 'BackgroundColor',
      CropWhitespace: true,
      EnableImageEnhancers: true,
      ForegroundLayer: 'ForegroundLayer',
      Format: 'Format',
      Height: 0,
      KeepAnimation: true,
      MaxHeight: 0,
      MaxWidth: 0,
      Quality: 0,
      Tag: 'Tag',
      Width: 0,
    });
  });
});
