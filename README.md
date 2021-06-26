<!--TODO:
- package json in client (DONE: WILL)
- where to put invoice form
- figure out back end server and authentication
- create components
- connect components + render in App

PAGES:
  - login
    - admin dashboard
        **weather - date and time
      - job assignment page (when job is clicked - able to edit)
        **functionality:
          *create jobs
          *edit jobs
          *approve as complete

    - employee dashboard
        **weather - date and time
      - specific job page when component is clicked - able to edit)
        **functionality:
          *clock in/out
          *check tasks off list
          *add tasks/make notes
          *fill out invoice + mark as complete/{send admin notication}

- auth util: declare logged in user sessionid/user is + type (admin or employee)
- import to evey page
- implement turnary operator / if else to the dashboard
  -mini components for emp dash vs employee dash

CURRENT ASSIGNMENTS:

- Will:
  *Password Auth - using passport npm package[done]
  *login functionality [by tues]

- Corrine:
  * emp and admin dash with if/else functionality
  * styling

- Kathryn:
  * job detail page
  * put address + button in jobs list - link to job details page
  * job assignment page
  * weather and time

- Brandon:
  * react router [done]
  * seed data [done]
  * database seeded [done]
  * PWA functionality

- Michael:
  * database up and running [done]
  * invoice - employee fill out and pdf download [by tues]


- Later:
  - define company we're making this for
  - create an acct functionality
  - images and styling
  - offline functionality [Brandon]
  - new title of proj
  - weather and time of day

- FINAL PRESENTATION:
  - login as admin
  - create job
  - assign job
  - logout
  - login as employee
  - complete job
  - fill out invoice
  - send to admin
  - logout employee
  - login admin
  - approve completed job
  - download completed invoice as pdf + send out to client
  *** PWA

-->



# Fleet-Sheets
## Progressive Web Application (Mobile/Tablet First)

### Extra Information/Resources
* [Introduction to PWA's](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction)

### User Story
    AS AN ADMINISTRATOR
    I WANT to be able to
    - create invoices, that employees can easily fill out
    - receive job information and create jobs
    - assign jobs to employees
    - monitor employee Job progress
    SO THAT I can efficently operate and manage my small / medium sized business's fleet employees.


    AS AN EMPLOYEE
    I WANT to be able to
    - view assigned jobs for the day
    - access jobsite information (i.e. address, contact information, notes, etc)
    - complete related jobsite forms/invoices
    - mark jobs completed
    - have the ability to continue to work while remote and offline
    SO THAT I can continue to complete my job expectations in an easy and organized fashion.

### Technology To Use (MERN Stack)
* MongoDb
* Express
* React (w/ hooks)
* Node.Js
* Tailwind CSS &&|| react-material-ui (or something new)

### Desired PWA Functionalities
* Available offline
* Downloadable to android + ios homescreen's
* Device camera functionality / implementation
* Fast load speeds
* Mobile app look/feel
* Push Notifications (mobile + desktop)

    "seed": "node scripts/seedDB.js",

      "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
