import { END_POINT } from "../provider/provider";
const fetchData = async function (path, fetchBody = {}, md = "GET") {
  try {
    const options = {
      method: md,
      credentials: "include",
      // referrerPolicy: "origin",
      headers: {
        "Content-Type": "application/json",
      },
      body:
        md.toLocaleLowerCase() === "get"
          ? undefined
          : JSON.stringify(fetchBody),
    };

    const res = await fetch(`${END_POINT}${path}`, options);

    if (!res.ok) {
      const data = await res.json();
      if (data) throw new Error(data.errObj.message);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);

    throw Error(err.message);
  }
};

export default fetchData;
