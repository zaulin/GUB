const jsonData = {
   "situacions" : [
 {
  "situacio": "Abús sexual",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "N02,A17,G30",
  "actes resta": "A106",
  "extra": null
 },
 {
  "situacio": "Agresió sexual",
  "actes autor": "N01,A108,A110",
  "actes perjudicat": "N02,A17,G31",
  "actes resta": null,
  "extra": "Ha d'existir violència o intimidació.\n\nAgreujant:\n\nAccès carnal"
 },
 {
  "situacio": "ViGe",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "N02,N101,A17,G30",
  "actes resta": "A106",
  "extra": "Home (parella o ex) agredeix a la víctima (amb o sense convivència)\n\nAgreujants:\n\n- Fer servir armes\n- Al domicili familiar\n- En presència de menors"
 },
 {
  "situacio": "Maltractament d'obra",
  "actes autor": "N09",
  "actes perjudicat": "N02,A18",
  "actes resta": "N10",
  "extra": "Requereix denúncia de la víctima"
 },
 {
  "situacio": "Robatori amb força",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "N02,A31,A56,G30",
  "actes resta": null,
  "extra": "Es considera també robatori amb força si la força s'exerceix per abandonar el lloc"
 },
 {
  "situacio": "Usurpació (okupes)",
  "actes autor": "N09",
  "actes perjudicat": "N02",
  "actes resta": "G133,A31",
  "extra": "Si es tracta d'un edifici públic: GUB - UI\nSi es tracta d'un edifici privat: CME"
 },
 {
  "situacio": "Falsetat documental",
  "actes autor": "N01,A108,A109,I55",
  "actes perjudicat": null,
  "actes resta": null,
  "extra": "És falsetat documental fer servir un document verdader per una persona que no es la titular"
 },
 {
  "situacio": "Salud pública",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "A108,A17,G30",
  "actes resta": "A20",
  "extra": "Dues A108 pel venedor: Una pels diners i l'altre per la droga\nSi el comprador te droga se li fa una altra A108\nEl comprador és testimoni del delicte: A17\nEl mateix agent signa A108 i A20\n\nDOSIS SUPERIOR A CONSUM PROPI:\n\n- Marihuana: 100g\n- Haixix: 50g\n- Cocaina: 12-15g\n- Heroina: 6-8g\n- MDMA: 3g\n- Èxtasi: 3g\n- Metamfetamina: 0,7g\n- Pastilles de síntesis: 20 unitats"
 },
 {
  "situacio": "Furt",
  "actes autor": "N09,N10,A108,A35",
  "actes perjudicat": "N02,A56,A57,N10",
  "actes resta": "A18,N10,G31,D24",
  "extra": "Si es a establiment: adjuntar el tiquet de caixa."
 },
 {
  "situacio": "Furt +400€",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "N02,A56,G30,A17",
  "actes resta": null,
  "extra": "Si es a establiment: adjuntar el tiquet de caixa.\n\nAgreujants:\n\n- Furtar cables amb greu perjudici\n- Productes agraris amb greu perjudici\n- Valor artístic\/històric\n- Objectes de 1ª necesitat (desabastiment)\n- Desamparament de la víctima\n- Aprofitant-se d'un accident\n- Fer servir menors"
 },
 {
  "situacio": "Apropiació indeguda",
  "actes autor": "N01,A108",
  "actes perjudicat": "N02,A56",
  "actes resta": null,
  "extra": null
 },
 {
  "situacio": "Apropiació indeguda +400€",
  "actes autor": "N09,A108",
  "actes perjudicat": "N02,A56",
  "actes resta": "N01,A108,A109",
  "extra": "Si l'autor s'ha trobat l'objecte sempre serà un delicte lleu independentment del valor de l'objecte."
 },
 {
  "situacio": "Robatori\/furt ús de vehícle",
  "actes autor": "N08,G30,A108",
  "actes perjudicat": "N02,G30",
  "actes resta": "A33",
  "extra": "Ingresar el vehícle a disposició judicial."
 },
 {
  "situacio": "Amenaces lleus",
  "actes autor": "N09,A108",
  "actes perjudicat": "N02,A18",
  "actes resta": null,
  "extra": "Requereix denúncia de la víctima\nAmb o sense armes (si hi ha arma s'intervé amb A108)\nMostrar arma en baralla\nAmenaça lleu"
 },
 {
  "situacio": "Amenaces",
  "actes autor": "N09,A108",
  "actes perjudicat": "N02,A17,G30",
  "actes resta": null,
  "extra": "En ViGe és amb o sense arma\nEn ViDo és AMB arma\nResta de delictes: amb o sense arma\nL'amenaça ha de ser directe i creïble\nLa diferència amb el delicte lleu es la por que es produeix en la víctima"
 },
 {
  "situacio": "Atemptat",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "N02",
  "actes resta": null,
  "extra": "S'ha de fer document per la mutua laboral\nS'han de tipificar també les lesions\nS'ha de trucar a Molins advocats\n\nAgreujants:\n- Fer ús armes\/objectes perillosos\n- Potencial perill per la vida"
 },
 {
  "situacio": "Resistència",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "N02",
  "actes resta": null,
  "extra": "Ha d'impedir les funcions dels agents."
 },
 {
  "situacio": "Desobediéncia greu",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "N02",
  "actes resta": null,
  "extra": "Ha d'impedir les funcions dels agents."
 },
 {
  "situacio": "Receptació",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": null,
  "actes resta": null,
  "extra": "Ha d'haver previament un delicte contra el patrimoni.\nEl comet la persona que compra o es beneficia SENSE haver participat en el delicte precedent.\nL'autor ha de saber o sospitar de la procedència il·licita de l'objecte."
 },
 {
  "situacio": "Vermell",
  "actes autor": "N01,A55,A109",
  "actes perjudicat": null,
  "actes resta": null,
  "extra": "Fer copia del requeriment de detenció\nOmplir el llibre de detinguts"
 },
 {
  "situacio": "Estafa",
  "actes autor": "N09,A108",
  "actes perjudicat": "N02,A17",
  "actes resta": null,
  "extra": "Ha d'haver: ànim de lucre i engany suficient.\nEs considera estafa fer servir targetes de crèdit o dèbit."
 },
 {
  "situacio": "Estafa +400€",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "N02,A17,G30",
  "actes resta": null,
  "extra": "Ha d'haver: ànim de lucre i engany suficient.\nEs considera estafa fer servir targetes de crèdit o dèbit."
 },
 {
  "situacio": "Danys",
  "actes autor": "N09,A108",
  "actes perjudicat": "N02,A17",
  "actes resta": "A33,A31",
  "extra": null
 },
 {
  "situacio": "Danys +400€",
  "actes autor": "N01,A108,A109",
  "actes perjudicat": "N02,A17",
  "actes resta": "A33,A31",
  "extra": null
 },
 {
  "situacio": "Lesions",
  "actes autor": "N09,N10,A35",
  "actes perjudicat": "N02,A18,N10",
  "actes resta": "N10",
  "extra": null
 },
 {
  "situacio": "Conduir sota influència alcohol",
  "actes autor": "T100",
  "actes perjudicat": null,
  "actes resta": null,
  "extra": "Taxa > 0,43"
 },
 {
  "situacio": "Alcoholèmia penal",
  "actes autor": "T101,A21,T102,T100,A13,T104",
  "actes perjudicat": null,
  "actes resta": null,
  "extra": null
 },
 {
  "situacio": "Negativa proves alcohol\/drogues",
  "actes autor": "A101,A21,T102,N01,T100,T104",
  "actes perjudicat": null,
  "actes resta": null,
  "extra": null
 }
]
}