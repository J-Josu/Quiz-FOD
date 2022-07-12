type CounterStatus = {
  state: () => 'RESETED' | 'EQUAL' | 'INCREMENTED' | '',
  lastCount: () => number,
  subscribe: (callback: (currentCount: number) => void, preventInitialCallback: boolean) => (() => void),
  set: (newValue: number) => void,
  update: (callback: (currentCount: number) => number) => void,
  reset: () => void
}

export const limitedCounter = (max: number, initial = 0): CounterStatus => {
  const _max = max;
  let count = initial;
  let state: 'RESETED' | 'EQUAL' | 'INCREMENTED' | '' = '';
  let lastCount = 0;
  let subscribeFunctions: ((currentCount: number) => void)[] = [];

  const set = (newValue: number): void => {
    console.log(newValue);
    lastCount = count;
    if (newValue > count) {
      state = 'INCREMENTED';
      count = newValue > _max ? count : newValue;
    }
    else if (newValue === count) state = 'EQUAL';
    else {
      count = 0;
      state = 'RESETED';
    }
    subscribeFunctions.forEach((func) => func(count))

    console.log(count);
  }

  const update = (callback: (currentCount: number) => number) => {
    set(callback(count));
  }

  const subscribe = (callback: (currentCount: number) => void, preventInitialCallback = false) => {
    subscribeFunctions.push(callback);
    if (!preventInitialCallback)
      callback(count);

    return () => {
      subscribeFunctions =
        subscribeFunctions.filter((func: (count: number) => void) => callback !== func)
    }
  }

  return { set, update, subscribe, state: () => state, lastCount: () => lastCount, reset: () => set(-1) };
}
