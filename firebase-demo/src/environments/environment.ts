// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyC7-FP-5epziUWDrKjekxB1KJ8Z8q3pyvQ",
    authDomain: "fir-demo-d9b15.firebaseapp.com",
    databaseURL: "https://fir-demo-d9b15.firebaseio.com",
    projectId: "fir-demo-d9b15",
    storageBucket: "fir-demo-d9b15.appspot.com",
    messagingSenderId: "355832348376"
  }
};
