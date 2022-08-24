import { createContext } from 'react';

import type * as types from 'types';

export const defaultEventConfig: types.EventConfig = {
  name: '',
  description: '',
  logo: {
    url: '',
  },
  date: new Date(),
  venue: '',
};
export const EventConfigContext = createContext(defaultEventConfig);
export const EventConfigProvider = EventConfigContext.Provider;
