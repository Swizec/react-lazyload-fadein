import React from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: "inline-block"
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
};

class FadeIn extends React.Component {
    state = {
        loaded: false
    };
    onLoad = () => this.setState({ loaded: true });

    render() {
        const { height, children } = this.props,
            { loaded } = this.state;

        return (
            <LazyLoad height={height} offset={150}>
                <Transition in={loaded} timeout={duration}>
                    {state => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            {children(this.onLoad)}
                        </div>
                    )}
                </Transition>
            </LazyLoad>
        );
    }
}
FadeIn.propTypes = {
    height: PropTypes.number,
    children: PropTypes.func
};

export { FadeIn };
export default FadeIn;
