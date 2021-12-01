import React from 'react'
import { styled } from '@washingtonpost/ui-theme'
import Link from 'next/link'
import Header from '../../Typography/Headers'
export default function tableofcontents({ current }) {
    const Container = styled("div", {
        margin: "$200 0"

    })
    const List = styled("ul", {
        listStyle: "",
        marginTop: "0",
        padding: "0 $125"
    })
    const ListItem = styled("li", {
        cursor: "pointer",
        padding: "$025 0"
    })
    const LinkText = styled("a", {
        color: "$gray0",
        textDecoration: "underline",
    })
    return (
        <Container>
            <Header css={{ margin: "0 $025" }} as="h2">Table of Contents</Header>
            <List>
                <ListItem><Link as={`/components/${current}#Anatomy`}
                    href={`/components/[slug]#anatomy`}><LinkText>Anatomy</LinkText></Link></ListItem>
                <ListItem><Link as={`/components/${current}#Options`}
                    href={`/components/[slug]#options`}><LinkText>Options</LinkText></Link></ListItem>
                <ListItem><Link as={`/components/${current}#Behavior`}
                    href={`/components/[slug]#behavior`}><LinkText>Behavior</LinkText></Link></ListItem>
                <ListItem><Link as={`/components/${current}#Specs`}
                    href={`/components/[slug]#specs`}><LinkText>Specs</LinkText></Link></ListItem>
                <ListItem><Link as={`/components/${current}#Accessbility`}
                    href={`/components/[slug]#accessbility`}><LinkText>Accessiblity</LinkText></Link></ListItem>
                <ListItem><Link as={`/components/${current}#Implementation`}
                    href={`/components/[slug]#implementation`}><LinkText>Implementation</LinkText></Link></ListItem>
                <ListItem><Link as={`/components/${current}#Checklist`}
                    href={`/components/[slug]#checklist`}><LinkText>Checklist</LinkText></Link></ListItem>
            </List>
        </Container>
    )
}
