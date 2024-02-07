
# React Foundations
As developers encountered challenges with traditional DOM manipulation, various libraries emerged to ease the process, with jQuery being one of them. However, even with such libraries, handling extensive applications remained complex. 

## Understanding DOMs 
In React, there is a virtual DOM and a real DOM.

1. **Virtual DOM**
    - React uses a virtual DOM to optimize updates and improve performance. The virtual DOM is an in-memory representation of the actual DOM elements. It's a lightweight copy of the real DOM.
    - When you make changes to the state of a React component, React creates a new virtual DOM tree representing the updated state.
    - React then compares the new virtual DOM with the previous virtual DOM to determine the differences (diffing).
    - The differences are used to compute the most efficient way to update the real DOM.
2. **Real DOM**
    - The real DOM is the actual browser's Document Object Model, representing the structure of the HTML document.
    - When React determines the updates needed based on the virtual DOM diffing process, it updates the real DOM with only the necessary changes.
    - Manipulating the real DOM can be expensive in terms of performance, so React aims to minimize direct interaction with it.
    
In summary, while there are two representations—virtual DOM and real DOM—React abstracts the complexity of direct manipulation of the real DOM by using a virtual DOM and efficiently updating only the parts that have changed. This approach contributes to React's efficiency and performance in managing UI updates.


### Some React Jargons
1. **State**
    - An object that represents the current state of the app. It represents the dynamic things in your app (things that change). For example, the value of the counter.





![App Screenshot](https://webkul.com/blog/wp-content/uploads/2023/04/state-life-cycle.jpg)



2. **Component**
A React component is like a LEGO brick. Components in React work as building blocks that you can use to make various things on the computer, like games or websites.

3. **Re-rendering**
Imagine you have a digital pet on your computer. This pet can be happy or sad based on how it's feeling. In React, we represent this feeling with something called "state."

So, you have a button that, when clicked, changes your pet's feeling from happy to sad or vice versa. When you click the button, React notices that the state (the feeling of your pet) has changed. When the state changes, React is smart enough to say, "Oh, something's different now. Let's update what's shown on the screen to match the new feeling."

So, if your pet was happily dancing, clicking the button might make it change to a sad face. This updating process is what we call "re-rendering." It's like refreshing the screen to show the new state of your digital pet.

**In React, when the state changes, React automatically re-renders the component to reflect that change. This way, your users always see the most up-to-date and accurate information on the screen.**

## React Props
In React, props (short for properties) are a way to pass data from a parent component to a child component. They allow you to customize and configure child components based on values provided by their parent components.


2. **Component**
A React component is like a LEGO brick. Components in React work as building blocks that you can use to make various things on the computer, like games or websites.

3. **Re-rendering**
Imagine you have a digital pet on your computer. This pet can be happy or sad based on how it's feeling. In React, we represent this feeling with something called "state."

So, you have a button that, when clicked, changes your pet's feeling from happy to sad or vice versa. When you click the button, React notices that the state (the feeling of your pet) has changed. When the state changes, React is smart enough to say, "Oh, something's different now. Let's update what's shown on the screen to match the new feeling."

So, if your pet was happily dancing, clicking the button might make it change to a sad face. This updating process is what we call "re-rendering." It's like refreshing the screen to show the new state of your digital pet.

**In React, when the state changes, React automatically re-renders the component to reflect that change. This way, your users always see the most up-to-date and accurate information on the screen.**

## React Props
In React, props (short for properties) are a way to pass data from a parent component to a child component. They allow you to customize and configure child components based on values provided by their parent components.


![App Screenshot](https://bosctechlabs.com/wp-content/uploads/2022/06/React-Data-Flow.png)

2. **Component**
A React component is like a LEGO brick. Components in React work as building blocks that you can use to make various things on the computer, like games or websites.

3. **Re-rendering**
Imagine you have a digital pet on your computer. This pet can be happy or sad based on how it's feeling. In React, we represent this feeling with something called "state."

So, you have a button that, when clicked, changes your pet's feeling from happy to sad or vice versa. When you click the button, React notices that the state (the feeling of your pet) has changed. When the state changes, React is smart enough to say, "Oh, something's different now. Let's update what's shown on the screen to match the new feeling."

So, if your pet was happily dancing, clicking the button might make it change to a sad face. This updating process is what we call "re-rendering." It's like refreshing the screen to show the new state of your digital pet.

**In React, when the state changes, React automatically re-renders the component to reflect that change. This way, your users always see the most up-to-date and accurate information on the screen.**

## React Props
In React, props (short for properties) are a way to pass data from a parent component to a child component. They allow you to customize and configure child components based on values provided by their parent components.


Here's a breakdown of key concepts related to React props:

### 1. Passing Data:
* Props enable the flow of data from a parent component to a child component.
* They are passed as attributes in JSX when rendering a child component.

### 2. Functional Components
* In functional components, props are received as an argument to the function.
 
###  3 Class Components:
* In class components, props are accessed using this.props.
 
### 4 Immutable and Read-Only
* Props in React are read-only. A child component cannot modify the props it receives from a parent. Props are intended to be immutable.
 
### 5 Customization and Reusability
* Props allow you to customize the behavior and appearance of a component, making it versatile and reusable in different contexts.
 
### 6 Default Values:
* You can provide default values for props to ensure that the component works even if certain props are not explicitly passed.
 
### 7 Destructuring Props:
* You can use destructuring to extract specific props from the props object, making code cleaner.
 
### 8 Passing Functions as Props:
* You can pass functions as props, allowing child components to communicate with their parent components.



Here's a simple example to illustrate the use of props:
 
In this example, ParentComponent passes the message "Hello from Parent!" to ChildComponent as a prop. The child component then displays this message. Props facilitate communication between components, making it easy to create modular and reusable React applications.

```
// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    return (
        <div>
            <ChildComponent message="Hello from Parent!" />
        </div>
    );
}

export default ParentComponent;

// ChildComponent.jsx
import React from 'react';

function ChildComponent(props) {
    return <p>{props.message}</p>;
}

export default ChildComponent;

```