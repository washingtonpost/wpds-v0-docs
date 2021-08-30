--- 
title: Banner 
sidebar_position: 3
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Grid from "../../../documentation-kit/splitGrid";
import Container from "../../../documentation-kit/sampleContainer";
import Guide from "../../../documentation-kit/guide";
import Checklist from "../../../documentation-kit/checklist";


import { Banner } from "@washingtonpost/site-components/core/banner";


# Banner

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
<Tabs isDesignDoc={true} relatedUrl="dev-docs/uncategorized/banner"/>

<!-- Anatomy section export image from Figma and import into here -->
## Anatomy
<Container>
  <img width="80%" style={{maxWidth:'800px'}} height="auto" src='/img/design/banner/anatomy.svg'/>
</Container>


#### Legend

1. Banner Background
2. Banner Icon
3. Banner Text
4. [Button icon](../uncategorized/button-icon)


***
## Options

  <Container className="flex-column pa-sm" >
    <Banner renderCloseButton={false} color="blue" className="w-100">
        A blue banner
    </Banner>
    <Banner renderCloseButton={false}  color="offblack" className="w-100">
        A offblack banner
    </Banner>
    <Banner renderCloseButton={false}  color="red" className="w-100">
        A red banner
    </Banner>
    <Banner renderCloseButton={false}  color="gray-lighter" className="offblack w-100">
        A Gray Lighter banner
    </Banner>
  </Container>
<div className="mt-sm mb-xl">

##### Banner Colors
All [background colors](https://react.wpds.preview.now.washingtonpost.com/?path=/story/tachyons-background-colors--page) are available to be used in the banner component. 

</div>

<!-- Dismissable button -->
  <Container className="flex-column pa-sm">
    <Banner renderCloseButton={false}  color="offblack" className="w-100">
        You cannot dismss me
    </Banner>
    <Banner  color="offblack" className="w-100">
        You can dimiss me
    </Banner>
  </Container>
<div className="mt-sm mb-xxl">

##### Dismissable Button
The dismiss button can be toggled on or off.

</div>

***
## Behavior
 
<!-- Overflow -->
<Container Caption="Adjust the screen to see text wrap" className="flex-column pa-sm">
    <Banner  color="orange-pale offblack" className="w-100">
        Content that overflows the banner will not be cut off, but instead the content will wrap and continue on the next line.
    </Banner>
  </Container>
<div className="mt-sm mb-xl">

##### Text overflow
Content that overflows the banner will not be cut off, but instead the content will wrap and continue on the next line.
</div>

<!-- Overflow -->
<Container className="flex-column pa-sm">
    <Banner  color="red-pale red-dark" className="w-100">
        When you hover over the buton icon it changes state but the banner remains the same.
    </Banner>
  </Container>
<div className="mt-sm mb-xl">

##### Active & Hover
The active and hover state is only applicable to the [Button icon](../uncategorized/button-icon) the banner itself has no hover or active state.
</div>

***
## Usage guidelines

<!-- Start of a guide -->
<Guide guidance="Don't">
      <Banner  color="orange-pale white" className="w-100">
       Can you read this?
    </Banner>
</Guide>

#### Text must meet Accessibility contrast ratio
When the banner background is changed the color of the text is not automatically changed. So it is the user responsiblity to ensure that contrast requirements meet WCAG 2.0 level AA.
<br/>

***
## Specs

<Container Caption="Measured in pixels" className="flex-column pa-sm">
   <img src="/img/design/banner/size.svg"/>
</Container>
<div className="mt-sm mb-xl">

##### Size
The banner will take 100% of its parent container width. The height is dertmined by the fixed padding and if it has a [Button icon](../uncategorized/button-icon).

</div>

<Container Caption="Measured in pixels" className="flex-column pa-sm">
   <img src="/img/design/banner/spacing.svg"/>
</Container>
<div className="mt-sm mb-xl">

##### Spacing
The banner has a fixed padding of `16px` on all sides. 

</div>

***
## Component Checklist

<Checklist
accessiblity={true} 
states={true}
specs={true} 
themes={true}
options={true}
behavior={true}
uiComponent={true}
screenSize={true}
homePage={true}
apps={false}
keyboard={true}
tokens={true}
webVitals={true}
/>
