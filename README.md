# MyOwnStore

## To run 

### Install Dependencies

For Backend - npm i

For Frontend - cd frontend  npm i
### Env Variables

Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

Essential Variables PORT= DB_URI = STRIPE_API_KEY= STRIPE_SECRET_KEY= JWT_SECRET= JWT_EXPIRE= COOKIE_EXPIRE= SMPT_SERVICE = SMPT_MAIL= SMPT_PASSWORD= SMPT_HOST= SMPT_PORT= CLOUDINARY_NAME CLOUDINARY_API_KEY CLOUDINARY_API_SECRET fill each filed with your info respectively
## File Structure
The project has a directory structure with different folders and files for both the frontend and backend components.

**Frontend:**

* The "Public" folder contains static assets and the main HTML file.
* The "Src" folder contains the source code of the frontend application, including folders like "Actions" for defining user actions, "Components" for reusable UI components, "Constants" for constant values, "Images" for image files, "Reducers" for managing state, "Routes" for defining routing, and "Utils" for utility functions.
* Key files include "App.js" as the main entry point, "Index.js" for rendering the root component, and "Store.js" for configuring the Redux store.

**Backend:**
* The "Config" folder contains configuration files for the backend application, such as the "config.env" file.
* The "Controllers" folder handles specific functionalities and processes requests, with separate files for different controllers such as orderController, paymentController, productController, and userController.
* The "Middleware" folder provides functions executed before or after processing requests or responses, including authentication and error handling middleware.
* The "Models" folder defines the structure and logic of the application's data, with separate files for orderModel, productSchema, and userModel.
* The "Routes" folder defines API endpoints for different functionalities, with separate files for orderRoutes, paymentRoute, productRoute, and userRoute.
* The "Utils" folder contains utility functions used in the backend application, including apiFeatures for building dynamic MongoDB queries, ErrorHandler for error handling, sendToken for sending JWT tokens, and sendEmail for sending emails.

In summary, the directory structure separates frontend and backend components, with clear organization of files and folders based on their functionality. The frontend handles UI components, state management, actions, and routing, while the backend focuses on controllers, models, routes, and utilities for data handling, authentication, and error management.
## MyOwnStore-Backend File Structure and High Level Compenents

### **Config**: Contains configuration files for the backend application.

- Contains config.env file
- **database.js**- This code establishes a connection to a MongoDB database using Mongoose and provides appropriate error handling in case the connection
### **Controllers**: Handle specific functionalities and process requests.
* **orderController.js** - This file contains various controller functions for handling orders in MyOwnStore., these functions provide the necessary functionality like creating, retrieving, updating, and deleting orders.

* **paymentController.js** - This file contains two controller functions related to payment processing using Stripe that  provide the necessary information to the client for successful payment processing.

* **productController.js** - file contains several controller functions related to managing products and reviews  and their associated operations.

* **userController.js** - has various controller functions for handling user-related operations.

### **Middleware**: Provides functions that are executed before or after processing requests or responses.

* **auth.js** -  two middleware functions used for user authentication and authorization.
* **catchAsyncErrors.js** - This catchAsyncErrors function is used to handle asynchronous operations in Express middleware or route handlers

* **error.js** - This error handling middleware is designed to handle specific types of errors commonly encountered in an Express application and provides a consistent response format for error messages.




## **Models**: Define the structure and logic of the application's data.
* **orderModel.js** - This model has objects that include shippingInfo, orderItems, user, paymentInfo, paidAt, itemsPrice, taxPrice, shippingPrice, totalPrice, orderStatus, deliveredAt, and createdAt. 
* **productSchema.js** -  The productSchema includes various properties such as name, description, price, ratings, images, category, Stock, numOfReviews, reviews, user, and createdAt.
* **userModel.js** - The userSchema includes various properties such as name, email, password, avatar, role, createdAt, resetPasswordToken, and resetPasswordExpire.The schema also includes pre-save middleware that hashes the password before saving it to the database

## **Routes**: Define the API endpoints for different functionalities.
* **orderRoutes.js** - defines the routes for handling order-related operations. The routes are defined using the Express Router and are associated with corresponding controller functions from the orderController module.
* **paymentRoute.js** - defines the routes for handling payment-related operations and associated with corresponding controller functions from the paymentController module.
* **productRoute.js** - The routes for handling product-related operations in an Express application. The routes are associated with corresponding controller functions from the productController module and utilize authentication and authorization middleware (isAuthenticatedUser, authorizeRoles) for certain routes.
* **userRoute.js** -  The routes are associated with corresponding controller functions from the userController module and utilize authentication and authorization middleware (isAuthenticatedUser, authorizeRoles) for certain routes.
 

