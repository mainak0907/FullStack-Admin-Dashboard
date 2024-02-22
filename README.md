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
