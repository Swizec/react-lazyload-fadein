import React from "react";
import FadeIn from "../../src";

export const RenderProp = () => (
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
