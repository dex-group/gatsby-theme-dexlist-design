# DEX List's Gatsby theme: Design

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-dexlist-design and it's dependencies
yarn add gatsby react react-dom gatsby-theme-dexlist-design
```

Then add the theme to your `gatsby-config.js`. We'll use the long form
here for education purposes.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-dexlist-design",
      options: {},
    },
  ],
}
```

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

Note that this site doesn't _do_ anything, so you're see a missing
resources error. Create a simple page in `src/pages/index.js` to see a
page on the root url.

```jsx
import React from "react"

export default () => <div>My Site!</div>
```

## How to use this theme

Install this theme as a plugin, now you can use your own data to run a design list site. Or you can shadowing this theme with your code to do whatever you want.
