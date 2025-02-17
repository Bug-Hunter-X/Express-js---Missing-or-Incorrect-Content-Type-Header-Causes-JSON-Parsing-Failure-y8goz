# Express.js JSON Parsing Issue

This repository demonstrates a common issue in Express.js applications where JSON request bodies are not parsed correctly if the `Content-Type` header is missing or incorrect.  The bug and its solution are provided in separate files.

**Bug:**
The `bug.js` file contains an Express.js application that attempts to parse a JSON request body.  However, if the client doesn't send the correct `Content-Type: application/json` header, the request body will be empty, leading to unexpected behavior.

**Solution:**
The `bugSolution.js` file provides a corrected version of the application. This solution explicitly checks for the presence of the `Content-Type` header, providing a more robust approach to handling JSON requests.

This example highlights the importance of properly setting the `Content-Type` header in your client-side requests when sending JSON data to an Express.js server.