# Documentation 
## Packages used - Backend 
1. helmet - 
Helmet is an open-source Node.js middleware that helps you secure your Express apps by setting HTTP response headers. It provides a collection of middleware modules that set various HTTP headers to help protect your application from common web vulnerabilities.
Some of the benefits of using Helmet include:
Improved security: Helmet can help protect your application from a variety of web vulnerabilities, such as cross-site scripting (XSS), content-type sniffing (CTS), clickjacking, and HTTP Strict Transport Security (HSTS).

2. body-parser -
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

3. morgan -
Morgan is an HTTP request-level Middleware. It is a great tool that logs the requests along with some other information depending on its configuration and the preset used. It proves to be very helpful while debugging and also if you want to create Log files.

4. cors -
For configuring CROSS-ORIGIN-RESOURCE-SHARING

5. Mongoose -
Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js. Mongoose provides a straightforward, schema-based solution for modeling and interacting with MongoDB documents.

## Packages used - Frontend
1. For Data Visualization Components - https://nivo.rocks/
2. Material UI
3. React Router DOM
4. react-redux and redux toolkit

## Material UI 

CssBaseline:

CssBaseline is a component provided by Material-UI that helps in normalizing styles across different browsers. It applies basic CSS resets to ensure consistent rendering of elements across various browsers. This is particularly useful because different browsers may have different default styles for HTML elements, and CssBaseline helps in creating a consistent starting point for your application's styles.

ThemeProvider:

ThemeProvider is another component provided by Material-UI that enables you to apply a theme to your entire React application. It works with React's context API to pass the theme down the component tree. By wrapping your application with ThemeProvider, you ensure that all components within your app have access to the theme defined by you.

createTheme:

createTheme is a function provided by Material-UI that allows you to create a custom theme object for your application. This function accepts a configuration object as an argument, where you can specify various properties such as colors, typography, spacing, breakpoints, and more. The returned theme object contains default values for properties not explicitly defined, ensuring a consistent and coherent theme throughout your application.

themeSettings:

themeSettings appears to be a custom module or object where you define the configuration settings for your theme. It likely contains values for properties such as colors, typography variants, spacing, breakpoints, etc. This object is used as an argument to the createTheme function to generate the actual theme object that will be applied to your application.

The useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.

useMemo is a React Hook that is used for memoizing expensive calculations in functional components.

In React, when a component re-renders, all of its code runs again, including any calculations or function calls inside the component body. This can sometimes lead to performance issues, especially if these calculations are expensive or time-consuming.

useMemo allows you to memoize the result of a computation, meaning that React will only recompute the value when one of the dependencies has changed. If the dependencies haven't changed since the last render, useMemo will return the cached result instead of recomputing it, which can help optimize performance by avoiding unnecessary calculations.

## Routing ( React Router v6 )

" Routes ": This is a component provided by React Router v6 that acts as a container for defining the routing configuration of your application. It wraps all the routes.

<Route element={<Layout/>}>: This is a route configuration that renders the <Layout/> component when the URL matches. The <Layout/> component is presumably a layout component that contains common UI elements or provides a structure for rendering other components within it. This is often used for layouts that need to be consistently applied across multiple pages.

<Route path="/" element={<Navigate to="/dashboard" replace />} />: This is a route configuration for the root URL ("/"). When the root URL is matched, it renders a <Navigate> component. The <Navigate> component is used for navigation in React Router v6. In this case, it immediately navigates to the "/dashboard" URL and replaces the current entry in the history stack. This effectively redirects users from the root URL to the /dashboard URL.

<Route path="/dashboard" element={<Dashboard/>}/>: This is another route configuration for the "/dashboard" URL. When the "/dashboard" URL is matched, it renders the <Dashboard/> component. This is likely the main component rendered for the dashboard page.
