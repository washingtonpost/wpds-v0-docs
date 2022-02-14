import React, { useEffect, useState } from 'react';
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import MDXStyling from "~/components/Markdown/Styling";
import { Icon, theme } from '@washingtonpost/wpds-ui-kit';
import { paramCase } from "param-case";
export const logoList = [
  "voraciously",
  "amazon",
  "amazon-music",
  "apple-podcast",
  "apple",
  "by-the-way",
  "comments",
  "elections",
  "facebook-logo",
  "google-podcast",
  "olympics-dark",
  "olympics",
  "stitcher",
  "tooled-washington-post",
  "washington-post-magazine",
  "washington-post-white",
  "washington-post",
  "wp-mark-white",
  "wp-mark",
  "rss",
  "spotify",
  "google",
];

export const darkLogos = [
  "washington-post-white",
  "wp-mark-white",
  "washington-post-magazine",
  "olympics-dark",
]


export default function Icons() {


  const GetLogos = () => {
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

        if (!logoList.includes(componentName)) return;
        return (
          <MDXStyling.Cell key={i}>
            <MDXStyling.CopyClipboard
              css={{ "&:hover": { opacity: .50 }, display: "flex", justifyContent: "center", backgroundColor: darkLogos.includes(componentName) ? theme.colors.primary : theme.colors.gray500, padding: theme.space[100], width: "100%" }}
              hideIcon textToCopy={importExample}>
              <Icon label={componentName} size={componentName.includes("washington") ? 250 : 150}>
                <Sample fill={theme.colors.primary} />
              </Icon>
            </MDXStyling.CopyClipboard>
          </MDXStyling.Cell >
        );
      }))
  }

  return <GetLogos />
}
