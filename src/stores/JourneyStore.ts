import { action, computed, makeObservable, observable } from 'mobx';

import { IJourney } from '@app/interfaces/journey';

export class JourneyStoreClass {
  journeys: IJourney[] = [];

  constructor() {
    makeObservable(this, {
      journeys: observable,
      addJourney: action,
      setCompleted: action,
      status: computed,
    });
  }

  addJourney(type: string, startTime: string, endTime: string) {
    const item: IJourney = {
      id: +Math.random().toFixed(4),
      type,
      startTime,
      endTime,
      completed: false,
    };
    this.journeys.push(item);
  }

  setCompleted(id: number) {
    const index = this.journeys.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.journeys[index].completed = !this.journeys[index].completed;
    }
  }

  get status() {
    let completed = 0;
    let remaining = 0;
    this.journeys.map((journey) => {
      if (journey.completed) {
        completed++;
      } else {
        remaining++;
      }
    });
    return { completed, remaining };
  }
}

export const JourneyStore = new JourneyStoreClass();
