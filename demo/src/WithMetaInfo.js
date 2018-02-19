import React from "react";
import FadeIn from "../../src";

export const WithMetaInfo = () => (
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
