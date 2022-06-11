
/* 
This is the main JavaScript file that serves as the "framework" for the "website".
For each specific link this code generates a html file, that manipulates the "app.html", which serves as the 
boilerplate html file, where we can inject html code into, to change the look of the "app.html" site.
This comes in handy, as for all our sites we need a Navbar and a Footer and only the "main" body between these headers 
and footers needs to be changed. That's why it's easy to just manipulate the content in the "content" div in the main
html file.
*/


/**
 * TODO:
 * transfer all css into seperate files, so that for each url there is a specific css file that can be loaded in
 * that styles the site
 */


const content = document.getElementById("content")

//renders the landing page
function landing() {

  //first check if user is logged in when visiting "/". if he isnt then render the landing page
  //if he is, render a "/home" page, where a user dashboard will show up or something
  //if user not logged in

  //setting the background for active navbar title
  let title = document.getElementById("nav-home")
  title.classList.add("active")

  //deletes the "login" navbar item, because the "get started" button works the same way and is meant to be used
  let log_title = document.getElementById("nav-login")
  log_title.remove()

  //But to keep the grid structure of the navbar we instead have to add in an element, which is the same size
  //as the login title
  const placeholder = document.createElement("div")
  placeholder.style.gridColumn = "4 / span 6"
  const navbar = document.getElementById("navbar")
  navbar.appendChild(placeholder)

  //adds in another stylesheet specifically created for the landings page
  let style = document.getElementById("style")
  style.setAttribute("href", "src/styles/landing.css")
  
  //adds in the font-awesome icons
  const font_awesome = document.createElement("link")
  font_awesome.setAttribute("rel", "stylesheet")
  font_awesome.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
  content.appendChild(font_awesome)
  
  //this is the content to be displayed in the html file when "/" is visited
  const index_page = document.createElement("div")
  index_page.innerHTML = `
  <header class="container algo-light-blue center" style="padding:128px 16px;transform: skewY(-11deg);z-index: -1;margin-top: 5em;">
  
    <h1 class="margin xxxxlarge">algoLink</h1>

    <p class="xlarge">Making AI accessible</p>

    <a href="/signup"><button id="getstarted" class="button algo-blue largepadding large margin-top">Get Started <i class="fa fa-angle-double-right"></i></button></a>

  </header>
  <!-- First Text / Introduction-like -->
  <div class="row-padding top-bottom64 container" style="margin-top: 10em;margin-bottom: 5em">
    <div class="content">
      <div class="twothird-width">
        <h1><b>What is algoLink?</b></h1>
        <h5 class="padding32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
        <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="third-width center">
      <!-- The Database Icon -->
      <i class="fa fa-database top-bottom64 algo-blue-text" style="font-size: 200px"></i>
      </div>
    </div>
  </div>
  <!-- Second Text / Instruction-like -->
  <div class="row-padding algo-pale-blue top-bottom64 container">
    <div class="content">
      <div class="third-width center">
        <!-- The server Icon -->
        <i class="fa fa-server top-bottom64 algo-blue-text margin-right" style="font-size: 200px"></i>
      </div>
      <div class="twothird-width">
        <h1><b>How to use algoLink?</b></h1>
        <h5 class="padding32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
        <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  <!-- Imprint -->
  <div class="container black center opacity top-bottom64">
    <h1 class="margin xlarge">Imprint</h1>
    <p style="font-family: Montserrat">Copyright: Maxwell Leu CEO</p>
  </div>
  <!-- Contacts -->
  <footer class="container top-bottom64 center opacity">  
    <div class="xlarge padding32">
      <a href="#"><i class="fa fa-facebook-official opacity-hover algo-grey-blue-text"></i></a>
      <a href="#"><i class="fa fa-instagram opacity-hover algo-grey-blue-text"></i></a>
      <a href="#"><i class="fa fa-twitter opacity-hover algo-grey-blue-text"></i></a>
      <a href="#"><i class="fa fa-linkedin opacity-hover algo-grey-blue-text"></i></a>
    </div>
  </footer>
  `
  content.appendChild(index_page)

  //creating elements for the sticky navbar
  let _navbar = document.getElementById("navbar");
  let get_started = document.createElement("a");
  get_started.classList.add("navi")
  get_started.setAttribute("href", "/signup")
  get_started.setAttribute("id", "nav-login")
  let gs_div = document.createElement("div")
  gs_div.innerText = "Get started >>"
  get_started.appendChild(gs_div)

  //setting an arrow function for the scroll-event onpage
  window.onscroll = () => sticky_nav()

  //the function executed on scroll
  function sticky_nav() {
    
    //if the page is moved just slightly do this
    if (window.pageYOffset >= 1) {
    
      _navbar.removeChild(placeholder)
      _navbar.classList.add("sticky")
      _navbar.style.backgroundColor = "#223D71"
      _navbar.style.zIndex = "10"
      _navbar.appendChild(get_started)
      
    } else { //if page is scrolled to the top then make the normal navbar
    
      _navbar.classList.remove("sticky")
      _navbar.removeChild(get_started)
      _navbar.appendChild(placeholder)
    
    }
  }

  /**
   * TODO: navbar without "get started" until the "get started" text in the header is not visible anymore.
   * So if the "get started" text disappears, a button "get started" gets added to the navbar.
   */

  //else if user logged in -> redirect to /home
  //home()

}

