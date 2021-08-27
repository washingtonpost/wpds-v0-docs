import React from 'react'
import CheckItem from './components/checklistItem'
export default function checklist(props) {
    const { accessiblity, states, specs, themes, options, behavior, uiComponent, screenSize, homePage, apps, keyboard, tokens, webVitals } = props;
    const CheckListData = {
        Accessibility: {
            title: 'Accessibility',
            description: 'Visual information required to identify components and states (except inactive components) has a contrast ratio to meet WCAG 2.0 level AA '
        },
        States: {
            title: 'States are defined',
            description: 'Includes all interactive states that are applicable (hover, down, focus, keyboard focus, disabled).'
        },
        Themes: {
            title: 'Works with all supported color themes',
            description: 'Considerations have been made to think in darkmode, lightmode, button themes and other applicable themes'
        },
        Specs: {
            title: 'Specs are defined',
            description: 'Sizing, spacing, and other visual styles have been outline in documentation and the coded component has been VQA to match'
        },
        Options: {
            title: 'Options are defined',
            description: 'Includes relevant options (variant, style, size, orientation, optional iconography, decorations, selection, error state, etc.)'
        },
        Behavior: {
            title: 'Behaviors are defined ',
            description: 'Includes guidelines for keyboard focus, layout (wrapping, truncation, overflow), animation, interactions, etc.'
        },
        UiComponent: {
            title: 'Design component created',
            description: 'A equivalent design component as been created matching  as best as possible to properties found in the coded component. Documentation link has been added to component including notes, guidelines and keywords.'
        },
        ScreenSize: {
            title: 'All web screen sizes',
            description: 'Component can scale for all platforms mobile, tablet, and desktop. '
        },
        Homepage: {
            title: 'Works on Homepage sizes',
            description: 'Component has an opinion on how it scales on Homepage columns and other modular layouts.'
        },
        Apps: {
            title: 'Works in apps',
            description: 'Component can be used in iOS and Andriod or has an equivalent app component'
        },
        Keyboard: {
            title: 'Keyboard interactions',
            description: 'Follows WCAG 2.0 standards for keyboard accessibility guidelines and includes a description of the keyboard interactions.'
        },
        DesignToken: {
            title: 'Design tokens',
            description: 'All design attributes (color, typography, layout, animation, etc.) are available as design tokens.'
        },
        WebVitals: {
            title: 'Web Vitals',
            description: 'Meets minimum requirements to ensure minimal impact to Web vitals. (Skeleton loads, Animations, Avoid layout shift, etc.)'
        }



    }
    return (
        <div className="grid-checklist">
            <div className="flex flex-column row-gap mr-sm">
                <CheckItem isDone={accessiblity} title={CheckListData.Accessibility.title} description={CheckListData.Accessibility.description} />
                <CheckItem isDone={states} title={CheckListData.States.title} description={CheckListData.States.description} />
                <CheckItem isDone={specs} title={CheckListData.Specs.title} description={CheckListData.Specs.description} />
                <CheckItem isDone={themes} title={CheckListData.Themes.title} description={CheckListData.Themes.description} />
                <CheckItem isDone={options} title={CheckListData.Options.title} description={CheckListData.Options.description} />
                <CheckItem isDone={behavior} title={CheckListData.Behavior.title} description={CheckListData.Behavior.description} />
            </div>
            <div className="flex flex-column row-gap">
                <CheckItem isDone={uiComponent} title={CheckListData.UiComponent.title} description={CheckListData.UiComponent.description} />
                <CheckItem isDone={screenSize} title={CheckListData.ScreenSize.title} description={CheckListData.ScreenSize.description} />
                <CheckItem isDone={homePage} title={CheckListData.Homepage.title} description={CheckListData.Homepage.description} />
                <CheckItem isDone={apps} title={CheckListData.Apps.title} description={CheckListData.Apps.description} />
                <CheckItem isDone={keyboard} title={CheckListData.Keyboard.title} description={CheckListData.Keyboard.description} />
                <CheckItem isDone={tokens} title={CheckListData.DesignToken.title} description={CheckListData.DesignToken.description} />
                <CheckItem isDone={webVitals} title={CheckListData.WebVitals.title} description={CheckListData.WebVitals.description} />
            </div>
            <style jsx>{`
            .grid-checklist{
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(300px, 1fr));
                column-gap:32px;
            }
            @media screen and (max-width: 966px) {
                .grid-checklist{
                    display:grid;
                    grid-template-columns:1fr;
                    column-gap:32px;
                } 
            }
            `}</style>
        </div>
    )
}
