https://ticketsatwork.com/tickets/?at_preview_token=dJdLXJ8KVE%2B3bJ4MczmFcdG8x9DDUJ4jRJcNqEzy6eA%3D&at_preview_index=1_2&at_preview_listed_activities_only=false


jQuery(document).ready(function() {
    // Grab Dynamically Loaded Content, Clone, Create a Unique Element With ID & Hide the Cloned Data
    jQuery(".tabwidget-content:nth-child(1) > span").clone().attr("id", "tab1__saved").appendTo("body").hide();
    jQuery(".tabwidget-content:nth-child(2) > span").clone().attr("id", "tab2__saved").appendTo("body").hide();
    jQuery(".tabwidget-content:nth-child(3) > span").clone().attr("id", "tab3__saved").appendTo("body").hide();


    // Select Featured Hotel Info, Clone, Create a Unique Element With ID & Hide the Cloned Data
    jQuery(".info-left > h1 > span").clone().attr("id", "stickyTitle__saved").appendTo("body").hide();
    jQuery(".star-rating").clone().attr("id", "stickyRating__saved").appendTo("body").hide();
    jQuery(".info-right > div > p:nth-child(2)").clone().attr("id", "stickyPrice__saved").appendTo("body").hide();

    // Grab Dynamically Loaded Content & Replace with Dummy Content
    jQuery("#hotel-details > div:nth-child(2)").html("<div class='lower-container' id='sticky-tabs'> <div id='sticky-hotel-info'> <div class='hidden-until-srcoll' id='hide-until-scroll'> <div class='float-left'> <h1 class='hover-info-title-h1'> <strong id='injected-sticky-title'>Dummy Text Dummy Text</strong> </h1> </div> <div class='star-rating sticky-rating-positioning' id='injected-sticky-rating'> <div class='star-rating-score-grey star-rating-score-30' title='3 of 5 stars'></div> </div> <div class='float-right'> <p class='average-rate'>Avg. Nightly Rate</p> <p id='injected-sticky-price'> <a class='price' href='/tickets/hotels.php?sub=details&amp;id='> <span>$</span>84</a> </p> </div> </div> </div> <div> <ul class='hotel-tab-container'> <a href='#scroll-fix-room-choices'> <li id='rooms'>Room Choices</li> </a> <a href='#scroll-fix-overview'> <li id='overview'>Overview</li> </a> <a href='#scroll-fix-amenity-choices'> <li id='amenities'>Amenities</li> </a> </ul> </div> </div> <div class='lower-container' id='room-choices'> <div class='tabwidget-content-title'> <h1 class='tabwidget-content-title-h1' id='sticky-trigger'> Room Choices </h1> </div> <ul class='tabwidget-body hotel-tab-content-container'> <li class='tabwidget-content' data-id='rooms' style='display: block;'> <span id='injected-content-1'></span> </li> </ul> </div> <div class='lower-container' id='overview-choices'> <div class='tabwidget-content-title'> <h1 class='tabwidget-content-title-h1'> Overview </h1> </div> <ul class='tabwidget-body hotel-tab-content-container'> <li class='tabwidget-content' data-id='overview' style='display: block;'> <span id='injected-content-2'> </span> <div class='hotel-cta-button'> <a href='#scroll-fix-room-choices'>Back to room choices</a> </div> </li> </ul> </div> <div class='lower-container' id='amenity-choices'> <div class='tabwidget-content-title'> <h1 class='tabwidget-content-title-h1'> Amenities </h1> </div> <ul class='tabwidget-body hotel-tab-content-container'> <li class='tabwidget-content' data-id='amenities' style='display: block;'> <span id='injected-content-3'> </span> <div class='hotel-cta-button'> <a href='#scroll-fix-room-choices'>Back to room choices</a> </div> </li> </ul> </div> <div class='bottom-container'> <div> <div><a href='/tickets/hotels.php?sub=search'><i class='fa fa-angle-left'></i> Back to Search Results</a></div> </div> <div> <div><a href='javascript:' class='back-to-top'>Back to Top <i class='fa fa-angle-up'></i></a></div> </div> </div>");

    // Overwrite 'view_room_choices' Id Content Will non-JS Code
    jQuery("#view_room_choices").html("<a class='classybutton' style='padding: 0px 5px !important;font-size: 15px !important;' href='#room-choices'>View Room Choices</a>");

    // Inject Cloned Data And Reveal
    jQuery("#injected-content-1").replaceWith(tab1__saved);
    jQuery("#injected-content-2").replaceWith(tab2__saved);
    jQuery("#injected-content-3").replaceWith(tab3__saved);

    // Inject Anchor Element Into Cloned Data Above 'table-widget-content-title'
    jQuery("<div id='scroll-fix-room-choices' class='sticky-anchor-scroll-fix'></div>").insertBefore("#room-choices > div > h1");
    jQuery("<div id='scroll-fix-overview' class='sticky-anchor-scroll-fix'></div>").insertBefore("#overview-choices > div > h1");
    jQuery("<div id='scroll-fix-amenity-choices' class='sticky-anchor-scroll-fix'></div>").insertBefore("#amenity-choices > div > h1");
        
    // Inject Cloned Featured Property Data Into Sticky
    jQuery("#injected-sticky-title").replaceWith(stickyTitle__saved);
    jQuery("#injected-sticky-rating").replaceWith(stickyRating__saved);
    jQuery("#injected-sticky-price").replaceWith(stickyPrice__saved);

    // Inject Page Style to Head
    jQuery("<style id='TestCSS' type='text/css'></style>").text("#hotel-details .hotel-tab-container { padding-bottom: 20px; padding-top: 0px; overflow: hidden; } #hotel-details .hotel-tab-container li.active span { display: none; } #hotel-details .tabwidget-content-title { background-color: #eceaeb; height: 50px; } #hotel-details .tabwidget-content-title-h1 { font-size: 22px; text-transform: uppercase; padding-top: 18px; padding-left: 18px; } #hotel-details .hover-info-title-h1 { font-size: 24px; margin-top: 18px; } #hotel-details .hotel-tab-container li:hover { background-color: #0066cc; } #hotel-details .hotel-cta-button { font-size: 22px; text-transform: uppercase; background-color: #e87a1e; margin: 0 auto; text-align: center; padding-top: 16px; padding-bottom: 16px; margin-top: 12px; margin-bottom: 40px; width: 300px; } #hotel-details .hotel-cta-button a { text-decoration: none; color: #ffffff; } .sticky { position: fixed; top: 0; left: 0; width: 100%; padding-top: 0px; padding-bottom: 4px; z-index: 100; border-top: 0; background-color: #eceaeb; overflow: hidden; } .sticky-hover-container-positioning { margin: 0 auto; width: 972px; } .float-left { float: left !important; width: 50%; } .float-right { float: right !important; width: 22%; } .hidden-until-srcoll { display: none; } .sticky-rating-positioning { margin-top: 30px; } .sticky-anchor-scroll-fix { display: block; position: absolute; width: 0; height: 0; z-index: 100; left: 0; visibility: hidden; }").appendTo("head");

    // Injected Jquery
    var triggerLocation = jQuery("#sticky-trigger");
    var stickyFloatStyle = jQuery("#sticky-hotel-info");
    var stickyNavTop = jQuery("#sticky-tabs");
    var stickyNav = function() {
        var scrollTop = jQuery(window).scrollTop();
        if (scrollTop > triggerLocation.offset().top) {
            jQuery("#hide-until-scroll").removeClass("hidden-until-srcoll");
            jQuery("#sticky-hotel-info").addClass("sticky-hover-container-positioning");
            jQuery(".hotel-tab-container").addClass("sticky-hover-container-positioning");
            jQuery("#stickyRating__saved > div.star-rating-score-grey").addClass("sticky-rating-positioning");
            jQuery("#sticky-tabs").addClass("sticky");
        } else {
            jQuery("#hide-until-scroll").addClass("hidden-until-srcoll");
            jQuery("#sticky-hotel-info").removeClass("sticky-hover-container-positioning");
            jQuery(".hotel-tab-container").removeClass("sticky-hover-container-positioning");
            jQuery("#stickyRating__saved > div.star-rating-score-grey").removeClass("sticky-rating-positioning");
            jQuery("#sticky-tabs").removeClass("sticky")
        };
    };
    stickyNav();
    jQuery(window).scroll(function() {
        stickyNav();
    });
    jQuery("#rooms").click(function() {
        jQuery(this).addClass("active");
        jQuery("#overview").removeClass("active");
        jQuery("#amenities").removeClass("active");
    });
    jQuery("#overview").click(function() {
        jQuery(this).addClass("active");
        jQuery("#rooms").removeClass("active");
        jQuery("#amenities").removeClass("active");
    });
    jQuery("#amenities").click(function() {
        jQuery(this).addClass("active");
        jQuery("#overview").removeClass("active");
        jQuery("#rooms").removeClass("active");
    });

    var scrollToElement = function($element, paddingTop) {
        window.scroll(0, $element.offset().top - paddingTop);
    };
    var roomChocies = jQuery("#sticky-tabs > div:nth-child(2) > ul > a:nth-child(1)");
    var overview = jQuery("#sticky-tabs > div:nth-child(2) > ul > a:nth-child(2)");
    var amenityChocies = jQuery("#sticky-tabs > div:nth-child(2) > ul > a:nth-child(3)");
    roomChocies.click(function(e) {
        e.preventDefault();
        scrollToElement(jQuery("#scroll-fix-room-choices"), 200);
    });
    overview.click(function(e) {
        e.preventDefault();
        scrollToElement(jQuery("#scroll-fix-overview"), 200);
    });
    amenityChocies.click(function(e) {
        e.preventDefault();
        scrollToElement(jQuery("#scroll-fix-amenity-choices"), 200);
    });

    // Unhide Hidden Cloned Content - Once in Place
    jQuery("#stickyTitle__saved").css("display", "block").css("line-height", "22px");
    jQuery("#stickyRating__saved").css("display", "block").addClass("sticky-rating-positioning");
    jQuery("#stickyPrice__saved").css("display", "block");
    
    jQuery(".tabwidget-content").removeProp("display");
    jQuery(".tabwidget-content").css("display", "block");
    jQuery("#tab1__saved").css("display", "block");
    jQuery("#tab2__saved").css("display", "block");
    jQuery("#tab3__saved").css("display", "flex");
    
});


