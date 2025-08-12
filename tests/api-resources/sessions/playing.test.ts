// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource playing', () => {
  // Prism tests are disabled
  test.skip('issuePlaystateCommand: only required params', async () => {
    const responsePromise = client.sessions.playing.issuePlaystateCommand('Stop', { Id: 'Id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('issuePlaystateCommand: required and optional params', async () => {
    const response = await client.sessions.playing.issuePlaystateCommand('Stop', {
      Id: 'Id',
      body_Command: 'Stop',
      ControllingUserId: 'ControllingUserId',
      SeekPositionTicks: 0,
    });
  });

  // Prism tests are disabled
  test.skip('ping', async () => {
    const responsePromise = client.sessions.playing.ping();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('ping: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.playing.ping({ PlaySessionId: 'PlaySessionId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Emby.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('playItem: only required params', async () => {
    const responsePromise = client.sessions.playing.playItem('Id', { ItemIds: [0], PlayCommand: 'PlayNow' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('playItem: required and optional params', async () => {
    const response = await client.sessions.playing.playItem('Id', {
      ItemIds: [0],
      PlayCommand: 'PlayNow',
      StartPositionTicks: 0,
      AudioStreamIndex: 0,
      ControllingUserId: 'ControllingUserId',
      MediaSourceId: 'MediaSourceId',
      StartIndex: 0,
      SubtitleStreamIndex: 0,
    });
  });

  // Prism tests are disabled
  test.skip('reportProgress', async () => {
    const responsePromise = client.sessions.playing.reportProgress({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reportStarted', async () => {
    const responsePromise = client.sessions.playing.reportStarted({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reportStopped', async () => {
    const responsePromise = client.sessions.playing.reportStopped({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
