# UI Dev Tech Task - Client

## Implementation

* React Client implemented with React 16, Socket.io for real-time query to the Node Server, Redux for state management, React Router Dom for routing and Styled Components for styling.
* Socket.io is used to consume real-time data.

### Notes

* When the Client boots, it calls to `/trainsInfo` ruote from Node Server to get trains info. In the mean time it subscribes to `trainsInfo` socket.io endpoint to get new data
* When the user navigates to a train details page, the app calls `/trainDetails/:serviceIdentifier` ruote from Node Server to get train details. In the meantime it subscribes to `trainDetails` socket.io endpoint to get new data. 
* When data arrives, from trainsInfo or trainDetails, the app state is dispatched with Redux.
* If there is an error during the first call, the app displays an Error icon. The error icon disappears atuomatically if the Node Server emits fresh and valid data, no need to refresh.

## Available Scripts

To install dependencies:

### `yarn`

To run the project:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
