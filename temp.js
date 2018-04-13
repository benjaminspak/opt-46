jQuery("#scroll-fix-room-choices").click(function() {
    jQuery("#rooms").addClass("active");
    jQuery("#overview").removeClass("active");
    jQuery("#amenities").removeClass("active");
});
jQuery("#scroll-fix-overview").click(function() {
    jQuery("#overview").addClass("active");
    jQuery("#rooms").removeClass("active");
    jQuery("#amenities").removeClass("active");
});
jQuery("#scroll-fix-amenity-choices").click(function() {
    jQuery("#amenities").addClass("active");
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