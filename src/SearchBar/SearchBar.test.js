
Component composition
Default props and class components
Intro to testing
Setting, reading, and updating state
Event handlers and conditional rendering
Callback props
Thinking in React
API requests
React Router
Creating and Reading Context
Updating Context
Organizing your React code
Deploying to production
Accessibility in React apps
Thinking in React
Objective: By the end of this checkpoint, you can decompose a design into a react component hierarchy and implement it with state and props.

When you have a problem to solve, say getting to Mount Fuji in Japan from where you live, you think of the solution in terms of the resources available to you. For instance, if you have a helicopter you would probably consider the flying distance of the helicopter and plan a route so that you can refuel along the way and avoid very long ocean crossings. But if you had a sailboat you start solving the problem by plotting a safe journey around the horn of Africa.

Software problems are no different. When you have an app to build, your choice of tools impacts the way you set about solving the problem. Your choice of React, for instance, makes you think of the app in a particular way. Understanding how you think of an app in React is critical to effectively gaining the advantages of the React environment.

At the end of this checkpoint, you'll refactor an app to follow React best practices.

Key Terms

Composition
Root element
How React Apps are Organized
React applications are broken up into (reusable) components that may then be used to assemble an application's interface. Each component represents a small area of the screen and may be composed of smaller components. Deciding what exactly makes a component and when to continue decomposing components is the purpose of this lesson.

Knowing what you want to build and having some idea of how to build it before you start makes a big difference when it comes to getting the job done. The objective is to decide what components you need to build, how they work together then start building.

Typically, you start with the sketch (mockup) of the whole design and attempt to break it up into components by functional area. That is, you try to make a component as single-minded as possible, being responsible for one thing. If you find that a single component is doing several things and getting too complex continue to break it down.

You then decide on which data are state and which are props and where state would live in your components hierarchy. Finally, you add the interactivity for the user.

Build a File Uploader
We are building a simple, fake file uploader to help sync some local files with an online service like Dropbox. This is just the front end interface so we are not actually going to connect to a real service just as yet.

Screenshot of completed application

Our file uploader will work with some data that lists all files, their sizes, and status.

For example:

[
  {"fileType":"jpg","size":"4.3MB","name":"me on skis.jpg","status":"Synced"},
  {"fileType":"mov","size":"1.3GB","name":"cats falling.mov","status":"Uploaded"},
  {"fileType":"txt","size":"0.9KB","name":"My December expenses.txt","status":"Uploaded"},
  {"fileType":"mp3","size":"3.4MB","name":"disturbed_sound_of_silence.mp3","status":"New"},
]
Start with a design mockup
Sometimes your team has a designer on board that will sketch the design and you have that sketch to work from. But even if you do not have a designer it is important for you to sketch a simple diagram of the final user interface that you want to build. You do not need any fancy drawing tool, there are some free ones available online or just use a pencil and paper.

Sketch Diagram of the design

Using this diagram try to break it up into functional areas. A functional area is some part of the screen that is responsible for something specific. For example, in the above sketch there is an area at the very top of the screen with the search bar and some radio buttons, that looks like it is designed for the user to specify how to filter the list of files shown below. Maybe that is a component.

The list of files itself may be another component. That entire area of the screen is responsible for displaying the list of files according to the filters selected. And within that list, each file looks like it is a component because each one is responsible for specifically displaying information about a file and providing some control buttons.

The most effective design is made up of components that each has only a single responsibility. This makes your components easier to test and debug, and more importantly, it might make the component reusable.

Starting at the very beginning, the entire interface is a single component, which we will call the root component. All other components are nested inside this root component. Two components were identified already, the search bar at the top of the screen and the filterable list of files. We can continue taking each component and considering if it can be broken down further.

Another way to analyze the design is to think of the data that will be used to populate the interface. Each component will either display or have some interaction with a part of that data. In this example, the data is an array of objects. Which component in the interface relates to the array of objects? Which component relates to a single object? Do we need components for any part of an object? This is a fairly simple data structure but much can still be deduced from it.

