--- 
title: Buttons 
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Section from "../../../documentation-kit/section";
import Container from "../../../documentation-kit/sampleContainer";
import AnatomyImg from "/img/design/button/anatomy.png";

# <Header>Title Goes here</Header>

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue condimentum auctor. Proin viverra, velit mollis commodo semper, nisi nibh placerat nisl, ut blandit erat arcu ac metus. Pellentesque ac dapibus massa, in consequat elit. Praesent mattis risus ipsum, ac suscipit enim bibendum sed. Donec mattis odio sed ultrices tempus. 
</p>

<!-- Live Example of component import live component above-->
import { Button } from "@washingtonpost/site-components/core/button";

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


<!-- Tabs between design & implementation change path if -->
<Tabs isDesignDoc={true} relatedUrl="dev-docs/uncategorized/button"/>

<!-- Anatomy section export image from Figma and import into here -->
## <Section borderOff={true}>Anatomy</Section>
<Container>
  <img width="25%" height="auto" src='/img/design/button/anatomy.png'/>
</Container>

<h4 className="legend-title">Legend</h4>
<ol className="legend">
  <li> Button text </li>
  <li> Button theme </li>
  <li> Icon</li>
</ol>

<!-- Option sections -->
## <Section >Options</Section>

<!-- Option -->
import { ArrowLeft16 } from "@washingtonpost/site-components/core/icon/arrow-left/16";
import { ArrowRight16 } from "@washingtonpost/site-components/core/icon/arrow-right/16";

<!-- Icon placement option -->
<div className="grid-split mb-xl">
  <div className="example">
  <Container className="flex-column">
    <Button className="mb-sm" renderIcon={ArrowLeft16} color="white" iconPlacement="left">
    Icon can be left
    </Button>
    <Button renderIcon={ArrowRight16} color="white" iconPlacement="right">
    Icon can be right
    </Button>
  </Container>
  </div>
  <div className="title-text">
    <h5>Icon</h5>
    <p>Icon can be used on either left or right to the button text.</p>
  </div>
</div>

<!-- Button color options -->
<div className="grid-split mb-xxl">
  <div className="example">
  <Container className="flex-wrap">
    <Button className="mb-sm mr-sm" color="white">
    White button
    </Button>
    <Button className="mb-sm mr-sm" color="offblack">
    Offblack button
    </Button>
    <Button className="mb-sm mr-sm" color="subs-blue">
    Subs blue
    </Button>
  </Container>
  </div>
  <div className="title-text ">
    <h5>Color Themes</h5>
    <p>
    Button have various themes that can be used. Each theme have hover, active, and focus states predefined. The most common themes used are Offblack, White, and Subs-Blue
    <div className="pt-md">Note: To see all button themes visit our <a href="/">storybook</a></div> 
    </p>
  </div>
</div>


<!-- Button color options -->
<div className="grid-split mb-sm">
  <div className="example">
  <Container className="flex-column">
    <Button secondLine="w/ Second line" size="large" className="mb-sm mr-sm" color="subs-blue">
    Large Button
    </Button>
    <Button  className="mb-sm mr-sm" color="subs-blue">
    Default button
    </Button>
    <Button size="small" className="mb-sm mr-sm" color="subs-blue">
    Small Button
    </Button>
  </Container>
  </div>
  <div className="title-text">
  <h5>Button Sizes</h5>
    <p>
    Button has three sizes <b>large</b>,<b>medium (default)</b> and <b>small</b>.
    <div className="mt-sm">
        Note: Large button should only be used on subscription pages or when there two lines of text 
    </div>
    </p>
  </div>
</div>


