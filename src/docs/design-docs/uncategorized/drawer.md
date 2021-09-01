--- 
title: Drawer 
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Grid from "../../../documentation-kit/splitGrid";
import Container from "../../../documentation-kit/sampleContainer";
import Guide from "../../../documentation-kit/guide";


import {
  DrawerRoot,
  DrawerTrigger,
  DrawerScrim,
  DrawerClose,
  DrawerContent
} from "@washingtonpost/site-components/core/drawer";
import { Button } from "@washingtonpost/site-components/core/button";
import {Tooltip} from "@washingtonpost/site-components/core/tooltip";

# Drawer

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
A drawer is a panel that is typically overlaid on top of a page and slides in from off-canvas (tied to a side of screen). It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context
</p>


<!-- Live Example of component import live component above-->

<Container className="pa-sm">
    <DrawerRoot
      onOpenChange={open => {
        console.log(open, "onOpenChange");
      }}
    >
      <DrawerTrigger>Open The Drawer</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white offblack">
        <DrawerClose />
        Your Drawer Content
      </DrawerContent>
    </DrawerRoot>
</Container>


<!-- Anatomy section export image from Figma and import into here -->
## Anatomy
<Container>
  <img width="80%" style={{maxWidth:'5000px'}} height="auto" src='/img/design/drawer/anatomy.svg'/>
</Container>


#### Legend

1. Container
2. [Button icon](../uncategorized/button-icon)
3. Scrim

***
## Options

<Grid>
  <Container className="flex pa-sm flex-wrap row-gap" Caption="Click button to see option">
  <DrawerRoot>
    <DrawerTrigger className="mr-sm">Top</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white offblack" height={400}  position="top">
        <div className="pt-xxl mt-xxl">
          Your Drawer Content. Click scrim to close
        </div>
      </DrawerContent>
  </DrawerRoot>
  <DrawerRoot>
    <DrawerTrigger className="mr-sm">Right</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white offblack" height={400}  position="right">
        <div className="pt-xxl mt-xxl">
          Your Drawer Content. Click scrim to close
        </div>
      </DrawerContent>
  </DrawerRoot>
  <DrawerRoot>
    <DrawerTrigger className="mr-sm">Bottom</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white offblack" height={400}  position="bottom">
        <div className=" mt-xxl">
          Your Drawer Content. Click scrim to close
        </div>
      </DrawerContent>
  </DrawerRoot>
  <DrawerRoot>
    <DrawerTrigger>Left</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white offblack" height={400}  position="left">
        <div className="pt-xxl mt-xxl">
          Your Drawer Content. Click scrim to close
        </div>
      </DrawerContent>
  </DrawerRoot>

  </Container>
<div className="mt-sm mb-xl">

##### Positions
The scrim color can be changed by defining the color using one of our background [colors from our tokens](../../tokens/our-tokens/color) 
</div>
</Grid>

<Grid>
  <Container Caption="Click button to see option" className="flex-column pa-sm">
    <DrawerRoot>
      <DrawerTrigger>See example</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white relative w-100 offblack">
       <p>Close is optional click outside the drawer to close click the scrim to close the drawer</p>
      </DrawerContent>
    </DrawerRoot>
  </Container>
<div className="mt-sm mb-xl">

##### Optional Close
The drawer close button icon can be optional.

</div>
</Grid>

<Grid>
  <Container Caption="Click button to see option" className="flex-column pa-sm">
    <DrawerRoot>
      <DrawerTrigger>See example</DrawerTrigger>
      <DrawerContent className="bg-white relative w-100 offblack">
       <DrawerClose />
       <p>Scrim is optional</p>
      </DrawerContent>
    </DrawerRoot>
  </Container>
<div className="mt-sm mb-xl">

##### Optional Scrim
The scrim is optional when using the drawer. Should note that without a scrim it is reccomended to have a close button to ensure users can close the drawer if that is desired.

</div>
</Grid>

<Grid>
  <Container Caption="Click button to see option" className="flex-column pa-sm">
    <DrawerRoot>
      <DrawerTrigger>See example</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white relative w-100 offblack">
       <DrawerClose />
       <p>This uses bg-red-pale as the scrim background</p>
      </DrawerContent>
    </DrawerRoot>
  </Container>
<div className="mt-sm mb-xl">

##### Optional Scrim color
The scrim color can be changed by defining the color using one of our background [colors from our tokens](../../tokens/our-tokens/color) 
</div>
</Grid>

<Grid>
  <Container Caption="Click button to see option" className="flex-column pa-sm">
         <DrawerRoot
      onOpenChange={open => {
        console.log(open, "onOpenChange");
      }}
    >
      <DrawerTrigger>See example</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-offblack relative w-100 offblack">
       <DrawerClose />
       <p><span className="white">A dark drawer</span></p>
      </DrawerContent>
    </DrawerRoot>
  </Container>
<div className="mt-sm mb-xl">

##### Drawer color
The drawer color can be changed by defining the color using one of our background [colors from our tokens](../../tokens/our-tokens/color). 
</div>
</Grid>

<!-- Size -->
<Grid>
  <Container className="flex-column">
  <DrawerRoot>
    <DrawerTrigger className="mr-sm">See bottom example</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white offblack"  height={200}  position="bottom">
        <div className=" mt-xxl">
            This drawer is set to 200px height.
        </div>
      </DrawerContent>
  </DrawerRoot>
    <DrawerRoot>
    <DrawerTrigger className="mr-sm">See left example</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white offblack"  width={200}  position="left">
        <div className="pt-xxl mt-xxl">
            This drawer is set to 200px height.
        </div>
      </DrawerContent>
  </DrawerRoot>
  </Container>
<div>

##### Height and Width
Drawer width and height can be defined. Height can be defined if the position is `top` or `bottom` and width can be defined if the position is `right` or `left`.

</div>
</Grid>

***
## Behavior

<Grid>
  <Container className="flex-column">
    <DrawerRoot>
      <DrawerTrigger>Scrim/Button to close</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white relative w-100 offblack">
       <DrawerClose />
       <p>Click scrim to close</p>
      </DrawerContent>
    </DrawerRoot>
  </Container>
<div>

##### Closing
When the close button icon is rendered the drawer can be closed by either clicking the scrim or the close button. 
<br/>

Note: The drawer can be set to open and will remain open even if the scrim is clicked on. 

</div>
</Grid>

<Grid>
  <Container className="flex-column">
    <DrawerRoot>
      <DrawerTrigger>See drawer with overflow</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white relative w-100 offblack">
       <DrawerClose />
       <div style={{width:'800',height:'800px'}} className="flex items-center justify-center">
       <p>Overflow by scrolling</p>
        </div>
      </DrawerContent>
    </DrawerRoot>
  </Container>
<div>

##### Content overflow
Content will overflow in drawer by default both verically and horitzonally. 

</div>
</Grid>

***
## Usage guidelines

<!-- Start of a guide -->
<Guide guidance="do">
<Tooltip
        id="tooltip"
        placement="bottom"
        asPopOver={true}
        content={
          <div className="pa-sm">
             Tooltip content
        </div>
        }
      >
        <a>
          Popover trigger
        </a>
</Tooltip>
  
</Guide>

#### Title of Guide 
Use a drawer on mobile when instead of a [popover](./tooltip).
<br/>
