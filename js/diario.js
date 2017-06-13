var pickMood;
var postaDiario;
var carregaDiario;
var toggleCadeado;
var toggleMoodPicker;

var cadeado = false;
var mood = 'smile;'
var moodPicker = false;

(function() {
    'use strict';

    pickMood = function(newMood) {
        mood = newMood;
        localStorage.setItem('mood-diario', mood);
        $(".humor.icon").removeClass("fa-smile-o");
        $(".humor.icon").removeClass("fa-meh-o");
        $(".humor.icon").removeClass("fa-frown-o");
        $(".humor.icon").addClass("fa-" + newMood + "-o");
        toggleMoodPicker();
    }

    postaDiario = function() {
        var texto = document.getElementsByName("texto-diario")[0].value;
        console.log(texto);
        localStorage.setItem('texto-diario', texto);

        $("#fechaModalDiario").click();
    };

    carregaDiario = function() {

    }

    toggleCadeado = function() {
        cadeado = !cadeado;
        if (cadeado) {
            $("button.privacy.icon").addClass("locked");
        } else {
            $("button.privacy.icon").removeClass("locked");
        }
    }

    toggleMoodPicker = function() {
        moodPicker = !moodPicker;

        if (moodPicker) {
            $("#mood-picker").removeClass("hidden");
        } else {
            $("#mood-picker").addClass("hidden");
        }
    }
})();