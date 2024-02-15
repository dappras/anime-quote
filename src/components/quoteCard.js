import React from "react";
import Colorway from "../utils/colorway";

const QouteCard = (props) => {
  return (
    <div>
      <div
        className="h-auto"
        id={props.data.id}
        style={{
          backgroundColor: Colorway.secondary,
          minWidth: "2rem",
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
                {props.data.quote}
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
              - {props.data.character} -
            </div>
          </div>
        </div>
        <div className="px-3 py-4">
          <div className="flex justify-end" style={{ color: Colorway.primary }}>
            {props.data.anime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QouteCard;
