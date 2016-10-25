# node-red-lib-installer

This is a small utility to install Node-RED flows, subflows or functions from GitHub or NPM into the current directory.

## Usage

1. Fork this repository
2. Put you flows and subflows in the lib/flows directory
3. Put your JavaScript files in lib/functions directory
3. Navigate to your Node-RED user directory (ie. ~/.node-red)
4. `npm install YourGitHubAccount/node-red-lib-installer`
5. Start Node-RED.
6. Flows should be available in the import menu of Node-RED
