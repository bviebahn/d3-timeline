import { PointEvent, SpanEvent } from "./types";

const htwData: (SpanEvent | PointEvent)[] = [
  {
    id: "1",
    start: "1897",
    end: "1933",
    weight: 2,
    title: "AEG an der Oberspree",
    text: "Für lange Zeit ist die 1598 urkundlich erstmals erwähnte »Schöne Weyde« eine ländlich geprägte Gegend am nördlichen Ufer der Spree. Das älteste nachweisbare Gehöft, der 1682 gegründete „Quappenkrug“, wird als Bauernhof mit Gastwirtschaft geführt. Im Jahr 1814 erwirbt Oberfinanzrat Reinbeck das Anwesen und lässt das Lokal schlossartig ausbauen. Er benennt es nach seiner Frau Wilhelmine „Wilhelminenhof“. Diesen Namen führt ab 1830 auch der erweiterte Gutsbezirk, in dem Mitte des 19. Jahrhunderts insgesamt 116 Menschen leben. Im Jahr der Reichsgründung 1871 geht aus dem Wilhelminenhof der Ort Oberschöneweide hervor. 1889 werden die Ländereien des alten Guts verkauft und parzelliert.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705326/01-04b_kwo-kohlenplatz-1904_uuqwzm.jpg",
  },
  {
    id: "2",
    start: "1933",
    end: "1945",
    weight: 2,
    title: "Kriegsproduktion und Zwangsarbeit",
    text: "Auch im KWO gibt es während der NS-Zeit Anhänger_innen und Gegner_innen des Nationalsozialismus. Es sind vor allem KPD-Mitglieder, die sich auf dem Werksgelände organisieren und zum Widerstand gegen das Regime aufrufen.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638710659/19331945-menschen-produktionshalle-01-1920x_jk1lze.jpg",
  },
  {
    id: "3",
    start: "1945",
    end: "1990",
    weight: 2,
    title: "Kabel für den Sozialismus",
    text: "Nach dem Ende des Zweiten Weltkriegs liegt die Konzernzentrale der AEG, zu der auch das KWO gehört, im sowjetisch besetzten Teil von Berlin.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705333/03-03b_neubau-spreehalle-1961-02_pre5sw.jpg",
  },
  {
    id: "4",
    start: "1990",
    end: undefined,
    weight: 2,
    title: "Vom Kabelwerk zur Denkfabrik",
    text: "Der Wandel des Quartiers zwischen Wilhelminenhofstraße und Spreelauf lässt sich auch an diesem Dreisatz ablesen. Ein bedeutendes Gründerzentrum der Industriemoderne hat sich in einen modernen, lebendigen Hochschulstandort verwandelt: 2009 wird der Campus Wilhelminenhof der Hochschule für Technik und Wirtschaft Berlin eröffnet.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638710851/seit-1990-produktion-hallenblock-ii-01-1920x_zcwj8k.jpg",
  },
  // {
  //   id: "5",
  //   date: "1814",
  //   topic: "Menschen",
  //   title: "Wilhelminenhof",
  //   text: "Im Jahr 1814 erwirbt Oberfinanzrat Reinbeck das Anwesen und lässt das Lokal schlossartig ausbauen. Er benennt es nach seiner Frau Wilhelmine „Wilhelminenhof“.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-02_gruss-aus-wilhelminenhof-1896-postkarte-htw_fz3hiy.jpg",
  // },
  // {
  //   id: "6",
  //   date: "1871",
  //   topic: "Ort",
  //   title: "Oberschöneweide",
  //   text: "Im Jahr der Reichsgründung geht aus dem Wilhelminenhof der Ort Oberschöneweide hervor.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-02_gruss-aus-wilhelminenhof-1896-postkarte-htw_fz3hiy.jpg",
  // },
  // {
  //   id: "7",
  //   date: "1889",
  //   topic: "Ort",
  //   title: "Verkauf des Wilhelminenhofs",
  //   text: "Die Ländereien des alten Guts werden verkauft und parzelliert.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-02_gruss-aus-wilhelminenhof-1896-postkarte-htw_fz3hiy.jpg",
  // },
  // {
  //   id: "8",
  //   date: "1886",
  //   topic: "Produktion",
  //   title: "AEG an der Oberspree",
  //   text: "Seit 1886 produziert die Allgemeine Electricitäts-Gesellschaft (AEG) in der Berliner Innenstadt Güter für die Elektrizitätswirtschaft. Dank des rasanten Wachstums muss AEG-Gründer Emil Rathenau bald nach neuen Produktionsstandorten suchen. Ein Gelände am Spreelauf in Oberschöneweide, weit vor den Toren der Stadt, erweist sich dank der guten Anbindung an Schienen- und Wasserwege als optimale Wahl.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-01_Kraatz-SBB_IIIC_Kart_N_3857_von_1871_Ausschnitt_hwwt3l.jpg",
  // },
  // {
  //   id: "9",
  //   date: "1895",
  //   topic: "Ort",
  //   title: "Industriestandort Oberschöneweide",
  //   text: "1895 beginnt die Bebauung des Geländes zwischen Wilhelminenhofstraße und Spree mit der Errichtung des ersten Drehstromkraftwerks in Deutschland.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705326/01-04b_kwo-kohlenplatz-1904_uuqwzm.jpg",
  // },
  {
    id: "10",
    date: "1897",
    topic: "Produktion",
    title: "Entstehung des Kabelwerk Oberspree (KWO)",
    text: "Im Kabelwerk Oberspree entstehen vor allem Kabel, Drähte und Gummifabrikate für die heimische Elektroindustrie. Angesichts steigender Kupferpreise wird die Produktion auf Blei- und Aluminiumkabel ausgedehnt. Eine wichtige Rolle spielt das Exportgeschäft. So liefert die AEG ihre Erzeugnisse nach England oder Südafrika. Doch auch die Forschung kommt nicht zu kurz. Ingenieure des KWO sind maßgeblich an der Entwicklung moderner Funk- und Fernmeldetechnik beteiligt und forschen nach Möglichkeiten zur Herstellung von synthetischem Kautschuk. In den 1920er Jahren startet im NAG-Gebäude die Bildröhrenproduktion für Telefunken, einer gemeinsamen Unternehmenstochter von AEG und Siemens. Das Fernsehzeitalter beginnt in Oberschöneweide.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-04c_kwo-trommellager-vor-halle-1-1912_bdfljk.jpg",
  },
  {
    id: "11",
    date: "1905",
    topic: "Ort",
    title: "Gebäude der Nationalen Automobil-Gesellschaft",
    text: "1905 entsteht das Gebäude der Nationalen Automobil-Gesellschaft* (NAG). Die Fabriken, ausgestattet mit elektrischer Antriebs- und Beleuchtungstechnik, gehören zu den modernsten Industrieanlagen jener Zeit. Ihre Fassaden aus gelbem Ziegelstein, dem sogenannten „Schöneweider Klinker“, prägen das Erscheinungsbild des gesamten Quartiers.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705326/01-04b_kwo-kohlenplatz-1904_uuqwzm.jpg",
  },
  {
    id: "12",
    date: "1919",
    topic: "Ort",
    title: "Kleinstadt Oberschöneweide",
    text: "Mit der Produktivität wächst auch die Bevölkerungszahl: Dank des Zuzugs von Arbeitskräften und deren Familien entwickelt sich Oberschöneweide rasch zu einer Kleinstadt, die im Jahr 1919 rund 25.000 Einwohnerinnen und Einwohner zählt.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-04c_kwo-trommellager-vor-halle-1-1912_bdfljk.jpg",
  },
  {
    id: "13",
    date: "1920",
    topic: "Ort",
    title: "Anschluss an Berlin",
    text: "Oberschöneweide wird zu einem Ortsteil von Groß-Berlin.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-04c_kwo-trommellager-vor-halle-1-1912_bdfljk.jpg",
  },
  {
    id: "14",
    date: "1923",
    topic: "Menschen",
    title: "Ein Unternehmen mit Verantwortung",
    text: "Für die Werkspeisung der Arbeiter hatte die AEG schon im Ersten Weltkrieg eigene landwirtschaftliche Betriebe gegründet. Auch in den Anfangsjahren der Weimarer Republik sorgt die Firma für ihre Belegschaft. Denn die Not ist groß. Viele Männer sind im Krieg gefallen oder als Invaliden zurückgekehrt. Nicht selten nehmen nun Frauen, die ihre Familien schon während der Kriegsjahre ernähren mussten, deren Arbeitsplatz im KWO ein. Doch der internationale Boykott deutscher Erzeugnisse nach dem Krieg bringt auch die AEG in wirtschaftliche Bedrängnis. Während der Inflation 1923 wird der Lohn teilweise in Naturalien ausgezahlt.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-08_sortieren-von-pressteilen-1913_zeszux.jpg",
  },
  {
    id: "15",
    date: "1892",
    topic: "Menschen",
    title: "Emil und Mathilde Rathenau",
    text: "Der Ingenieur erkennt als einer der ersten deutschen Unternehmer die wirtschaftlichen Chancen der Elektrizität. 1892 gründet das Ehepaar die wohltätige „Mathilde-Rathenau-Stiftung“ zur Unterstützung von AEG-Arbeiterinnen sowie der Angehörigen von verstorbenen Angestellten der AEG und der Berliner Elektrizitäts-Werke. Die Stiftung unterhält einen Pensions- und Unterstützungsfonds, übernimmt die Kosten für medizinische Behandlungen im Krankheitsfall und finanziert Ferienaufenthalte von Kindern. Bis heute erinnert die Mathildenstraße in Oberschöneweide an Mathilde Rathenau.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705334/01-12_emil_mathilde-rathenau_iv07dr.jpg",
  },
  {
    id: "16",
    date: "1907",
    topic: "Menschen",
    title: "Peter Behrens",
    text: "Peter Behrens gehört mit seiner Idee des einheitlichen Erscheinungsbildes eines Unternehmens zu den Pionieren der Moderne. Von 1907 bis 1914 ist er als gestalterischer Beirat der AEG tätig und entwickelt in dieser Position das weltweit erste Corporate Design für eine Firma. Dazu zählen neben dem Firmenlogo auch das Design der Produkte und die Architektur der Fabrikgebäude.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-13-Peter_Behrens_um_1913_b48kgi.jpg",
  },
  {
    id: "17",
    date: "1916",
    topic: "Menschen",
    title: "Jan Czochralski",
    text: "1916 taucht der polnische Chemiker Jan Czochralski im Metall-Labor des KWO seine Schreibfeder aus Versehen in einen Tiegel mit flüssigem Zinn. Beim Herausziehen bildet sich ein Metallfaden, ein sogenannter Einkristall. Czochralskis zufällige Entdeckung wird zur Basis eines modernen industriellen Tiegelziehverfahrens zur Herstellung von Einkristallen. Das sogenannte Czochralski-Verfahren dient bis heute zur Fertigung von sogenannten Silizium-Ingots (zylinderförmige Barren), die für Mikrochips, in der Mikrosystemtechnik oder für Solarmodule benötigt werden.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705332/01-14_Czochralski-portrait_lrrjpo.jpg",
  },
  {
    id: "18",
    date: "1939",
    topic: "Produktion",
    title: "AEG als Rüstungslieferant",
    text: "Mit Beginn des Zweiten Weltkriegs im September 1939 wird die Fertigung der AEG auf Kriegsproduktion umgestellt. Das Unternehmen gehört zusammen mit Krupp zu den wichtigsten Rüstungslieferanten Deutschlands.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639059856/19331945-produktion-pressenarbeiter-ca-1934-01-1920x_bp8gvr.jpg",
  },
  {
    id: "19",
    date: "1933",
    topic: "Produktion",
    title: "Die AEG als Rüstungsbetrieb",
    text: "Nach dem Machtantritt des NS-Regimes im Januar 1933 produziert das Kabelwerk Oberspree (KWO) zunächst Verkabelungen für neue Autobahnstrecken, aber auch die Lautsprecheranlage für die Olympischen Spiele 1936 in Berlin. Doch nach Kriegsbeginn wird das KWO zum Rüstungsbetrieb und fertigt nun vor allem Fernmelde- und Starkstromkabel für die Wehrmacht und ihre Zulieferer. Das Chemieunternehmen IG Farben beauftragt das KWO mit Herstellung und Lieferung von Starkstromkabeln für den Aufbau einer Fabrik in Auschwitz. Mit Kriegsverlauf nehmen die Luftangriffe auf den Standort in Oberschöneweide zu. Trotzdem läuft die Produktion weiter. Unter der Maschinenhalle des benachbarten Kraftwerks Oberspree befindet sich ein Luftschutzbunker, in den die Belegschaft während der Angriffe flüchtet, um anschließend direkt wieder an ihre Arbeitsplätze in den Werkhallen zurückzukehren.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705330/02-04_volksempfaenger-falkensee_phrzsp.jpg",
  },
  {
    id: "20",
    date: "1933",
    topic: "Menschen",
    title: "Alles für den „Endsieg“",
    text: "Direkt nach Kriegsbeginn werden 700 KWO-Mitarbeiter zur Wehrmacht eingezogen. Um die Produktion aufrechtzuerhalten, arbeiten in den Fabriken nun vor allem Frauen. Im weiteren Verlauf des Krieges werden zudem Kriegsgefangene sowie Deportierte aus den besetzten Gebieten in ganz Europa zur Zwangsarbeit verpflichtet. Ihrem Schicksal widmet sich eine Ausstellung im nahegelegenen Dokumentationszentrum NS-Zwangsarbeit in Schöneweide. Es befindet sich auf dem Gelände des einzigen noch weitgehend erhaltenen ehemaligen NS-Zwangsarbeiterlagers, das während des Zweiten Weltkriegs zu den mehr als 3.000 über das Stadtgebiet verteilten Sammelunterkünften für Zwangsarbeiter gehörte. Seit 2006 informiert dort die Stiftung Topographie des Terrors an historischem Ort über das System Zwangsarbeit.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-08_sortieren-von-pressteilen-1913_zeszux.jpg",
  },
  {
    id: "21",
    date: "1945",
    topic: "Ort",
    title: "Ein Land in Trümmern",
    text: "Gegen Ende des Zweiten Weltkrieges wird auch Oberschöneweide zum Ziel alliierter Bombenangriffe. Während die Schäden in den Wohnvierteln im Vergleich zur Berliner Innenstadt überschaubar bleiben, gerät das Gelände der KWO unter starken Beschuss. Bombentreffer reißen große Löcher in die Fassaden, und die nach Plänen von Peter Behrens im Jahr 1916 errichtete Spreehalle am Ufer wird völlig zerstört.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705330/02-02d_gebaeude-A4-nach-januar-1944-04_qcjwi3.jpg",
  },
  {
    id: "22",
    date: "1948",
    topic: "Produktion",
    title: "SAG",
    text: "Das KWO wird in eine Sowjetische Aktiengesellschaft (SAG) umgewandelt.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705333/02-02b_gebaeude-A4-nach-januar-1944-02_pbgpfp.jpg",
  },
  // {
  //   id: "23",
  //   start: "1946",
  //   end: "1954",
  //   title: "SAG-VEB-Kombinat",
  //   text: "1946 werden von der Sowjetischen Militäradministration sogenannte Sowjetische Aktiengesellschaften (SAG) gegründet. Diese unter Kontrolle der UdSSR stehenden Unternehmen dienen dem Reparationsausgleich für erlittene Kriegsschäden. 1954 enden die Reparationszahlungen. Die Unternehmen werden verstaatlicht und in Volkseigene Betriebe (VEB) verwandelt. Damit überführt die 1949 gegründete DDR die Produktionsmittel aus privater Hand in den Besitz des Volkes. Über den Zusammenschluss von Volkseigenen Betrieben mit ähnlichem Produktionsprofil entstehen Kombinate. Dadurch soll der Wettbewerb egalisiert und das Potenzial für Forschung und Entwicklung genutzt werden.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705333/02-02b_gebaeude-A4-nach-januar-1944-02_pbgpfp.jpg",
  // },
  // {
  //   id: "24",
  //   start: "1958",
  //   end: "1961",
  //   title: "VEB KWO",
  //   text: "Auch wenn von Spreehalle und Hallenblock II nur noch die Umfassungsmauern stehen, können die übrigen, weitgehend erhaltenen Werkshallen rasch wieder genutzt werden. 1958 bis 1961 wird die neue Spreehalle West* im Stil der sachlich-funktionalen Industriemoderne errichtet.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705333/02-02b_gebaeude-A4-nach-januar-1944-02_pbgpfp.jpg",
  // },
  {
    id: "25",
    date: "1958",
    topic: "Produktion",
    title: "Starkstromkabel und Wäscheleine",
    text: "Die Nachkriegsproduktion im KWO konzentriert sich zunächst auf Güter für den täglichen Bedarf der notleidenden Bevölkerung: Löffel, Töpfe, Bratpfannen, Nägel und Feuerzeuge. Gleichzeitig gilt es, das stark zerstörte Kabelnetz Berlins wiederherzustellen. Schon 1958 kommen 85 Prozent aller in der DDR hergestellten Starkstromkabel aus dem KWO. Aber auch Gebrauchsgüter für den Massenbedarf, darunter Hula-Hoop-Reifen, Wäscheleinen und Gartenschläuche, werden in Oberschöneweide produziert.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065195/19451990-produktion-arbeiterinnen-ringkerne-01-1920x_znt4cl.jpg",
  },
  {
    id: "26",
    date: "1967",
    topic: "Menschen",
    title: "Soziale Verantwortung",
    text: "1967 wird in der DDR die Fünf-Tage-Woche eingeführt. Zum Ausgleich schafft die Regierung mehrere christliche Feiertage ab und lastet die Maschinen durch Schichtdienst stärker aus. Zur Steigerung der Produktivität werden die Belegschaften der Betriebe mit zahlreichen Anreizen und Angeboten motiviert. So unterhält das KWO betriebseigene Kindergärten und Ferienlager, unterstützt Sportvereine, darunter auch den 1. FC Union Berlin, und betreibt ein Klubhaus.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065195/19451990-produktion-arbeiterinnen-ringkerne-01-1920x_znt4cl.jpg",
  },
  {
    id: "27",
    date: "2009",
    topic: "Ort",
    title: "Eröffnung des Campus Wilhelminenhof der HTW",
    text: "Nach der Wiedervereinigung 1990 bricht die Produktion im KWO ein. 1992 übernimmt die britische Firma BICC Cables Ltd. das Werk. Doch 1997 wird der Betrieb endgültig eingestellt. Auf dem Areal eröffnet die HTW Berlin 2009 den Campus Wilhelminenhof. Mit den Disziplinen Maschinenbau, Elektrotechnik, Kommunikationstechnik und Design schreibt nun die Hochschule in Lehre und Forschung die große Geschichte des Ortes fort.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065564/seit-1990-produktion-hallenblock-ii-01-1280x_xjztsy.jpg",
  },
  {
    id: "28",
    date: "2005",
    topic: "Ort",
    title:
      "Beginn der Bauarbeiten am Campus Wilhelminenhof",
    text: "Nachdem alle Versuche fehlschlagen, auf dem KWO-Gelände neues Gewerbe anzusiedeln, fällt 2004 die Entscheidung, das Areal in einen Hochschulcampus umzuwandeln. 2005 beginnen die Bauarbeiten. Aufgrund der starken Umweltbelastungen in Boden und Mauerwerk wird die 1928 nach dem Entwurf von Ernst Ziesel errichtete Fernmeldekabelfabrik, einer der bedeutendsten Industriebauten der Moderne, abgerissen - angesichts des anerkannten Denkmalwerts eine höchst umstrittene Entscheidung. An den „Ziesel-Bau“ erinnern heute zwei Neubauten. Sämtliche Altbauten des Campus Wilhelminenhof stehen unter Denkmalschutz und tragen noch die Spuren ihrer einstigen Nutzung; die Straßen auf dem Gelände sind nach den Architekten der AEG-Fabrikhallen benannt.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065491/seit-1990-ort-tor-4-01-1920x_l2apwg.jpg",
  },
  {
    id: "29",
    date: "1998",
    topic: "Menschen",
    title: "Wende und Wandel",
    text: "Es gibt nur wenige Orte, die den Übergang vom Industriezeitalter zur Wissensgesellschaft besser verkörpern als Schöneweide. Doch dieser Wandel vollzog sich anfangs nicht ohne Verluste. Mit der Schließung der Fabriken hatten viele Menschen ihre Arbeit verloren und den Stadtteil verlassen. Leerstand und Verfall prägten das Viertel. Doch seit 1998 steigt die Einwohnerzahl wieder. In den renovierten Straßen mit ihren Läden und Cafés herrscht neues Leben. Wo früher die Maschinen und Fließbänder rotierten, wird heute gelernt und geforscht. Die HTW Berlin ist ein Teil dieser Erfolgsgeschichte.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065491/seit-1990-ort-tor-4-01-1920x_l2apwg.jpg",
  },
];

export default htwData;
