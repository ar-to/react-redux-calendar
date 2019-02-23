# React-Redux Calendar

## Releases

### v0.1.1
#### DONE
- CSV export: 
  - a download button
  - warning for users that they have not downloaded the .csv file since the last change.
- Highlight Today's date/day so its easy to find
- Bugs Fixed: 
  - color selection is not per reminder within the same day but the color changes all reminders

### v0.1.0
#### DONE:
- uses react and redux
- max char 30 for reminders
- color picker feature
- calendar 
  - can move to other months
  - weekdays, weeks, days displaying correctly.
  - added empty days to show start of month correctly
  - bug: moving back to dec and forward again to jan jumps the year from 2019 to 2020 then back to 2019 again when moved to feb.
- reminder feature. This is most likely caused by the way I'm handling the changing of the month data via momentjs.
  - displayed per day
  - multiple reminders per day are attacked under each other
  - only show for the selected month
  - CRUD operations working
- JSON
  - kept the json output on the left side of the app to help show the redux data being used. I like looking at data to check my work so I kept it in.

## TODO:
- BUGS:
  - bug: moving back to dec and forward again to jan jumps the year from 2019 to 2020 then back to 2019 again when moved to feb. Seem like the last year actual fowards to the current year and makes it confusing. 
- calendar:
  - UI updates 
- change date within the reminder 
  - reason: I think this takes more time than what I plan to spend on this project right now. 
    Mainly because I see it as a dropdown, drag and drop or calendar widget of some sorts and 
    I need to plan it out more to work correctly with my current state management.
- refactoring:
  - reminders feature to make it more elegant
  - to handle component state and redux state with less code and possibly improve performance
  and find potential antipatterns within react or redux.
- Redux State
  - add reminders within the month_data instead of separate. This may require a refactor.
- testing would be nice
- CSV export
  - reminders redux state should have formatted time, color chosen per reminder
- CSV import
  - allow importing of reminders from a spreadsheet
- consider saving reminders to localstorage so on page reload data is not lost during a session. This avoid the need of a database and keeps data local to users/vistors

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
