(function () {
  var PAGE = document.body.getAttribute('data-page') || 'index';
  var TEL = '+498921236860', TELD = '089 21236860', MAIL = 'Info@panelenergy.de';
  var LOGO = 'https://panelenergy.de/wp-content/uploads/2024/02/logo-header.svg';
  var LOGOW = 'https://panelenergy.de/wp-content/uploads/2024/02/logo-header-white.svg';
  var NAV = [['index.html','Home','index'],['leistungen.html','Leistungen','leistungen'],['referenzen.html','Referenzen','referenzen'],['bewerbung.html','Karriere','bewerbung'],['kontakt.html','Kontakt','kontakt']];

  var phoneSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>';
  var mailSvg = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>';
  var ig = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
  var fb = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z"/></svg>';
  var tt = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2 1.6 3.6 3.5 4v3c-1.3 0-2.5-.4-3.5-1v6.5A5.5 5.5 0 1 1 10.5 10v3a2.5 2.5 0 1 0 2.5 2.5V3h3z"/></svg>';

  var menuHtml = NAV.map(function (n) { return '<a href="' + n[0] + '"' + (n[2] === PAGE ? ' class="active"' : '') + '>' + n[1] + '</a>'; }).join('');

  var headerHtml =
    '<div class="topbar"><div class="wrap">' +
      '<div class="ti">' +
        '<a class="mail" href="mailto:' + MAIL + '">' + mailSvg + MAIL + '</a>' +
        '<a href="tel:' + TEL + '">' + phoneSvg + TELD + '</a>' +
        '<span class="hrs" style="color:rgba(255,255,255,.6)">Mo–Sa 9:00–20:00 Uhr</span>' +
      '</div>' +
      '<div class="soc">' +
        '<a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">' + ig + '</a>' +
        '<a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">' + fb + '</a>' +
        '<a href="https://www.tiktok.com/" target="_blank" rel="noopener" aria-label="TikTok">' + tt + '</a>' +
      '</div>' +
    '</div></div>' +
    '<header id="site-hd"><div class="wrap nav">' +
      '<a href="index.html" class="logo"><img src="' + LOGO + '" alt="Panel Energy"></a>' +
      '<nav class="menu" id="menu">' + menuHtml + '</nav>' +
      '<div class="nav-cta">' +
        '<a href="tel:' + TEL + '" class="phone">' + phoneSvg + TELD + '</a>' +
        '<a href="kontakt.html" class="btn btn-primary">Jetzt anfragen</a>' +
        '<button class="burger" id="burger" aria-label="Menü"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div></header>';

  var footerHtml =
    '<footer><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div><img class="flogo" src="' + LOGOW + '" alt="Panel Energy">' +
          '<p style="max-width:36ch">Ihr Partner für Solaranlagenmontage, Elektrik, Photovoltaik und Wärmepumpen in München &amp; Umgebung — alles aus einer Hand.</p>' +
          '<div class="fsoc">' +
            '<a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">' + ig + '</a>' +
            '<a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">' + fb + '</a>' +
            '<a href="https://www.tiktok.com/" target="_blank" rel="noopener" aria-label="TikTok">' + tt + '</a>' +
          '</div>' +
        '</div>' +
        '<div><h4>Leistungen</h4>' +
          '<a href="leistung-solaranlagenmontage.html">Solaranlagenmontage</a>' +
          '<a href="leistung-elektrikerservice.html">Elektrikerservice</a>' +
          '<a href="leistung-photovoltaik.html">Photovoltaik-Anlage</a>' +
          '<a href="leistung-waermepumpen.html">Wärmepumpen</a>' +
        '</div>' +
        '<div><h4>Kontakt</h4>' +
          '<a href="tel:' + TEL + '">' + TELD + '</a>' +
          '<a href="mailto:' + MAIL + '">' + MAIL + '</a>' +
          '<a href="kontakt.html">Panel Energy GmbH · München</a>' +
          '<a href="bewerbung.html">Karriere &amp; Bewerbung</a>' +
        '</div>' +
      '</div>' +
      '<div class="foot-bottom">' +
        '<span>© 2026 Panel Energy GmbH · Alle Rechte vorbehalten</span>' +
        '<span><a href="https://panelenergy.de/impressum/">Impressum</a> · <a href="https://panelenergy.de/datenschutz/">Datenschutz</a> · <a href="https://panelenergy.de/agb/">AGB</a></span>' +
      '</div>' +
    '</div></footer>';

  var hd = document.getElementById('hdr'); if (hd) hd.innerHTML = headerHtml;
  var ft = document.getElementById('ftr'); if (ft) ft.innerHTML = footerHtml;

  // draft note
  var dn = document.createElement('div'); dn.className = 'draft-note'; dn.textContent = 'Entwurf · Phase 1 · noch nicht live'; document.body.appendChild(dn);

  // cookie banner
  var cookie = document.createElement('div');
  cookie.className = 'cookie';
  cookie.innerHTML = '<h4>Datenschutz &amp; Cookies</h4><p>Wir verwenden Cookies, um unsere Website zu verbessern und die Nutzung zu analysieren (Google Analytics, Microsoft Clarity). Details in der <a href="https://panelenergy.de/datenschutz/">Datenschutzerklärung</a>.</p><div class="row"><button class="btn btn-primary" data-cookie="accept">Alle akzeptieren</button><button class="btn btn-outline" data-cookie="decline">Nur notwendige</button></div>';
  document.body.appendChild(cookie);
  function setCookie(v){ try{ localStorage.setItem('pe_cookie', v); }catch(e){} cookie.classList.remove('show'); }
  cookie.querySelectorAll('[data-cookie]').forEach(function (b) { b.addEventListener('click', function () { setCookie(b.getAttribute('data-cookie')); }); });
  var choice = null; try { choice = localStorage.getItem('pe_cookie'); } catch (e) {}
  if (!choice) setTimeout(function () { cookie.classList.add('show'); }, 900);

  // popup modal
  var modal = document.createElement('div');
  modal.className = 'modal'; modal.id = 'modal';
  modal.innerHTML = '<div class="modal-box"><button class="modal-x" aria-label="Schließen">&times;</button><span class="eyebrow">Kostenlose Beratung</span><h3>Sichern Sie sich Ihr Angebot</h3><p>Hinterlassen Sie Ihre Kontaktdaten — wir melden uns innerhalb von 24 Stunden mit Ihrem unverbindlichen Angebot.</p><form class="mform js-form"><input placeholder="Ihr Name" required><input type="tel" placeholder="Ihre Telefonnummer" required><input type="email" placeholder="Ihre E-Mail-Adresse" required><button type="submit" class="btn btn-primary btn-block">Jetzt Beratung anfordern</button></form></div>';
  document.body.appendChild(modal);
  function closeModal(){ modal.classList.remove('show'); }
  modal.querySelector('.modal-x').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  var seen = null; try { seen = sessionStorage.getItem('pe_popup'); } catch (e) {}
  if (!seen) { setTimeout(function () { modal.classList.add('show'); try { sessionStorage.setItem('pe_popup', '1'); } catch (e) {} }, 7000); }

  // mobile nav + header shadow
  var burger = document.getElementById('burger'), menu = document.getElementById('menu'), hdEl = document.getElementById('site-hd');
  if (burger) burger.addEventListener('click', function () { menu.classList.toggle('open'); });
  if (menu) menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { menu.classList.remove('open'); }); });
  window.addEventListener('scroll', function () { if (hdEl) hdEl.classList.toggle('scrolled', window.scrollY > 10); });

  // reveal
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // count-up
  var cio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var el = e.target, to = +el.dataset.to, t0 = null; (function run(){ requestAnimationFrame(function step(ts){ if(!t0)t0=ts; var p=Math.min((ts-t0)/1100,1); el.textContent=Math.round(p*to); if(p<1)requestAnimationFrame(step); }); })(); cio.unobserve(el); } }); }, { threshold: .6 });
  document.querySelectorAll('.count').forEach(function (el) { cio.observe(el); });

  // quiz
  var qs = 1, QT = 5;
  function qShow(){
    document.querySelectorAll('.qstep').forEach(function(s){ s.classList.toggle('active', +s.dataset.step === qs); });
    var p = document.getElementById('prog'); if (p) p.style.width = (qs / QT * 100) + '%';
    var b = document.getElementById('qback'); if (b) b.style.visibility = qs > 1 ? 'visible' : 'hidden';
    var c = document.getElementById('qcount'); if (c) c.textContent = 'Schritt ' + qs + ' von ' + QT + ' · Ihre Daten werden vertraulich behandelt';
  }
  window.qNext = function(){ if (qs < QT) { qs++; qShow(); } };
  window.qPrev = function(){ if (qs > 1) { qs--; qShow(); } };

  // generic form success
  function successHtml(dark){
    var col = dark ? '#fff' : 'var(--ink)', sub = dark ? 'rgba(255,255,255,.8)' : 'var(--muted)';
    return '<div class="form-ok"><div class="tick">✅</div><h3 style="color:' + col + ';margin:10px 0 8px">Vielen Dank!</h3><p style="color:' + sub + '">Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden.</p><p style="color:' + sub + ';font-size:.8rem;margin-top:12px">(Vorschau — im WordPress wird dies Ihr echtes Formular)</p></div>';
  }
  document.querySelectorAll('form.js-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var quiz = f.closest('.quiz'), modalBox = f.closest('.modal-box'), card = f.closest('.form-card');
      if (quiz) { quiz.innerHTML = successHtml(true); }
      else if (modalBox) { modalBox.innerHTML = '<button class="modal-x" aria-label="Schließen" onclick="document.getElementById(\'modal\').classList.remove(\'show\')">&times;</button>' + successHtml(false); }
      else if (card) { card.innerHTML = successHtml(false); }
      else { f.innerHTML = successHtml(false); }
    });
  });
})();
