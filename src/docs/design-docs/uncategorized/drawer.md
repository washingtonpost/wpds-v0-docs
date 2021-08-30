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
import {useState} from "React";


# Drawer

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
Description will go here
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



  <Container Caption="Click to see drawer" className="flex-column pa-sm">
         <DrawerRoot
      onOpenChange={open => {
        console.log(open, "onOpenChange");
      }}
    >
      <DrawerTrigger>Open The Drawer</DrawerTrigger>
      <DrawerScrim />
      <DrawerContent className="bg-white relative w-100 offblack">
       <p>Close is optional click outside the drawer to close</p>
      </DrawerContent>
    </DrawerRoot>
  </Container>
<div className="mt-sm mb-xl">

##### Optional close Button icon
The Drawer can close

</div>
