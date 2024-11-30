document.addEventListener('DOMContentLoaded', function() {
    function setupSlider(sliderId, valueId) {
        var slider = document.getElementById(sliderId);
        var output = document.getElementById(valueId);
        output.innerHTML = slider.value; 

        slider.oninput = function() {
            output.innerHTML = this.value;
        }
    }

    setupSlider("slider1", "value1");
    setupSlider("slider2", "value2");
    setupSlider("slider3", "value3");

});