// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby, { toFile } from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.users.images.retrieve(0, { Id: 'Id', Type: 'Primary' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.users.images.retrieve(0, {
      Id: 'Id',
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

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.users.images.update(
      0,
      await toFile(Buffer.from('# my file contents'), 'README.md'),
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.users.images.update(
      0,
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      { Id: 'Id', Type: 'Primary' },
    );
  });
});
