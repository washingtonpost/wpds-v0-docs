import React, { useEffect, useState } from 'react';
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import MDXStyling from "~/components/Markdown/Styling";
import { Icon, theme } from '@washingtonpost/wpds-ui-kit';
import { paramCase } from "param-case";
import { logoList } from "./LogoSamples";

export default function Icons() {

  const [ExampleToCopy, setExampleToCopy] = useState(null);
  useEffect(async () => {
    if (ExampleToCopy) {
      await navigator.clipboard.writeText(ExampleToCopy);
      window.alert(`Copied: ${ExampleToCopy}`);
      setTimeout(() => setExampleToCopy(null), 100);
    }
  }, [ExampleToCopy]);

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
          <MDXStyling.Cell css={{ "&:hover": { opacity: .50 } }} key={i}>
            <MDXStyling.CopyClipboard
              css={{ backgroundColor: theme.colors.gray500, padding: theme.space[100] }}
              hideIcon textToCopy={importExample}>
              <Icon size="24">
                <Sample fill={theme.colors.primary} />
              </Icon>
            </MDXStyling.CopyClipboard>
          </MDXStyling.Cell >
        );
      }))
  }

  return <GetIcons />;
}
