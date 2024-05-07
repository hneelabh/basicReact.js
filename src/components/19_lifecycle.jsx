/*
When we create a react component, the component goes through several stages in its lifecycle. 
React provides us with built in methods that we can override at particular stages in the life cycle.

Lifecycle methods available for a class component:-
(These methods do not exist on a functional component)

We may merely classify the methods into four phases:
1. mounting 
2. updating 
3. unmounting, and 
4. error handling

1. the mounting lifecycle methods are called when an instance of a component is being created and inserted into the DOM.
2. the updating lifecycle methods are called when a component is being rendered as a result of changes to either its props or state.
3. the unmounting lifecycle method is called when a component is being removed from the DOM.
4. the error handling methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

1. During the mounting phase we have four methods:
    constructor, static getDerivedStateFromProps, render and componentDidMount.

2. During the updating phase we have five methods:
    static GetDeriveStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate.

3. During unmounting we just have one method: componentWillUnmount.

4. For error handling we have two methods:
    static getDerivedStateFromError and componentDidCatch.
*/