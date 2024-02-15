import http from "./http";

const getRandomQuote = async () => {
  const response = await http
    .get("quotes")
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log("ERROR");
      console.log(e.response);
      alert(e?.response?.data?.error);
    });

  return response;
};

const getRandomQuoteByAnime = async (name) => {
  const response = await http
    .get(`quotes/anime?title=${name}`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log("ERROR");
      console.log(e.response);
      alert(e?.response?.data?.error);
      return e.response;
    });

  return response;
};

export { getRandomQuote, getRandomQuoteByAnime };