Draw boxes around the parts of the screen that you think are components. Remember that as you gain experience you may be able to readily identify components but even very experienced developers cannot always identify all components at this point. Many times as the app is being built further decisions about what components are needed are made and the code refactored to suit the new decisions. So just do the best you can, and after we get started coding you can refactor as needed. Below is a sketch of some components that you may have identified. It does not matter if you have more boxes than shown here. This is a design exercise and as such much depends on the developer doing the design. There are many ways to solve the problem so no one right answer can be expected.

Decomposed components

In this diagram the following components have been identified:

FileUploader (blue): Contains the entire application
SearchBar (red): Receives user input for filtering options
FilterableList (gold): Display the data in the array of files, applies filters that the user input in the SearchBar.
ListItem (green): Displays a single file's details and provide a control bar for the user to interact with that file.
ControlBar (orange): Provide some buttons for the user to interact with a specific file.
SearchBox (light green): Capture user's search term
FilterOptions (purple): Display user's filter choice and captures user input.
As described above, React components are arranged in a hierarchical structure with a single root component at the top of the hierarchy, and potentially deeply nested components making up the rest of the app. If we arrange the components identified such that the parent components are at the top and any child components are below the parent we would end up with a tree diagram like this:

Tree diagram

This simply tells us that SearchBar and FilterableList are nested inside the FileUploader, SearchBox and FilterOptions are nested inside the SearchBar, ListItem's are nested inside FilterableList and ControlBar is nested inside ListItem.

Build a static app
Now that you have some idea what components you need and how they relate to each other, it is time to write some code. At this point you are simply building out the user interface with no interaction - that is, the search and filters are not going to work.

Your approach to writing the code may vary depending on the complexity of the application involved. For highly complex applications it may be easier to write the smaller components first, those are generally lower down in the tree, and use them to compose components higher up in the tree until you have a fully working app. This way you can also write tests for each component as you go.

For simpler apps like this example, it is possible to build the root component and work your way down until all components are built. Either way, you should end up with the same code at the end.

Each component should have a render method that simply displays the data in your model. Data, for now, should be only props since we are not doing interactivity and state is about interactivity and how data changes over time. You can declare the data needed in the root of the application and pass props to the nested components.

The code in the following example can be found at this repo. Check out the branch static_version.

Start a new React application named fileuploader and prepare it by removing the boilerplate as described in Clean start - A react playground. Then for each component create a simple version that displays the data passed as props from the parent component. It is not necessary to write CSS at this time but you may wish to have some rudimentary style. As long as the data is displayed correctly.

Starting with the index.js file, add a declaration of a const to hold some data for you to test this app. Pass the const to the App component as a prop.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const FILES = [
  {"fileType":"jpg","size":"4.3MB","name":"me on skis.jpg","status":"Synced"},
  {"fileType":"mov","size":"1.3GB","name":"cats falling.mov","status":"Uploaded"},
  {"fileType":"txt","size":"0.9KB","name":"My December expenses.txt","status":"Uploaded"},
  {"fileType":"mp3","size":"3.4MB","name":"disturbed_sound_of_silence.mp3","status":"New"},
];

ReactDOM.render(<App files={FILES}/>, document.getElementById('root'));
The FILES const is an array of file objects for display in the user interface, notice the props files={FILES} being passed to App.

Modify App.js to be composed of two components, SearchBar and FilterableList making sure to pass the files prop along to FilterableList.

import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}

export default App;
Next create a folder named SearchBar for the SearchBar component, we will place all files related to SearchBar in this folder. For instance, a CSS file for styles related to this component named SearchBar.css, a test file named SearchBar.test.js and the component code file itself named SearchBar.js may be placed in this folder. For now, the SearchBar.js file may look like this:

import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar__controls">
          <SearchBox/>
          <FilterOptions/>
        </div>
      </div>
    );
  }
}

export default SearchBar;