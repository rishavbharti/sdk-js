import React from 'react';
import { createRoot } from 'react-dom/client';
import { SDK, SDKProvider } from './SDK';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const sdkValue = new SDK();

root.render(
  <SDKProvider value={sdkValue}>
    <App />
  </SDKProvider>
);
