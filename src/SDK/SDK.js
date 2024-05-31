class SDK {
  value;

  constructor() {
    // Timeout here is a representation of delay in fetching the SDK
    setTimeout(() => {
      this.value = 'Fetched SDK';
      console.log('Fetched SDK. Updated value.');
    }, 3000);
  }

  isOn(feature) {
    return this.value ? true : false;
  }
}

export default SDK;