// Core Jquery
var triggerLocation = jQuery("#sticky-trigger"); var stickyFloatStyle = jQuery("#sticky-hotel-info"); var stickyNavTop = jQuery("#sticky-tabs"); var stickyNav = function() { var scrollTop = jQuery(window).scrollTop(); if (scrollTop > triggerLocation.offset().top) { jQuery("#hide-until-scroll").removeClass("hidden-until-srcoll"); jQuery("#sticky-hotel-info").addClass("sticky-hover-container-positioning"); jQuery(".hotel-tab-container").addClass("sticky-hover-container-positioning"); jQuery("#stickyRating__saved > div.star-rating-score-grey").addClass("sticky-rating-positioning"); jQuery("#sticky-tabs").addClass("sticky"); } else { jQuery("#hide-until-scroll").addClass("hidden-until-srcoll"); jQuery("#sticky-hotel-info").removeClass("sticky-hover-container-positioning"); jQuery(".hotel-tab-container").removeClass("sticky-hover-container-positioning"); jQuery("#stickyRating__saved > div.star-rating-score-grey").removeClass("sticky-rating-positioning"); jQuery("#sticky-tabs").removeClass("sticky") }; }; stickyNav(); jQuery(window).scroll(function() { stickyNav(); }); jQuery("#rooms").click(function() { jQuery(this).addClass("active"); jQuery("#overview").removeClass("active"); jQuery("#amenities").removeClass("active"); }); jQuery("#overview").click(function() { jQuery(this).addClass("active"); jQuery("#rooms").removeClass("active"); jQuery("#amenities").removeClass("active"); }); jQuery("#amenities").click(function() { jQuery(this).addClass("active"); jQuery("#overview").removeClass("active"); jQuery("#rooms").removeClass("active"); });

