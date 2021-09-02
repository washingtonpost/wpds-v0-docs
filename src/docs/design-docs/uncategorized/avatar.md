--- 
title: Avatar 
sidebar_position: 2
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Grid from "../../../documentation-kit/splitGrid";
import Container from "../../../documentation-kit/sampleContainer";
import Guide from "../../../documentation-kit/guide";

import { Avatar } from "@washingtonpost/site-components/core/avatar"


# Avatar

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
An avatar is a image which represents a person. 
<br/>
<br/>
At The Washington Post we present avatars as  circular photographs which represent individual contributors such as reporters and columnists.
</p>


<!-- Live Example of component import live component above-->

<Container>
    
<Avatar
  color=""
  imgUrl="/img/design/avatar/profile.png"
  size="medium"
/>
</Container>


<!-- Tabs between design & implementation change path if -->
<Tabs isDesignDoc={true} relatedUrl="dev-docs/uncategorized/avatar"/>
