class SDK {
  value;

  constructor() {
    // Timeout here is a representation of delay in fetching the SDK
    setTimeout(() => {
      this.value = "SDK has loaded";
      console.log("SDK has loaded after 3 seconds");
    }, 3000);
  }

  isOn(feature) {
    return this.value ? true : false;
  }
}

export default SDK;