## **Utils**: Contain utility functions used in the backend application.

* **apiFeatures.js** - The ApiFeatures class is a utility function that provides methods for building dynamic MongoDB queries. It takes a query and query string as inputs and offers functionality for adding search filters, applying additional filters based on query parameters, and implementing pagination.
* **errorhander.js** - The ErrorHandler class is exported to be used in other parts of the application where error handling is required.
* **jwtToken.js**- The sendToken function is used to send a JSON Web Token (JWT) to the client as a response. It accepts the user object, statusCode, and res (response) object as parameters.
* **sendEmail.js** - The sendEmail function is used to send an email using Nodemailer library. It accepts an options object as a parameter, which contains the necessary information for sending the email, such as the recipient's email address, subject, and message.

## **App.js**: Main entry point of the backend application
This is configured with middleware functions such as **express.json(), cookieParser(), bodyParser.urlencoded(), and fileUpload()**. Routes for products, users, orders, and payments are imported and mounted on the /api/v1 path. The application also serves static files from the frontend/build directory and has a catch-all route to serve the index.html file for unmatched routes. An error middleware is included for handling errors.

## **Server.js**: Configures and starts the backend server.
This checks the application's environment, connects to the database, configures Cloudinary, starts the server, and handles unhandled promise rejections.
## Important Low Level Components - Backend 
### Controllers 
#### Product 
* **createProduct**: Creates a new product. It uploads images to the Cloudinary service, retrieves the image links, and saves the product details in the database.

* **getAllProducts**: Retrieves all products with pagination and filtering options. It counts the total number of products and returns the products along with other metadata.

* **getAdminProducts**: Retrieves all products for admin purposes.

* **getProductDetails**: Retrieves the details of a specific product based on the provided ID.

* **updateProduct**: Updates the details of a product, including the images. It deletes the previous images from Cloudinary, uploads new images, and updates the product details in the database.

* **deleteProduct**: Deletes a product from the database and also removes its associated images from Cloudinary.

#### User  

* **registerUser**: Registers a new user by creating a new User object in the database and sends a token as a response for authentication.

* **loginUser**: Authenticates a user by comparing the provided email and password with the user data in the database. If the authentication is successful, it sends a token as a response.
 
* **logout**: Logs out the currently logged-in user by clearing the token stored in a cookie.
 
* **forgotPassword:** Initiates the password reset process for a user. It generates a reset password token, saves it in the user's data, and sends a password reset email to the user.
 
* **resetPassword**: Resets the user's password using the reset password token. It verifies the token, updates the password, and sends a new token for authentication.

* **getUserDetails**: Retrieves the details of the currently logged-in user.

### catchAsyncErrors 

 **catchAsyncErrors** function is commonly used to handle asynchronous operations in Express middleware or route handlers, Many functions are wrapped in the catchAsyncErrors middleware, which handles any errors that occur during their execution.
 
 ### apiFeatures (utils)
 
A breakdown of the class methods:

* **constructor(query, queryStr)**: Initializes the ApiFeatures instance with a MongoDB query (query) and the query string (queryStr) received from the request.
* **search()**: Adds a search filter to the query based on the keyword property in the query string. It performs a case-insensitive search for the name field using a regular expression. Returns the updated ApiFeatures instance.
* **filter()**: Adds additional filters to the query based on the other properties in the query string. It removes certain fields (keyword, page, limit) from the query string, converts the remaining properties into MongoDB query operators ($gt, $gte, $lt, $lte), and applies them to the query. Returns the updated ApiFeatures instance.
* **pagination(resultPerPage)**: Adds pagination to the query. It determines the current page number from the query string, calculates the number of documents to skip based on the result per page and current page, and limits the query to the specified number of results per page. Returns the updated ApiFeatures instance.
 
 

# FrontEnd
**Frontend Components**:

