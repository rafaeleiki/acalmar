var initApp;

(function() {
    'use strict';

    initApp = function (basePath, title) {
        var header = $(`
            <header class="bar bar-nav">
                <a class="icon fa fa-user-circle icon-left-nav pull-left" href="${basePath}/profile.html"></a>
                <a class="icon fa fa-gear pull-right"></a>
                <h1 class="title">${title}</h1>
            </header>`);

        var menu = $(`
            <div class="content home-content">
                <nav class="bar bar-tab">
                    <a class="tab-item active" href="#">
                        <span class="fa fa-handshake-o"></span>
                        <span class="tab-label">Amparo</span>
                    </a>
                    <a class="tab-item" href="#">
                        <span class="fa fa-pencil"></span>
                        <span class="tab-label">Diário</span>
                    </a>
                    <a class="tab-item" href="#">
                        <span class="fa fa-leaf"></span>
                        <span class="tab-label">Acalmar</span>
                    </a>
                    <a class="tab-item" href="#">
                        <span class="fa fa-user-md"></span>
                        <span class="tab-label">Assistência</span>
                    </a>
                </nav>
            </div>`);

        header.insertBefore('#master-layout .header');
        menu.insertBefore('#master-layout .menu');
    };
})();