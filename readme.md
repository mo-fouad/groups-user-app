<h1>Groups-Users Application</h1>
<a href="https://www.codacy.com/manual/mo-fouad/groups-user-app?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mo-fouad/groups-user-app&amp;utm_campaign=Badge_Grade_Dashboard"><img src="https://api.codacy.com/project/badge/Grade/9888c2d761ec4184a3a789de2d9ffb9f?isInternal=true"></a>

it is a group web application, it enables you to add groups & users, 
- you can assign any user to any group.
- you can delete any user.
- you can delete any group if it done not have any users

this web application based on `React , Reduxm , Redux-thunk` it uses `ReactStrap` 
as a ui framework just to build things easier and faster.  

---
### Run the Project

to run the webApplication, Please run the following command in your terminal

`yarn install`, `yarn start`

the Application will server on port 3000, Please Make sure that you dont have any thing running on this port.

the web App built with `react` using webpack.

the application using ES-lint & Prettier

to check Linting for the project run this  `yarn lint:check`,

---

### Testing

the Application uses `Jest` and `@testing-library/react` for unit and integration Testing

to run the unit Testing please run the following command `yarn test`

---

### building

to build a production build of the application, please run the following commands
`yarn clean:build` then `yarn build`
 
you can test the built app using `serve:build`
