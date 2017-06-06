(function() {
    'use strict';

    function clearContent() {
        var content = document.querySelector('.content.sliding');
        if (content) {
            content.parentNode.removeChild(content);
        }
    }


    if (!window.ratchetBase) {

        window.ratchetBase = true;

        window.addEventListener('push', function(){
            var scriptsList = document.querySelectorAll('script.js-custom');
            for(var i = 0; i < scriptsList.length; ++i) {
                eval(scriptsList[i].innerHTML);
            }
        });

        var previousState = '';
        window.addEventListener('popstate', function () {
            var path = document.location.pathname;

            /* Não deixa voltar para a mesma página */
            if (path == previousState) {
                if (window.history.length > 0) {
                    window.history.back();
                }
            } else {
                previousState = path;
                PUSH({ url: path, transition: 'slideOut' });
            }
        });

        window.addEventListener('push', function () {
            clearContent();
        });
    }
})();