// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby, { toFile } from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.items.images.list('Id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.items.images.delete('Primary', { Id: 'Id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.items.images.delete('Primary', { Id: 'Id', Index: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteByType: only required params', async () => {
    const responsePromise = client.items.images.deleteByType('Primary', { Id: 'Id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteByType: required and optional params', async () => {
    const response = await client.items.images.deleteByType('Primary', { Id: 'Id', Index: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteByTypeAndIndex: only required params', async () => {
    const responsePromise = client.items.images.deleteByTypeAndIndex(0, { Id: 'Id', Type: 'Primary' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteByTypeAndIndex: required and optional params', async () => {
    const response = await client.items.images.deleteByTypeAndIndex(0, { Id: 'Id', Type: 'Primary' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByType: only required params', async () => {
    const responsePromise = client.items.images.retrieveByType('Primary', { Id: 'Id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByType: required and optional params', async () => {
    const response = await client.items.images.retrieveByType('Primary', {
      Id: 'Id',
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
  test.skip('retrieveByTypeAndIndex: only required params', async () => {
    const responsePromise = client.items.images.retrieveByTypeAndIndex(0, { Id: 'Id', Type: 'Primary' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByTypeAndIndex: required and optional params', async () => {
    const response = await client.items.images.retrieveByTypeAndIndex(0, {
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
  test.skip('retrieveDetailed: only required params', async () => {
    const responsePromise = client.items.images.retrieveDetailed(0, {
      Id: 'Id',
      Type: 'Primary',
      Index: 0,
      Tag: 'Tag',
      Format: 'Format',
      MaxWidth: 0,
      MaxHeight: 0,
      PercentPlayed: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveDetailed: required and optional params', async () => {
    const response = await client.items.images.retrieveDetailed(0, {
      Id: 'Id',
      Type: 'Primary',
      Index: 0,
      Tag: 'Tag',
      Format: 'Format',
      MaxWidth: 0,
      MaxHeight: 0,
      PercentPlayed: 0,
      AutoOrient: true,
      BackgroundColor: 'BackgroundColor',
      CropWhitespace: true,
      EnableImageEnhancers: true,
      ForegroundLayer: 'ForegroundLayer',
      Height: 0,
      KeepAnimation: true,
      Quality: 0,
      Width: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateIndex: only required params', async () => {
    const responsePromise = client.items.images.updateIndex(0, { Id: 'Id', Type: 'Primary', NewIndex: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateIndex: required and optional params', async () => {
    const response = await client.items.images.updateIndex(0, { Id: 'Id', Type: 'Primary', NewIndex: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateURL: only required params', async () => {
    const responsePromise = client.items.images.updateURL(0, { Id: 'Id', Type: 'Primary', Url: 'Url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateURL: required and optional params', async () => {
    const response = await client.items.images.updateURL(0, { Id: 'Id', Type: 'Primary', Url: 'Url' });
  });

  // skipped: tests are disabled for the time being
  test.skip('upload: only required params', async () => {
    const responsePromise = client.items.images.upload(
      'Primary',
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.items.images.upload(
      'Primary',
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      { Id: 'Id', Index: 0 },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('uploadByTypeAndIndex: only required params', async () => {
    const responsePromise = client.items.images.uploadByTypeAndIndex(
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
  test.skip('uploadByTypeAndIndex: required and optional params', async () => {
    const response = await client.items.images.uploadByTypeAndIndex(
      0,
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      { Id: 'Id', Type: 'Primary' },
    );
  });
});