//will be called when the user is already logged in and will display a user dashboard
function home() {
  //IMPORTANT: change the href for the a element in app.html from "/" to "/home"
  //code: 
  /**
   * ->
   * const link = document.getElementById("nav-home")
   * link.setAttribute("href", "/home")
   */
}

//will be called when the user is visiting /documents
//shows all documents uploaded and the specific analysis of 
//a document
function documents() {

  //setting the background for the navbar title of the page
  let title = document.getElementById("nav-docs")
  title.classList.add("active")

  const content = document.getElementById("content")
  let page_content = document.createElement("div")
  let text = document.createElement("h1")
  text.innerText = "Documents"
  page_content.appendChild(text)
  content.appendChild(page_content)

}

//will be called when /profile is visited
//shows a dashboard of projects and plans subscripted to
function profile() {

  //setting the background for the navbar title of the page
  let title = document.getElementById("nav-profile")
  title.classList.add("active")

  const contant = document.getElementById("content")
  let page_content = document.createElement("div")
  let text = document.createElement("h1")
  text.innerText = "Profile"
  page_content.appendChild(text)
  content.appendChild(page_content)

}

//renders the login page
function login_form() {
    
  let title = document.getElementById("nav-login")
  title.classList.add("active")

  //this is the content displayed in the html file when "/login" is visited
  const form_div = document.createElement("div")
  form_div.innerHTML = `
    <style>
    .content {
      text-align: center;
      background-color: #c9ddff;
      border: 2px solid #333;
      border-radius: 1rem;
      height: 135px;
      box-shadow: 0px 0px 45px -6px rgba(0,0,0,0.4);
      padding: .5em;
      margin-left: 25%;
      margin-right: 25%;
    }
    form {
      display: grid;
      text-align: center;
    }
    .form-in-name {
      grid-column: 1;
      text-align: right;
      padding: .25em;
    }
    .form-in-mail {
      grid-column: 1;
      text-align: right;
      padding: .25em;
    }
    .form-input {
      grid-column: 2;
      background-color: #f6f6f6;
      border: none;
    }
    .form-input:focus {
      border: none;
      outline: none !important;
    }
    .spacer {
      height: .2em;
    }
    .submit-btn {
      grid-column: 1 / span 2;
      border: 1px solid #333;
      border-radius: 2rem;
      cursor: pointer;
      background-color: #223D71;
      color: #e4e4e4;
      padding: .5em;
      font-size: 1em;
    }
    .submit-btn:hover {
      background-color: #6A81AC;
      box-shadow: 7px 5px 15px -5px rgba(0,0,0,0.56);
    }
  </style>
  <h1>Login</h1>
  <div class="content">
    <form action="/handleform" method="post" style="padding: .5em;">
      <label class="form-in-mail" for="email">E-Mail</label>
      <input class="form-input" type="email" id="email" name="email" placeholder="Your Email"/>
      <br/>
      <div class="spacer"></div>
      <label class="form-in-name" for="password">Password</label> 
      <input class="form-input" type="password" id="password" name="password"/>
      <br/>
      <div class="spacer"></div>
      <input class="submit-btn" type="submit" value="Login" style="font-family: Montserrat; font-weight: bold;">
    </form>
  </div>
  <div>
    <p>Don't have an account? <a href="/signup" style="text-decoration: underline blue; color: blue;">Sign up here</a>
  </div>
  `
  content.appendChild(form_div)

}

