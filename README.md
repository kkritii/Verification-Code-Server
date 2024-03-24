# Verification Code Validator (Server)

## Overview

This project is a backend API for validating verification codes. It receives verification codes from the frontend application and validates them against a predefined rule of valid code.

## Features

- **Validation Endpoint**: Provides an endpoint for validating verification codes.<br>
- **Code Validation**: Validates the received code against the rule of valid code.<br>
- **Response**: Sends a response indicating whether the code is valid or not.

## Technologies Used

- **Node.js**: The server is built using Node.js.<br>
- **Express.js**: Express.js is used as the web framework for handling HTTP requests.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone git@github.com:kkritii/Verification-Code-Server.git`
2. Install dependencies: `yarn`
3. Start the server: `yarn start:dev`
4. The server will start running on http://localhost:4000

## Configuration

The server requires MongoDB to be configured. You can do this by creating a .env file in the root of the project and adding the following:

```
PORT=4000
```

## API Endpoints

- **POST /verify**: 
    - **Request Body**: { "verificationCode": "123456" }
    - **Response**: { "message": "Valid verification code" } or { "message": "Invalid verification code" }

## Usage

To use the API, send a POST request to the /verify endpoint with a JSON body containing the verification code. The API will respond with a JSON object indicating whether the code is valid or not.