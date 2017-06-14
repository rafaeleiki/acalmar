var initApp;

(function() {
    'use strict';

    initApp = function (title, tab) {
        var header = $(`
            <header class="bar bar-nav navGradientCustom">
                <a class="icon fa fa-user-circle icon-left-nav pull-left" href="pages/profile.html"></a>
                <a class="icon fa fa-gear pull-right"></a>
                <h1 class="title acalmarTitle">${title}</h1>
            </header>`);

        var menu = $(`
            <div>
                <nav class="bar bar-tab">
                    <a class="tab-item ${tab === 'amparo' ? 'active' : ''}" href="index.html" data-transition="slide-in">
                        <span class="fa fa-handshake-o"></span>
                        <span class="tab-label">Amparo</span>
                    </a>
                    <a class="tab-item ${tab === 'diario' ? 'active' : ''}" href="pages/diario.html" data-transition="slide-in">
                        <span class="fa fa-pencil"></span>
                        <span class="tab-label">Diário</span>
                    </a>
                    <a class="tab-item ${tab === 'acalmar' ? 'active' : ''}" href="pages/acalmar.html" data-transition="slide-in">
                        <span class="fa fa-leaf"></span>
                        <span class="tab-label">Acalmar</span>
                    </a>
                    <a class="tab-item ${tab === 'assistencia' ? 'active' : ''}" href="pages/assistencia.html" data-transition="slide-in">
                        <span class="fa fa-user-md"></span>
                        <span class="tab-label">Assistência</span>
                    </a>
                </nav>
            </div>`);

        $('#header').replaceWith(header);
        $('#menu').replaceWith(menu);
    };
})();