1. **Public**: Contains static assets and the main HTML file.
1. **Src**: Contains the source code of the frontend application.
1. **Actions**: Define actions that can be performed by the user.
1. **Components**: Define reusable UI components used throughout the application.
1. **Constants**: Define constant values used in the application.
1. **Images**: Contains image files used in the application.
1. **Reducers**: Manage the application's state and handle changes triggered by actions.
1. **Routes**: Define the routing structure of the application.
1. **Utils**: Contain utility functions used in the frontend application.
1. **App.js**: Main entry point of the frontend application.
1. **Index.js**: Renders the root component and mounts it to the DOM.
1. **Store.js**: Configures the Redux store for state management.



<!-- The low-level components of the backend include configuration files, controllers (order, payment, product, user), middleware functions (auth, catchAsyncErrors, error), models (order, product, user), routes (order, payment, product, user), and utility functions (apifeatures, errorhandler, jwtToken, sendEmail).
The low-level components of the frontend include actions (cart, order, product, user), components (Admin, Cart, Home, Order, Product, Route, User, etc.), constants (cartConstants, orderConstants, productConstants, userConstants), images, reducers (cartReducer, orderReducer, productReducer, userReducer), and utility functions.
These components work together to provide the application's functionality, user interface, data management, and communication with the backend. -->





### Admin Components
**Dashboard**: This contains the code or components responsible for displaying an administrative dashboard. It may include various statistics, charts, and important information related to the system.

**New Product**: It is used for adding or creating a new product in the system. It may contain forms or functions related to gathering information about a product and saving it to a database.

**Orders List:** This file displays a list of orders placed in the system. It may contain functionality to view, filter, and manage orders, including options to update their status or perform other related actions.

**Process Order:** It is involved in the processing of an order. It may contain functions or logic to handle the necessary steps involved in fulfilling an order, such as updating inventory, generating invoices, or sending notifications.

**Product List:** This file probably displays a list of existing products in the system. It may include features to search, sort, and manage products, such as editing their details or deleting them.

**Product Review:** It deals with displaying and managing product reviews or ratings. It may include functionality for users to view and submit reviews, as well as administrative capabilities to moderate or manage reviews.

**Sidebar:** This file is likely a component or template used to create a sidebar navigation menu in the administrative interface. It may include links or icons for easy access to various sections or features of the system.

**Update Product:** It is probably used for updating the details of an existing product. It may include forms or functions to modify and save changes to product information, such as its name, description, price, or other attributes.

**Update User:** It handles the functionality for updating user details within the administrative interface. It may include forms or functions to modify user information like name, email, password, or other relevant data.

**Users List:** It likely displays a list of users registered in the system. It may include features to search, filter, and manage user accounts, such as editing their details, suspending or deleting accounts, or assigning roles.

### Cart Components
**Cart:** handles the functionality related to the shopping cart. It may contain functions or components to add, remove, or update items in the cart, calculate totals, and manage the cart state.

**CartItemCard:** is a component or template responsible for rendering an individual item within the cart. It may display details such as the item's name, price, quantity, and options for modifying or removing the item from the cart.

**CheckOutSteps:** provides the functionality for guiding users through the checkout process in multiple steps. It may display a progress indicator or navigation for the various stages of the checkout, such as shipping information, payment details, and order confirmation.

**ConfirmOrder:** is used for displaying a summary of the order before the user confirms the purchase. It may show the selected items, shipping details, payment method, and provide options to review or modify the order before proceeding.

**OrderSuccess:** represents the page or component that is shown to the user after a successful order has been placed. It may display a confirmation message, order details, and any relevant information related to the completion of the purchase.

**Payment:** It is nvolved in the payment process during checkout. It may contain forms or components to collect payment information, integrate with payment gateways or processors, and handle transaction-related functionality.

**Shipping:** handles the selection and management of shipping options during the checkout process. It may display available shipping methods, calculate shipping costs, and provide functionality for users to choose their preferred shipping method.


### Home Component
**Home:** is the main or landing page of the application or website. It may contain the primary content, layout, and components for the home page, including sections such as featured products, banners, promotional information, or any other relevant content for the homepage.

**ProductCard:** is a component or template responsible for rendering individual product cards on the home page or other sections of the application. It may display essential details about a product, such as its name, image, price, and any other relevant information. The product card component can be reused throughout the application to display multiple products in a consistent format.

### Layout Component
**About:** represents the layout or template for the "About" page of the application or website. It may contain the structure, design, and components specific to the About page.

