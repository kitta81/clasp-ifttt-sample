function main() {
  const eventName: string = '';
  const key: string = '';

  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      value1: ''
    })
  };

  UrlFetchApp.fetch(
    `https://maker.ifttt.com/trigger/${eventName}/with/key/${key}`,
    options
  );
}
