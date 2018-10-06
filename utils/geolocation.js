const getLoc = (successCb, errorCb) =>
  navigator.geolocation.getCurrentPosition(successCb, err =>
    errorCb({ error: `Error getting weather conditions: ${err}` })
  );

export default getLoc;
