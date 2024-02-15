import httpAuth from "./httpAuth";

const register = async (body) => {
  const response = await httpAuth
    .post("register", body)
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

const login = async (body) => {
  const response = await httpAuth
    .post(`login`, body)
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

export { register, login };
