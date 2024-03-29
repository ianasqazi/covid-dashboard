# COVID-19 DASHBOARD - REACT

![COVID-19 DASHBOARD - REACT](screenshots/1.png)
![COVID-19 DASHBOARD - REACT](screenshots/2.png)

In the current state of the world during Corona virus pandemic 🦠 and with many of us in lockdown, I thought it would be a good idea to put down Netflix for a bit, and build a COVID Dashboard with MAP showing statistics of increase of corona virus around the world. 

Hover over the countries to see additional details for each country in tooltips. Used the api from  https://corona.lmao.ninja/v2/jhucsse & https://documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest2 which returns a list of countries and provinces with COVID-19 stats. Then, mapped the data with the co-ordinates in the JSON to the map along with colour schemes and circle radius size based on the number. 

Feel free to use the code from the links provided below. My version is a very simple version and more functionality but it's up to you to include more features. 

## Links / Resources / API's USED

**[CODESANDBOX](https://codesandbox.io/s/covid19-dashboard-kmv7r)** 

**[GITHUB - REPO](https://github.com/ianasqazi/covid-dashboard)** 

**[COVID API  - DATA 1](https://docs.corona.lmao-xd.wtf/version-2)** 

**[COVID API  - DATA 2](https://documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest2)** 

**[DEV COMMUNITY POST](https://dev.to/alemesa/how-to-create-a-covid-19-map-with-mapbox-and-react-3jgf)** 


## Libraries/Frameworks Used 

1. REACT : "^16.12.0"
2. REACT-DOM : "^16.12.0"
3. REACT-ROUTER-DOM : "^5.1.2"
4. REACT-SCRIPT : "3.4.0"
5. REACTSTRAP : : "^8.4.1"
6. REACT-LOADINGG : "^1.7.2"
7. MAPBOX-GL : "^1.9.1"
8. AXIOS : "^0.19.2"
9. SWR : "^0.2.0"
10. COUNTRY-CODE-LOOKUP : "^0.0.17"
11. COMMA-NUMBER : "^2.0.1"


## Getting Started

### Run it locally

1. Clone the project

```
git clone https://github.com/ianasqazi/covid-dashboard.git
```

2. Install 

```
npm install 
```

3. Run Application 

```
cd covid-dashboard

# Using npm or yarn
yarn || npm start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
