const getData = (get) => JSON.parse(localStorage.getItem(`${get}`));

export default getData;
