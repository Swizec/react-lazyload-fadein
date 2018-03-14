# react-lazyload-fadein

Lazyload your React component and nicely fade in when it's ready.

[![](https://github.com/Swizec/react-lazyload-fadein/blob/master/react-lazyload-fadein.gif?raw=true)](https://react-lazyload-fadein.now.sh/)

[Try the demo](https://react-lazyload-fadein.now.sh/)

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## The problem

You have a slow component like a large image or complex widget, but want to keep your webapp fast.

You could use `react-lazyload` to render that component only when it's on screen, but it looks weird when your component just pops up. You can add a CSS transition, but it's over before your component loads, so it still pops into view abruptly.

## This solution

With `react-lazyload-fadein`, you're still using `react-lazyload` and get all of its benefits, but your components look great when they load. Automatically wait until the component is ready to start the FadeIn transition.

* Take performance in mind, only 2 event listeners for all lazy-loaded components
* Support both `one-time lazy` load and `continuous lazy` load mode
* `scroll` / `resize` event handler is throttled so you won't suffer frequent update, you can switch to debounce mode too
* Server Side Rendering friendly

## Installation

```
$ yarn add react-lazyload-fadein
```

## Usage

`react-lazyload-fadein` supports both function-as-children and render-props paterns.

In both cases `<FadeIn>` passes an `onLoad` callback to your render method so you can start the fade transition when you're ready. Use the default `onLoad` event for images.

```javascript
import React from "react";
import FadeIn from "react-lazyload-fadein";
```

Pass a function as children to specify rendering. Use the onload callback to start the fadein effect

```javascript
const FunctionAsChildren = () => (
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
```

If you prefer render props, you can use those as well. Everything else works the same

```javascript
const RenderProp = () => (
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
);
```

Your render function can be anything. Add some meta info to your image that fades in at the same time.

```javascript
const WithMetaInfo = () => (
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
);
```

You can even go beyond images. For example, a dataviz component that needs to load data before it renders.

```javascript
class PopulationChart extends Component {
    // load data in componentDidMount()
    // render chart in render()
}

const Dataviz = () => (
    <FadeIn height={600}>
        {onload => <PopulationChart onLoad={onload} />}
    </FadeIn>
);
```

You can then render those lazyloaded fadein components as usual.

```javascript
class Demo extends Component {
    render() {
        return (
            <div>
                <h1>react-lazyload-fadein examples</h1>
                <FunctionAsChildren />
                <RenderProp />
                <WithMetaInfo />
                <NonImageExample />
            </div>
        );
    }
}
```

you can also change the duration and the easing animation.
```javascript
const Post = () => (
    <FadeIn height={600} duration={100} easing={'ease-out'}>
        {onload => (
            <PostTitle>react-lazyload-fadein examples</PostTitle>
            <PostBody content={content} />
        )}
    </FadeIn>
);
```

## Special Tips

You should aware that your component will only be mounted when it's visible in viewport, before that a placeholder will be rendered.

So you can safely send request in your component's componentDidMount without worrying about performance loss. When you're ready, call the `onload` callback and that starts the fade in transition.

## Props

Every prop from [`react-lazyload`](https://github.com/jasonslyvia/react-lazyload#props) (height, once, offset, scroll, resize, overflow, placeholder, unmuntIfInvisible, debounce/throttle)

## duration

Type: Number, Default: 500

fade animation duration speed. default unit is millisecond.

## easing

Type: String, Default: 'ease-in-out'

fade animation easing type. support easing type is [CSS transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

## offset

Type: Number, Default: 150

Say if you want to preload a component N pixels below the viewport. I found 150px to be a good default to give components some time to load before users reach them.

### render

Type: Function Default: undefined

Specify what you want to render, if you like render props.

### children

Type: Function Default: undefined

Specify what you want to render, if you like function-as-children.
