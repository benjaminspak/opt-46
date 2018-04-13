<script>
jQuery(document).ready(function() {
jQuery(".tabwidget-content:nth-child(1) > span").clone().attr("id", "tab1__saved").appendTo("body").css({"display": "none"});
jQuery(".tabwidget-content:nth-child(2) > span").clone().attr("id", "tab2__saved").appendTo("body").css({"display": "none"});
jQuery(".tabwidget-content:nth-child(3) > span").clone().attr("id", "tab3__saved").appendTo("body").css({"display": "none"});
jQuery(".info-left > h1 > span").clone().attr("id", "stickyTitle__saved").appendTo("body").css({"display": "none"});
if (jQuery(".star-rating").length > 0) {
jQuery(".star-rating").clone().attr("id", "stickyRating__saved").appendTo("body").css({"display": "none"});
};
jQuery(".info-right > div > p:nth-child(2)").clone().attr("id", "stickyPrice__saved").appendTo("body").css({"display": "none"});
    jQuery("#hotel-details > div:nth-child(2)").html("<div class='lower-container' id='sticky-tabs'>" + 
    "<div id='sticky-hotel-info'>" +
       "<div class='hidden-until-srcoll' id='hide-until-scroll'>" +
          "<div class='float-left'>" +
             "<h1 class='hover-info-title-h1'> <strong id='injected-sticky-title'>Dummy Text Dummy Text</strong> </h1>" +
          "</div>" +
          "<div class='star-rating sticky-rating-positioning' id='injected-sticky-rating'>" +
             "<div class='star-rating-score-grey star-rating-score-30' title='3 of 5 stars'></div>" +
          "</div>" +
          "<div class='float-right'>" +
             "<p class='average-rate'>Avg. Nightly Rate</p>" +
             "<p id='injected-sticky-price'> <a class='price' href='/tickets/hotels.php?sub=details&amp;id='> <span>$</span>84</a> </p>" +
          "</div>" +
       "</div>" +
    "</div>" +
    "<div>" +
       "<ul class='hotel-tab-container'>" +
          "<a href='#scroll-fix-room-choices'>" +
             "<li id='rooms'>Room Choices</li>" +
          "</a>" +
          "<a href='#scroll-fix-overview'>" +
             "<li id='overview'>Overview</li>" +
          "</a>" +
          "<a href='#scroll-fix-amenity-choices'>" +
             "<li id='amenities'>Amenities</li>" +
          "</a>" +
       "</ul>" +
    "</div>" +
 "</div>" +
 "<div class='lower-container' id='room-choices'>" +
    "<div class='tabwidget-content-title'>" +
       "<h1 class='tabwidget-content-title-h1' id='sticky-trigger'> Room Choices </h1>" +
    "</div>" +
    "<ul class='tabwidget-body hotel-tab-content-container'>" +
       "<li class='tabwidget-content' data-id='rooms' style='display: block;'> <span id='injected-content-1'></span> </li>" +
    "</ul>" +
 "</div>" +
 "<div class='lower-container' id='overview-choices'>" +
    "<div class='tabwidget-content-title'>" +
       "<h1 class='tabwidget-content-title-h1'> Overview </h1>" +
    "</div>" +
    "<ul class='tabwidget-body hotel-tab-content-container'>" +
       "<li class='tabwidget-content' data-id='overview' style='display: block;'>" +
          "<span id='injected-content-2'> </span>" +
          "<div class='hotel-cta-button'> <a href='#scroll-fix-room-choices'>Back to room choices</a> </div>" +
       "</li>" +
    "</ul>" +
 "</div>" +
 "<div class='lower-container' id='amenity-choices'>" +
    "<div class='tabwidget-content-title'>" +
       "<h1 class='tabwidget-content-title-h1'> Amenities </h1>" +
    "</div>" +
    "<ul class='tabwidget-body hotel-tab-content-container'>" +
       "<li class='tabwidget-content' data-id='amenities' style='display: block;'>" +
          "<span id='injected-content-3'> </span>" +
         "<div class='hotel-cta-button'> <a href='#scroll-fix-room-choices'>Back to room choices</a> </div>" +
       "</li>" +
    "</ul>" +
 "</div>" +
 "<div class='bottom-container'>" +
    "<div>" +
       "<div><a href='/tickets/hotels.php?sub=search'><i class='fa fa-angle-left'></i> Back to Search Results</a></div>" +
    "</div>" +
    "<div>" +
       "<div><a href='javascript:' class='back-to-top'>Back to Top <i class='fa fa-angle-up'></i></a></div>" +
    "</div>" +
 "</div>");
    jQuery("#view_room_choices").html("<a class='classybutton' style='padding: 0px 5px !important;font-size: 15px !important;' href='#room-choices'>View Room Choices</a>");
    jQuery("#injected-content-1").replaceWith(jQuery("#tab1__saved"));
    jQuery("#injected-content-2").replaceWith(jQuery("#tab2__saved"));
    jQuery("#injected-content-3").replaceWith(jQuery("#tab3__saved"));
    jQuery("<div id='scroll-fix-room-choices' class='sticky-anchor-scroll-fix'></div>").insertBefore("#room-choices > div > h1");
    jQuery("<div id='scroll-fix-overview' class='sticky-anchor-scroll-fix'></div>").insertBefore("#overview-choices > div > h1");
    jQuery("<div id='scroll-fix-amenity-choices' class='sticky-anchor-scroll-fix'></div>").insertBefore("#amenity-choices > div > h1");
    jQuery("#injected-sticky-title").replaceWith(jQuery("#stickyTitle__saved"));
    if (jQuery("#stickyRating__saved").length > 0) {
      jQuery("#injected-sticky-rating").replaceWith(jQuery("#stickyRating__saved"));
    };
    jQuery("#injected-sticky-price").replaceWith(jQuery("#stickyPrice__saved"));
    jQuery("<style id='TestCSS' type='text/css'></style>").text("#hotel-details .hotel-tab-container {" +
        "padding-bottom: 20px;" +
        "padding-top: 0px;" +
        "overflow: hidden;" +
   "}" +
    "#hotel-details .hotel-tab-container .active span {" +
        "display: none;" +
   "}" +
    "#hotel-details .tabwidget-content-title {" +
        "background-color: #eceaeb;" +
        "height: 50px;" +
   "}" +
    "#hotel-details .tabwidget-content-title-h1 {" +
        "font-size: 22px;" +
        "text-transform: uppercase;" +
        "padding-top: 18px;" +
        "padding-left: 18px;" +
   "}" +
    "#hotel-details .hover-info-title-h1 {" +
        "margin-top: 18px;" +
   "}" +
    "#hotel-details .hotel-tab-container li:hover {" +
        "background-color: #0066cc;" +
   "}" +
    "#hotel-details .hotel-cta-button {" +
    "font-size: 22px;" +
    "text-transform: uppercase;" +
    "background-color: #e87a1e;" +
    "margin: 0 auto;" +
        "margin-top: 0px;" +
        "margin-bottom: 0px;" +
    "text-align: center;" +
    "padding-top: 16px;" +
    "padding-bottom: 16px;" +
    "margin-top: 12px;" +
    "margin-bottom: 40px;" +
    "width: 300px;" +
    "-webkit-border-radius: 1px;" +
    "-moz-border-radius: 1px;" +
    "border-radius: 1px;" +
    "text-decoration: none;" +
    "cursor: pointer;" +
    "font-family: 'Oswald';" +
    "font-weight: 500 !important;" +
    "border: 1px solid #e8791e;" +
    "text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);" +
    "background: -moz-linear-gradient(top, #efa162 0%, #efa162 4%, #e8791e 5%, #e8791e 100%);" +
    "background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#efa162), color-stop(4%,#efa162), color-stop(5%,#e8791e), color-stop(100%,#e8791e));" +
    "background: -webkit-linear-gradient(top, #efa162 0%,#efa162 4%,#e8791e 5%,#e8791e 100%);" +
    "background: -o-linear-gradient(top, #efa162 0%,#efa162 4%,#e8791e 5%,#e8791e 100%);" +
    "background: -ms-linear-gradient(top, #efa162 0%,#efa162 4%,#e8791e 5%,#e8791e 100%);" +
    "background: linear-gradient(to bottom, #efa162 0%,#efa162 4%,#e8791e 5%,#e8791e 100%);" +
    "}" +
    "#hotel-details .hotel-cta-button a {" +
        "text-decoration: none;" +
        "color: #ffffff;" +
   "}" +
    ".sticky {" +
        "position: fixed;" +
        "top: 0;" +
        "left: 0;" +
        "width: 100%;" +
        "padding-top: 0px;" +
        "padding-bottom: 4px;" +
        "z-index: 100;" +
        "border-top: 0;" +
        "background-color: #eceaeb;" +
        "overflow: hidden;" +
        "margin-top: -28px;" +
        "box-shadow: 0px 1px #666;" +
   "}" +
    ".sticky-hover-container-positioning {" +
        "margin: 0 auto;" +
        "width: 972px;" +
   "}" +
    ".float-left {" +
        "float: left;" +
        "width: 50%;" +
   "}" +
    ".float-right {" +
        "float: right;" +
        "width: 22%;" +
   "}" +
    ".hidden-until-srcoll {" +
        "display: none;" +
   "}" +
    ".sticky-rating-positioning {" +
        "margin-top: 30px;" +
   "}" +
    ".sticky-anchor-scroll-fix {" +
        "display: block;" +
        "position: absolute;" +
        "width: 0;" +
        "height: 0;" +
        "z-index: 100;" +
        "left: 0;" +
        "visibility: hidden; }"
   ).appendTo("head");
    var triggerLocation = jQuery("#sticky-trigger");
    var stickyFloatStyle = jQuery("#sticky-hotel-info");
    var stickyNavTop = jQuery("#sticky-tabs");
    var stickyNav = function() {
        var scrollTop = jQuery(window).scrollTop();
        if (scrollTop > triggerLocation.offset().top) {
            jQuery("#hide-until-scroll").removeClass("hidden-until-srcoll");
            jQuery("#sticky-hotel-info").addClass("sticky-hover-container-positioning");
            jQuery(".hotel-tab-container").addClass("sticky-hover-container-positioning");
            if (jQuery("#stickyRating__saved").length > 0) {
              jQuery("#stickyRating__saved > div.star-rating-score-grey").addClass("sticky-rating-positioning");
            }
            jQuery("#sticky-tabs").addClass("sticky");
        } else {
            jQuery("#hide-until-scroll").addClass("hidden-until-srcoll");
            jQuery("#sticky-hotel-info").removeClass("sticky-hover-container-positioning");
            jQuery(".hotel-tab-container").removeClass("sticky-hover-container-positioning");
            if (jQuery("#stickyRating__saved").length > 0) {
              jQuery("#stickyRating__saved > div.star-rating-score-grey").removeClass("sticky-rating-positioning");
            }  
            jQuery("#sticky-tabs").removeClass("sticky");
        };
    };
    stickyNav();
    jQuery(window).scroll(function() {
        stickyNav();
    });
    var scrollToElement = function($element, paddingTop) {
        window.scroll(0, $element.offset().top - paddingTop);
    };
    jQuery("#rooms").click(function() {
      jQuery("#rooms").addClass("active");
      jQuery("#overview").removeClass("active");
      jQuery("#amenities").removeClass("active");
      {/* scrollToElement(jQuery("#scroll-fix-room-choices"), 200); */}
      window.scrollBy(0, 100);
    });
    jQuery("#overview").click(function() {
      jQuery("#overview").addClass("active");
      jQuery("#rooms").removeClass("active");
      jQuery("#amenities").removeClass("active");
      {/* scrollToElement(jQuery("#scroll-fix-overview"), 200); */}
      window.scrollBy(0, 100);
    });
    jQuery("#amenities").click(function() {
      jQuery("#amenities").addClass("active");
      jQuery("#overview").removeClass("active");
      jQuery("#rooms").removeClass("active");
      {/* scrollToElement(jQuery("#scroll-fix-amenity-choices"), 200); */}
      window.scrollBy(0, 100);
    });
    {/* var roomChocies = jQuery("#sticky-tabs > div:nth-child(2) > ul > a:nth-child(1)");
    var overview = jQuery("#sticky-tabs > div:nth-child(2) > ul > a:nth-child(2)");
    var amenityChocies = jQuery("#sticky-tabs > div:nth-child(2) > ul > a:nth-child(3)");
    roomChocies.click(function(e) {
        e.preventDefault();
        scrollToElement(jQuery("#scroll-fix-room-choices"), 180);
    });
    overview.click(function(e) {
        e.preventDefault();
        scrollToElement(jQuery("#scroll-fix-overview"), 180);
    });
    amenityChocies.click(function(e) {
        e.preventDefault();
        scrollToElement(jQuery("#scroll-fix-amenity-choices"), 180);
    }); */}
    var activeStickyButtonOnScroll = function() {
        var scrollPlacement = jQuery(window).scrollTop();
        if (scrollPlacement < jQuery("#rooms").offset().top) {
            jQuery("#rooms").addClass("active");
            jQuery("#overview").removeClass("active");
            jQuery("#amenities").removeClass("active");
        } else if (scrollPlacement < jQuery("#overview").offset().top) {
            jQuery("#overview").addClass("active");
            jQuery("#rooms").removeClass("active");
            jQuery("#amenities").removeClass("active");
        } else if (scrollPlacement < jQuery("#amenities").offset().top) {
            jQuery("#amenities").addClass("active");
            jQuery("#overview").removeClass("active");
            jQuery("#rooms").removeClass("active");
        }
    };
    activeStickyButtonOnScroll();
    jQuery(window).scroll(function() {
        activeStickyButtonOnScroll();
    });
    jQuery("#stickyTitle__saved").css("display", "block").css("line-height", "22px");
    if (jQuery("#stickyRating__saved").length > 0) {
      jQuery("#stickyRating__saved").css("display", "block").addClass("sticky-rating-positioning");
    };
    jQuery("#stickyPrice__saved").css("display", "block");
    jQuery(".tabwidget-content").removeProp("display");
    jQuery(".tabwidget-content").css("display", "block");
    jQuery("#tab1__saved").css("display", "block");
    jQuery("#tab2__saved").css("display", "block");
    jQuery("#tab3__saved").css("display", "flex");
    jquery("#tab3__saved").css("display", "table");
    jQuery("#stickyTitle__saved").css({"line-height": "18px", "font-size": "20px"})
});
</script>