//TODO:
//will be called when the user isn't logged in
//also when a user tries to visit /profile or /documents
// -------------------------------------------------------------- //
//will be called when the button "get started" on the homepage
//is clicked
function signup_form() {

  let title = document.getElementById("nav-login")
  title.innerText = "Sign Up"
  title.setAttribute("href", "/signup")
  title.classList.add("active")
  
  let signup_form = document.createElement("div")
  
  /**
   * TODO: set size of signup form based on device viewport width.
   * In fullscreen view the form is stretched horizontally, needs fix.
   * TODO: confirmation-password is fetched when password-value is called
   * in the express server.
   * So the password you write into the "Password" field is ignored
   * and only the password in the confirmation field is fetched.
   */
  signup_form.innerHTML = `
  <style>
    .content {
      text-align: center;
      background-color: #c9ddff;
      border: 2px solid #333;
      border-radius: 1rem;
      height: 275px;
      box-shadow: 0px 0px 45px -6px rgba(0,0,0,0.4);
      padding: .5em;
      margin-left: 25%;
      margin-right: 25%;
    }
    form {
      display: grid;
      text-align: center;
    }
    .form-in-name {
      grid-column: 1;
      text-align: right;
      padding: .25em;
    }
    .form-in-mail {
      grid-column: 1;
      text-align: right;
      padding: .25em;
    }
    .form-input {
      grid-column: 2;
      background-color: #f6f6f6;
      border: none;
    }
    .form-input:focus {
      border: none;
      outline: none !important;
    }
    .spacer {
      height: .2em;
    }
    .submit-btn {
      grid-column: 1 / span 2;
      border: 1px solid #333;
      border-radius: 2rem;
      cursor: pointer;
      background-color: #223D71;
      color: #e4e4e4;
      padding: .5em;
      font-size: 1em;
    }
    .submit-btn:hover {
      background-color: #6A81AC;
      box-shadow: 7px 5px 15px -5px rgba(0,0,0,0.56);
    }
  </style>
  <h1>Sign Up</h1>
  <div class="content">
    <form action="/handleform" method="post" style="padding: .5em;">
      <label class="form-in-name" for="name">Name</label>
      <input class="form-input" type="text" id="name" name="name" placeholder="First Name"/>
      <br/>
      <div class="spacer"></div>
      <label class="form-in-name" for="lastname">Last Name</label>
      <input class="form-input" type="text" id="lastname" name="lastname" placeholder="Last Name"/>
      <br/>
      <div class="spacer"></div>
      <label class="form-in-mail" for="email">E-Mail</label>
      <input class="form-input" type="email" id="email" name="email" placeholder="Your Email"/>
      <br/>
      <div class="spacer"></div>
      <label class="form-in-name" for="confirm-password">Password</label> 
      <input class="form-input" type="password" id="confirm-password" name="confirm-password"/>
      <br/>
      <div class="spacer"></div>
      <label class="form-in-name" for="password">Confirm Password</label>
      <input class="form-input" type="password" id="password" name="password" />
      <br/>
      <div class="spacer"></div>
      <input class="submit-btn" type="submit" value="Sign Up" style="font-family: Montserrat; font-weight: bold;">
    </form>
  </div>
  <div>
    <p>Already have an account? <a href="/login" style="text-decoration: underline blue; color: blue;">Login here</a></p>
  </div>
  `

  content.appendChild(signup_form)

}

// function home() {}

//checks the uri for path and renders the html based on the page visited i.e. edits the boilerplate html code in "app.html"
if(window.location.pathname === "/") {                  //pathname would be something like "www.domain.com/" so the landing page
  landing()
} 
else if(window.location.pathname === "/login") {        //pathname would be something like "www.domain.com/login" so the login page
  login_form()
}
else if(window.location.pathname === "/documents") {    //pathname would be something like "www.domain.com/documents" so the documents page
  documents()
}
else if(window.location.pathname === "/profile") {      //pathname would be something like "www.domain.com/profile" so the profile page
  profile()
}
else if(window.location.pathname === "/signup") {
  signup_form()
}

/**
 * the route for the user dashboard; the redirected route for users that are already logged in 
 * else if(window.location.pathname === "/home") {
 *  home()
 * }
 */