**Contact:** is the layout or template for the "Contact" page of the application or website. It may include the necessary structure, form elements, and components for users to submit contact information or send messages.

**Footer:** represents the layout or template for the footer section of the application or website. It typically contains elements such as copyright information, links to important pages, social media icons, or any other content that appears consistently at the bottom of each page.

**Header:** file is the layout or template for the header section of the application or website. It usually contains elements like the site logo, navigation menu, search bar, or any other content that appears consistently at the top of each page.

**Loader:** contains a loading component or animation that is displayed to users while the application or website is fetching data or processing a request. It provides a visual indication to users that the system is working.

**Not Found:** is a template for the "404 Not Found" page. It is displayed when a user tries to access a page or resource that does not exist. It may contain a message, navigation links, or suggestions for the user to navigate back to valid content.

**MetaData:** file contains metadata information for the application or website. It includes data such as the title, description, keywords, and other relevant information that helps search engines and other services understand and index the web pages correctly.

### Order Component
**MyOrders:** contains the functionality or page where users can view their own orders. It may display a list of orders associated with the currently logged-in user, including details such as order numbers, dates, statuses, and options to view order details or track shipments.

**OrderDetails:** is used to display the detailed information of a specific order. It may contain the order number, date, customer information, shipping address, and a list of items included in the order. Additionally, it might show the total price, payment details, and any other relevant information related to that particular order.

### Product Component
**ProductDetails:** represents the page or component used to display the detailed information of a specific product. It may contain the product name, description, images, price, availability, and other relevant details. Additionally, it might include options for adding the product to the cart, writing reviews, or performing other related actions.

**Products:** is used to display a list or grid of multiple products. It may contain components or templates for rendering individual product cards or tiles, including basic information such as product name, image, and price. The Products file could also handle features like pagination, filtering, or sorting to enhance the browsing experience.

**ReviewCard:** contains a component or template used to display an individual product review. It may include the reviewer's name, rating, review text, and other relevant information. The ReviewCard can be used in conjunction with the ProductDetails file to display product reviews for a specific product.

**Search:** file handles the search functionality for products. It may contain components or functions related to searching and filtering products based on user input. The Search file could also display the search results, allowing users to click on specific products to view their details or add them to the cart.

### Route 
**ProtectedRoute:** contains information regarding custom implementation of a protected route in the application. In many web applications, certain routes or pages may require authentication or specific user permissions to access. The ProtectedRoute file is responsible for implementing logic that checks if a user is authenticated and authorized to access a particular route. If the user meets the necessary requirements, they are allowed to proceed to the requested route; otherwise, they may be redirected to a login page or denied access.

The ProtectedRoute file ensures that only authenticated users can access specific routes or pages, enhancing the security and control of the application

### User Component
**ForgotPassword:** handles the functionality for users who have forgotten their password. It may contain components or functions to assist users in resetting their password by providing their registered email address or other necessary information.

**LoginSignUp:** is responsible for login and sign-up functionality for users. It may contain components or templates for user authentication, including input fields for username/email and password, registration forms, and options for signing up or logging in with different methods (e.g., email/password, social media accounts).

**Profile:** represents the user profile page or component. It may display information related to the user's account, such as their username, email address, profile picture, and any other relevant details. It may also include options for editing or updating the profile information.

**ResetPassword:** is used in the process of resetting a user's password. It may contain components or functions that facilitate the creation of a new password by validating and updating the user's credentials after they have gone through the password reset flow.

**UpdatePassword:** represents the functionality for users to update their existing password. It may include forms or components for entering the current password and providing a new password to be saved securely.

**UpdateProfile:** handles the functionality for users to update their profile information. It may contain forms or components that allow users to modify their username, email address, profile picture, or any other relevant details associated with their account.

## Constant
**cartConstants:** contains constants or predefined values related to the shopping cart functionality. It may include constants for actions such as adding items to the cart, removing items, updating quantities, or any other cart-related operations.

**orderConstants:** contains constants or predefined values related to the order management functionality. It may include constants for actions such as placing an order, updating order status, retrieving order details, or any other operations related to orders.

**productConstants:** contains constants or predefined values related to product management. It may include constants for actions such as fetching products, creating new products, updating product details, deleting products, or any other operations related to products.

**userConstants:** contains constants or predefined values related to user management and authentication. It may include constants for actions such as user registration, user login, user logout, updating user profile, or any other user-related operations.
