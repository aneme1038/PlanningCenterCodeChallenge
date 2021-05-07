# Planning Center Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and created by Aaron T Neme for the purposes of completing a coding challenge sent by Planning Center. All code besides that created and bootstrapped with Create React App is Aaron's.

## Screen it Screenshot
![alt text](https://i.imgur.com/Epsig6H.png)

## Coding Challenge Description

The challenge started off a bit slow and picked up the pace. I was able to complete nearly all functionality and got everything as closely and accurately as I could, barring the star ratings. I could not quite get the exact icon unfortunately from font-awesome or another website so I switched to a simpler format in html symbol code and then used a bit of html and css to examples to dangle up a value system I could pull from.

The next step in the process was getting the movies to be added and displayed. This took a bit of time of styling and testing but eventually I got it to display somewhat neatly and almost to point.

I then completed roughly an MVP version of the coding challenge. I then started to thinking about scalability and went to add delete button, edit button, and an api call to the OMDB API. With this I played around with alerts, confirms, modals, etc. to try and find a user design preference but ultimately in the end I was really left with the console log. I initially tried a modal display that would ask the user if the movie they added was correct (based on the OMDB api call results) and would give them the movie information based on passing off the movie Title they entered. I added an error callback in case.

But I then began struggling with getting the boolean values to be correctly read by my returns. I was passing my booleans after the api call and was getting successful console logging of the value but it would still trigger adding the movie anyways if the value was false. So I was at that moment unsure of how to proceed beyond switching to a different approach altogether. This approach was using a confirm dialog with the movie information to at least kind of "showcase" where my head was at in taking the user on confirming their selection and only upon confirmation THEN adding the movie to the list of added movies, otherwise it would not add it and reset the form fields.


The other hurdle I was dealing with was attempting to get proper deleting and editing of the react state. This took a bit of playing around with. Altogether I was moving back and forth between different issues as I focused on some for a couple hours at a time and came up with some viable solutions but when it came to testing was getting compilation errors amongst others. 

In the end, I may not have got the Edit Button, Delete button, and Show Movie Info buttons to work, but it shows you what I was thinking about and working towards adding for this coding challenge. All in all, I'm somewhat proud of what I was able to accomplish in the 12 hours I was coding with a small 1 hour break in the middle.

## API Request Max Count
The total amount of requests on my public api key that I can use is 1000. Please use those requests at your discretion within a 24 hour period.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
