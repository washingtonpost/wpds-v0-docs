import React, { useEffect, useState } from "react";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";

/**
 * Table
 */
export default function Table({
  headers,
  data,
  suffix,
  nestedGroup,
  useTokenData,
}) {
  const TokenData = () => {
    let _tokenArray = [];
    const _Tokens = nestedGroup ? Tokens[nestedGroup][data] : Tokens[data];
    for (let _token in _Tokens) {
      let _value;
      let _description;
      if (_Tokens[_token].hasOwnProperty("value")) {
        _value = _Tokens[_token].value;
      }
      if (_Tokens[_token].hasOwnProperty("description")) {
        _description = _Tokens[_token].description;
      }
      if (_token != "description") {
        _tokenArray.push({
          name: _token,
          value: _value,
          description: _description,
        });
      }
    }
    _tokenArray.sort(compare);

    return (
      <>
        {_tokenArray.map((item, i) => {
          return (
            <tr key={i}>
              <td>
                {item.name}
                {suffix && suffix}
              </td>
              <td>{item.value}</td>
              <td>{item.description ? item.description : "--"}</td>
            </tr>
          );
        })}
      </>
    );
  };

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  const Container = styled("div", {
    overflowX: "auto",
    width: "100%",
  });
  const Table = styled("table", {
    borderCollapse: "collapse",
    borderSpacing: "0",
    width: "100%",
    marginBottom: "calc($050 / 2)",
    "& th": {
      textAlign: "left",
      fontWeight: "$light",
      borderBottom: "1px solid $subtle",
      fontSize: "$100",
      color: "$accessible",
      py: "$100",
    },
    "& td": {
      minWidth: "auto",
      borderBottom: "1px solid $subtle",
      fontSize: "$100",
      paddingRight: "$100",
      color: "$accessible",
      py: "$100",
    },
    // style the first column of the table
    "& td:first-child": {
      fontWeight: "$bold",
      color: "$primary",
    },
  });
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {headers &&
              headers.map((header, i) => {
                return <th key={i}>{header}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {useTokenData ? (
            <TokenData />
          ) : (
            data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                  <td>{item.description}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </Container>
  );
}
