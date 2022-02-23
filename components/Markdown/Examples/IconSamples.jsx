import React, { useEffect, useState } from 'react';
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import { toast } from 'react-toastify';
import MDXStyling from "~/components/Markdown/Styling";
import { Icon, theme, AlertBanner, Box } from '@washingtonpost/wpds-ui-kit';
import { paramCase } from "param-case";
import { logoList } from "./LogoSamples";

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
  useEffect(() => {
    if (ExampleToCopy) {
      toast(<SuccessToast />, {
        position: "top-center",
        closeButton: false,
        autoClose: 2000,
        hideProgressBar: true,
        draggable: false,
        onClose: () => {
          setExampleToCopy(null);
          setName(null)
        }
      })
    }
  }, [ExampleToCopy]);

  function setVariables(example, Name) {
    setName(Name)
    setExampleToCopy(example)
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

  return <GetIcons />;
}
