import React from 'react';
import { useSDKFeatureHook } from './SDK';

const Page = () => {
  console.log('Rendered Page.');
  const sdkFeatureValue = useSDKFeatureHook();

  console.log('sdkFeatureValue-----', sdkFeatureValue);

  return (
    <div>
      <h5>Page</h5>
      <p>sdkFeatureValue: {sdkFeatureValue.toString()}</p>
      <button>Click</button>
    </div>
  );
};

export default Page;