// HTML
<div class='lower-container' id='sticky-tabs'> <div id='sticky-hotel-info'> <div class='hidden-until-srcoll' id='hide-until-scroll'> <div class='float-left'> <h1 class='hover-info-title-h1'> <strong id='injected-sticky-title'>Dummy Text Dummy Text</strong> </h1> </div> <div class='star-rating sticky-rating-positioning' id='injected-sticky-rating'> <div class='star-rating-score-grey star-rating-score-30' title='3 of 5 stars'></div> </div> <div class='float-right'> <p class='average-rate'>Avg. Nightly Rate</p> <p id='injected-sticky-price'> <a class='price' href='/tickets/hotels.php?sub=details&amp;id='> <span>$</span>84</a> </p> </div> </div> </div> <div> <ul class='hotel-tab-container'> <a href='#scroll-fix-room-choices'> <li id='rooms'>Room Choices</li> </a> <a href='#scroll-fix-overview'> <li id='overview'>Overview</li> </a> <a href='#scroll-fix-amenity-choices'> <li id='amenities'>Amenities</li> </a> </ul> </div> </div> <div class='lower-container' id='room-choices'> <div class='tabwidget-content-title'> <h1 class='tabwidget-content-title-h1' id='sticky-trigger'> Room Choices </h1> </div> <ul class='tabwidget-body hotel-tab-content-container'> <li class='tabwidget-content' data-id='rooms' style='display: block;'> <span id='injected-content-1'></span> </li> </ul> </div> <div class='lower-container' id='overview-choices'> <div class='tabwidget-content-title'> <h1 class='tabwidget-content-title-h1'> Overview </h1> </div> <ul class='tabwidget-body hotel-tab-content-container'> <li class='tabwidget-content' data-id='overview' style='display: block;'> <span id='injected-content-2'> </span> <div class='hotel-cta-button'> <a href='#scroll-fix-room-choices'>Back to room choices</a> </div> </li> </ul> </div> <div class='lower-container' id='amenity-choices'> <div class='tabwidget-content-title'> <h1 class='tabwidget-content-title-h1'> Amenities </h1> </div> <ul class='tabwidget-body hotel-tab-content-container'> <li class='tabwidget-content' data-id='amenities' style='display: block;'> <span id='injected-content-3'> </span> <div class='hotel-cta-button'> <a href='#scroll-fix-room-choices'>Back to room choices</a> </div> </li> </ul> </div> <div class='bottom-container'> <div> <div><a href='/tickets/hotels.php?sub=search'><i class='fa fa-angle-left'></i> Back to Search Results</a></div> </div> <div> <div><a href='javascript:' class='back-to-top'>Back to Top <i class='fa fa-angle-up'></i></a></div> </div> </div>

