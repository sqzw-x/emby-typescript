// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sync', () => {
  // skipped: tests are disabled for the time being
  test.skip('getItemStatus', async () => {
    const responsePromise = client.sync.getItemStatus('ItemId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listOptions: only required params', async () => {
    const responsePromise = client.sync.listOptions({ UserId: 'UserId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listOptions: required and optional params', async () => {
    const response = await client.sync.listOptions({
      UserId: 'UserId',
      Category: 'Latest',
      ItemIds: 'ItemIds',
      ParentId: 'ParentId',
      TargetId: 'TargetId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listTargets: only required params', async () => {
    const responsePromise = client.sync.listTargets({ UserId: 'UserId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTargets: required and optional params', async () => {
    const response = await client.sync.listTargets({ UserId: 'UserId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('reportOfflineAction: only required params', async () => {
    const responsePromise = client.sync.reportOfflineAction({ body: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('reportOfflineAction: required and optional params', async () => {
    const response = await client.sync.reportOfflineAction({
      body: [
        {
          Date: '2019-12-27T18:11:19.117Z',
          Id: 'Id',
          IsFavorite: true,
          ItemId: 'ItemId',
          Played: true,
          PositionTicks: 0,
          ServerId: 'ServerId',
          Type: 'PlayedItem',
          UserId: 'UserId',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('syncData: only required params', async () => {
    const responsePromise = client.sync.syncData({ TargetId: 'TargetId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('syncData: required and optional params', async () => {
    const response = await client.sync.syncData({
      TargetId: 'TargetId',
      InternalTargetIds: [0],
      LocalItemIds: ['string'],
    });
  });
});
