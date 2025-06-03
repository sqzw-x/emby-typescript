// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // skipped: tests are disabled for the time being
  test.skip('listByType: only required params', async () => {
    const responsePromise = client.artists.images.listByType('Primary', { Name: 'Name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listByType: required and optional params', async () => {
    const response = await client.artists.images.listByType('Primary', {
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveByIndex: only required params', async () => {
    const responsePromise = client.artists.images.retrieveByIndex(0, { Name: 'Name', Type: 'Primary' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByIndex: required and optional params', async () => {
    const response = await client.artists.images.retrieveByIndex(0, {
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
