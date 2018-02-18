import React, { Component } from "react";
import { render } from "react-dom";
import Prismjs from "prismjs";
import prismStyle from "prismjs/themes/prism.css";
import PrismCode from "react-prism";

import FadeIn from "../../src";

const FACExample = () => (
    <div>
        <FadeIn height={600}>
            {onload => (
                <img
                    src="https://images.unsplash.com/photo-1494236581341-7d38b2e7d824?ixlib=rb-0.3.5&s=ff97ff4fafca298502452a45ea012698&auto=format&fit=crop&w=1888&q=80"
                    onLoad={onload}
                    style={{ height: 600 }}
                />
            )}
        </FadeIn>
    </div>
);

const RenderPropExample = () => (
    <div>
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
    </div>
);

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>react-lazyload-fadein examples</h1>
                <FACExample />
                <RenderPropExample />
            </div>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
