import React from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

const getStyle = ({ duration, easing = 'ease-in-out' }) => ({
    transition: `opacity ${duration}ms ${easing}`,
    opacity: 0,
    display: 'inline-block',
});

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
        const { height, duration = 500, easing, children, render, offset, ...restProps } = this.props,
            { loaded } = this.state;

        return (
            <LazyLoad
                height={height}
                offset={typeof offset === "undefined" ? 150 : offset}
                {...restProps}
            >
                <Transition in={loaded} timeout={duration}>
                    {state => (
                        <div
                            style={{
                                ...getStyle({duration, easing}),
                                ...transitionStyles[state]
                            }}
                        >
                            {children && children(this.onLoad)}
                            {render && render(this.onLoad)}
                        </div>
                    )}
                </Transition>
            </LazyLoad>
        );
    }
}
FadeIn.propTypes = {
    height: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.string,
    children: PropTypes.func,
    render: PropTypes.func
};

export { FadeIn };
export default FadeIn;
