import React, { Component } from "react";
import { render } from "react-dom";

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

const ExampleWithMetaInfo = () => (
    <div>
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
    </div>
);

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>react-lazyload-fadein examples</h1>
                <FACExample />
                <RenderPropExample />
                <ExampleWithMetaInfo />
            </div>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