// CSS
#hotel-details .hotel-tab-container { padding-bottom: 20px; padding-top: 0px; overflow: hidden; } #hotel-details .hotel-tab-container li.active span { display: none; } #hotel-details .tabwidget-content-title { background-color: #eceaeb; height: 50px; } #hotel-details .tabwidget-content-title-h1 { font-size: 22px; text-transform: uppercase; padding-top: 18px; padding-left: 18px; } #hotel-details .hover-info-title-h1 { font-size: 24px; margin-top: 18px; } #hotel-details .hotel-tab-container li:hover { background-color: #0066cc; } #hotel-details .hotel-cta-button { font-size: 22px; text-transform: uppercase; background-color: #e87a1e; margin: 0 auto; text-align: center; padding-top: 16px; padding-bottom: 16px; margin-top: 12px; margin-bottom: 40px; width: 300px; } #hotel-details .hotel-cta-button a { text-decoration: none; color: #ffffff; } .sticky { position: fixed; top: 0; left: 0; width: 100%; padding-top: 0px; padding-bottom: 4px; z-index: 100; border-top: 0; background-color: #eceaeb; overflow: hidden; } .sticky-hover-container-positioning { margin: 0 auto; width: 972px; } .float-left { float: left !important; width: 50%; } .float-right { float: right !important; width: 22%; } .hidden-until-srcoll { display: none; } .sticky-rating-positioning { margin-top: 30px; } .sticky-anchor-scroll-fix { display: block; position: absolute; width: 0; height: 0; z-index: 100; left: 0; visibility: hidden; }

// Button onclick position fix
var scrollToElement = function($element, paddingTop) { window.scroll(0, $element.offset().top - paddingTop); }; var roomChocies = jQuery("#sticky-tabs > div:nth-child(2) > ul > a:nth-child(1)"); var overview = jQuery("#sticky-tabs > div:nth-child(2) > ul > a:nth-child(2)"); var amenityChocies = jQuery("#sticky-tabs > div:nth-child(2) > ul > a:nth-child(3)"); roomChocies.click(function(e) { e.preventDefault(); scrollToElement(jQuery("#scroll-fix-room-choices"), 200); }); overview.click(function(e) { e.preventDefault(); scrollToElement(jQuery("#scroll-fix-overview"), 200); }); amenityChocies.click(function(e) { e.preventDefault(); scrollToElement(jQuery("#scroll-fix-amenity-choices"), 200); });