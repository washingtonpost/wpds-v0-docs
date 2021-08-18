--- 
title: Buttons 
---
import { Button } from "@washingtonpost/site-components/core/button";
import { ArrowLeft16 } from "@washingtonpost/site-components/core/icon/arrow-left/16";
import { ArrowRight16 } from "@washingtonpost/site-components/core/icon/arrow-right/16";

import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Section from "../../../documentation-kit/section";
import Container from "../../../documentation-kit/sampleContainer";


# <Header>Title Goes here</Header>

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue condimentum auctor. Proin viverra, velit mollis commodo semper, nisi nibh placerat nisl, ut blandit erat arcu ac metus. Pellentesque ac dapibus massa, in consequat elit. Praesent mattis risus ipsum, ac suscipit enim bibendum sed. Donec mattis odio sed ultrices tempus. 
</p>

<!-- Live Example of component -->
<Container>
  <Button className="mr-sm"  color="white" >
    Button White
  </Button>
  <Button  color="offblack" >
    Button Offblack
  </Button>
  <Button className="ml-sm"  color="subs-blue" >
    Button Subs blue
  </Button>
</Container>

<!-- Tabs between design & implementation -->
<Tabs isDesignDoc={false} relatedUrl="design-docs/uncategorized/button"/>



In this button redesign, shadows are now removed from the design and the buttons take on a rounded appearance. The design spec is [here](https://washpost.invisionapp.com/d/main#/console/19919949/420203655/preview).

<Canvas>
  <Story id="button--default"></Story>
</Canvas>

## Example

```jsx
import { Button } from "@washingtonpost/site-components/core/button";

export default function MyLandingPage() {
  return <Button>Click Me</Button>;
}
```

## Colors

The available colors are listed in the ArgsTable table above. You will note we have remove the "ghost" prop from buttons. It's now two choices, "ghost-light" and "ghost-dark". "ghost-light" for light colored backgrounds and "ghost-dark" for dark colored backgrounds.

## Typeface

The typeface is use "Franklin, Bold (16px)". When a second line (Limited use for subscriptions only) is used it's typeface is "Franklin, Light (16px)".

## Height (Size)

There are two heights (sizes) after the default size, "Small", and "Large". Note, a second line is for limited use for subscriptions only.

## Width

The button has a minimum width of `120px`. On the left and right of the text, there is `24px` of padding as the width exceeds `120px`. A button with an icon will have a `8px` gutter between the icon and the button text.

_NOTE:_ Two buttons stacked ON MOBILE should take the width of the wider button.

## Icon placement

A button's icon can be place to the `right` or `left` of the text. The component defaults to icon left.

  <Button renderIcon={ArrowLeft16} color="white" iconPlacement="left">
    To the left. To the left.
  </Button>
  <Button renderIcon={ArrowRight16} color="white" iconPlacement="right">
    I’m all right
  </Button>


## With Form Fields

Buttons will not be inline or next to form fields. There should be a gutter between form field and button.

## Component API

<ArgsTable of={Button} />

