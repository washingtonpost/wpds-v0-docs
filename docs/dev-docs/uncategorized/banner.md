--- 
title: Banner 
sidebar_position: 3
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Grid from "../../../documentation-kit/splitGrid";
import Container from "../../../documentation-kit/sampleContainer";
import Guide from "../../../documentation-kit/guide";

import { Banner } from "@washingtonpost/site-components/core/banner";

# <Header>Banner</Header>

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
A banner is a horizontal rectangle that serves to inform the user with 
important and relvant information. 
</p>


<!-- Live Example of component import live component above-->

<Container className="pa-sm">
    <Banner className="w-100">
        A banner component
    </Banner>
</Container>


<!-- Tabs between design & implementation change path if -->
<Tabs relatedUrl="design-docs/uncategorized/banner"/>


Disclaimer to use subs related colors add `subs-theme` class to className like so

```jsx
<Banner className="subs-theme" color="blue">
```

<Canvas>
  <Story id="banner--default"></Story>
</Canvas>

## Code Example

```jsx
import { Banner } from "@washingtonpost/site-components/core/banner";

export default function MyLandingPage() {
  return <Banner />;
}
```