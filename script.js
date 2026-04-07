
    function navigate(page) {
      document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('active'); });
      var target = document.getElementById('page-' + page);
      if (target) { target.classList.add('active'); window.scrollTo({top:0, behavior:'smooth'}); }
      document.querySelectorAll('.nav-item').forEach(function (i) { i.classList.remove('open'); });
      var menu = document.getElementById('navMenu');
      if (menu) menu.classList.remove('open');
      setActiveNav(page);
    }

    function toggleDrop(id) {
      var el = document.getElementById(id);
      var was = el.classList.contains('open');
      document.querySelectorAll('.nav-item').forEach(function (i) { i.classList.remove('open'); });
      if (!was) el.classList.add('open');
    }

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item').forEach(function (i) { i.classList.remove('open'); });
      }
    });

    function toggleMobile() {
      document.getElementById('navMenu').classList.toggle('open');
    }

    function toggleTheme() {
      var root = document.documentElement;
      var dark = root.getAttribute('data-theme') === 'dark';
      root.setAttribute('data-theme', dark ? 'light' : 'dark');
      document.getElementById('themeLabel').textContent = dark ? 'Modo oscuro' : 'Modo claro';
      var icon = document.getElementById('themeIcon');
      icon.innerHTML = dark
        ? '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
        : '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
    }

    /* ── Active nav ── */
    var NAV_MAP = {
      home: 'Inicio', suscripciones: 'Suscripciones', hosting: 'Hosting Web',
      planes: 'Hosting Web', 'alquiler-tec': 'Alquiler Tecnológico',
      alquiler: 'Suscripciones', correo: 'Suscripciones', daas: 'Suscripciones',
      'bare-metal': 'Servicios Bare Metal', productos: 'Productos',
      partners: 'Partners', digital: 'Digital Transformation', contacto: 'Contactar'
    };
    function setActiveNav(page) {
      document.querySelectorAll('.nav-link').forEach(function (l) { l.classList.remove('current'); });
      var label = NAV_MAP[page];
      if (!label) return;
      document.querySelectorAll('.nav-link').forEach(function (l) {
        var txt = l.textContent.replace(/\s+/g, ' ').trim();
        if (txt === label) l.classList.add('current');
      });
    }

    /* ── Back to top ── */
    window.addEventListener('scroll', function () {
      var b = document.getElementById('backToTop');
      if (b) b.classList.toggle('visible', window.scrollY > 280);
    });

    /* ── Language ── */
    var T = {
      es: {
        nav: ['Inicio', 'Suscripciones', 'Hosting Web', 'Alquiler Tecnológico', 'Servicios Bare Metal', 'Productos', 'Partners', 'Digital Transformation', 'Cloud Soberana'],
        contact: 'Contactar', sl1: 'Clientes Activos', sl2: 'Uptime Garantizado', sl3: 'Soporte Técnico', sl4: 'Años de Experiencia',
        htitle: 'Soluciones IT para<br/>empresas <em>que avanzan</em>',
        hsub: 'Infraestructura cloud soberana, ciberseguridad avanzada y servicios gestionados para organizaciones que exigen fiabilidad y rendimiento real.',
        hb1: 'Explorar servicios', hb2: 'Hablar con un experto'
      },
      en: {
        nav: ['Home', 'Subscriptions', 'Web Hosting', 'Tech Rental', 'Bare Metal Servers', 'Products', 'Partners', 'Digital Transformation', 'Sovereign Cloud'],
        contact: 'Contact', sl1: 'Active Clients', sl2: 'Guaranteed Uptime', sl3: 'Tech Support', sl4: 'Years of Experience',
        htitle: 'IT Solutions for<br/>businesses <em>that grow</em>',
        hsub: 'Sovereign cloud infrastructure, advanced cybersecurity and managed services for organizations that demand reliability and real performance.',
        hb1: 'Explore services', hb2: 'Talk to an expert'
      },
      fr: {
        nav: ['Accueil', 'Abonnements', 'Hébergement Web', 'Location Tech', 'Serveurs Bare Metal', 'Produits', 'Partenaires', 'Transformation Digitale', 'Cloud Souverain'],
        contact: 'Contact', sl1: 'Clients Actifs', sl2: 'Disponibilité Garantie', sl3: 'Support Technique', sl4: "Ans d'Expérience",
        htitle: 'Solutions IT pour<br/>les entreprises <em>qui avancent</em>',
        hsub: "Infrastructure cloud souveraine, cybersécurité avancée et services gérés pour les organisations qui exigent fiabilité et performance réelle.",
        hb1: 'Explorer les services', hb2: 'Parler à un expert'
      }
    };
    function setLang(lang) {
      var t = T[lang];
      document.querySelectorAll('.lang-btn').forEach(function (b) {
        b.classList.toggle('active', b.textContent.trim().toLowerCase() === lang);
      });
      var links = document.querySelectorAll('.nav-menu .nav-link');
      var ni = 0;
      links.forEach(function (l) {
        var node = l.childNodes[0];
        if (node && node.nodeType === 3 && node.textContent.trim().length > 1) {
          if (t.nav[ni] !== undefined) { node.textContent = t.nav[ni] + ' '; ni++; }
        }
      });
      var cb = document.getElementById('btn-contact');
      if (cb) cb.textContent = t.contact;
      var sl1 = document.getElementById('sl1'), sl2 = document.getElementById('sl2'),
        sl3 = document.getElementById('sl3'), sl4 = document.getElementById('sl4');
      if (sl1) sl1.textContent = t.sl1; if (sl2) sl2.textContent = t.sl2;
      if (sl3) sl3.textContent = t.sl3; if (sl4) sl4.textContent = t.sl4;
      var ht = document.querySelector('#page-home .display-title');
      if (ht) ht.innerHTML = t.htitle;
      var hs = document.querySelector('#page-home .lead');
      if (hs) hs.textContent = t.hsub;
      var btns = document.querySelectorAll('#page-home .hero-btns span');
      if (btns[0]) btns[0].textContent = t.hb1;
      if (btns[1]) btns[1].textContent = t.hb2;
    }

    /* ── Init ── */
    setActiveNav('home');
  