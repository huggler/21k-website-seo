module.exports = function(app, pug) {
    
    const fbAppId = process.env.fbAppId || '869295783227578';
    const anyRoute = (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k',
            description: 'Repense sua vida digital | Transformamos ideias incríveis em aplicativos e sistemas que criam valor para a sociedade',
            image: 'https://lab21k.com.br/assets/images/21k-logo-facebook.png'
        });

        res.send(html);
    };

    app.get('/seo/prerender/empresa', (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k | Empresa',
            description: 'A 21k Serviços Digitais, uma empresa carioca focada em desenvolvimento de software e inovação.',
            image: 'https://lab21k.com.br/assets/images/21k-logo-facebook.png'
        });
        res.send(html);
    });

    app.get('/seo/prerender/contato', (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k | Contato',
            description: 'Encontre nos aqui: Av. Abelardo Bueno 1, sala 302 | Barra da Tijuca, Rio de Janeiro/RJ - +55 (21) 98103-8503',
            image: 'https://lab21k.com.br/assets/images/21k-logo-facebook.png'
        });
        res.send(html);
    });

    app.get('/seo/prerender/projetos', (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k | Projetos',
            description: 'A 21k oferece credibilidade e segurança aos seus projetos.',
            image: 'https://lab21k.com.br/assets/images/21k-logo-facebook.png'
        });
        res.send(html);
    });
    app.get('/seo/prerender/projetos/s4c', (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k | S4C',
            description: 'A plataforma Comtex S4C é um software integrador e de gestão situacional georrefenciado, para gerenciamento e condução dos processos de Centros de Comando e Controle, tanto de segurança como de Operações e Administração.',
            image: 'https://lab21k.com.br/assets/images/projetos/s4c/s4c-logo-facebook.png'
        });
        res.send(html);
    });
    app.get('/seo/prerender/projetos/hubot', (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k | Hubot',
            description: 'O Hubot é um sistema “Plug-and-Play” para a sua casa ou escritório, que veio para revolucionar a forma como as pessoas enxergam a automação.',
            image: 'https://lab21k.com.br/assets/images/projetos/hubot/hubot-logo-facebook.png'
        });
        res.send(html);
    });
    app.get('/seo/prerender/projetos/uview', (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k | UView',
            description: 'Player de vídeo 360º para a produtora UView360. Permite a exibição de vídeos em Realidade Virtual(VR) em desktops e smartphones, estando disponível tanto para iOS quanto Android.',
            image: 'https://lab21k.com.br/assets/images/projetos/uview/uview-logo-facebook.png'
        });
        res.send(html);
    });
    app.get('/seo/prerender/projetos/promee', (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k | Promee',
            description: 'Promee é uma plataforma que conecta consumidores e marcas. As empresas podem divulgar promoções, ofertas e anúncios, assim usuários podem conhecer e interagir com elas. Disponível tanto para smartphone quanto desktop.',
            image: 'https://lab21k.com.br/assets/images/projetos/promme/promee-logo-facebook.png'
        });
        res.send(html);
    });
    app.get('/seo/prerender/projetos/megalancers', (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k | Megalancers',
            description: 'Megalancers é o primeiro marketplace brasileiro para influenciadores digitais se conectarem com seus fãs. Artistas, bloggers e celebridades podem gerenciar e vender atividades relacionadas a seus perfis sociais.',
            image: 'https://lab21k.com.br/assets/images/projetos/megalancers/megalancers-logo-facebook.png'
        });
        res.send(html);
    });
    app.get('/seo/prerender/projetos/simag', (req, res, next) => {
        let html = pug.renderFile('seo/template.pug', {
            fbAppId: fbAppId,
            title: '21k | Simag',
            description: 'Sistema georreferenciado para controle de cargas e estabelecimentos. Permite criar alertas, entrar em contato com a escolta mais próxima e acionar de segurança pública responsáveis pela área.',
            image: 'https://lab21k.com.br/assets/images/projetos/simag/simag-logo-facebook.png'
        });
        res.send(html);
    })

    app.get('/seo/prerender/*', anyRoute);
};
