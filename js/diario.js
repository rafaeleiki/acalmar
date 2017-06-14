var fechaModal;
var carregaDiario;
var pickMood;
var postaDiario;
var toggleCadeado;
var toggleMoodPicker;

var listaDiario = [];
var cadeado = false;
var mood = 'smile';
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
        var listaDiario = $.parseJSON(localStorage.getItem('diario'));
        if (!listaDiario || !listaDiario.length) {
            return;
        }
        var textHtml = '';
        listaDiario.forEach(function(element) {
            textHtml += `<li class="table-view-cell media">
                        <a class="navigate-right">
                            <div class="media-object pull-left fa fa-${element.mood}-o icon"></div>
                            <div class="media-body">
                                ${element.titulo}
                                <p>${element.texto}</p>
                            </div>
                        </a>
                    </li>`;
        }, this);
        $('#diario .list ul').html($(textHtml));
    }

    pickMood = function(newMood) {
        mood = newMood;
        $(".humor.icon").removeClass("fa-smile-o");
        $(".humor.icon").removeClass("fa-meh-o");
        $(".humor.icon").removeClass("fa-frown-o");
        $(".humor.icon").addClass("fa-" + newMood + "-o");
        toggleMoodPicker();
    }

    postaDiario = function() {
        var texto = document.getElementsByName("texto-diario")[0].value;
        var titulo = document.getElementsByName("titulo-diario")[0].value;
        listaDiario.push({ titulo: titulo, texto: texto, mood: mood, privacy: cadeado });
        localStorage.setItem('diario', JSON.stringify(listaDiario));

        document.getElementsByName("texto-diario")[0].value = '';
        document.getElementsByName("titulo-diario")[0].value = '';

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