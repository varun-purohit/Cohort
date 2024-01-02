
# Node.js, Protocols & HTTP

## ECMAScript, Javascript & Node.js
### ECMAScript
- is a specification/documentation/set of rules.
- Any compiler made for JavaScript must follow these rules.
- versions include ES5, ES6, ES2017 etc.

### JavaScript
- is the implementation of the ECMAScript standard.
- includes additional features as well which are not part of ECMAScript specification. Eg: `setTimeout`, `fs.readFile`, etc).

### Javascript Engines
- **V8 by Google: open-source** JavaScript engine developed by the Chromium project.
- ****SpiderMonkey by Firefox:**** written in C++ and Rust.

### Node.js Overview
- Node.js is not a compiler, it is a **runtime environment**.
- **built on the V8 JavaScript engine** by google.
- allows the **execution of JavaScript code outside of the browser**.
- **follows same ECMAScript specifications** as browsers.
- **but offering enhanced features** and capabilities for server-side programming.

### Bun
- **basically a competitor**, whatever node.js does, it will do it but **better**.
- **uses Apple's JavaScriptCore engine** (same engine used in Apple Safari). written in Zig.
- **Features include** First-class TypeScript support, Built-in linter, formatter, and test runner, Ability to bundle scripts into a single JavaScript file or executable etc.
- also **single-threaded.**

## HTTP Server
### **Protocol**

1. **set of rules and conventions** defined for machines to communicate effectively.
2. In the **context of websites**, it is the **primary method** for the frontend of a website to communicate with its backend.
3. **HTTP (Hypertext Transfer Protocol) SERVER**: **software application** or a hardware device that **handles** **the communication between the client and the server** using the HTTP protocol.

## HTTP (Client Side components)

1. **Protocols: Defines the rules for communication** between the client and the server.
2. **Address:** Specifies the **URL or address to identify the server.**
3. **Routes:** Represents the **specific paths** **on the server** that the client wants to access.
4. **Headers/Body/Query Parameters:** Include **additional information** (headers) or **data** (body/query parameters) sent with the request.
5. **Method:** Specifies the **type of action** the client wants to perform (GET, POST, PUT, DELETE).

## HTTP (Server Side components):
1. **Response Headers:** Include **metadata** about the response sent from the server.
2. **Response Body:** Contains the **actual data** or content sent back to the client.
3. **Status Codes: Indicate the success or failure** of the request (e.g., 200 for success, 404 for not found, 500 for internal server error).

## Communication Flow
**Things that happen in your browser after you fire this request:**

1. Browser parses the URL.
2. Does a DNS Lookup (converts [chat.openai.com](http://chat.openai.com) to an IP).
3. Establishes a connection to the IP (does handshake).

**Things that happen on your server after the request is received:**

1. Server **receives inputs** (route, body, headers).
2. Performs logic on the input, **calculates the output**.
3. **Returns the output** body, headers, and status code.

### **Use cases for writing a Backend application in Node.js:**

1. Create Command Line Interface.
2. Create a Video Player.
3. Create a Game.
4. **Create an HTTP Server**


