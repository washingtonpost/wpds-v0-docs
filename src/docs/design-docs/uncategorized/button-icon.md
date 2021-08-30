--- 
title: Button Icon
sidebar_position: 5
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Grid from "../../../documentation-kit/splitGrid";
import Container from "../../../documentation-kit/sampleContainer";
import Guide from "../../../documentation-kit/guide";
import { ButtonIcon } from "@washingtonpost/site-components/core/button-icon";
import { BookmarkOutline16 } from "@washingtonpost/site-components/core/icon/bookmark-outline/16";
import { BookmarkOutline24 } from "@washingtonpost/site-components/core/icon/bookmark-outline/24";
import { BookmarkOutline32 } from "@washingtonpost/site-components/core/icon/bookmark-outline/32";
import { Play16 } from "@washingtonpost/site-components/core/icon/play/16";
import { Add24 } from "@washingtonpost/site-components/core/icon/add/24";



# Button Icon

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
A button icon is a circular button that contains only an icon. The interaction with a button icon is defined by its icon and its surrounding context, not within button text. The color system for a button icon is the same as the button component with a few exceptions. 
</p>


<!-- Live Example of component import live component above-->

<Container Caption="example of button icons">
<ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  renderIcon={BookmarkOutline16}
/>
<ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-xxs"
  color="offblack"
  renderIcon={Play16}
/>
</Container>


<!-- Tabs between design & implementation change path if -->
<Tabs isDesignDoc={true} relatedUrl="dev-docs/uncategorized/banner"/>

<!-- Anatomy section export image from Figma and import into here -->
## Anatomy
<Container>
  <img width="60%" style={{maxWidth:'200px'}} height="auto" src='/img/design/button-icon/anatomy.svg'/>
</Container>


#### Legend

1. Border
2. Background fill
3. [Icon](../../tokens/our-tokens/icons)

***
## Options

<Grid>
  <Container>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  renderIcon={BookmarkOutline16}
    />
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="small"
  renderIcon={BookmarkOutline16}
/>
  </Container>
<div>

##### Sizing
Button icons come in two sizes: `small` and `default`.

</div>
</Grid>

<Grid>
  <Container>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline32}
/>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline24}
/>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline16}
/>
  </Container>
<div>

##### Icon size
All [icon sizes](../../tokens/our-tokens/icons) supported in the button icon.  
</div>
</Grid>

<Grid>
  <Container>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline24}
/>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline24}
/>
  </Container>
<div>

##### Border
Button borders can be toggled on or off.

</div>
</Grid>

<!-- Colors -->
<Grid>
<Container className="pa-sm">
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="offblack"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="subs-blue"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="ghost-light"
  size="medium"
  renderIcon={Add24}
/>
  <div className="bg-black pa-xxs brad-4">
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  color="ghost-dark"
  size="medium"
  renderIcon={Add24}
/></div>

</Container>
<div className="mt-sm mb-xl">

##### Color
Button icons follow the same color schemes as our [buttons](./button). To see all color themes visit our [storybook](https://react.wpds.preview.now.washingtonpost.com/?path=/story/buttonicon--medium).

</div>
</Grid>
<Grid>
<Container className="pa-sm">
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  color="white"
  className="mr-xs"
  size="medium"
  renderIcon={Add24}
/>
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-xs"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline24}
/>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={Play16}
/>
</Container>
<div className="mt-sm mb-xl">

##### Icon
Any icon supported in our [Icon tokens](../../tokens/our-tokens/icons) can be used.

</div>
</Grid>
