// t = tema · q = pregunta · o = opcions · a = índex de la correcta (0 = primera) · e = explicació
const QUESTIONS = [
  // ---------- PRÒLEG ----------
  {t:"Pròleg",q:"Què és un pròleg?",o:["Un text introductori al principi d’una obra","Un resum al final del llibre","Un índex de continguts","Una crítica de l’obra publicada al diari"],a:0,e:"El pròleg és un text introductori que prepara el lector, dona context o explica l’objectiu de l’obra."},
  {t:"Pròleg",q:"Qui pot escriure un pròleg?",o:["Només l’autor","Només l’editor","L’autor o una tercera persona (expert, amic, editor)","Només un crític literari"],a:2,e:"L’autoria és variable: el pot escriure l’autor o una altra persona que en avalui el valor."},
  {t:"Pròleg",q:"Quina és la funció principal del pròleg?",o:["Substituir el contingut principal","Servir de pont entre el lector i l’obra","Explicar el final de la història","Citar les fonts bibliogràfiques únicament"],a:1,e:"Serveix de pont: prepara el terreny per a la lectura."},
  {t:"Pròleg",q:"En què es diferencia el pròleg de la introducció acadèmica?",o:["El pròleg té sovint un to personal o argumental","El pròleg és sempre més llarg","El pròleg és molt rígid d’estructura","No hi ha cap diferència"],a:0,e:"El pròleg és subjectiu i té una estructura flexible; la introducció acadèmica és més objectiva."},
  {t:"Pròleg",q:"Quina d’aquestes característiques NO correspon a un pròleg?",o:["Ser breu i concís","Poder incloure anècdotes o agraïments","Seguir una estructura rígida","Explicar les circumstàncies de creació de l’obra"],a:2,e:"L’estructura del pròleg és flexible, no rígida."},

  // ---------- MITES ----------
  {t:"Mites",q:"Què és un mite?",o:["Una notícia verídica d’actualitat","Un relat tradicional, sovint sagrat, que explica l’origen del món, els déus o les normes socials","Un poema líric modern","Una fàbula amb moralitat sobre animals"],a:1,e:"Un mite és un relat tradicional, sovint sagrat o fundacional."},
  {t:"Mites",q:"Com es transmetien originàriament els mites?",o:["Per escrit en llibres","Per televisió","Oralment, de generació en generació","Només per mitjà de dibuixos"],a:2,e:"La transmissió era oral abans de ser escrits."},
  {t:"Mites",q:"Qui són els protagonistes dels mites?",o:["Persones anònimes del poble","Déus, semidéus, herois o éssers mítics","Científics","Reis històrics verificables"],a:1,e:"Són personatges sobrenaturals amb poders extraordinaris."},
  {t:"Mites",q:"Per als membres de la cultura que els crea, els mites són…",o:["Pura ficció","Una veritat sagrada, una explicació real de la realitat","Acudits","Mentides per enganyar els nens"],a:1,e:"Tenen valor de veritat sagrada, no de ficció."},
  {t:"Mites",q:"Quina és la funció explicativa dels mites?",o:["Entretenir només","Respondre preguntes fonamentals: d’on venim, per què hi ha la mort o les estacions…","Fer publicitat","Ensenyar gramàtica"],a:1,e:"Responen a les grans preguntes sobre l’existència."},
  {t:"Mites",q:"Quina és la base dels mites segons els apunts?",o:["Històrica i verificable","Simbòlica, sense base històrica real verificable","Científica","Periodística"],a:1,e:"Els elements representen forces naturals, processos psicològics o valors socials."},
  {t:"Mites",q:"Quin mite explica l’origen del foc entre els humans?",o:["Pandora i la caixa","Els dotze treballs d’Hèrcules","Prometeu i el foc","El mite de Narcís"],a:2,e:"Prometeu va robar el foc als déus per donar-lo als humans."},
  {t:"Mites",q:"Quin mite parla d’una caixa que, en obrir-se, va deixar anar els mals al món?",o:["Pandora","Prometeu","Hèrcules","Zeus"],a:0,e:"Pandora i la caixa."},
  {t:"Mites",q:"Hèrcules és conegut pels seus…",o:["Tres desitjos","Dotze treballs","Set viatges","Quatre estacions"],a:1,e:"Els dotze treballs d’Hèrcules."},
  {t:"Mites",q:"Quina vigència cultural tenen els mites?",o:["Cap, són només contes","Reforcen la identitat col·lectiva i justifiquen costums i jerarquies","Només serveixen als historiadors","Substitueixen les lleis escrites sempre"],a:1,e:"Reforcen la identitat col·lectiva i justifiquen institucions i costums."},

  // ---------- VOCABULARI ----------
  {t:"Vocabulari",q:"Què és un tità?",o:["Un déu gegant de la mitologia grega, anterior als déus olímpics","Un heroi mortal","Un tipus de vaixell","Un sacerdot grec"],a:0,e:"Els titans eren fills de Gea i Urà."},
  {t:"Vocabulari",q:"Què és una cosmogonia?",o:["Un mapa de les estrelles","Un relat sobre l’origen i la creació de l’univers","Un estudi de les cultures","Una llista de déus"],a:1,e:"Cosmogonia = relat sobre l’origen de l’univers."},
  {t:"Vocabulari",q:"Què significa estirp?",o:["Un tipus de planta","Conjunt de persones que provenen d’un mateix avantpassat (nissaga)","Un camí antic","Una classe social baixa"],a:1,e:"Estirp = nissaga, llinatge."},
  {t:"Vocabulari",q:"Què fa un antropòleg?",o:["Estudia els animals","Estudia l’ésser humà, les seves cultures i costums","Estudia els astres","Escriu pròlegs"],a:1,e:"L’antropòleg estudia l’ésser humà i les seves cultures."},
  {t:"Vocabulari",q:"Què vol dir arcaic?",o:["Molt modern","Molt antic, d’una època passada","Molt gran","Molt senzill"],a:1,e:"Arcaic = molt antic o que ha quedat en desús."},

  // ---------- VARIETATS ----------
  {t:"Varietats",q:"Quins són els tres tipus de varietats de la llengua?",o:["Orals, escrites i digitals","Històriques/generacionals, socials i territorials","Formals, informals i vulgars","Orientals, occidentals i centrals"],a:1,e:"Històriques o generacionals, socials i territorials (dialectes)."},
  {t:"Varietats",q:"Els avis usen paraules que els joves ja no fan servir. Quina varietat és?",o:["Territorial","Social","Històrica o generacional","Professional"],a:2,e:"Depèn de l’època o la generació."},
  {t:"Varietats",q:"Un metge usa vocabulari mèdic. Quina varietat és?",o:["Social","Territorial","Generacional","Dialectal"],a:0,e:"Les varietats socials depenen del grup, la professió o els estudis."},
  {t:"Varietats",q:"El català de Barcelona no és igual que el de Lleida o Mallorca. Quina varietat és?",o:["Social","Territorial o dialectal","Generacional","Històrica"],a:1,e:"Depèn del territori."},
  {t:"Dialectes",q:"Quins són els dos grans blocs dialectals del català?",o:["Nord i sud","Oriental i occidental","Central i balear","Valencià i alguerès"],a:1,e:"Bloc oriental i bloc occidental."},
  {t:"Dialectes",q:"Quin d’aquests dialectes pertany al bloc ORIENTAL?",o:["Valencià","Nord-occidental","Balear","Cap"],a:2,e:"Oriental: central, rossellonès, balear i alguerès."},
  {t:"Dialectes",q:"Quin d’aquests dialectes pertany al bloc OCCIDENTAL?",o:["Rossellonès","Alguerès","Central","Valencià"],a:3,e:"Occidental: nord-occidental i valencià."},
  {t:"Dialectes",q:"Quina és la diferència fonètica típica entre els dos blocs?",o:["L’oriental neutralitza les vocals àtones a i e en [ə]; l’occidental les distingeix","L’occidental neutralitza les vocals àtones","Cap diferència","L’oriental no té vocals"],a:0,e:"Oriental: a/e àtones → [ə]. Occidental: es mantenen diferenciades."},
  {t:"Dialectes",q:"«Jo canto» (oriental) / «jo cante» (alguns valencians) és una diferència…",o:["Fonètica","Morfològica","Lèxica","Ortogràfica"],a:1,e:"Afecta la terminació verbal, és a dir, la forma de la paraula."},
  {t:"Dialectes",q:"«Mirall / espill» i «noi / xic» són diferències…",o:["Fonètiques","Morfològiques","Lèxiques","Sintàctiques"],a:2,e:"Una mateixa cosa s’anomena amb paraules diferents: diferència de vocabulari."},
  {t:"Dialectes",q:"Quin tipus de diferència és pronunciar els sons de manera distinta?",o:["Fonètica","Lèxica","Morfològica","Social"],a:0,e:"Fonètica = pronunciació dels sons."},

  // ---------- ACCENTUACIÓ ----------
  {t:"Accentuació",q:"Quina és la síl·laba tònica d’una paraula aguda?",o:["L’última","La penúltima","L’antepenúltima","La primera sempre"],a:0,e:"Aguda: última. Plana: penúltima. Esdrúixola: antepenúltima."},
  {t:"Accentuació",q:"Les paraules agudes s’accentuen quan acaben en…",o:["Consonant qualsevol","Vocal, vocal + s, -en o -in","Mai","Només en -r"],a:1,e:"Cafè, després, comprèn, Berlín."},
  {t:"Accentuació",q:"Les paraules planes s’accentuen quan…",o:["Acaben en vocal","Acaben en vocal + s","NO acaben en vocal, vocal + s, -en ni -in","Sempre"],a:2,e:"Fàcil, àngel. En canvi: casa i arbre no porten accent."},
  {t:"Accentuació",q:"Les esdrúixoles…",o:["Mai porten accent","Només si acaben en vocal","Sempre porten accent","Porten accent segons la lletra final"],a:2,e:"Recorda: les esdrúixoles sempre porten accent."},
  {t:"Accentuació",q:"«Música» és una paraula…",o:["Aguda","Plana","Esdrúixola","Monosíl·laba"],a:2,e:"Mú-si-ca: tònica antepenúltima."},
  {t:"Accentuació",q:"«Paper» és una paraula…",o:["Aguda","Plana","Esdrúixola","Cap"],a:0,e:"Pa-PER: tònica última. Acaba en -r, per això no s’accentua."},
  {t:"Accentuació",q:"«Telèfon» és una paraula…",o:["Aguda","Plana","Esdrúixola","Monosíl·laba"],a:1,e:"Te-LÈ-fon: tònica penúltima, i no acaba en -en ni -in, per això s’accentua."},
  {t:"Accentuació",q:"Quina és la forma correcta?",o:["Angles","Anglès","Anglés","Ànglès"],a:1,e:"Aguda acabada en vocal + s: anglès."},
  {t:"Accentuació",q:"Quina és la forma correcta?",o:["Dificil","Dificíl","Difícil","Díficil"],a:2,e:"Plana que no acaba en vocal: difícil, amb accent tancat a la i."},
  {t:"Accentuació",q:"Quina vocal porta SEMPRE accent obert?",o:["La a","La i","La u","Cap"],a:0,e:"La a: à. La i i la u: í, ú (tancat). La e i la o poden ser oberts o tancats."},

  // ---------- SÍL·LABES ----------
  {t:"Síl·labes",q:"Què és un diftong?",o:["Dues vocals en síl·labes diferents","Dues vocals pronunciades juntes en una mateixa síl·laba","Dues consonants juntes","Una vocal neutra"],a:1,e:"Diftong = vocals juntes en una síl·laba (rei-na)."},
  {t:"Síl·labes",q:"«País» té…",o:["Diftong","Hiat","Cap dels dos","Tres síl·labes"],a:1,e:"Pa-ís: dues vocals en síl·labes diferents."},
  {t:"Síl·labes",q:"Com se separa «teatre»?",o:["tea-tre","te-a-tre","teat-re","te-at-re"],a:1,e:"Te-a-tre: hiat, 3 síl·labes."},
  {t:"Síl·labes",q:"«Reina» té…",o:["Hiat","Diftong","Tres síl·labes","Cap vocal"],a:1,e:"Rei-na: diftong, 2 síl·labes."},
  {t:"Síl·labes",q:"Com se separa «carretera»?",o:["ca-rre-te-ra","car-re-te-ra","carr-e-te-ra","car-ret-e-ra"],a:1,e:"El dígraf rr se separa: car-re-te-ra."},
  {t:"Síl·labes",q:"Quin dígraf NO se separa?",o:["rr","ss","l·l","ll"],a:3,e:"ll, ny, gu i qu no se separen. rr, ss i l·l sí: pa-lla, car-rer, col-le-gi."},
  {t:"Síl·labes",q:"Com se separa «col·legi»?",o:["co-l·le-gi","col-le-gi","col·le-gi","co-lle-gi"],a:1,e:"La l·l se separa: col-le-gi."},
  {t:"Síl·labes",q:"«Quatre» té…",o:["3 síl·labes","2 síl·labes (diftong)","1 síl·laba","4 síl·labes"],a:1,e:"Qua-tre: diftong."},

  // ---------- ACCENT DIACRÍTIC ----------
  {t:"Diacrític",q:"Per a què serveix l’accent diacrític?",o:["Per marcar la síl·laba tònica de totes les paraules","Per distingir paraules que s’escriuen igual però tenen significat o categoria diferent","Per separar síl·labes","Per fer les paraules més llargues"],a:1,e:"Distingeix paraules iguals amb funcions diferents."},
  {t:"Diacrític",q:"Quina frase és correcta?",o:["Te un llibre a la mà","Té un llibre a la mà","Té un llibre a la ma","Te un llibre a la ma"],a:1,e:"Té (verb tenir) porta accent; mà (part del cos) també."},
  {t:"Diacrític",q:"Quina frase és correcta?",o:["Vols te o cafè?","Vols té o cafè?","Vols tè o cafè?","Vols tê o cafè?"],a:0,e:"Aquí «te» és la infusió i, segons els apunts, no porta accent. Repassa la llista oficial d’accents diacrítics, que ha canviat els darrers anys."}
];
