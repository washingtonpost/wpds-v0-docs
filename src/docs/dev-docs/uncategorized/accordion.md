--- 
title: Accordion 
sidebar_position: 1
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Grid from "../../../documentation-kit/splitGrid";
import Container from "../../../documentation-kit/sampleContainer";
import Guide from "../../../documentation-kit/guide";

import { Accordion } from "@washingtonpost/site-components/core/accordion";

# <Header>Accordion</Header>

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue condimentum auctor. Proin viverra, velit mollis commodo semper, nisi nibh placerat nisl, ut blandit erat arcu ac metus. Pellentesque ac dapibus massa, in consequat elit. Praesent mattis risus ipsum, ac suscipit enim bibendum sed. Donec mattis odio sed ultrices tempus. 
</p>


<!-- Live Example of component import live component above-->


<Container Caption="click to activate accordion" className="flex-column pa-md">
  <div className="bg-white">
    <Accordion
      data={[
        {
          heading: "Which states are re-opening?",
          children: (
            <div>
              The virus continues to accelerate in pockets of more rural areas,
              and public health officials fear new surges as states loosen
              restrictions after ges as states loosen restrictions after weeks
              of near-total sheltering in place.
            </div>
          )
        }
      ]}
    />
    </div>
</Container>

<!-- Tabs between design & implementation change path if -->
<Tabs relatedUrl="design-docs/uncategorized/accordion"/>



## Description

An accordion allows users to toggle the display of sections of content. Our accordion accepts an array of objects.


```jsx
import { Accordion } from "@washingtonpost/site-components/core/accordion";

export default function MyLandingPage() {
  return (
    <Accordion
      data={[
        {
          heading: "Which states are re-opening?",
          children: (
            <div>
              The virus continues to accelerate in pockets of more rural areas,
              and public health officials fear new surges as states loosen
              restrictions after ges as states loosen restrictions after weeks
              of near-total sheltering in place.
            </div>
          )
        }
      ]}
    />
  );