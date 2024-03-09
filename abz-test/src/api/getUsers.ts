import { BASE_URL } from "./baseURL";

const pageCount: number = 6;

let pointer: number = 1;

export const getUsers = async () => {
  const defined_url =
    BASE_URL + "/users" + "?page=" + pointer + "&count=" + pageCount;
  try {
    const response = await fetch(defined_url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const parsed = await response.json();
    pointer++;
    return parsed;
  } catch (e) {
    console.log(e);
  }
};
