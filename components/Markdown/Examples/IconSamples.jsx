import React, { useEffect, useState } from 'react';
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import { toast } from 'react-toastify';
import MDXStyling from "~/components/Markdown/Styling";
import { Grid } from '../Components/Grid';
import Search from "@washingtonpost/wpds-assets/asset/search";
import { Icon, theme, Button, AlertBanner, Box, styled } from '@washingtonpost/wpds-ui-kit';
import { paramCase } from "param-case";
import { logoList } from "./LogoSamples";

const InputHolder = styled("div", {
  display: "flex",
  marginBottom: "$050",
  width: "auto",
  border: `1px solid ${theme.colors.subtle}`,
  position: "relative",
  variants: {
    showFocus: {
      true: {
        border: `1px solid ${theme.colors.signal}`,
      },
      false: {
        border: `1px solid ${theme.colors.subtle}`,
      }
    }
  }
})
const Input = styled("input", {
  height: "$300",
  border: "none",
  width: "100%",
  color: theme.colors.onSecondary,
  background: theme.colors.secondary,
  transition: "all .3s ease",
  padding: "$150 $050 $050 $050",
  borderRadius: "$012",
  "&:focus": {
    outline: "none",

    "&:valid": {
      "& + label": {
        fontSize: "$075",
        transform: "translateY(-100%)",
      }
    }
  },
  "&:placeholder-shown": {
    "& + label": {
      transform: "translateY(-100%)",
      fontSize: "$075",
    },
  }
})

const Label = styled("label", {
  position: "absolute",
  cursor: "text",
  left: "$050",
  top: "50%",
  pointerEvents: "none",
  transform: "translateY(-50%)",
  fontWeight: "$light",
  color: theme.colors.accessible,
  transition: "all .3s ease"
})
export default function Icons() {
  const SuccessToast = () => {
    return (
      <AlertBanner.Root variant="success">
        <AlertBanner.Content css={{ minWidth: 250, paddingRight: "$050" }}>
          <b>Copied: {" "}</b>
          <Box as="span" css={{ fontSize: 16 }}>
            Import statement for {" "}
            <Box as="i"
              css={{ textTransform: "capitalize" }}>{Name}</Box></Box>
        </AlertBanner.Content>
      </AlertBanner.Root>
    )
  }
  const [ExampleToCopy, setExampleToCopy] = useState(null);
  const [Name, setName] = useState("")
  const [inFocus, setInFocus] = useState(false)
  const [Filter, setFilter] = useState("");
  useEffect(() => {
    if (ExampleToCopy) {
      window.navigator.clipboard.writeText(ExampleToCopy);
      toast(<SuccessToast />, {
        position: "top-center",
        closeButton: false,
        autoClose: 2000,
        hideProgressBar: true,
        draggable: false,
        onClose: () => {

          setName(null)
        }
      })
    }
  }, [ExampleToCopy]);

  function setVariables(example, Name) {
    console.log(example);
    setName(Name)
    setExampleToCopy(example)
  }

  function handleChange(e) {
    const value = e.target.value;
    setFilter(value);
  }
  const GetIcons = () => {

    return (
      Object.keys(AllAssets).map((Asset, i) => {
        const Sample = AllAssets[Asset];
        const componentName = paramCase(Asset);

        const importExample = `import ${Asset.replace(
          "Svg",
          ""
        )} from "@washingtonpost/wpds-assets/asset/${componentName.replace(
          "svg",
          ""
        )}";`;

        if (logoList.includes(componentName)) return;
        if (Filter != "" && !componentName.includes(Filter)) return
        return (
          <MDXStyling.Cell key={i}>
            <Box
              onClick={() => setVariables(importExample, componentName)}
              css={{ "&:hover": { opacity: .5 }, backgroundColor: theme.colors.gray500, padding: theme.space[100] }}>
              <Icon size="24">
                <Sample fill={theme.colors.primary} />
              </Icon>
            </Box>
          </MDXStyling.Cell >
        );
      }))
  }

  return (<>
    <InputHolder showFocus={inFocus ? "true" : "false"}>
      <Input onFocus={() => setInFocus(true)} onBlur={() => setInFocus(false)} onChange={handleChange} />
      <Label>Search</Label>
      <Button as="div" css={{ border: "none", borderRadius: "0" }} variant={"primary"} style="outline">
        <Icon size="16">
          <Search />
        </Icon>
      </Button>
    </InputHolder>
    <Grid><GetIcons /></Grid></>)
}
