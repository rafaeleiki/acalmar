var fechaModal;
var carregaDiario;
var pickMood;
var postaDiario;
var toggleCadeado;
var toggleMoodPicker;

var cadeado = false;
var mood = 'smile;'
var moodPicker = false;

(function() {
    'use strict';

    fechaModal = function() {
        $("#fechaModal")[0].click();
        $("#textBoxModal").removeClass('active');
        mood = 'smile';
        cadeado = false;
        carregaDiario();
    }

    carregaDiario = function() {
        var text = localStorage.getItem('texto-diario');
        if(!text) {
            return;
        }
        var textHtml = $(`<li class="table-view-cell media">
                        <a class="navigate-right">
                            <img class="media-object pull-left" src="images/luciano.jpg">
                            <div class="media-body">
                                Item 1
                                <p>${text}</p>
                            </div>
                        </a>
                    </li>`);
        $('#diario .list ul').html(textHtml);
    }

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

        fechaModal();
    };


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