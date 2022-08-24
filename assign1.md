1. What is React?
 React is a JavaScript library focused on creating declarative user interfaces (UIs) using a component-based concept.

2. Who made React?
React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called "FaxJS". He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012. It was open-sourced at JSConf US in May 2013.

3. What is Babel?
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language.

4. How does Babel convert html code in React into valid code?
When you use JSX, the compiler transforms it into React function calls that the browser can understand. The old JSX transform turned JSX into React.createElement(...) calls.

5. What is ReactDOM used for? Write an example?
ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.
ex - ReactDOM.render(element, container, callback)
ReactDOM.render(<App/>, document.getElementById("root"))

6. What are the packages that you need to import for react to work with?
webpack bundler that include all the npm package for react.
you need to import react from "react" & reactDOM from "react-dom"

7. How do you add react to a web application?
Step 1: Add a DOM Container to the HTML
Step 2: Add the Script Tags
Step 3: Create a React Component

8. What is React.createElement?
React. createElement( type, [props], [... children] ) Create and return a new React element of the given type. The type argument can be either a tag name string (such as 'div' or 'span' ), a React component type (a class or a function), or a React fragment type.

9. What are the three properties that createElement accept?
createElement(type,{props},children); React. createElement() takes three arguments.
They are:
type: the type of the HTML element (h1,p,button).
props: properties of the object({style:{size:10px}} or Eventhandlers, classNames,etc).
children: anything that need to be displayed on the screen.

10. What is the meaning of render and root?
React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app
