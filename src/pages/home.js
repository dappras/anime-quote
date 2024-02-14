import React, { useEffect, useState } from "react";
import { getRandomQuote } from "../services/quoteServices";
import Colorway from "../utils/colorway";

const HomePage = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    // getQuote();
  }, []);

  const getQuote = async () => {
    const res = await getRandomQuote();
    if (res && res.data.length > 0) {
      setQuote(res.data);
    }
  };

  return (
    <div>
      <div>tes</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="flex justify-center">
        <div className="flex w-4/6 gap-6">
          <div
            className="basis-3/12"
            style={{
              backgroundColor: Colorway.secondary,
            }}
          >
            <div
              className="py-5 px-3"
              style={{
                backgroundColor: Colorway.primary,
                borderBottomRightRadius: 16,
              }}
            >
              <div className="">
                <div className="flex">
                  <div
                    className="basis-10/12"
                    style={{ fontWeight: "bold", fontSize: 16 }}
                  >
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    ea quibusdam ex totam illum illo."
                  </div>
                </div>
                <div
                  className="mt-4"
                  style={{
                    color: Colorway.secondary,
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  - Gon Frecs -
                </div>
              </div>
            </div>
            <div className="px-3 py-4">
              <div
                className="flex justify-end"
                style={{ color: Colorway.primary }}
              >
                Hunter x Hunter
              </div>
            </div>
          </div>
          <div
            className="basis-3/12"
            style={{
              backgroundColor: Colorway.secondary,
            }}
          >
            <div
              className="py-5 px-3"
              style={{
                backgroundColor: Colorway.primary,
                borderBottomRightRadius: 16,
              }}
            >
              <div className="">
                <div className="flex">
                  <div
                    className="basis-10/12"
                    style={{ fontWeight: "bold", fontSize: 16 }}
                  >
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    ea quibusdam ex totam illum illo."
                  </div>
                </div>
                <div
                  className="mt-4"
                  style={{
                    color: Colorway.secondary,
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  - Gon Frecs -
                </div>
              </div>
            </div>
            <div className="px-3 py-4">
              <div
                className="flex justify-end"
                style={{ color: Colorway.primary }}
              >
                Hunter x Hunter
              </div>
            </div>
          </div>
          <div
            className="basis-3/12"
            style={{
              backgroundColor: Colorway.secondary,
            }}
          >
            <div
              className="py-5 px-3"
              style={{
                backgroundColor: Colorway.primary,
                borderBottomRightRadius: 16,
              }}
            >
              <div className="">
                <div className="flex">
                  <div
                    className="basis-10/12"
                    style={{ fontWeight: "bold", fontSize: 16 }}
                  >
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    ea quibusdam ex totam illum illo."
                  </div>
                </div>
                <div
                  className="mt-4"
                  style={{
                    color: Colorway.secondary,
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  - Gon Frecs -
                </div>
              </div>
            </div>
            <div className="px-3 py-4">
              <div
                className="flex justify-end"
                style={{ color: Colorway.primary }}
              >
                Hunter x Hunter
              </div>
            </div>
          </div>
          <div
            className="basis-3/12"
            style={{
              backgroundColor: Colorway.secondary,
            }}
          >
            <div
              className="py-5 px-3"
              style={{
                backgroundColor: Colorway.primary,
                borderBottomRightRadius: 16,
              }}
            >
              <div className="">
                <div className="flex">
                  <div
                    className="basis-10/12"
                    style={{ fontWeight: "bold", fontSize: 16 }}
                  >
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    ea quibusdam ex totam illum illo."
                  </div>
                </div>
                <div
                  className="mt-4"
                  style={{
                    color: Colorway.secondary,
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  - Gon Frecs -
                </div>
              </div>
            </div>
            <div className="px-3 py-4">
              <div
                className="flex justify-end"
                style={{ color: Colorway.primary }}
              >
                Hunter x Hunter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
