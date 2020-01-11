init();

$(document).ready(function () {
    $('.sidenav').sidenav();

    window_size = $(window).height();
    console.log(window_size)

    $('#about-me').height(window_size);

    // $("a.scrollLink").on('click', function (event) {
    //     if (this.hash !== "") {
    //         // Prevent default anchor click behavior
    //         event.preventDefault();

    //         // Store hash
    //         var hash = this.hash;

    //         // Using jQuery's animate() method to add smooth page scroll
    //         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top
    //         }, 800, function () {

    //             // Add hash (#) to URL when done scrolling (default click behavior)
    //             window.location.hash = hash;
    //         });
    //     } // End if
    // });

    // var position = $($(this).attr("data-target")).position().top + $('data-target').scrollTop()
    // $('.html,body').animate({ scrollTop: position })

    $("a.scrollLink").on("click", function (event) {
        console.log($(this).attr("data-target"));
        let targetSection = $(this).attr("data-target");
        event.preventDefault();

        $('html,body').animate({ scrollTop: $(targetSection).offset().top + $(targetSection).scrollTop() }, 500);
        console.log($(targetSection).offset().top + $(targetSection).scrollTop())
    });
});

function init() {
    let containerMain = $(".main");
    containerMain.html(/*html*/`
        <section class="container" id="about-me">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 firstCol">
                    <p id="p-header">About Me<div class="divider"></div></p>
                    <div>Hello. I'm Seohui Choe and I am a Full Stack Developer based in Richmond, VA. I enjoy
                        building clean, technical, user-friendly web applications.</div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 secondCol">
                    <p id="p-header">Technical Skills<div class="divider"></div></p>
                    <div class="skillsList">
                        <ul>
                            <li><b>Languages:</b> Java, JavaScript/jQuery, HTML, CSS</li>
                            <li><b>CSS Framework:</b> Bootstrap, Materialize</li>
                            <li><b>Other Skills:</b> Analytical Skills, Problem Solving, Time Management, Technical Mindset, Teamwork</li>
                            <li><b><i class="fas fa-heart"></i></b> And <u>life-long dedication to learning!</u>
                            <li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="icons">
                <span><i class="fab fa-js-square"></i></span>
                <span><i class="fab fa-css3-alt"></i></span>
                <span><i class="fab fa-html5"></i></span>
                <span><i class="fab fa-java"></i></span>
                <span><i class="fab fa-node-js"></i></span>
            </div>

             <div id="resume"> 
             <p id="p-header">Resume<div class="divider"></div></p>
                <div></div>
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
                        Don't have anxiety about packing for your vacation ever again. Know the weather of your travel
                        destination and let our Pack It logic tell you what kind of clothes you'll need during your
                        trip. Pack It is carefully designed to generate clothing options for each day depending on the
                        weather conditions of your travel destination. If it is raining at your destination, it will
                        make sure to suggest rain items such as an umbrella. With Pack It, it is like hiring your
                        personal stylist! Select the clothes you want from our suggestions, customize your own suitcase,
                        and get updates on the weather at any time. You can even find Amazon Prime items if you only
                        have few days left to leave.
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
                        🌞Accurate weather predictions are important for planning our day-to-day activities. 🚜 Farmers need information to help them plan for the planting and harvesting of their crops. ✈️ Airlines need to know about local weather conditions in order to schedule flights.
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
                        Planning helps you to be prepared for obstacles 💥 because part of the planning process is creating a contingency pan for unexpected problems in the fast-paced business environment 🏢
                    </p>
                </div>
            </div>
        </section>
        `)

}

