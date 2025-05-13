import {Navigate} from "react-router-dom";

function PrivateRoute({children}){
    const token = localStorage.getItem("token")

    return token ? children : <Navigate to = "/" />
}

export default PrivateRoute

//If token exists in localStorage, show the protected page
//If token does NOT exist, Redirect to login



//Concept
// What Happens After Login?
// Even though you’re logged in right now, what happens when:

// You refresh the page 🔄?

// You visit a link directly like http://yourapp.com/transaction-history?

// You open the app again tomorrow?

// Your login form is gone, but…

// 🔐 Your token is still in localStorage, and that’s what we use to keep you logged in!

// 💡 So What’s the Role of Private Route?
// The Private Route acts like a gatekeeper on every page after login:

// It checks: "Does this person still have the token?"

// If yes → let them visit the private page.

// If no → send them back to the login page.

// 🚪 Without Private Routes?
// If you don’t use a Private Route, then:

// Anyone can type the URL of protected pages.

// Even without logging in, they’ll see those pages.

// 🚨 That’s a big security problem.


// 🧩 Analogy
// Logging in is like getting a stamp on your hand at an amusement park 🎡.

// But each ride (private page) still checks:

// “Do you have the stamp?” before letting you in.