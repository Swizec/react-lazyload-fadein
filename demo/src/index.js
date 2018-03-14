import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Typography from "typography";
import elkGlenTheme from "typography-theme-elk-glen";
import styled from "styled-components";
import GithubForkRibbon from "react-github-fork-ribbon";
import prism from "prismjs";
import prismStyle from "prismjs/themes/prism-tomorrow.css";
import PrismCode from "react-prism";

import { FunctionAsChildren } from "./FunctionAsChildren";
import { RenderProp } from "./RenderProp";
import { WithMetaInfo } from "./WithMetaInfo";
import { Dataviz } from "./Dataviz";
import { CustomDuration } from "./CustomDuration";

const typography = new Typography(elkGlenTheme);
typography.injectStyles();

const Container = styled.div`
    display: flex;
    width: 640px;
    flex-direction: column;
    margin: 0 auto;
`;

class Demo extends Component {
    render() {
        return (
            <Fragment>
                <GithubForkRibbon
                    href="https://github.com/Swizec/react-lazyload-fadein"
                    color="green"
                >
                    Fork me on GitHub
                </GithubForkRibbon>
                <Container>
                    <h1>react-lazyload-fadein demo</h1>
                    <p>
                        Lazyload your React component and nicely fade in when
                        it's ready.
                    </p>
                    <p>
                        Based on <code>react-lazyload</code> it only renders
                        your components when they're in view and automatically
                        waits until they're ready to start the FadeIn effect.
                        Scroll down to see it in action.
                    </p>
                    <p>Supports all your favorite React patterns.</p>
                    <RenderProp />
                    <h3>Function as children</h3>
                    <FunctionAsChildren />
                    <p>
                        Pass a function as children to specify rendering. Use
                        the onload callback to start the fadein effect
                    </p>
                    <PrismCode className="language-javascript" component="pre">
                        {`
const FunctionAsChildren = () => (
    <FadeIn height={600}>
        {onload => (
            <img
                src="https://images.unsplash.com/photo-1494236581341-7d38b2e7d824?ixlib=rb-0.3.5&s=ff97ff4fafca298502452a45ea012698&auto=format&fit=crop&w=1888&q=80"
                onLoad={onload}
                style={{ height: 600 }}
            />
        )}
    </FadeIn>
);
                    `}
                    </PrismCode>
                    <h3>Render prop</h3>
                    <RenderProp />
                    <p>
                        If you prefer render props, you can use those as well.
                        Everything else works the same
                    </p>
                    <PrismCode className="language-javascript" component="pre">
                        {`
const RenderProp = () => (
    <FadeIn
        height={600}
        render={onload => (
            <img
                src="https://images.unsplash.com/photo-1508606572321-901ea443707f?ixlib=rb-0.3.5&s=445c447b4e24f8ffa34df0c0edb2d2bc&auto=format&fit=crop&w=932&q=80"
                onLoad={onload}
                style={{ height: 600 }}
            />
        )}
    />
);
                    `}
                    </PrismCode>
                    <h3>Render anything</h3>
                    <WithMetaInfo />
                    <p>
                        Your render function can be anything. Add some meta info
                        to your image that fades in at the same time.
                    </p>
                    <PrismCode className="language-javascript" component="pre">
                        {`
const WithMetaInfo = () => (
        <FadeIn height={600}>
            {onload => (
                <div>
                    <h3>Photo By Ivan Dodig</h3>
                    <img
                        src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-0.3.5&s=b7afd4dd0f755f1a465b617ad13da628&auto=format&fit=crop&w=976&q=80"
                        onLoad={onload}
                        style={{ height: 500 }}
                    />
                    <p>Mirca, Croatia</p>
                </div>
            )}
        </FadeIn>
);
                    `}
                    </PrismCode>
                    <h3>Not only for images</h3>
                    <Dataviz />
                    <p>
                        You can even go beyond images. For example, a dataviz
                        component that needs to load data before it renders.
                    </p>
                    <PrismCode className="language-javascript" component="pre">
                        {`
class PopulationChart extends Component {
    // load data in componentDidMount()
    // render chart in render()
}

const Dataviz = () => (
    <FadeIn height={600}>
        {onload => <PopulationChart onLoad={onload} />}
    </FadeIn>
);
                    `}
                    </PrismCode>
                    <h3>Set custom duration and easing</h3>
                    <CustomDuration />
                    <p>
                        You can set a custom transition <code>duration</code>{" "}
                        and <code>easing</code> function. Make the fade-in
                        effect better fit your style.
                    </p>
                    <PrismCode className="language-javascript" component="pre">
                        {`
const CustomDuration = () => (
    <FadeIn height={600} duration={100} easing={"ease-in-out"}>
        {onload => (
            <img
                src="https://images.unsplash.com/photo-1496287437689-3c24997cca99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a169e6231d3c18c056f265baeac8dc02&auto=format&fit=crop&w=1233&q=80"
                onLoad={onload}
                style={{ height: 600 }}
            />
        )}
    </FadeIn>
);
                    `}
                    </PrismCode>
                    <h3>Installation</h3>
                    <p>
                        <PrismCode className="language-cli" component="pre">
                            {`
$ yarn install react-lazyload-fadein
                            `}
                        </PrismCode>
                    </p>
                    <p>Import using your favorite pattern</p>
                    <PrismCode className="language-javascript" component="pre">
                        {`
import FadeIn from "react-lazyload-fadein"; 
// or 
import {FadeIn} from "react-lazyload-fadein";
                        `}
                    </PrismCode>
                    <p>Happy hacking 🤓</p>
                </Container>
            </Fragment>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
