async function getRanges() {
  return window.fetch('http://demo2057032.mockable.io/get-ranges')
    .then(async (response) => {
      const data = await response;
      if (response.ok) {
        const result = await data.json();
        return result;
      }
      return data;
    });
}
async function getFixedRanges() {
  return window.fetch('http://demo2057032.mockable.io/get-fixed-ranges')
    .then(async (response) => {
      const data = await response;
      if (response.ok) {
        const result = await data.json();
        return result;
      }
      return data;
    });
}
export { getRanges, getFixedRanges };
