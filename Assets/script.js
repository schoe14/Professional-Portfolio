init();
$.backstretch("Assets/images/mainBackground.png");

$(document).ready(function () {
    $('.sidenav').sidenav();

    if (PDFObject.supportsPDFs) {
        console.log("Yay, this browser supports inline PDFs.");
        PDFObject.embed("Assets/resume/Seohui-Choe.pdf", "#resume-holder");
        $("#resume-holder").css("height", "33rem");
        $("#resume-holder").css("border", "1rem solid rgb(107, 119, 141, 0.2)");
    } else {
        console.log("Boo, inline PDFs are not supported by this browser");
        $("#resume-holder").html(/*html*/`
        <p>Inline PDFs are not supported by this device. Click the link below.</p>
        <a href="Assets/resume/Seohui-Choe.pdf" target="blank" style="color: #263859; font-weight: bold">Seohui's Resume <i class="fas fa-download"></i></a>
        `);
        $("#resume").css("margin-bottom", "40px");
    }

    $(".scrollLink").click(function (e) {
        e.preventDefault();
        let position = $($(this).attr("href")).offset().top - 180;

        $("body, html").animate({
            scrollTop: position
        }, 500);
    });
});

function init() {
    let containerMain = $(".main");
    containerMain.html(/*html*/`
        <section class="container" id="about-me">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 firstCol">
                    <p id="p-header">About Me<div class="divider"></div></p>
                    <div>Hello. I'm <b>Seohui Choe</b> and I am a Full Stack Developer based in Richmond, VA. I enjoy
                        creating <b>clean, technical, user-friendly</b> web applications.</div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 secondCol">
                    <p id="p-header">Technical Skills<div class="divider"></div></p>
                    <div class="skillsList">
                        <ul>
                            <li><b>Languages:</b> Java, JavaScript/jQuery, HTML, CSS</li>
                            <li><b>CSS Framework:</b> Bootstrap, Materialize</li>
                            <li><b>Browser Based Technologies:</b> Responsive Design, Handlebars, Local Storage</li>
                            <li><b>Databases:</b> MongoDB, MySQL</li>
                            <li><b>Deployment:</b> Heroku, Git</li>
                            <li><b>Server-Side Deployment:</b> Express.js, Node.js, User Authentication</li>
                            <li><b>Other Skills:</b> Analytical Skills, Problem Solving, Time Management, Technical Mindset, Teamwork</li>
                            <li><b><i class="fas fa-heart" style="color: red"></i></b> And <u>life-long dedication to learning!</u>
                            <li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="icons">
                <span><i class="fab fa-js-square"></i></span>
                <span><i class="fab fa-java"></i></span>
                <span><i class="fab fa-css3-alt"></i></span>
                <span><i class="fab fa-html5"></i></span>
                <span><i class="fab fa-bootstrap"></i></span>
                <span><i class="fab fa-node-js"></i></span>
            </div>

             <div id="resume"> 
                <p id="p-header">Resume<div class="divider"></div></p>
                <div id="resume-holder">
                </div>
             </div>
        </section>

        <section class="container" id="good-cuisine">
            <p id="p-header">Good-Cuisine<div class="divider"></div></p>
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="Assets/images/good-cuisine-screenshot.JPG">
                </div>
                <div class="card-action">
                    <a href="https://good-cuisine.herokuapp.com/" target="blank">Live link</a>
                    <a href="https://github.com/schoe14/Good-Cuisine" target="blank"><i class="fab fa-github"></i>
                        Good-Cuisine</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <p style="font-size: larger;"> 
                        We all have preferences on foods or even dietary restrictions, so we decided to make an app that makes it easier to filter recipes by these parameters and save recipes in one location that is easily accessible.
                    </p>
                </div>
            </div>
        </section>

        <section class="container" id="pack-it">
            <p id="p-header">Pack-It<div class="divider"></div></p>
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="Assets/images/pack-it-screenshot.JPG">
                </div>
                <div class="card-action">
                    <a href="https://jonesec2.github.io/Pack-It/" target="blank">Live link</a>
                    <a href="https://github.com/jonesec2/Pack-It" target="blank"><i class="fab fa-github"></i>
                        Pack-It</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <p style="font-size: larger;"> 
                        Don't have anxiety😟 about packing for your vacation ever again.<br>
                        Know the weather of your travel destination and let our Pack It logic tell you what kind of clothes you'll need during your trip😃. <br>
                        With Pack It, it is like hiring your personal stylist!🎉 <br>
                    </p>
                </div>
            </div>
        </section>

        <section class="container" id="burger">
            <p id="p-header">Eat-Da-Burger!<div class="divider"></div></p>
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="Assets/images/eat-da-burger-screenshot.JPG">
                </div>
                <div class="card-action">
                    <a href="https://warm-savannah-43585.herokuapp.com/" target="blank">Live link</a>
                    <a id="burger-github" href="https://github.com/schoe14/Burger" target="blank"><i class="fab fa-github"></i>
                    Eat-Da-Burger!</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <p style="font-size: larger;">
                        Add your favorite burger <i class="fas fa-hamburger"></i> and devour it! <br>
                        Burgers that have been eaten go to the right side with an option to eat again. <br>
                        Burgers that are available to eat stay on the left side with options to devour it or delete it.
                    </p>
                </div>
            </div>
        </section>

        <section class="container" id="weather-dashboard">
            <p id="p-header">Weather-Dashboard<div class="divider"></div></p>
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="Assets/images/weather-dashboard-screenshot.JPG">
                </div>
                <div class="card-action">
                    <a href="https://schoe14.github.io/Weather-Dashboard/" target="blank">Live link</a>
                    <a id="weather-github" href="https://github.com/schoe14/Weather-Dashboard" target="blank"><i class="fab fa-github"></i>
                        Weather-Dashboard</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <p style="font-size: larger;">
                        🌞 Accurate weather predictions are important for planning our day-to-day activities. <br>
                        🚜 Farmers need information to help them plan for the planting and harvesting of their crops. <br>
                        ✈️ Airlines need to know about local weather conditions in order to schedule flights.
                    </p>
                </div>
            </div>
        </section>

        <section class="container" id="day-planner">
            <p id="p-header">Day-Planner<div class="divider"></div></p>
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="Assets/images/day-planner-screenshot.JPG">
                </div>
                <div class="card-action">
                    <a href="https://schoe14.github.io/Day-Planner/" target="blank">Live link</a>
                    <a href="https://github.com/schoe14/Day-Planner" target="blank"><i class="fab fa-github"></i>
                        Day-Planner</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <p style="font-size: larger;">
                        Planning helps you to be prepared for obstacles💥 because part of the planning process is creating a contingency pan for unexpected problems in the fast-paced business environment.
                    </p>
                </div>
            </div>
        </section>
        `)
}

