import React, { createContext, useContext } from 'react';

const SDKContext = createContext({});

export function SDKProvider({ children, value }) {
  console.log('SDKProvider value-----', value);
  return <SDKContext.Provider value={value}>{children}</SDKContext.Provider>;
}

export const useSDK = () => {
  const context = useContext(SDKContext);

  if (context === undefined)
    throw new Error('useSDK must be used within SDKProvider');

  return context;
};

export const useSDKFeatureHook = (feature) => {
  const sdk = useSDK();
  console.log('useSDKFeatureHook-----', sdk);

  return sdk ? sdk.isOn(feature) : false;
};
