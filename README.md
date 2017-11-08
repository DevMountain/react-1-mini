<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll introduce you to React by creating a small project from scratch. We'll make use of the `create-react-app` CLI tool to quickly generate a React boilerplate. The goal of this project is to create a simple interface for creating a list of friends with their name and picture.

## Setup

* Fork and clone this repository.
* Run `sudo npm install -g create-react-app`.

## Step 1

### Summary

In this step, we'll use `create-react-app` to create a React boilerplate.

### Instructions

* `cd` into the root directory of the project.
* Run `create-react-app ./`.
* Delete the `README.md` the boilerplate generates and rename `README.old.md` back to `README.md`.

### Solution

<img src="https://github.com/DevMountain/react-1-mini/blob/solution/readme-assets/1g.gif" />

## Step 2

### Summary

In this step, we'll clear the boilerplate that is made for us in `src/App.js`.

### Instructions

* Open `src/App.js`.
* Inside of the `return()` statement, replace everything with a single `<div>` element.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
```

</details>


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>


