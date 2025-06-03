// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunningAPI from './running';
import { Running } from './running';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ScheduledTasks extends APIResource {
  running: RunningAPI.Running = new RunningAPI.Running(this._client);

  /**
   * Requires authentication as administrator
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TaskInfo> {
    return this._client.get(path`/ScheduledTasks/${id}`, options);
  }

  /**
   * Requires authentication as administrator
   */
  list(
    query: ScheduledTaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduledTaskListResponse> {
    return this._client.get('/ScheduledTasks', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  updateTriggers(
    id: string,
    params: ScheduledTaskUpdateTriggersParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/ScheduledTasks/${id}/Triggers`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface TaskInfo {
  Category?: string;

  CurrentProgressPercentage?: number | null;

  Description?: string;

  Id?: string;

  IsHidden?: boolean;

  Key?: string;

  LastExecutionResult?: TaskInfo.LastExecutionResult;

  Name?: string;

  State?: 'Idle' | 'Cancelling' | 'Running';

  Triggers?: Array<TaskTriggerInfo>;
}

export namespace TaskInfo {
  export interface LastExecutionResult {
    EndTimeUtc?: string;

    ErrorMessage?: string;

    Id?: string;

    Key?: string;

    LongErrorMessage?: string;

    Name?: string;

    StartTimeUtc?: string;

    Status?: 'Completed' | 'Failed' | 'Cancelled' | 'Aborted';
  }
}

export interface TaskTriggerInfo {
  DayOfWeek?: DayOfWeek;

  IntervalTicks?: number | null;

  MaxRuntimeTicks?: number | null;

  SystemEvent?: 'WakeFromSleep' | 'DisplayConfigurationChange' | 'NetworkChange';

  TimeOfDayTicks?: number | null;

  Type?: string;
}

export type ScheduledTaskListResponse = Array<TaskInfo>;

export interface ScheduledTaskListParams {
  /**
   * Optional filter tasks that are enabled, or not.
   */
  IsEnabled?: boolean | null;

  /**
   * Optional filter tasks that are hidden, or not.
   */
  IsHidden?: boolean | null;
}

export interface ScheduledTaskUpdateTriggersParams {
  body: Array<TaskTriggerInfo>;
}

ScheduledTasks.Running = Running;

export declare namespace ScheduledTasks {
  export {
    type DayOfWeek as DayOfWeek,
    type TaskInfo as TaskInfo,
    type TaskTriggerInfo as TaskTriggerInfo,
    type ScheduledTaskListResponse as ScheduledTaskListResponse,
    type ScheduledTaskListParams as ScheduledTaskListParams,
    type ScheduledTaskUpdateTriggersParams as ScheduledTaskUpdateTriggersParams,
  };

  export { Running as Running };
}
