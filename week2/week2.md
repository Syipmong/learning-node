Reflection for Week 2: Building a Simple Server
Topics Covered:

Creating an HTTP Server: Used the http module to create a basic web server that can listen for incoming requests and send responses.
Handling HTTP Methods: Responded to different HTTP methods (GET, POST) and learned how to handle method-specific logic.
Responding with Different Content Types: Responded with plain text, JSON, and HTML to different client requests.
Exploring Request and Response Objects: Extracted and logged important information from the request object, including headers, URL, and method.
Basic Routing: Implemented simple routing to serve different content depending on the requested URL.
Handling Query Parameters: Used Node’s url module to extract query parameters from URLs and personalize responses.
Key Learnings:

Creating servers is simple with Node’s built-in http module, and it can be expanded to handle different request types and routes.
Routing and query parameters help structure web applications by providing different responses based on the URL and user input.
Handling different content types (text, JSON, HTML) is key when building APIs and serving web pages.
Request and response objects are rich with data about the request (headers, query parameters, method) and the response (status codes, headers).
Practical Exercise:

Built a simple web server that:
Responds to GET requests on different routes (/, /about, /contact).
Handles query parameters (e.g., greeting a user by name using /greet?name=Shehu).
Logs request information to understand how the server interacts with clients.
