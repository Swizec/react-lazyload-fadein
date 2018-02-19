import React, { Component } from "react";
import { render } from "react-dom";

import { FunctionAsChildren } from "./FunctionAsChildren";
import { RenderProp } from "./RenderProp";
import { WithMetaInfo } from "./WithMetaInfo";
import { Dataviz } from "./Dataviz";

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>react-lazyload-fadein examples</h1>
                <FunctionAsChildren />
                <RenderProp />
                <WithMetaInfo />
                <Dataviz />
            </div>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
