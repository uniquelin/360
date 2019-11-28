window.onload = function () {
    new fullpage('#fullpage', {
        // options here
        navigation: true,
        sectionsColor: ['#0198da', '#21a360', '#e78a09', '#08a8a1', '#0198da'],
        verticalCentered: false,
        afterLoad: function (origin, destination, direction) {
            if (origin !== null) {
                origin.item.className = origin.item.className.replace("current", "");
            }
            destination.item.className = destination.item.className + " current";
        }
    })
};