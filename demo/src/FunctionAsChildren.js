import React from "react";
import FadeIn from "../../src";

export const FunctionAsChildren = () => (
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
