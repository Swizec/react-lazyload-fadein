import React, { Component } from "react";
import { render } from "react-dom";

import FadeIn from "../../src";

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>react-lazyload-fadein Demo</h1>
                <FadeIn height={600}>
                    {onload => (
                        <img
                            src="https://i.imgur.com/q067pyl.jpg"
                            onLoad={onload}
                            style={{ height: 600 }}
                        />
                    )}
                </FadeIn>
            </div>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
