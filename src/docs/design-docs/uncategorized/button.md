--- 
title: Buttons 
---
import Image from '@theme/IdealImage';

import { Button } from "@washingtonpost/site-components/core/button";
import Root from "../../../documentation-kit/helper/origin";
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
<Tabs isDesignDoc={true} relatedUrl="dev-docs/uncategorized/button"/>

<!-- Anatomy section -->
## <Section borderOff={true}>Anatomy</Section>
<Container>
  <img width="60%" height="auto" src='/img/design/button/anatomy.png'/>
</Container>

<h4 className="legend-title">Legend</h4>
<ol className="legend">
  <li> Button text </li>
  <li> Button theme </li>
  <li> Icon</li>
</ol>

<!-- Option sections -->
## <Section >Options</Section>

