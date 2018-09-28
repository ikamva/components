import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ikamva',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
