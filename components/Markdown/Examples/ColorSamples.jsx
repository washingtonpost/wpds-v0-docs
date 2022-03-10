import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  styled,
  theme,
  AlertBanner,
} from "@washingtonpost/wpds-ui-kit";
import { toast } from "react-toastify";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";

import { Grid } from "../Components/Grid";
export default function ColorExamles({ group }) {
  const [Group, setGroup] = useState([]);
  const [CopyText, setCopyText] = useState("");

  useEffect(() => {
    const getGroup = handleColor(group);
    setGroup(getGroup);
  }, []);

  const SuccessToast = () => {
    return (
      <AlertBanner.Root variant="success">
        <AlertBanner.Content css={{ minWidth: 250, paddingRight: "$050" }}>
          <b>Copied: </b>
          <Box as="span" css={{ fontSize: 16 }}>
            <Box as="i">{CopyText}</Box>
          </Box>
        </AlertBanner.Content>
      </AlertBanner.Root>
    );
  };
  useEffect(() => {
    if (CopyText) {
      window.navigator.clipboard.writeText(CopyText);
      toast(<SuccessToast />, {
        position: "top-center",
        closeButton: false,
        autoClose: 2000,
        hideProgressBar: true,
        draggable: false,
        onClose: () => {
          setCopyText(null);
        },
      });
    }
  }, [CopyText]);

  function handleColor(group) {
    let allColors = [];
    for (var key in Tokens.color[group]) {
      if (Tokens.color[group][key].hasOwnProperty("value")) {
        allColors.push(`${key}`);
      }
    }
    return allColors;
  }

  const Swatch = styled("button", {
    backgroundColor: "transparent",
    border: "1px solid $subtle",
    "&:hover": {
      opacity: 0.5,
    },
  });
  const ColorExample = styled("div", {
    minHeight: "$500",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const ColorID = styled("p", {
    fontSize: "$100",
    padding: "$025",
    fontFamily: "$meta",
    color: "$primary",
  });

  return (
    <>
      <Grid maxSize={"120px"}>
        {Group.map((key, i) => {
          return (
            <Swatch
              key={i}
              onClick={() =>
                setCopyText(
                  `$${key.toLowerCase()}${group == "static" ? "-static" : ""}`
                )
              }
            >
              <ColorExample
                css={{
                  backgroundColor: `$${key}${
                    group == "static" ? "-static" : ""
                  }`,
                }}
              />
              <ColorID>{key}</ColorID>
            </Swatch>
          );
        })}
      </Grid>
    </>
  );
}
