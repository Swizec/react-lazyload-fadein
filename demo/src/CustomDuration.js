import React from "react";
import FadeIn from "../../src";

export const CustomDuration = () => (
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
