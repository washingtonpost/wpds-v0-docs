--- 
title: Accordion 
sidebar_position: 1
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Grid from "../../../documentation-kit/splitGrid";
import Container from "../../../documentation-kit/sampleContainer";
import Guide from "../../../documentation-kit/guide";
import Checklist from "../../../documentation-kit/checklist";

import { Accordion } from "@washingtonpost/site-components/core/accordion";

# Accordion

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
An accordion is a container that contains a header and a body that is revealed/hidden when toggled. When more than one accordion is used it stacks vertically with no spacing between.
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
<Tabs isDesignDoc={true} relatedUrl="dev-docs/uncategorized/accordion"/>

<!-- Anatomy section export image from Figma and import into here -->
## Anatomy
<Container Caption="Note: Accordion has no background color">
  <img width="80%" style={{maxWidth:'500px'}} height="auto" src='/img/design/accordion/anatomy.svg'/>
</Container>


#### Legend


1. Border 
2. Accordion heading
3. Accordion body
4. Chevron Icon



***
## Options

<!-- Default open -->
  <Container className="flex-column pa-sm mb-sm">
  <div className="bg-white  w-100 ">
    <Accordion
      defaultOpen={1}
      data={[
        {
          heading: "This option is closed?",
          children: (
            <div>
                This option is now open the other headline is lying now
            </div>
          )
        },
        {
          heading: "This option is open?",
          children: (
            <div>
                You can see the content inside
            </div>
          )
        },
        {
          heading: "This option is closed?",
          children: (
            <div>
                This option is now open the other headline is lying now
            </div>
          )
        },
      ]}
    />
    </div>
  </Container>
<div className="mb-xl">

##### Default Open
The accordion can be open by default.
</div>

***
## Behavior

<!-- One can be open at a time -->
  <Container className="flex-column pa-sm mb-sm">
  <div className="bg-white  w-100 ">
    <Accordion
      data={[
        {
          heading: "Only one can be opened?",
          children: (
            <div>
                This option is now open the other headline is lying now
            </div>
          )
        },
        {
          heading: "Only one can be opened?",
          children: (
            <div>
                You can see the content inside
            </div>
          )
        },
        {
          heading: "Seriously only one can be opened?",
          children: (
            <div>
                This option is now open the other headline is lying now
            </div>
          )
        },
      ]}
    />
    </div>
  </Container>
<div className="mb-lg">

##### Opening
The accordion can only have one item open at a time.
</div>


<!-- Keyboard -->
  <Container className="flex-column pa-sm mb-sm">
  <div className="bg-white  w-100 ">
    <Accordion
      data={[
        {
          heading: "Tab through each of these?",
          children: (
            <div>
                This option is now open the other headline is lying now
            </div>
          )
        },
        {
          heading: "Tab through each of these?",
          children: (
            <div>
                You can see the content inside
            </div>
          )
        },
        {
          heading: "Tab through each of these?",
          children: (
            <div>
                This option is now open the other headline is lying now
            </div>
          )
        },
      ]}
    />
    </div>
  </Container>
<div className="mb-lg">

##### Keyboard Interactions
The accordion can be tabbed through and use return/enter to open or close the accordion.
</div>


***
## Usage Guidelines

<!-- Start of a guide -->
<Guide guidance="don't">
<div className="bg-white shadow-3">
   <Accordion
      data={[
        {
          heading: "The rest of this sentence is...",
          children: (
            <div>
               Found in the body and yeah that is no good.
            </div>
          )
        }
      ]}
      />
    </div>
</Guide>

#### Avoid splitting content 
The header of the accordion should be a complete sentence or statement. It should never continue inside of the body of the accordion.
<br/>

<!-- Start of a guide -->
<Guide guidance="caution">
<div className="bg-white shadow-3">
   <Accordion
      data={[
        {
          heading: "A really really really long headline that might not fit in this",
          children: (
            <div>
               Found in the body and yeah that is no good.
            </div>
          )
        }
      ]}
      />
    </div>
</Guide>

####  Container should be bigger than headline
When possible the container of the headline should be bigger to avoid it getting to close to the chevron. This can be avoided with enough container space or really short and concise headlines.
<br/>

***
## Specs

<!-- Specs -->
<Container className="flex-column">
    <img src="/img/design/accordion/size.svg"/>
  </Container>
<div className="mt-sm">

##### Size
The accordion will take up the width of the container and the height of the content with the header.

</div>

<!-- Spacing -->
<Container Caption="measured in pixels" className="flex-column">
    <img src="/img/design/accordion/spacing.svg"/>
  </Container>
<div className="mt-sm">

##### Spacing
The accordion has no left or right spacing but has fixed spacing between header, and the body. The body also has a `16px` bottom padding. 
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
apps={true}
keyboard={true}
tokens={true}
webVitals={true}
/>
