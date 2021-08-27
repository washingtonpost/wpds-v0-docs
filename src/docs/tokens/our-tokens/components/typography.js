import React, { Fragment } from "react";

import typography from "../../../../static/token/typography/data";

function toTitleCase(str) {
  if (str === "line-heights") {
    return str.replace(/\w\S*/g, function process(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  } else {
    return str
      .split("-")
      .map(function process(txt) {
        return txt.charAt(0).toUpperCase() + txt.slice(1);
      })
      .join(" ");
  }
}

const TypographyHeader = () => {
  return (
    <div className="w-100 center mb-md">
      <h1 className="font--headline font-xl pb-sm">Typography</h1>
      <h2 className="font-xxs font-light font-subhead">
        One of the core foundations of our system is our type styles.
      </h2>
    </div>
  );
};

const TypographyTable = props => {
  let isLineHeight = false;

  if (props.name === "line-heights") {
    isLineHeight = true;
  }

  return (
    <>
      <div className="mb-md">
        {isLineHeight ? <hr className="mt-xxl" /> : null}
        <h2 className={`font-md ${isLineHeight ? "font--headline" : ""}`}>
          {toTitleCase(props.name)}
        </h2>
        <p
          className={`font-light font-subhead font-xxxs ${
            !isLineHeight ? "gray-dark" : "subs-theme pink-dark"
          }`}
        >
          {props.values.subtitle}
        </p>
      </div>
      <table
        className="w-100 mb-lg"
        style={{
          borderCollapse: "collapse"
        }}
      >
        <thead className="b bb bc-black">
          <tr>
            <th className={`font-light font-xxxs gray-dark left pr-md`}>
              {!isLineHeight ? "Size" : "Name"}
            </th>
            <th className={`font-light font-xxxs gray-dark left pl-sm pr-sm`}>
              {!isLineHeight ? "Weight" : "Value"}
            </th>
            {!isLineHeight ? (
              <th className={`font-light font-xxxs gray-dark left pl-sm pr-sm`}>
                Font-Family
              </th>
            ) : null}
            <th className={`font-light font-xxxs gray-dark left pl-sm pr-sm`}>
              Example
            </th>
            <th className={`font-light font-xxxs gray-dark left pl-sm`}>CSS</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props.values)
            .slice(1)
            .map(([name, data]) => {
              return (
                <tr key={props.name} className="b bb bc-gray-light">
                  <td className="pr-md">{toTitleCase(name)}</td>
                  <td className="pl-sm pr-sm">
                    {!isLineHeight ? data["weight"] : data["value"]}
                  </td>
                  {!isLineHeight ? (
                    <td className="pl-sm pr-sm">{data["font-family"]}</td>
                  ) : null}
                  <td
                    className={`pl-sm pt-md pr-sm pb-md ${data["css"]} mw-420`}
                  >
                    {data["example"]}
                  </td>
                  <td className="pl-sm">{data["css"]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export const Typography = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <Fragment>
    <TypographyHeader />
    {Object.entries(typography).map(([key, value]) => {
      return <TypographyTable key={key} name={key} values={value} />;
    })}
  </Fragment>
);

