# react_dashboard_covid
Covid tracker Dashboard build using react


<h1>Screenshots REACT COVID TRACKER Dashboard</h1>
<img src="Capture1.PNG" width="80%">
<img src="Capture2.PNG" width="80%">

<img src="/public/Blank Diagram.png" width="80%">


<h1>Installation and Setup Instructions</h1>

<h4>Installation:</h4>

<p>npm install</p>

<h4>To Run Test Suite:</h4>

<p>npm test</p>

<h4>To Start Server:</h4>

<p>npm start</p>

<h4>To Visit App:</h4>

<p>localhost:3000/</p>


<h1>Folder Structure of src</h1>
<p white-space: nowrap>
src
    |   App.css
    |   App.js
    |   firebase.js
    |   index.css
    |   index.js
    |   logo.svg
    |   routes.js
    |   sagas.js
    |   serviceWorker.js
    |   setupTests.js
    |   store.js
    |   
    +---components
    |       GlobalStyles.js
    |       Logo.js
    |       Page.js
    |       
    +---constants
    |       actionTypes.js
    |       
    +---importdata_scripts
    |       TimeSeriesDat.js
    |       
    +---layouts
    |   +---DashboardLayout
    |   |   |   index.js
    |   |   |   TopBar.js
    |   |   |   
    |   |   \---NavBar
    |   |           index.js
    |   |           NavItem.js
    |   |           
    |   \---MainLayout
    |           index.js
    |           TopBar.js
    |           
    +---reducers
    |       login.js
    |       rootReducer.js
    |       signup.js
    |       timeSeriesData.js
    |       userData.js
    |       
    +---test
    |   +---integration
    |   |       loginflow.test.js
    |   |       signupflow.test.js
    |   |       
    |   \---unit
    |       \---reducers
    |               login.test.js
    |               signup.test.js
    |               timeSeriesData.test.js
    |               userData.test.js
    |               
    +---theme
    |       index.js
    |       shadows.js
    |       typography.js
    |       
    \---views
        +---account
        |   \---AccountView
        |           index.js
        |           Profile.js
        |           ProfileDetails.js
        |           
        +---auth
        |       LoginView.js
        |       RegisterView.js
        |       
        +---errors
        |       NotFoundView.js
        |       
        +---reports
        |   \---DashboardView
        |           CompletePicture.js
        |           index.js
        |           TotalActive.js
        |           TotalConfirmed.js
        |           TotalDeceased.js
        |           TotalRecovered.js
        |           Trends.js
        |           
        \---settings
            \---SettingsView
                    index.js
                    Notifications.js
                    Password.js
    </p>
