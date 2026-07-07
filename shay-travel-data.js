const HOME = { flag: "🇮🇱", country: "Israel", city: "Tel Aviv (home)" };

const countries = [
  {
    flag: "🇮🇱", name: "Israel", city: "Tel Aviv", region: "middleeast",
    lat: 32.0853, lng: 34.7818,
    visits: ["Home base 2005–present", "Ben Gurion Airport (TLV) – departure point for all trips"],
    note: "Home country · Tel Aviv · Ben Gurion Airport (TLV)"
  },
  {
    flag: "🇳🇿", name: "New Zealand", city: "Auckland", region: "oceania",
    lat: -36.8509, lng: 174.7645,
    visits: [
      "Jan 2024 (Ignition 2024 – NZ regional burn; KiwiBurn 2024 – Hunterville regional burn; during Dec 2023–May 2024 NZ stay)",
      "Dec 29, 2023–May 6, 2024 (Auckland & NZ road trip – Etihad EY594 TLV→AUH + EY862 AUH→PVG + Air NZ NZ288 PVG→AKL Dec 29; Ignition + KiwiBurn Jan 2024; Kahurangi NP, Nelson Lakes, Milford, Coromandel; departed Qatar AKL→FRA May 6)",
      "Nov 2024 (Re:Gen 2024 – NZ regional burn, 3 days; during Nov 2024–May 2025 NZ stay)",
      "Jan 2025 (KiwiBurn 2025 – NZ regional burn, 7 days)",
      "Apr 2025 (Northern UnBurn 2025 – NZ regional burn, 4 days)",
      "Nov 19, 2024–May 12, 2025 (Auckland & Nelson·Tauranga – Air NZ NZ90 NRT→AKL Nov 19; Re:Gen Nov 2024; KiwiBurn + Northern UnBurn 2025; departed China Eastern MU780 AKL→PVG May 12)",
      "Jan 2026 (Ignition 2026 – NZ regional burn, 7 days; KiwiBurn 2026 – NZ regional burn, 6 days)",
      "Nov 16, 2025–May 5, 2026 (Nelson Lakes · Kahurangi – Qatar AMS→DOH→AKL Nov 16; Ignition + KiwiBurn 2026 Jan; departed Qantas QF3 AKL→JFK May 6)"
    ],
    note: "Extensive road trip & camping · KiwiBurn 2024/2025/2026 · Ignition 2024/2026 · Re:Gen 2024 · Northern UnBurn 2025"
  },

  {
    flag: "🇦🇹", name: "Austria", city: "Vienna", region: "europe",
    lat: 48.2082, lng: 16.3738,
    visits: ["Sep 18–24, 2018 (Vienna – easyJet U24733 BER SXF→VIE Sep 18 18:55; Wizzair W62811 VIE→TLV Sep 24 06:05→10:30; with Nadja Schreiber; Schönburn 2018 at Schloss Wetzlas – no ticket email found)", "~Mar 1–2, 2019 (Vienna – Vienna Burning Ball)", "Sep 15–16, 2019 (Vienna – FlixBus side trip from Zurich; Schönburn 2019 at Schloss Wetzlas)", "Jun 29–Jul 4, 2020 (Vienna – arrived by FlixBus ~Jun 29; departed Ryanair FR7161 VIE→TLV Jul 4 13:00–17:20)", "Sep ~22–28, 2020 (Vienna – transit from Berlin; Schönburn 2020 at Schloss Wetzlas; departed ÖBB D720 Wien Hbf→München Sep 28)", "Oct 30–Nov 3, 2020 (Vienna – arrived Wiener Linien Airport Lines return ticket Oct 30; departed ÖBB RJX 564 Wien→Innsbruck→Zürich Nov 3 11:30)", "Sep 8–12, 2021 (Schönburn 2021, Schloss Wetzlas; during Vienna Aug 31–Sep 26 stay)", "Aug 31–Sep 26, 2021 (Vienna – Omio Budapest→Vienna Aug 31; DB Bahn Sep 14 Berlin trip; Aegean A3863+A3928 VIE→TLV Sep 26 via Athens)", "Jan 15–26, 2022 (Ryanair FR7161 VIE→TLV Jan 26, delayed 2h+)", "Feb 7–27, 2022 (Ryanair TLV→VIE Feb 7; VIE→TLV Feb 27)", "Aug 5–23, 2022 (Austrian GOT→VIE Aug 5 19:55)", "Sep ~7–11, 2022 (Schönburn 2022, Böllerbauer; during Vienna Sep 7–Jan 2023 stay)", "Sep 7, 2022–Jan 5, 2023 (Austrian SFO→FRA→VIE Sep 7; El Al LY362 VIE→TLV Jan 5 2023)", "Feb 23–Mar 5, 2023 (Vienna – ÖBB ZRH→VIE Feb 23; Austrian OS857 VIE→TLV Mar 5)", "Sep 21–29, 2023 (Vienna – FlixBus BER→VIE Sep 21; El Al VIE→TLV Sep 29)", "Oct 28–Nov 1, 2023 (Vienna – Austrian TGD→VIE Oct 28; Wizzair VIE→LCA Nov 1)", "Aug 7–11, 2024 (Schönburn 2024, Böllerbauer; during Vienna Aug 5–22 stay)", "Aug 2024 (Vienna – Ryanair ARN→VIE)", "Aug 6–10, 2025 (Schönburn 2025, Böllerbauer; during Vienna Jul 27–Aug 15 stay)", "Jul 27–Aug 15, 2025 (Vienna – drove from Stockholm Jul 27; OS207 VIE→FRA + UA59 FRA→SFO Aug 15)", "Oct 14–23, 2025 (Airbnb, 9 nights)"],
    note: "Frequent Ryanair TLV ↔ VIE hub · Schönburn regional burn (Schloss Wetzlas 2018–2021; Böllerbauer 2022–)"
  },
  {
    flag: "🇫🇷", name: "France", city: "Chamonix / Paris", region: "europe",
    lat: 45.9237, lng: 6.8694,
    visits: ["May 12–14, 2017 (What The Farm 2017, Ferme d'Antioche, Vauxaillon, Aisne – regional burn)", "Jun 8–10, 2018 (What The Farm 2018, Ferme d'Antioche, Vauxaillon – overlapping with Brussels trip)", "May 31–Jun 2, 2019 (What The Farm 2019, Ferme d'Antioche, Vauxaillon – side trip from Zurich)", "~Mar 12–31, 2019 (Chamonix – car rental Mar 12; Chamonix Chalets Ltd payment Mar 12; returned ZRH→TLV Mar 31)", "Apr 14–17, 2022 (What The Farm 2022, Ferme d'Antioche, Vauxaillon)", "May 18–21, 2023 (What The Farm 2023, Ferme d'Antioche, Vauxaillon)", "May 9–12, 2024 (What The Farm 2024, Ferme d'Antioche, Vauxaillon; Normandy May 13–16; drove to Brussels May 16)"],
    note: "What The Farm regional burn – Ferme d'Antioche, Vauxaillon, Aisne · Chamonix Mar 2019"
  },
  {
    flag: "🇲🇹", name: "Malta", city: "Valletta / Luqa", region: "europe",
    lat: 35.8997, lng: 14.5147,
    visits: ["Nov 26–30, 2019 (Malta – Air Malta KM491 ZRH→MLA Nov 26 17:40→20:00; returned KM0490 MLA→ZRH Nov 30 14:25→16:50)"],
    note: "Air Malta KM491 from Zurich · Malta Luqa International Airport (MLA)"
  },
  {
    flag: "🇨🇳", name: "China", city: "Shanghai / Dragon Burn area", region: "asia",
    lat: 31.2304, lng: 121.4737,
    visits: ["Apr 24–May 13, 2019 (Shanghai + Dragon Burn – Aeroflot SU507 TLV→SVO Apr 24, SU208 SVO→PVG Apr 25; Dragon Burn regional burn (late Apr); Shanghai Airbnb 'The YongKang Hidden Penthouse' May 5–7; return SU209 PVG→SVO May 13, SU504 SVO→TLV May 13)"],
    note: "Aeroflot via Moscow · Dragon Burn regional burn · Shanghai Pudong (PVG)"
  },
  {
    flag: "🇩🇪", name: "Germany", city: "Berlin / Munich / Frankfurt", region: "europe",
    lat: 52.5200, lng: 13.4050,
    visits: ["Feb 25–29, 2016 (Berlin – EasyJet EZY4784 TLV→BER SXF Feb 25; Burning Bär – Plug and Play; car rental; Plus Berlin hostel Feb 28–29)", "~Jun 2017 (Berlin – KiezBurn 2017 regional burn)", "~2017 (Burning Bar 2017 – Germany; exact dates unknown)", "Jun 18–30, 2018 (Berlin – Turkish Airlines TLV→IST→BER Jun 18; KiezBurn 2018 regional burn (art installer/Wonderer volunteer); Eurowings BER→BCN Jun 30)", "Sep 12–18, 2018 (Berlin – SFO→YVR Sep 11 (AC8839) + YVR→FRA→BER TXL Sep 12 (AC9637); with Nadja Schreiber; Ponyhof 2018 regional burn; easyJet U24733 BER SXF→VIE Sep 18)", "Oct 7, 2018 (Berlin TXL – Aegean A30929 TLV→ATH→BER Oct 7; with Nadja Schreiber)", "Mar 5–12, 2019 (Berlin – ÖBB Nightjet Wien→BER arr Mar 5; ZBB / Burning Bar 2019; FlixBus BER→ZRH Mar 12)", "May 30–Jun 25, 2019 (Berlin/Zurich – SWISS TLV→ZRH May 30; KiezBurn 2019 regional burn ~Jun 20–25 Berlin; Lufthansa LH185 TXL→FRA→TLV Jun 25)", "Sep 12–15, 2019 (Ponyhof 2019 regional burn – Germany; during Zurich Sep 5–24 trip)", "Oct 22–28, 2019 (Berlin – Austrian OS858/OS239 TLV→VIE→TXL Oct 22–23; Hamburn 2019 (tickets.hamburn.de); PREMIUM Hostel; Aegean TXL→ATH Oct 28)", "Jun 21–~26, 2020 (Frankfurt/Berlin – Deutsche Bahn ICE 798 Frankfurt(Main)Süd→Berlin Hbf Jun 21; ~4 nights Berlin)", "Sep 9–~21, 2020 (Berlin SXF – Ryanair FR6473 TLV→SXF Sep 9; Ponyhof 2020 regional burn; Zum Brennenden Löwen 2020 (tickets.hamburn.de))", "Sep 28, 2020 (Munich – ÖBB D720 Wien Hbf→München Hbf 15:42–21:36; HI Munich Park Youth Hostel)", "Sep 29–Oct ~6, 2020 (Markdorf/Bodensee – Airbnb 'Mitten in Markdorf', Baden-Württemberg)", "Aug ~20–26, 2021 (Berlin – KiezBurn 2021; COVID test Aug 23; Dark Matter Berlin Aug 28; Ryanair to Budapest ~26–27)", "Jul 11–21, 2022 (Berlin – Ryanair FR2528 MAD→BER Jul 11; KiezBurn 2022 regional burn; FlixBus to Gothenburg Jul 21)", "Aug 6–24, 2023 (Berlin – Eurowings EW8221 GOT→BER Aug 6; KiezBurn 2023 regional burn)", "Sep 13–21, 2023 (Berlin – BA286 delayed arrival; FlixBus BER→VIE Sep 21)", "May 6–8, 2024 (Frankfurt – Qatar AKL→FRA via DOH May 6)", "Jun 18–Jul 17, 2024 (Berlin – BA BA0988 LHR→BER Jun 18; KiezBurn 2024 regional burn; DB train BER→ZRH Jul 17)", "Jul 7, 2025 (Sofia→Berlin, Ryanair)", "Oct 29, 2025 (Eurowings, Düsseldorf)"],
    note: "Berlin · Burning Bär 2016 · KiezBurn 2017/18/19/21/22/23/24 · ZBB 2019 · Ponyhof 2018/19/20 · Hamburn 2019 · Zum Brennenden Löwen 2020"
  },
  {
    flag: "🇨🇭", name: "Switzerland", city: "Zurich", region: "europe",
    lat: 47.3769, lng: 8.5417,
    visits: ["~Mar 2019 (Zurich – SWISS return LX256 ZRH→TLV Mar 31)", "May 30–Jun 25, 2019 (Zurich – SWISS TLV→ZRH May 30; Airbnb Salgesch Valais Jun 8–9)", "Jul 6–21, 2019 (Zurich hub – SWISS TLV→ZRH→MAD Jul 6; then BCN→ZRH→CPH Jul 21)", "Sep 5–24, 2019 (Zurich – SWISS TLV→ZRH Sep 5; El Al ZRH→TLV Sep 24)", "Nov 18–Dec 16, 2019 (Zurich – SWISS LX253 TLV→ZRH Nov 18 10:10; side trip Malta Nov 26–30 (Air Malta KM491 ZRH→MLA Nov 26; KM0490 MLA→ZRH Nov 30); returned ZRH→TLV Dec 16)", "Jun 26–~29, 2020 (Zurich – DB BUS42227 München ZOB→Zürich HB Jun 26 09:03–12:45)", "Oct 11–30, 2020 (Zurich – rooftop garden apartment; SBB Swiss trains Oct 26; Wiener Linien Airport Lines Oct 30)", "Nov 3–Dec 7, 2020 (Zurich – ÖBB RJX 564 + EC 164 Wien Hbf→Innsbruck→Zürich HB Nov 3 11:30–19:20; Turkish TK ZRH→TLV Dec 7)", "Feb 14–23, 2023 (Zurich – SWISS LX253 TLV→ZRH Feb 14 17:45 seat 37A; ÖBB ZRH→VIE Feb 23)", "Oct 2025 (Eurowings ZRH departure)"],
    note: "SWISS Airlines hub"
  },
  {
    flag: "🇩🇰", name: "Denmark", city: "Copenhagen", region: "europe",
    lat: 55.6761, lng: 12.5683,
    visits: ["Jul 14–26, 2016 (Copenhagen – Pegasus TLV→SAW→CPH; ~12 days; car rental; road trip; The Borderland 2016 regional burn)", "Jul 21–Aug 4, 2017 (Copenhagen – Gotogate TLV→CPH Jul 21; Airbnb Christianshavn Jul 21–22 (with Yulia); Avis car rental CPH Jul 21–Aug 3; The Borderland 2017 regional burn Jul 22–Aug 2; returned Aegean A3 CPH→ATH→TLV Aug 3–4 (luggage delayed))", "Jul 21–28, 2018 (Copenhagen – UIA PS780 TLV→KBP Jul 21, PS163 KBP→CPH Jul 21; The Borderland 2018 regional burn Jul 24–27)", "Jul 21–31, 2019 (Copenhagen – SWISS LX1278 ZRH→CPH Jul 21 (delayed, with Christina Welter); The Borderland 2019; Quality Hotel Høje Taastrup Jul 27; SWISS LX1273 CPH→ZRH + LX256 ZRH→TLV Jul 31)", "Jul 15–27, 2021 (Copenhagen – Air France AF1621 TLV→CPH Jul 15 direct; Revent 2021 regional burn; Airbnb Store Kongensgade 42A Jul 15–19; SWISS LX1267 CPH→ZRH Jul 27)", "Oct 2025 (Eurowings DUS→CPH)", "Nov 4, 2025 (Digital Tech Summit)"],
    note: "The Borderland 2016/17/18/19 (Denmark) · Revent 2021 · SWISS · UIA"
  },
  {
    flag: "🇬🇧", name: "United Kingdom", city: "London", region: "europe",
    lat: 51.5074, lng: -0.1278,
    visits: ["Jun 4–12, 2008 (London + Horsham – friend's wedding Jun 7; with Yana)", "Jul 12–20, 2010 (London – Eurolines from Amsterdam; side trips to Oxford Jul 15 and Horsham Jul 17–18; left Jul 20)", "Nov 9–15, 2017 (London – UIA PS778 TLV→KBP Nov 9, PS111 KBP→LGW Nov 9; Smart Camden Inn Hostel; London Decompression Nov 11–12; BA2762 LGW→AMS Nov 15)", "May 19–Jun 18, 2024 (London – FlixBus Brussels→London Victoria May 19; Burning Nest 2024 regional burn ~May 20–27 England; BA BA0988 LHR→BER Brandon Jun 18)", "May 13–Jun 20, 2025 (London Gatwick – China Eastern MU780 AKL→PVG May 12 + MU213 PVG→LGW May 13; Burning Nest 2025 regional burn ~Jun 2025; BA LHR→SOF Jun 20)", "Jun 9–22, 2026 (London – Air Transat TS122 YYZ→LGW Jun 8 22:45; Brighton Jun 12–14; Ryanair BS8PRL LTN→VNO Jun 22)"],
    note: "London + Horsham (Jun 2008, Jul 2010) · London Decompression 2017 · Burning Nest 2024/2025 (England)"
  },
  {
    flag: "🇧🇪", name: "Belgium", city: "Brussels", region: "europe",
    lat: 50.8503, lng: 4.3517,
    visits: ["Jul 7, 2010 (Brussels Charleroi – Ryanair FR6054 Venice Treviso (TSF)→CRL 08:35–10:10; with Nogah Senecky; 1 night en route to Amsterdam)", "Jan 11–18, 2018 (Brussels Airlines SN3294 TLV→BRU Jan 11, SN3291 BRU→TLV Jan 18 – business)", "Jun 8–10, 2018 (Brussels – Brussels Airlines SN3294 TLV→BRU Jun 8, SN3293 BRU→TLV Jun 10 – short business trip)", "Dec 2018 / Jan 2019 (Brussels Airlines – business)", "Apr 24, 2022 (Thalys Brussels-Midi → Amsterdam)", "May 16–19, 2024 (Brussels – arrived from Normandy May 16; FlixBus Brussels-North → London Victoria May 19)"],
    note: "Brussels Airlines · Thalys · FlixBus"
  },
  {
    flag: "🇪🇸", name: "Spain", city: "Barcelona / Madrid", region: "europe",
    lat: 40.4168, lng: -3.7038,
    visits: ["Sep 24–Oct 2, 2009 (Tenerife Norte – El Al LY393 TLV→BCN Sep 24; JK5234 BCN→TFN Sep 24 11:35; group trip)", "Oct 2–5, 2009 (Barcelona – UX9144 TFN→BCN Oct 2 18:50; Dalí museum Figueres; El Al LY394 BCN→TLV Oct 5)", "~Jul 3–9, 2017 (Nowhere 2017 – regional burn near Castejón de Monegros, Zaragoza)", "Jun 30–Jul 10, 2018 (Barcelona – Eurowings BER→BCN Jun 30; car rental; Nowhere 2018 Jul 3–8 near Castejón de Monegros; Turkish Airlines BCN→TLV Jul 10)", "Jul 6–21, 2019 (Madrid + Barcelona – SWISS TLV→ZRH→MAD Jul 6; Nowhere 2019 ~Jul 2–7 near Castejón de Monegros; Tarragona area; Renfe Tarragona→Barcelona-Sants Jul 14; BCN→ZRH Jul 21)", "Jul 1–11, 2022 (Madrid – Air Europa UX1302 TLV→MAD Jul 1 16:05→20:20; Nowhere 2022 near Castejón de Monegros; Ryanair FR2528 MAD→BER Jul 11 17:25)"],
    note: "Tenerife + Barcelona Sep 2009 · Nowhere burn 2017/18/19/22 (near Castejón de Monegros) · Barcelona Jun 2018 · Madrid+Barcelona Jul 2019 · Madrid Jul 2022"
  },
  {
    flag: "🇭🇺", name: "Hungary", city: "Budapest", region: "europe",
    lat: 47.4979, lng: 19.0402,
    visits: ["Jul 20–29, 2013 (Budapest – Wizz Air W6 2457 BUD→TLV Jul 29 15:45–20:00; SUN Festival; OnTour, 80 EUR Shay's share)", "Jul 15–29, 2014 (Budapest – El Al TLV→BUD Jul 15; Corvin Plaza Apartments & Suites; with Golan; departed TAP BUD→LIS Jul 29)", "Aug 27–31, 2021 (Budapest – Ryanair from Berlin; Bolt rides Aug 27–31; Omio Budapest Keleti→Vienna Central Aug 31)"],
    note: "Budapest · SUN Festival Jul 2013 (OnTour/Wizzair) · Jul 2014 (El Al + Boom trip) · Aug 27–31 2021 (Ryanair Berlin→Budapest; Omio→Vienna Aug 31)"
  },
  {
    flag: "🇸🇰", name: "Slovakia", city: "Košice / hiking", region: "europe",
    lat: 48.7164, lng: 21.2611,
    visits: ["Jul 16–20, 2014 (Slovakia hiking side trip from Budapest – CouchSurfing in Košice (host accepted Jul 16); \"tomorrow back to Hungary\" email Jul 19; during Budapest Jul 15–29 stay)"],
    note: "Hiking side trip from Budapest · CouchSurfing Košice · Jul 2014"
  },
  {
    flag: "🇮🇪", name: "Ireland", city: "Dublin", region: "europe",
    lat: 53.3498, lng: -6.2603,
    visits: ["Jul 4–18, 2023 (Dublin – Ryanair FR3103 AMS→DUB Jul 4 22:00; MayoBurn 2023 regional burn in County Mayo; Ryanair FR6070 DUB→GOT Jul 18 17:15)"],
    note: "Ryanair AMS→DUB · DUB→GOT · Jul 2023"
  },
  {
    flag: "🇳🇱", name: "Netherlands", city: "Amsterdam", region: "europe",
    lat: 52.3676, lng: 4.9041,
    visits: ["Oct 2007 (Amsterdam – visited during Europe trip; ~2 days)", "Jul 8–12, 2010 (Amsterdam – 4 days; Utrecht capoeira class with Jorine Jul 9; Eurolines bus AMS→London Jul 12)", "Jul 26–Aug 2, 2016 (Amsterdam – SAS SK553 CPH→AMS Jul 26; Where The Sheep Sleep 2016 regional burn; Budget Hotel Manofa Aug 1–2; with Itai Indig)", "Nov 15–22, 2017 (Amsterdam – BA2762 LGW→AMS Nov 15; Dutch Decompression 2017 (Radion club, with Yulia); EasyJet AMS→TLV Nov 22)", "Jun 19–Jul 4, 2023 (Amsterdam – Transavia HV5802 TLV→AMS Jun 19; Where The Sheep Sleep 2023 regional burn (Jul); Ryanair FR3103 AMS→DUB Jul 4)", "Nov 6, 2025 (KLM KL1276 CPH→AMS)", "Nov 8–9, 2025 (Dutch Decompression FLORASCEND Nov 8 + Playa Echoes afterparty Nov 9 – Radion, Amsterdam)"],
    note: "Amsterdam · Utrecht capoeira (Jul 2010) · Where The Sheep Sleep 2016/2023 · Dutch Decompression 2017"
  },
  {
    flag: "🇸🇪", name: "Sweden", city: "Gothenburg / Stockholm", region: "europe",
    lat: 57.7089, lng: 11.9746,
    visits: ["Jul 21–Aug 5, 2022 (Gothenburg – FlixBus from Berlin Jul 21; The Borderland 2022 regional burn (Jul); Austrian OS326 GOT→VIE Aug 5 19:55)", "Jul 18–Aug 6, 2023 (Gothenburg – Ryanair DUB→GOT Jul 18; The Borderland 2023 regional burn (Jul); Airbnb Lerum Jul 31–Aug 5; Eurowings EW8221 GOT→BER Aug 6)", "Jul 17–Aug 5, 2024 (Stockholm – SWISS LX1254 ZRH→ARN Jul 17; The Borderland 2024 regional burn (Jul, 10 days); Ryanair FR756 ARN→VIE Aug 5)", "Jul 16–27, 2025 (Stockholm – SAS BER→ARN Jul 16; The Borderland 2025 regional burn (Jul); drove to Vienna Jul 27)"],
    note: "Gothenburg (GOT) · Stockholm Arlanda (ARN) · The Borderland 2022/2023/2024/2025"
  },
  {
    flag: "🇧🇬", name: "Bulgaria", city: "Bansko / Sofia", region: "europe",
    lat: 42.6977, lng: 23.3219,
    visits: ["Jun 20–Jul 6, 2025 (Bansko – Airbnb, 16 nights)", "Jul 7, 2025 (Sofia → Berlin, Ryanair FR1149)"],
    note: "Bansko ski resort · Sofia Airport departure"
  },
  {
    flag: "🇲🇪", name: "Montenegro", city: "Tivat / Kotor / Žabljak / Budva", region: "europe",
    lat: 42.4304, lng: 19.2594,
    visits: ["Oct 10–28, 2023 (Tivat – Israir TLV→TIV Oct 10; Airbnb Tivat Oct 10–13; Kotor boat tour Oct 13; Apartmani Momčilo Žabljak Oct 13; Airbnb Prčanj Oct 15–16; SunSea Apartments Budva; Gospostina prima Budva; CroatiaBus Budva→Podgorica Oct 28; Austrian TGD→VIE Oct 28)"],
    note: "Tivat (TIV) · Kotor · Žabljak / Durmitor NP · Budva · Podgorica (TGD) · Oct 2023"
  },
  {
    flag: "🇨🇾", name: "Cyprus", city: "Larnaca", region: "europe",
    lat: 34.9229, lng: 33.6233,
    visits: ["Nov 1–6, 2023 (Larnaca – Wizzair VIE→LCA Nov 1; LCA→TLV Nov 6)"],
    note: "Larnaca (LCA) · Wizzair from Vienna Nov 2023"
  },
  {
    flag: "🇯🇵", name: "Japan", city: "Yokohama / Tokyo / Otsu", region: "asia",
    lat: 35.4437, lng: 139.6380,
    visits: ["Oct 13–16, 2024 (Hotel Resol Yokohama, Naka-ku)", "Oct 17, 2024 (Tokyo – SIDI Hub Social Night)", "Oct 23–25, 2024 (Otsu, near Kyoto – Koke Musu Inn)"],
    note: "Yokohama · Tokyo · Otsu (Shiga Prefecture, near Kyoto)"
  },
  {
    flag: "🇸🇨", name: "Seychelles", city: "Mahé Island", region: "africa",
    lat: -4.6796, lng: 55.4920,
    visits: ["Dec 8, 2020–Jan 22, 2021 (Mahé – Le Domaine de Bacova villa (SeyVillas); extended to Jan 22 confirmed Dec 22 by Le Domaine de Bacova)"],
    note: "Le Domaine de Bacova · Mahé · Diving with Blue Safari"
  },
  {
    flag: "🇿🇦", name: "South Africa", city: "Johannesburg · Hoedspruit (Kruger area)", region: "africa",
    lat: -26.2041, lng: 28.0473,
    visits: ["Jan 19–Feb 5, 2023 (Johannesburg Jan 19–20 – El Al LY51 TLV→JNB Jan 19; Hoedspruit / Kruger area Jan 20–Feb 4 – drove from JNB; Johannesburg Feb 4–5 – drove back; LY52 JNB→TLV Feb 5 11:30→20:15)"],
    note: "Johannesburg OR Tambo (JNB) · Hoedspruit / Kruger Park area · El Al LY51/LY52"
  },
  {
    flag: "🇪🇬", name: "Egypt", city: "Dahab, Sinai", region: "africa",
    lat: 28.4899, lng: 34.5166,
    visits: ["Apr 28–May 2, 2009 (Dahab, Sinai – scuba diving safari, Red Sea)"],
    note: "Scuba diving · Dahab, Sinai Peninsula · Red Sea"
  },
  {
    flag: "🇨🇷", name: "Costa Rica", city: "San José / Arenal / rainforest", region: "americas",
    lat: 9.9281, lng: -84.0907,
    visits: ["Jul 17–21, 2005 (Kabata Hostel + Costa Rica Backpackers, San José; rainforest canopy tour at Omega, Arenal active volcano, San José history museum, waterfalls, butterfly reserve – 4 days before SA backpacking)"],
    note: "Kabata Hostel · Costa Rica Backpackers · San José · Arenal Volcano · Omega canopy tour"
  },
  {
    flag: "🇮🇹", name: "Italy", city: "Venice", region: "europe",
    lat: 45.4408, lng: 12.3155,
    visits: ["Oct 2007 (Como – met friends, Oktoberfest-style trip; ~1 week)", "Jul 2–7, 2010 (Venice – Alitalia AZ809 TLV→FCO + AZ1463 FCO→VCE Jul 2; with Nogah & Hadar; departed Ryanair FR6054 TSF→CRL Jul 7)"],
    note: "Como (Oct 2007) · Venice (VCE Jul 2010, with Nogah & Hadar)"
  },
  {
    flag: "🇦🇷", name: "Argentina", city: "Buenos Aires / Bariloche / Ushuaia / Patagonia", region: "americas",
    lat: -34.6037, lng: -58.3816,
    visits: [
      "Sep 2005 (Buenos Aires – 2 days, tango show & tango club; 19h bus to Bariloche – 9 days snowboarding Cerro Cathedral, 7 lakes car tour, horseback riding; back to Buenos Aires – Lujan Zoo petting lions; Iguassu Falls – Argentinian side, boat under the falls)",
      "Dec 1, 2009 (Buenos Aires – arrived from TLV on Iberia; Hostel Clan & YMCA, 912 Alsina St.; 2 days; met Israeli travel companion; then Córdoba, Rosario)",
      "Dec 2009 (Salta – Las Nubes excursion, cable car mirador, asado)",
      "Jan 2010 (Bariloche – Pudu Hostel, NYE 2010, Circuito Chico, Cerro Otto)",
      "Jan 10, 2010 (Ushuaia – Fin del Mundo, national park – 3 buses, 55 hours!)",
      "Feb 14, 2010 (El Calafate – Perito Moreno glacier; El Chalten – Fitz Roy, ice walking)",
      "Mar 6, 2010 (El Bolson – Rey Sol Italian Farm, Bosque Tallado, Cerro Lindo hike)",
      "Mar 10, 2010 (Buenos Aires 2nd – rollerblading with Ky & Nicola)",
      "Mar 11–13, 2010 (Puerto Iguazu – Iguazu Falls, Great Adventure boat; TAM JJ3186 Iguazu→Rio Mar 13)"
    ],
    note: "Buenos Aires · Salta · Bariloche · Ushuaia · El Calafate · El Chalten · El Bolson · Puerto Iguazu"
  },
  {
    flag: "🇧🇴", name: "Bolivia", city: "Uyuni / Salar de Uyuni", region: "americas",
    lat: -20.4553, lng: -66.8253,
    visits: ["Dec 2009 (Villazon border crossing → Uyuni – 3-day Salar de Uyuni jeep tour: train graveyard, salt flats, salt hotel, lagoons, flamingos, geysers, hot springs)"],
    note: "Villazon border · Salar de Uyuni · Uyuni"
  },
  {
    flag: "🇨🇱", name: "Chile", city: "Atacama / Pucon / Patagonia / Carretera Austral", region: "americas",
    lat: -33.4489, lng: -70.6693,
    visits: [
      "Dec 18, 2009 (San Pedro de Atacama – Valle de la Luna, sunrise geysers)",
      "Dec 2009 (Pisco Elqui – observatory & stargazing)",
      "Dec 24–26, 2009 (Pucon – Villarica volcano climb, Christmas asado, hydro-speed)",
      "Feb 5–12, 2010 (Torres del Paine – 8-day 'O' circuit trek, via Punta Arenas & Puerto Natales)",
      "Feb–Mar 2010 (Carretera Austral – 12 days hitchhiking: Chile Chico → Cerro Castillo → Coihaique → Chaiten → Futaleufu)"
    ],
    note: "San Pedro de Atacama · Pisco Elqui · Pucon · Punta Arenas · Puerto Natales · Torres del Paine · Carretera Austral"
  },
  {
    flag: "🇦🇶", name: "Antarctica", city: "Antarctic Peninsula / Drake Passage", region: "antarctica",
    lat: -70.0, lng: -25.0,
    visits: ["Jan 2010 (14-day cruise on Ocean Nova from Ushuaia – crossed polar circle, Zodiac cruises between icebergs, penguin colonies, polar plunge at 0.8°C, southernmost bar in the world)"],
    note: "Ocean Nova cruise · Drake Passage · Crossed the polar circle"
  },
  {
    flag: "🇵🇪", name: "Peru", city: "Huaraz / Cuzco / Machu Picchu / Lima", region: "americas",
    lat: -13.1631, lng: -72.5450,
    visits: ["Jul–Sep 2005 (Lima transit; Huaraz – 2 weeks: Churup Lagoon, ice climbing, Lagoon 69 trek, HuayHuash 9-day trek rated 2nd most beautiful in world by National Geographic; Pisco – Islas Ballestas sea lions & penguins, Paracas reserve; Huacachina oasis – buggy ride & sandboarding; Nazca – 40-min Nazca Lines overflight; Cuzco 2.5 weeks – 122m bungee jump, Superman slingshot, 3-day class 5 white-water rafting, salsa dancing at Mama America; Machu Picchu – climbed 1,600 stairs in darkness for sunrise)"],
    note: "Lima · Huaraz · HuayHuash trek · Pisco · Islas Ballestas · Huacachina · Nazca Lines · Cuzco · Machu Picchu"
  },
  {
    flag: "🇧🇷", name: "Brazil", city: "Salvador / Rio de Janeiro / Jericoacoara / São Paulo", region: "americas",
    lat: -12.9714, lng: -38.5014,
    visits: [
      "Sep–Oct 2005 (Iguassu Falls Brazilian side; Salvador – Capoeira rhoda in the street; Fortaleza; Jericoacoara – 5 days: Capoeira on the beach at sunrise, sand streets, sunset rhoda; Morro de São Paulo)",
      "Mar 13, 2010 (TAM JJ3186 Iguazu → Rio de Janeiro)",
      "Mar–Apr 2010 (Rio de Janeiro – flew from Foz de Iguaçu)",
      "Mar 31, 2010 (Salvador – Nega Maluca Guesthouse, Pelourinho; TAM JJ3190 Rio→Salvador)",
      "Apr 28–May 4, 2010 (Avianca 6311 Salvador→São Paulo Apr 28; Ribeirao Preto – CouchSurfing; São Paulo)",
      "May 4–9, 2010 (Manaus – Amazon region; TAM JJ3746 SP→Manaus, then JJ3859 Manaus→Fortaleza)",
      "May 9–24, 2010 (Fortaleza; Natal – northeast Brazil; TAM JJ3307 Natal→SP May 22; LAN LA2764 São Paulo→Lima May 24)"
    ],
    note: "Iguassu/Salvador/Jericoacoara (2005) · Rio · Salvador/Pelourinho · Ribeirao Preto · Manaus (Amazon) · Fortaleza · Natal · São Paulo GRU"
  },
  {
    flag: "🇮🇳", name: "India", city: "Andaman Islands", region: "asia",
    lat: 11.7401, lng: 92.6586,
    visits: ["Oct 2008 (Andaman Islands – ~4 weeks; scuba diving, island hopping, remote beaches)"],
    note: "Andaman Islands · Port Blair"
  },
  {
    flag: "🇵🇹", name: "Portugal", city: "Lisbon + road trip", region: "europe",
    lat: 38.7223, lng: -9.1393,
    visits: ["Nov 8–18, 2012 (Lisbon – Brussels Airlines TLV→BRU→LIS (SN3292/SN6401); 10 days with Metula + Ronen, car rental, road trip around Portugal)", "Jul 29–Aug 17, 2014 (Lisbon + Idanha-a-Nova – TAP BUD→LIS Jul 29; Boom Festival 2014 (Idanha-a-Nova); departed American Airlines LIS→SFO Aug 17)"],
    note: "Lisbon · road trip · Brussels Airlines via BRU · car rental · Boom Festival 2014 (Idanha-a-Nova)"
  },
  {
    flag: "🇪🇨", name: "Ecuador", city: "Guayaquil / Galapagos Islands", region: "americas",
    lat: -2.1894, lng: -79.8891,
    visits: ["May 25–Jun 6, 2010 (TACA TA138 Lima→Guayaquil May 25; Nuca Pacha Hostel; Galapagos – AeroGal 036 GYE→San Cristóbal May 29, AeroGal 037 →Quito Jun 5; flew home Iberia IB6464+IB3752 Quito→Madrid→TLV Jun 6–7)"],
    note: "Nuca Pacha Hostel · Guayaquil · Galapagos Islands (Quasar EX) · Quito (UIO) departure"
  },
  {
    flag: "🇨🇦", name: "Canada", city: "Toronto / Barrie", region: "americas",
    lat: 43.6511, lng: -79.3470,
    visits: ["Mar 28–29, 2018 (Toronto – Air Canada AC85 TLV→YYZ Mar 28; AC1810 YYZ→CUN Mar 29)", "Apr 13, 2018 (Toronto transit – AC84 YYZ→TLV Apr 13 16:40)", "Sep 22–Oct 15, 2014 (Toronto → Vancouver – Air Canada AC 105 YYZ→YVR Sep 22 10:00–12:03; Canadian West Coast; returned via Seattle SEA→PHL→TLV Oct 15–16)", "Sep 6, 2024 (Lake Tahoe area – Pretty Lights concert, pre-Canada leg)", "Sep 16–Oct 12, 2024 (Toronto Sep 16–23 – United SFO→YYZ Sep 16; car rental YYZ; Vancouver Sep 23–Oct 12 – WestJet YYZ→YVR Sep 23; Nomad Cruise 13 to Japan sails Sep 29)", "Oct 1–13, 2025 (Toronto – United UA2097+UA5293 SFO→ORD→YYZ Sep 30–Oct 1; Barrie Oct 8–9; Legends of Horror Oct 12; SAS YYZ→CPH Oct 13)", "May 6–Jun 8, 2026 (Toronto – Qantas QF3 AKL→JFK→YYZ May 6; Air Transat TS122 YYZ→LGW Jun 8)"],
    note: "Toronto YYZ · Barrie, Ontario"
  },
  {
    flag: "🇲🇽", name: "Mexico", city: "Cancun", region: "americas",
    lat: 21.1619, lng: -86.8515,
    visits: ["Mar 29–Apr 12, 2018 (Cancun – Air Canada AC1810 YYZ→CUN Mar 29; AC1813 rouge CUN→YYZ Apr 12)"],
    note: "Air Canada · Cancun International Airport (CUN)"
  },
  {
    flag: "🇺🇸", name: "United States", city: "San Francisco / Nevada / New York", region: "americas",
    lat: 37.7749, lng: -122.4194,
    visits: ["May–Jul 2005 (Seattle; San Diego – Ocean Beach International Hostel; New York City)", "Jan–Apr 2, 2012 (Palo Alto / San Francisco – UpWest Labs accelerator, ~3 months; returned via Toronto Apr 2)", "May 12–28, 2013 (San Francisco – United UA91 TLV→EWR May 11, UA216 EWR→SFO May 12; Google I/O 2013 May 15–17; return UA1696+UA90 SFO→EWR→TLV May 28–29)",
      "Aug 25–Sep 21, 2014 (San Francisco – outbound via El Al TLV→BUD Jul 15 + TAP BUD→LIS Jul 29 + AA LIS→SFO; HI-SF City Center Hostel; Burning Man Black Rock City NV; car rental Advantage SFO Sep 7 18:00–Sep 12 16:00; SFMTA Sep 21; departed US 798 SEA→PHL 08:35 + US 796 PHL→TLV 21:10 Oct 15–16)", "Aug 26–Sep 27, 2015 (San Francisco – KLM KL0605/KL0462 TLV→AMS→SFO Aug 26 (delayed); Burning Man 2015 Black Rock City NV (car rental with Anati); Reno Sep 7; Symbiosis Gathering 2015 (10yr ReUnion) Sep 17–21; San Diego Sep ∼22–23; Greyhound SAN→SFO Sep 23; car rental; return Air France AF 0085 SFO→CDG Sep 27 + AF 1320 CDG→TLV Sep 28)", "Aug 21–Oct 3, 2016 (San Francisco – SWISS LX 257 TLV 04:50→ZRH 08:10 + LX 36 ZRH 09:40→SFO 12:50 Aug 21; Reno Sep 5–7 Eldorado; car rental; Symbiosis Gathering 2016 Sep 22–26 Woodward Reservoir CA; departed LX 39 SFO→ZRH Oct 3 + LX 256 ZRH→TLV Oct 4)", "Dec 2–27, 2016 (Las Vegas + San Francisco – outbound UA955 TLV→SFO Dec 2 00:50–6:00 AM; UA943 SFO→LAS Dec 2 4:22–5:57 PM; Las Vegas Hostel; UA728 LAS→SFO Dec 6 6:00–7:39 AM; San Francisco Dec 6–27; departed LH459 SFO→MUC Dec 27 20:55 + LH680 MUC→TLV Dec 28 21:50→Dec 29 02:30)", "Aug 14–Sep 10, 2017 (Portland OR + San Francisco + Burning Man 2017 – United UA955 TLV→SFO→PDX Aug 14; Black Rock City NV Aug 27–Sep 4; car rental Reno Sep 7; return UA954 SFO→TLV Sep 10)", "Aug 22–Sep 11, 2018 (San Francisco + Burning Man 2018 – United TLV→SFO Aug 22; Black Rock City NV; departed SFO→YVR Sep 11 (AC8839) + YVR→FRA→BER TXL Sep 12 (AC9637/Lufthansa CityLine))", "~Aug 27–Sep 4, 2023 (Burning Man 2023 – Black Rock City, NV; flew from London LHR; returned to London ~Sep 5)", "Aug 23–Sep 6, 2022 (San Francisco – Austrian VIE→MUC→SFO Aug 23; SFO→FRA→VIE Sep 6)", "Aug 22–Sep 16, 2024 (San Francisco + Burning Man 2024 – Austrian VIE→SFO Aug 22; Black Rock City NV Aug 25–Sep 2; Reno/Lake Tahoe Sep 6–9; United SFO→YYZ Sep 16)", "Sep 6, 2024 (Pretty Lights – Lake Tahoe Outdoor Arena, Harveys, Stateline NV)", "Aug 15–24, 2025 (San Francisco – Bartlett Hotel)", "Aug 24–Sep 1, 2025 (Burning Man – Black Rock City, NV 89412)", "Sep 2–4, 2025 (Reno, Nevada – Airbnb)", "Sep 13, 2025 (OTT Live – Public Works, SF)", "Sep 22, 2025 (United)", "May 2026 (Qantas AKL→JFK – upcoming, New York)"],
    note: "SF · Lake Tahoe · Black Rock City · Reno · New York JFK"
  }
];

const travelLog = [
  // — 2005 —
  { date: "May–Jul 2005", flag: "🇺🇸", country: "United States", city: "Seattle · San Diego (Ocean Beach International Hostel) · NYC", future: false },
  { date: "Jul 17–21, 2005", flag: "🇨🇷", country: "Costa Rica", city: "San José – Kabata Hostel, Arenal volcano, Omega canopy tour", future: false },
  { date: "Jul–Aug 2005", flag: "🇵🇪", country: "Peru", city: "Huaraz – Lagoon 69, HuayHuash 9-day trek; Pisco – Islas Ballestas", future: false },
  { date: "Aug–Sep 2005", flag: "🇵🇪", country: "Peru", city: "Huacachina oasis · Nazca Lines · Cuzco · Machu Picchu (1,600 stairs at night)", future: false },
  { date: "Sep 2005", flag: "🇦🇷", country: "Argentina", city: "Buenos Aires – tango; Bariloche – snowboarding Cerro Cathedral; Iguassu Falls", future: false },
  { date: "Sep–Oct 2005", flag: "🇧🇷", country: "Brazil", city: "Iguassu Falls (BR side) · Salvador · Fortaleza · Jericoacoara · Morro de São Paulo", future: false },
  // — 2007 —
  { date: "Oct 2007", flag: "🇮🇹", country: "Italy", city: "Como – week-long trip with friends", future: false },
  { date: "Oct 2007", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – ~2 days during Europe trip", future: false },
  // — 2008 —
  { date: "Jun 4–12, 2008", flag: "🇬🇧", country: "United Kingdom", city: "London + Horsham – friend's wedding Jun 7, with Yana", future: false },
  { date: "Oct 2008", flag: "🇮🇳", country: "India", city: "Andaman Islands – ~4 weeks, scuba diving, island hopping", future: false },
  // — 2009 —
  { date: "Apr 28–May 2, 2009", flag: "🇪🇬", country: "Egypt", city: "Dahab, Sinai – scuba diving safari, Red Sea", future: false },
  { date: "Sep 24–Oct 2, 2009", flag: "🇪🇸", country: "Spain", city: "Tenerife Norte – El Al LY393 TLV→BCN→TFN Sep 24; group trip, Yom Kippur in Spain, capoeira, snorkeling", future: false },
  { date: "Oct 2–5, 2009", flag: "🇪🇸", country: "Spain", city: "Barcelona – Dalí museum (Figueres), La Sagrada Família, free walking tour; El Al LY394 BCN→TLV Oct 5 11:25", future: false },
  { date: "Dec 1, 2009", flag: "🇦🇷", country: "Argentina", city: "Buenos Aires – Hostel Clan & YMCA; 2 days, then Córdoba · Rosario with Israeli travel companion", future: false },
  { date: "Dec 2009", flag: "🇦🇷", country: "Argentina", city: "Salta – Las Nubes excursion, cable car mirador, asado & dancing", future: false },
  { date: "Dec 2009", flag: "🇧🇴", country: "Bolivia", city: "Villazon border → Uyuni – 3-day Salar de Uyuni jeep tour", future: false },
  { date: "Dec 18, 2009", flag: "🇨🇱", country: "Chile", city: "San Pedro de Atacama – Valle de la Luna, sunrise geysers", future: false },
  { date: "Dec 2009", flag: "🇨🇱", country: "Chile", city: "Pisco Elqui – observatory & stargazing", future: false },
  { date: "Dec 24–26, 2009", flag: "🇨🇱", country: "Chile", city: "Pucon – Villarica volcano climb, Christmas asado, hydro-speed", future: false },
  // — 2010 —
  { date: "Jan 5, 2010", flag: "🇦🇷", country: "Argentina", city: "Bariloche – Pudu Hostel, NYE 2010 (\"Las Tres Hermanas Feas\"), Circuito Chico", future: false },
  { date: "Jan 10, 2010", flag: "🇦🇷", country: "Argentina", city: "Ushuaia – Fin del Mundo, national park, Dublin pub", future: false },
  { date: "Jan 2010", flag: "🇦🇶", country: "Antarctica", city: "Ocean Nova cruise – crossed polar circle, Zodiac cruises, polar plunge at 0.8°C", future: false },
  { date: "Feb 5–12, 2010", flag: "🇨🇱", country: "Chile", city: "Torres del Paine – 8-day 'O' circuit trek (via Punta Arenas & Puerto Natales)", future: false },
  { date: "Feb 14, 2010", flag: "🇦🇷", country: "Argentina", city: "El Calafate – Perito Moreno glacier; El Chalten – Fitz Roy trek & ice walking", future: false },
  { date: "Feb–Mar 2010", flag: "🇨🇱", country: "Chile", city: "Carretera Austral – 12 days hitchhiking (Chile Chico → Cerro Castillo → Coihaique → Futaleufu)", future: false },
  { date: "Mar 6, 2010", flag: "🇦🇷", country: "Argentina", city: "El Bolson – Rey Sol Italian Farm, Bosque Tallado, Cerro Lindo hike", future: false },
  { date: "Mar 10, 2010", flag: "🇦🇷", country: "Argentina", city: "Buenos Aires – 2nd visit, rollerblading with Ky & Nicola from Bariloche", future: false },
  { date: "Mar 11–13, 2010", flag: "🇦🇷", country: "Argentina", city: "Puerto Iguazu – Iguazu Falls, Great Adventure boat, hostel pool party", future: false },
  { date: "Mar 13, 2010", flag: "🇧🇷", country: "Brazil", city: "Foz de Iguaçu – crossed from Argentina; TAM JJ3186 Iguazu→Rio de Janeiro Mar 13", future: false },
  { date: "Mar–Apr 2010", flag: "🇧🇷", country: "Brazil", city: "Rio de Janeiro – flew from Foz de Iguaçu", future: false },
  { date: "Mar 31, 2010", flag: "🇧🇷", country: "Brazil", city: "Salvador – Nega Maluca Guesthouse, Pelourinho", future: false },
  { date: "Apr 2010", flag: "🇧🇷", country: "Brazil", city: "Ribeirao Preto – CouchSurfing; São Paulo", future: false },
  { date: "May 4–9, 2010", flag: "🇧🇷", country: "Brazil", city: "Manaus – Amazon region (TAM JJ3746 SP→Manaus, then Manaus→Fortaleza)", future: false },
  { date: "May 9–22, 2010", flag: "🇧🇷", country: "Brazil", city: "Fortaleza · Natal – northeast Brazil (TAM Natal→SP May 22)", future: false },
  { date: "May 25–Jun 5, 2010", flag: "🇪🇨", country: "Ecuador", city: "Guayaquil – Nuca Pacha Hostel + Galapagos Islands (Quasar expedition)", future: false },
  { date: "Jun 6, 2010", flag: "🇪🇨", country: "Ecuador", city: "Quito (UIO) – Iberia IB3752 flight home", future: false },
  { date: "Jul 2–7, 2010", flag: "🇮🇹", country: "Italy", city: "Venice – Alitalia AZ809/AZ1463 TLV→FCO→VCE Jul 2; with Nogah & Hadar", future: false },
  { date: "Jul 7, 2010", flag: "🇧🇪", country: "Belgium", city: "Brussels Charleroi – Ryanair FR6054 Venice Treviso→CRL 08:35–10:10; 1 night en route Amsterdam", future: false },
  { date: "Jul 8–12, 2010", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – 4 days; Utrecht capoeira with Jorine Jul 9; Eurolines bus to London Jul 12", future: false },
  { date: "Jul 12–20, 2010", flag: "🇬🇧", country: "United Kingdom", city: "London – Eurolines from Amsterdam; Oxford Jul 15; Horsham (Alex Pagel) Jul 17–18", future: false },
  // — 2012 —
  { date: "Jan–Apr 2, 2012", flag: "🇺🇸", country: "United States", city: "Palo Alto / San Francisco – UpWest Labs accelerator (~3 months); returned via Toronto", future: false },
  { date: "Nov 8–18, 2012", flag: "🇵🇹", country: "Portugal", city: "Lisbon – Brussels Airlines SN3292/SN6401 via BRU; with Metula + Ronen, car rental road trip", future: false },
  // — 2013 —
  { date: "May 12–28, 2013", flag: "🇺🇸", country: "United States", city: "San Francisco – United UA91 TLV→EWR→SFO May 11–12; Google I/O 2013 (May 15–17, Moscone Center); returned UA1696+UA90 SFO→EWR→TLV May 28–29", future: false },
  { date: "Jul 20–29, 2013", flag: "🇭🇺", country: "Hungary", city: "Budapest – SUN Festival; Wizz Air W6 2457 BUD→TLV Jul 29 15:45–20:00 (OnTour)", future: false },
  // — 2014 —
  { date: "Jul 15–29, 2014", flag: "🇭🇺", country: "Hungary", city: "Budapest – El Al TLV→BUD Jul 15; Corvin Plaza; with Golan; departed TAP BUD→LIS Jul 29", future: false },
  { date: "Jul 16–20, 2014", flag: "🇸🇰", country: "Slovakia", city: "Košice & hiking – CouchSurfing side trip from Budapest; back to Hungary Jul 20", future: false },
  { date: "Jul 29–Aug 17, 2014", flag: "🇵🇹", country: "Portugal", city: "Lisbon + Idanha-a-Nova – TAP BUD→LIS Jul 29; Boom Festival 2014 (Idanha-a-Nova); departed AA LIS→SFO Aug 17", future: false },
  { date: "Aug 25–Sep 21, 2014", flag: "🇺🇸", country: "United States", city: "San Francisco – via AA LIS→SFO; HI-SF City Center Hostel; Burning Man 2014 Black Rock City NV (car rental Advantage SFO Sep 7–12); SFMTA Sep 21; departed US 798 SEA→PHL 08:35 + US 796 PHL→TLV 21:10 Oct 15–16", future: false },
  { date: "Sep 22–Oct 15, 2014", flag: "🇨🇦", country: "Canada", city: "Toronto → Vancouver – Air Canada AC 105 YYZ→YVR Sep 22 10:00–12:03; Canadian West Coast; departed Seattle SEA Oct 15", future: false },
  // — 2015 —
  { date: "Aug 26–Sep 27, 2015", flag: "🇺🇸", country: "United States", city: "San Francisco – KLM KL0605/KL0462 TLV→AMS→SFO Aug 26 (delayed); Burning Man 2015 Black Rock City NV (car rental with Anati); Reno Sep 7; Symbiosis Gathering 2015 (10yr ReUnion) Sep 17–21; San Diego Sep ∼22–23; Greyhound SAN→SFO Sep 23; car rental; departed AF 0085 SFO→CDG Sep 27 + AF 1320 CDG→TLV Sep 28", future: false },
  // — 2016 —
  { date: "Feb 25–29, 2016", flag: "🇩🇪", country: "Germany", city: "Berlin – EasyJet EZY4784 TLV→BER SXF Feb 25 13:10–16:45; Airbnb Feb 25–26 (via Mayan); Burning Bär – Plug and Play; car rental; Plus Berlin Feb 28–29", future: false },
  { date: "Jul 14–26, 2016", flag: "🇩🇰", country: "Denmark", city: "Copenhagen + road trip – Pegasus TLV→SAW→CPH; car rental Copenhagen Jul 14; The Borderland 2016 regional burn; ~12 days", future: false },
  { date: "Jul 26–Aug 2, 2016", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – SAS SK553 CPH→AMS Jul 26 18:10; Where The Sheep Sleep 2016 regional burn; Budget Hotel Manofa Aug 1–2; Hotel Torenzicht (Itai Indig)", future: false },
  { date: "Aug 21–Oct 3, 2016", flag: "🇺🇸", country: "United States", city: "San Francisco – SWISS LX 257 TLV→ZRH + LX 36 ZRH→SFO 12:50 Aug 21; Reno Sep 5–7 Eldorado; car rental; Symbiosis Gathering 2016 Sep 22–26 Woodward Reservoir CA; departed LX 39 SFO→ZRH Oct 3 + LX 256 ZRH→TLV Oct 4", future: false },
  { date: "Dec 2–6, 2016", flag: "🇺🇸", country: "United States", city: "Las Vegas – inbound UA955 TLV→SFO Dec 2 + UA943 SFO→LAS Dec 2; Las Vegas Hostel; UA728 LAS→SFO Dec 6", future: false },
  { date: "Dec 6–27, 2016", flag: "🇺🇸", country: "United States", city: "San Francisco – LH459 SFO→MUC Dec 27 20:55 + LH680 MUC→TLV Dec 28", future: false },
  // — 2017 —
  { date: "May 12–14, 2017", flag: "🇫🇷", country: "France", city: "What The Farm 2017 – Ferme d'Antioche, Vauxaillon, Aisne (regional burn)", future: false },
  { date: "~Jun 2017", flag: "🇩🇪", country: "Germany", city: "Berlin – KiezBurn 2017 regional burn", future: false },
  { date: "~Jul 3–9, 2017", flag: "🇪🇸", country: "Spain", city: "Nowhere 2017 – near Castejón de Monegros, Zaragoza (regional burn)", future: false },
  { date: "Jul 21–Aug 4, 2017", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – Gotogate TLV→CPH Jul 21; Airbnb Christianshavn Jul 21–22 (with Yulia); Avis car rental CPH Jul 21–Aug 3; returned Aegean A3 CPH→ATH→TLV Aug 3–4", future: false },
  { date: "Jul 22–Aug 2, 2017", flag: "🇩🇰", country: "Denmark", city: "The Borderland 2017 – regional burn at a quarry (theborderland.se); with Yulia", future: false },
  { date: "Aug 14–Sep 10, 2017", flag: "🇺🇸", country: "United States", city: "Portland OR + San Francisco + Burning Man 2017 – United UA955 TLV→SFO Aug 14, UA1281 SFO→PDX Aug 14; Black Rock City NV Aug 27–Sep 4; car rental Reno Sep 7; return UA954 SFO→TLV Sep 10", future: false },
  { date: "Nov 9–15, 2017", flag: "🇬🇧", country: "United Kingdom", city: "London – UIA PS778 TLV→KBP Nov 9 + PS111 KBP→LGW Nov 9; Smart Camden Inn Hostel; London Decompression Nov 11–12; BA2762 LGW→AMS Nov 15 15:45", future: false },
  { date: "Nov 15–22, 2017", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – BA2762 LGW→AMS Nov 15; Dutch Decompression 2017 (Radion club, with Yulia); EasyJet AMS→TLV Nov 22", future: false },
  // — 2018 —
  { date: "Jan 11–18, 2018", flag: "🇧🇪", country: "Belgium", city: "Brussels – Brussels Airlines SN3294 TLV→BRU Jan 11, SN3291 BRU→TLV Jan 18 (business trip)", future: false },
  { date: "Jun 8–10, 2018", flag: "🇧🇪", country: "Belgium", city: "Brussels – Brussels Airlines SN3294 TLV→BRU Jun 8, SN3293 BRU→TLV Jun 10 (short business trip; near What The Farm 2018)", future: false },
  { date: "Jun 8–10, 2018", flag: "🇫🇷", country: "France", city: "What The Farm 2018 – Ferme d'Antioche, Vauxaillon, Aisne (regional burn; coincides with Brussels trip, ~2h drive)", future: false },
  { date: "Jun 18–30, 2018", flag: "🇩🇪", country: "Germany", city: "Berlin – Turkish Airlines TLV→IST→BER Jun 18; KiezBurn 2018 regional burn (art installer / Wonderer volunteer); Eurowings BER→BCN Jun 30", future: false },
  { date: "Jun 30–Jul 10, 2018", flag: "🇪🇸", country: "Spain", city: "Barcelona – Eurowings BER→BCN Jun 30; car rental CTRILES39566; Nowhere 2018 Jul 3–8 near Castejón de Monegros; Turkish Airlines BCN→TLV Jul 10", future: false },
  { date: "Jul 21–28, 2018", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – UIA PS780 TLV→KBP Jul 21, PS163 KBP→CPH Jul 21; The Borderland 2018 regional burn Jul 24–27", future: false },
  { date: "Aug 22–Sep 11, 2018", flag: "🇺🇸", country: "United States", city: "San Francisco – Burning Man 2018 (United TLV→SFO Aug 22; departed SFO→YVR Sep 11 AC8839 + YVR→FRA→BER TXL Sep 12 AC9637)", future: false },
  { date: "Sep 12–18, 2018", flag: "🇩🇪", country: "Germany", city: "Berlin – SFO→YVR Sep 11 (AC8839) + YVR→FRA→BER TXL Sep 12 (AC9637/Lufthansa CityLine); with Nadja Schreiber; Ponyhof 2018 regional burn; easyJet U24733 BER SXF→VIE Sep 18 18:55", future: false },
  { date: "Sep 18–24, 2018", flag: "🇦🇹", country: "Austria", city: "Vienna – easyJet U24733 BER SXF→VIE Sep 18 18:55; Schönburn 2018 at Schloss Wetzlas (no ticket email found); Wizzair W62811 VIE→TLV Sep 24 06:05→10:30 (with Nadja Schreiber)", future: false },
  { date: "Oct 7, 2018", flag: "🇩🇪", country: "Germany", city: "Berlin TXL – Aegean A30929 TLV→ATH Oct 7 05:30 + A30820 ATH→BER TXL Oct 7 10:35 (with Nadja Schreiber; return date unknown)", future: false },
  { date: "Dec 2018", flag: "🇧🇪", country: "Belgium", city: "Brussels – Brussels Airlines (business)", future: false },
  // — 2019 —
  { date: "~Mar 1–5, 2019", flag: "🇦🇹", country: "Austria", city: "Vienna – Vienna Burning Ball (VBB) ~Mar 1–2; ÖBB Nightjet Wien→Berlin Mar 5", future: false },
  { date: "Mar 5–12, 2019", flag: "🇩🇪", country: "Germany", city: "Berlin – ÖBB Nightjet Wien→BER arr Mar 5; ZBB / Burning Bar 2019 regional burn; FlixBus BER→ZRH Mar 12", future: false },
  { date: "~Mar 12–31, 2019", flag: "🇫🇷", country: "France", city: "Chamonix – car rental Mar 12; Chamonix Chalets Ltd; returned ZRH→TLV Mar 31 via SWISS", future: false },
  { date: "Apr 24–May 13, 2019", flag: "🇨🇳", country: "China", city: "Shanghai + Dragon Burn – Aeroflot SU507 TLV→SVO Apr 24, SU208 SVO→PVG; Dragon Burn regional burn late Apr; Airbnb 'The YongKang Hidden Penthouse' Shanghai May 5–7; return SU209+SU504 May 13", future: false },
  { date: "May 31–Jun 2, 2019", flag: "🇫🇷", country: "France", city: "What The Farm 2019 – Ferme d'Antioche, Vauxaillon, Aisne (regional burn; side trip from Zurich)", future: false },
  { date: "May 30–Jun 25, 2019", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS TLV→ZRH May 30; WTF 2019 side trip May 31–Jun 2; Airbnb Salgesch Valais Jun 8–9; KiezBurn 2019 Berlin ~Jun 20–25; Lufthansa LH185/LH694 TXL→FRA→TLV Jun 25", future: false },
  { date: "Jun ~20–25, 2019", flag: "🇩🇪", country: "Germany", city: "Berlin TXL – KiezBurn 2019 regional burn; Lufthansa LH185 TXL→FRA Jun 25, LH694 FRA→TLV Jun 25", future: false },
  { date: "Jul 6–21, 2019", flag: "🇪🇸", country: "Spain", city: "Madrid + Barcelona – SWISS TLV→ZRH→MAD Jul 6 (LX2030 delayed); Nowhere 2019 ~Jul 2–7 near Castejón de Monegros; Tarragona area; Renfe Tarragona→Barcelona-Sants Jul 14; BCN→ZRH Jul 21", future: false },
  { date: "Jul 21–31, 2019", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – SWISS LX1278 ZRH→CPH Jul 21 (delayed, with Christina Welter); The Borderland 2019; Quality Hotel Høje Taastrup Jul 27; SWISS LX1273 CPH→ZRH + LX256 ZRH→TLV Jul 31", future: false },
  { date: "Sep 5–24, 2019", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS TLV→ZRH Sep 5; Ponyhof 2019 ~Sep 12–15; FlixBus side trip to Vienna Sep 15–16; El Al ZRH→TLV Sep 24", future: false },
  { date: "Sep 12–15, 2019", flag: "🇩🇪", country: "Germany", city: "Ponyhof 2019 regional burn – Germany (during Zurich Sep 2019 stay)", future: false },
  { date: "Sep 15–16, 2019", flag: "🇦🇹", country: "Austria", city: "Vienna – FlixBus side trip from Zurich; Schönburn 2019 at Schloss Wetzlas – during this Sept Zurich/Vienna trip", future: false },
  { date: "Oct 22–28, 2019", flag: "🇩🇪", country: "Germany", city: "Berlin – Austrian OS858 TLV→VIE Oct 22, OS239 VIE→TXL Oct 23; Hamburn 2019 (tickets.hamburn.de); PREMIUM Hostel; Aegean TXL→ATH Oct 28", future: false },
  { date: "Oct 28, 2019", flag: "🇬🇷", country: "Greece", city: "Athens – Aegean A3 821 TXL→ATH, A3 924 ATH→TLV (one-day stopover en route from Berlin)", future: false },
  { date: "Nov 18–Dec 16, 2019", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS LX253 TLV→ZRH Nov 18; side trip Malta Nov 26–30 (KM491 ZRH→MLA; KM0490 MLA→ZRH Nov 30); returned ZRH→TLV Dec 16", future: false },
  { date: "Nov 26–30, 2019", flag: "🇲🇹", country: "Malta", city: "Valletta/Malta – Air Malta KM491 ZRH→MLA Nov 26 17:40→20:00; returned KM0490 MLA→ZRH Nov 30 14:25→16:50", future: false },
  // — 2020 —
  { date: "Jun 21–~26, 2020", flag: "🇩🇪", country: "Germany", city: "Frankfurt + Berlin – Deutsche Bahn ICE 798 Frankfurt(Main)Süd→Berlin Hbf Jun 21 12:20–16:47", future: false },
  { date: "Jun 26, 2020", flag: "🇨🇭", country: "Switzerland", city: "Zurich – DB BUS42227 München ZOB→Zürich HB 09:03–12:45", future: false },
  { date: "Jun 26–~29, 2020", flag: "🇨🇭", country: "Switzerland", city: "Zurich", future: false },
  { date: "Jun 29–Jul 4, 2020", flag: "🇦🇹", country: "Austria", city: "Vienna – departed Ryanair FR7161 VIE→TLV Jul 4 13:00–17:20", future: false },
  { date: "Sep 9–~21, 2020", flag: "🇩🇪", country: "Germany", city: "Berlin SXF – Ryanair FR6473 TLV→SXF Sep 9; Ponyhof 2020 regional burn; Zum Brennenden Löwen 2020 (tickets.hamburn.de); extended stay with BVG transit", future: false },
  { date: "Sep ~22–28, 2020", flag: "🇦🇹", country: "Austria", city: "Vienna – transit from Berlin; Schönburn 2020 at Schloss Wetzlas; departed ÖBB Wien Hbf→München Sep 28 15:42", future: false },
  { date: "Sep 28, 2020", flag: "🇩🇪", country: "Germany", city: "Munich – ÖBB D720 Wien→München 15:42–21:36; HI Munich Park Youth Hostel", future: false },
  { date: "Sep 29–Oct ~6, 2020", flag: "🇩🇪", country: "Germany", city: "Markdorf/Bodensee – Airbnb 'Mitten in Markdorf' (Baden-Württemberg near Lake Constance)", future: false },
  { date: "Oct 11–~30, 2020", flag: "🇨🇭", country: "Switzerland", city: "Zurich – rooftop garden apartment; SBB Swiss trains Oct 26", future: false },
  { date: "Oct 30–Nov 3, 2020", flag: "🇦🇹", country: "Austria", city: "Vienna – Wiener Linien Airport Lines return ticket Oct 30; Strozzigasse", future: false },
  { date: "Nov 3–Dec 7, 2020", flag: "🇨🇭", country: "Switzerland", city: "Zurich – ÖBB RJX 564 Wien→Innsbruck + EC 164 Innsbruck→Zürich HB Nov 3 11:30–19:20; Turkish TK ZRH→TLV Dec 7", future: false },
  { date: "Dec 7–8, 2020", flag: "🇸🇨", country: "Seychelles", city: "Mahé – departed TLV Dec 7 eve", future: false },
  { date: "Dec 8, 2020–Jan 22, 2021", flag: "🇸🇨", country: "Seychelles", city: "Mahé – Le Domaine de Bacova villa (SeyVillas); stay extended Dec 22 to Jan 22 2021 (50 EUR/night)", future: false },
  // — 2021 —
  { date: "Jul 15–27, 2021", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – Air France AF1621 TLV→CPH Jul 15 (no Munich stop); Revent 2021 regional burn; SWISS LX1267 CPH→ZRH Jul 27", future: false },
  { date: "Jul 27–Aug 4, 2021", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS LX1267 CPH→ZRH Jul 27; SBB trains Aug 3–4", future: false },
  { date: "Aug ~20–26, 2021", flag: "🇩🇪", country: "Germany", city: "Berlin – KiezBurn 2021; COVID test Aug 23; Dark Matter Berlin Aug 28 exhibition", future: false },
  { date: "Aug 27–31, 2021", flag: "🇭🇺", country: "Hungary", city: "Budapest – Ryanair from Berlin; Bolt rides Aug 27–31; Omio Budapest Keleti→Vienna Central Aug 31", future: false },
  { date: "Sep 8–12, 2021", flag: "🇦🇹", country: "Austria", city: "Schönburn 2021 – Schloss Wetzlas (during Vienna Aug 31–Sep 26 stay)", future: false },
  { date: "Aug 31–Sep 26, 2021", flag: "🇦🇹", country: "Austria", city: "Vienna – Omio Budapest→Vienna Aug 31; Schönburn 2021 Sep 8–12 Schloss Wetzlas; DB Bahn Sep 14 Berlin trip; Aegean A3863 VIE→ATH + A3928 ATH→TLV Sep 26", future: false },
  // — 2022 —
  { date: "Jan 15–Feb 27, 2022", flag: "🇦🇹", country: "Austria", city: "Vienna – Ryanair FR7161 VIE→TLV Jan 26 (delayed 2h+); Ryanair TLV→VIE Feb 7; VIE→TLV Feb 27", future: false },
  { date: "Apr 14–17, 2022", flag: "🇫🇷", country: "France", city: "What The Farm 2022 – Ferme d'Antioche, Vauxaillon, Aisne (regional burn)", future: false },
  { date: "Apr 24, 2022", flag: "🇧🇪", country: "Belgium", city: "Brussels-Midi – Thalys → Amsterdam", future: false },
  { date: "Apr 24, 2022", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam Centraal – Thalys from Brussels", future: false },
  { date: "Jul 1–11, 2022", flag: "🇪🇸", country: "Spain", city: "Madrid – Air Europa UX1302 TLV→MAD Jul 1 16:05; Nowhere 2022 near Castejón de Monegros", future: false },
  { date: "Jul 11–21, 2022", flag: "🇩🇪", country: "Germany", city: "Berlin – Ryanair FR2528 MAD→BER Jul 11 17:25; KiezBurn 2022 regional burn", future: false },
  { date: "Jul 21–Aug 5, 2022", flag: "🇸🇪", country: "Sweden", city: "Gothenburg – FlixBus from Berlin Jul 21; The Borderland 2022 regional burn; Austrian OS326 GOT→VIE Aug 5 19:55", future: false },
  { date: "Aug 5–23, 2022", flag: "🇦🇹", country: "Austria", city: "Vienna – Austrian GOT→VIE Aug 5", future: false },
  { date: "Aug 23–Sep 6, 2022", flag: "🇺🇸", country: "United States", city: "San Francisco – Burning Man 2022 – Austrian VIE→MUC→SFO Aug 23; Black Rock City NV; returned SFO→FRA→VIE Sep 6", future: false },
  { date: "Sep ~7–11, 2022", flag: "🇦🇹", country: "Austria", city: "Schönburn 2022 – Böllerbauer (during Vienna Sep 2022 stay)", future: false },
  { date: "Sep 7, 2022–Jan 5, 2023", flag: "🇦🇹", country: "Austria", city: "Vienna – Austrian SFO→FRA→VIE Sep 7; Schönburn 2022 Sep 7–11 Böllerbauer; El Al LY362 VIE→TLV Jan 5 2023", future: false },
  { date: "Jan 19–Feb 5, 2023", flag: "🇿🇦", country: "South Africa", city: "Johannesburg Jan 19–20 + Hoedspruit (Kruger area) Jan 20–Feb 4 + JNB Feb 4–5 – El Al LY51 TLV→JNB Jan 19; LY52 JNB→TLV Feb 5", future: false },
  // — 2023 —
  { date: "Feb 14–23, 2023", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS LX253 TLV→ZRH Feb 14 17:45 gate B05 seat 37A; Bao Vest (Swiss Burn) 2023; ÖBB ZRH→VIE Feb 23", future: false },
  { date: "Feb 23–Mar 5, 2023", flag: "🇦🇹", country: "Austria", city: "Vienna – ÖBB ZRH→VIE Feb 23; Wiener Linien transit; Austrian OS857 VIE→TLV Mar 5", future: false },
  { date: "May 18–21, 2023", flag: "🇫🇷", country: "France", city: "What The Farm 2023 – Ferme d'Antioche, Vauxaillon, Aisne (regional burn)", future: false },
  { date: "Jun 19–Jul 4, 2023", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – Transavia HV5802 TLV→AMS Jun 19 20:40 (delayed); Where The Sheep Sleep 2023 regional burn; Ryanair FR3103 AMS→DUB Jul 4", future: false },
  { date: "Jul 4–18, 2023", flag: "🇮🇪", country: "Ireland", city: "Dublin – Ryanair FR3103 AMS→DUB Jul 4 22:00; MayoBurn 2023 regional burn (County Mayo); Ryanair FR6070 DUB→GOT Jul 18 17:15", future: false },
  { date: "Jul 18–Aug 6, 2023", flag: "🇸🇪", country: "Sweden", city: "Gothenburg – Ryanair FR6070 DUB→GOT Jul 18 17:15; The Borderland 2023 regional burn; Airbnb Lerum Jul 31–Aug 5; Eurowings EW8221 GOT→BER Aug 6 19:50 (delayed 30 min)", future: false },
  { date: "Aug 6–24, 2023", flag: "🇩🇪", country: "Germany", city: "Berlin – Eurowings EW8221 GOT→BER Brandenburg Aug 6; KiezBurn 2023 regional burn; BA BA991+BA287 BER→LHR→SFO Aug 24 (LHR connection)", future: false },
  { date: "Aug 24–Sep 13, 2023", flag: "🇺🇸", country: "United States", city: "San Francisco + Burning Man 2023 – BA BA287 LHR→SFO Aug 24 17:10; Black Rock City NV Aug 27–Sep 4; BA286 SFO→LHR Sep 13 19:25", future: false },
  { date: "Sep 14–21, 2023", flag: "🇩🇪", country: "Germany", city: "Berlin – BA BA986 LHR→BER Sep 14 16:10–19:05 (LHR overnight connection); FlixBus BER→VIE Erdberg Sep 21 11:00–20:10", future: false },
  { date: "Sep 21–29, 2023", flag: "🇦🇹", country: "Austria", city: "Vienna – FlixBus BER→VIE Sep 21; El Al LY362 VIE→TLV Sep 29", future: false },
  { date: "Oct 10–28, 2023", flag: "🇲🇪", country: "Montenegro", city: "Tivat / Kotor / Žabljak / Budva / Podgorica – Israir TLV→TIV Oct 10; Airbnb Tivat Oct 10–13; Kotor boat tour Oct 13; Apartmani Momčilo Žabljak Oct 13; Airbnb Prčanj Oct 15–16; SunSea Budva; CroatiaBus Budva→Podgorica Oct 28; Austrian TGD→VIE Oct 28", future: false },
  { date: "Oct 28–Nov 1, 2023", flag: "🇦🇹", country: "Austria", city: "Vienna – Austrian TGD→VIE Oct 28; Wiener Linien Oct 28 & 30; Wizzair VIE→LCA Nov 1", future: false },
  { date: "Nov 1–6, 2023", flag: "🇨🇾", country: "Cyprus", city: "Larnaca – Wizzair VIE→LCA Nov 1; LCA→TLV Nov 6", future: false },
  { date: "Dec 29, 2023", flag: "🇳🇿", country: "New Zealand", city: "Auckland – Etihad EY594 TLV→AUH + EY862 AUH→PVG + Air NZ NZ288 PVG→AKL (departed TLV Dec 29, arrived Auckland Dec 31)", future: false },
  // — 2024 —
  { date: "Jan 2024", flag: "🇳🇿", country: "New Zealand", city: "Ignition 2024 – NZ regional burn; KiwiBurn 2024 – Hunterville, NZ regional burn", future: false },
  { date: "Feb 1, 2024", flag: "🇳🇿", country: "New Zealand", city: "Christchurch & South Island – Jetstar JQ233 AKL→CHC Feb 1; DOC campsites (Lewis Pass, Milford Rd/Cascade Creek); glacier helicopter Feb 20 (AKL→SYD Jetstar was cancelled Feb 5 – Australia trip never happened)", future: false },
  { date: "May 2024", flag: "🇳🇿", country: "New Zealand", city: "Hot Water Beach, Coromandel – back in NZ", future: false },
  { date: "May 6, 2024", flag: "🇩🇪", country: "Germany", city: "Frankfurt – Qatar AKL→FRA via DOH May 6; to WTF France May 8", future: false },
  { date: "May 9–12, 2024", flag: "🇫🇷", country: "France", city: "What The Farm 2024 – Ferme d'Antioche, Vauxaillon, Aisne; Normandy May 13–16; drove to Brussels May 16", future: false },
  { date: "May 16–19, 2024", flag: "🇧🇪", country: "Belgium", city: "Brussels – arrived from Normandy May 16; FlixBus Brussels-North → London Victoria May 19", future: false },
  { date: "May 19–Jun 18, 2024", flag: "🇬🇧", country: "United Kingdom", city: "London – FlixBus Brussels→London Victoria May 19; Burning Nest 2024 regional burn ~May 20–27 England; BA BA0988 LHR→BER Brandenburg Jun 18", future: false },
  { date: "Jun 18–Jul 17, 2024", flag: "🇩🇪", country: "Germany", city: "Berlin – BA BA0988 LHR→BER Brandenburg Jun 18; KiezBurn 2024 regional burn; DB train BER→ZRH Jul 17", future: false },
  { date: "Jul 17–Aug 5, 2024", flag: "🇸🇪", country: "Sweden", city: "Stockholm – SWISS LX1254 ZRH→ARN Jul 17 (delayed); The Borderland 2024 regional burn (10 days); Ryanair FR756 ARN→VIE Aug 5", future: false },
  { date: "Aug 7–11, 2024", flag: "🇦🇹", country: "Austria", city: "Schönburn 2024 – Böllerbauer (during Vienna Aug 5–22 stay)", future: false },
  { date: "Aug 5–22, 2024", flag: "🇦🇹", country: "Austria", city: "Vienna – Ryanair FR756 ARN→VIE Aug 5; Schönburn 2024 Aug 7–11 Böllerbauer; Austrian VIE→SFO Aug 22", future: false },
  { date: "Aug 22–Sep 16, 2024", flag: "🇺🇸", country: "United States", city: "San Francisco + Burning Man 2024 – Austrian VIE→SFO Aug 22; Black Rock City NV Aug 25–Sep 2", future: false },
  { date: "Sep 6, 2024", flag: "🇺🇸", country: "United States", city: "Lake Tahoe NV – Pretty Lights, Harveys Resort", future: false },
  { date: "Sep 16–Oct 12, 2024", flag: "🇨🇦", country: "Canada", city: "Toronto – United SFO→YYZ Sep 16, car rental YYZ; Vancouver – WestJet YYZ→YVR Sep 23; Nomad Cruise 13 to Japan sails Sep 29", future: false },
  { date: "Oct 13–16, 2024", flag: "🇯🇵", country: "Japan", city: "Yokohama – Hotel Resol Sakuragicho", future: false },
  { date: "Oct 17, 2024", flag: "🇯🇵", country: "Japan", city: "Tokyo – SIDI Hub Social Night", future: false },
  { date: "Oct 23–25, 2024", flag: "🇯🇵", country: "Japan", city: "Otsu / Kyoto – Koke Musu Inn", future: false },
  { date: "Nov 2024", flag: "🇳🇿", country: "New Zealand", city: "Re:Gen 2024 – NZ regional burn (3 days; during Nov 2024–May 2025 NZ stay)", future: false },
  { date: "Nov 25, 2024", flag: "🇳🇿", country: "New Zealand", city: "Domestic NZ – Jetstar JQ239 (from Auckland)", future: false },
  // — 2025 —
  { date: "Jan 2025", flag: "🇳🇿", country: "New Zealand", city: "KiwiBurn 2025 – NZ regional burn (7 days); Nelson · Tauranga McLaren Falls camping", future: false },
  { date: "Apr 2025", flag: "🇳🇿", country: "New Zealand", city: "Northern UnBurn 2025 – NZ regional burn (4 days)", future: false },
  { date: "May 10, 2025", flag: "🇳🇿", country: "New Zealand", city: "Auckland – DARKFIELD: FLIGHT + SÉANCE (Aotea Sq)", future: false },
  { date: "May 13, 2025", flag: "🇬🇧", country: "United Kingdom", city: "London Gatwick → Victoria – Trainline", future: false },
  { date: "Jun 6, 2025", flag: "🇬🇧", country: "United Kingdom", city: "London – Loom Club, Islington (DICE)", future: false },
  { date: "Jun 20, 2025", flag: "🇬🇧", country: "United Kingdom", city: "London – British Airways", future: false },
  { date: "~Jun 2025", flag: "🇬🇧", country: "United Kingdom", city: "Burning Nest 2025 – England (regional burn; during London May 13–Jun 20 stay)", future: false },
  { date: "Jun 20–Jul 6, 2025", flag: "🇧🇬", country: "Bulgaria", city: "Bansko – Airbnb, 16 nights", future: false },
  { date: "Jul 7, 2025", flag: "🇩🇪", country: "Germany", city: "Berlin – Ryanair FR1149 from Sofia", future: false },
  { date: "Jul 16–27, 2025", flag: "🇸🇪", country: "Sweden", city: "Stockholm – SAS BER→ARN Jul 16; The Borderland 2025 regional burn; drove to Vienna Jul 27", future: false },
  { date: "Aug 6–10, 2025", flag: "🇦🇹", country: "Austria", city: "Schönburn 2025 – Böllerbauer (during Vienna Jul 27–Aug 15 stay)", future: false },
  { date: "Jul 27–Aug 15, 2025", flag: "🇦🇹", country: "Austria", city: "Vienna – drove from Stockholm Jul 27; Schönburn 2025 Aug 6–10 Böllerbauer; OS207 VIE→FRA + UA59 FRA→SFO Aug 15", future: false },
  { date: "Aug 15–24, 2025", flag: "🇺🇸", country: "United States", city: "San Francisco – Bartlett Hotel", future: false },
  { date: "Aug 24–Sep 1, 2025", flag: "🇺🇸", country: "United States", city: "Black Rock City NV – Burning Man 2025", future: false },
  { date: "Sep 2–4, 2025", flag: "🇺🇸", country: "United States", city: "Reno, Nevada – Airbnb", future: false },
  { date: "Sep 13, 2025", flag: "🇺🇸", country: "United States", city: "San Francisco – OTT Live at Public Works", future: false },
  { date: "Sep 30, 2025", flag: "🇺🇸", country: "United States", city: "United UA2097 SFO→ORD→YYZ Toronto", future: false },
  { date: "Oct 1, 2025", flag: "🇨🇦", country: "Canada", city: "Toronto – United UA2097+UA5293 SFO→ORD→YYZ", future: false },
  { date: "Oct 8–9, 2025", flag: "🇨🇦", country: "Canada", city: "Barrie, Ontario – Airbnb", future: false },
  { date: "Oct 12, 2025", flag: "🇨🇦", country: "Canada", city: "Toronto – Legends of Horror (TicketWeb)", future: false },
  { date: "Oct 14–23, 2025", flag: "🇦🇹", country: "Austria", city: "Vienna – Airbnb, 9 nights", future: false },
  { date: "Oct 29, 2025", flag: "🇨🇭", country: "Switzerland", city: "Zurich – Eurowings departure", future: false },
  { date: "Oct 29, 2025", flag: "🇩🇪", country: "Germany", city: "Düsseldorf – Eurowings", future: false },
  { date: "Oct 29, 2025", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – Eurowings", future: false },
  { date: "Nov 4, 2025", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – Digital Tech Summit 2025", future: false },
  { date: "Nov 6, 2025", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – KLM KL1276 CPH→AMS", future: false },
  { date: "Nov 8–9, 2025", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – Dutch Decompression FLORASCEND Nov 8 + Playa Echoes afterparty Nov 9 (Radion)", future: false },
  { date: "Nov 14–16, 2025", flag: "🇳🇿", country: "New Zealand", city: "Auckland – Qatar AMS→DOH→AKL, departs Nov 14 21:50, arrives Nov 16", future: false },
  // — 2026 (upcoming) —
  { date: "Jan 2026", flag: "🇳🇿", country: "New Zealand", city: "Ignition 2026 – NZ regional burn (7 days); KiwiBurn 2026 – NZ regional burn (6 days)", future: false },
  { date: "Jan–Apr 2026", flag: "🇳🇿", country: "New Zealand", city: "Nelson Lakes · Kahurangi · Parklands Marina", future: false },
  { date: "May 6, 2026", flag: "🇨🇦", country: "Canada", city: "Toronto – Qantas QF3 AKL→JFK→YYZ", future: false },
  { date: "Jun 9, 2026", flag: "🇬🇧", country: "United Kingdom", city: "London Gatwick – Air Transat TS122 YYZ→LGW Jun 8 22:45", future: false },
];

// Events with confirmed venue addresses
const events = [
  // ── Non-burn events ──
  { name: "Pretty Lights", venue: "Lake Tahoe Outdoor Arena at Harveys", address: "Stateline, Nevada, USA", date: "Sep 6, 2024", emoji: "🎵", type: "Music", lat: 38.9658, lng: -119.9366 },
  { name: "SIDI Hub Tokyo – Social Night", venue: "Tokyo", address: "Tokyo, Japan", date: "Oct 17, 2024", emoji: "🌏", type: "Work", lat: 35.6762, lng: 139.6503 },
  { name: "Loom Turns One (DICE)", venue: "Loom Club", address: "6 Northampton Street, Islington, London N1 2HY", date: "Jun 6, 2025", emoji: "🎧", type: "Music", lat: 51.5381, lng: -0.1015 },
  { name: "DARKFIELD: FLIGHT + SÉANCE", venue: "Aotea Square", address: "50 Mayoral Dr, Auckland, NZ 1010", date: "May 10, 2025", emoji: "🎭", type: "Arts", lat: -36.8508, lng: 174.7645 },
  { name: "OTT (Live) at Public Works", venue: "Public Works", address: "San Francisco, CA, USA", date: "Sep 13, 2025", emoji: "🎵", type: "Music", lat: 37.7696, lng: -122.4165 },
  { name: "Legends of Horror", venue: "Toronto (TicketWeb.ca)", address: "Toronto, Ontario, Canada", date: "Oct 12, 2025", emoji: "🎃", type: "Arts", lat: 43.6511, lng: -79.3470 },
  { name: "Playa Echoes – Dutch Decompression", venue: "Radion, Amsterdam (FLORASCEND afterparty)", address: "Amsterdam, Netherlands", date: "Nov 8–9, 2025", emoji: "🌸", type: "Burn", lat: 52.3676, lng: 4.9041 },
  { name: "Digital Tech Summit 2025", venue: "Copenhagen", address: "Copenhagen, Denmark", date: "Nov 4, 2025", emoji: "💻", type: "Work", lat: 55.6761, lng: 12.5683 },
  { name: "Vengaboys – 90's Mania", venue: "Auckland Town Hall, Great Hall", address: "Greys Ave, Auckland CBD, NZ", date: "Jan 28, 2026", emoji: "🕺", type: "Music", lat: -36.8481, lng: 174.7633 },
  { name: "Breathe | Mauri Ora (VR) – Te Papa", venue: "Museum of New Zealand Te Papa Tongarewa", address: "55 Cable Street, Wellington, NZ", date: "Feb 22, 2026", emoji: "🏛️", type: "Arts", lat: -41.2903, lng: 174.7817 },

  // ── Burns – 2014 ──
  { name: "Burning Man 2014", venue: "Black Rock City", address: "Black Rock Desert, NV, USA", date: "Aug 25–Sep 1, 2014", emoji: "🔥", type: "Burn", lat: 40.7864, lng: -119.2065 },

  // ── Burns – 2015 ──
  { name: "Burning Man 2015", venue: "Black Rock City", address: "Black Rock Desert, NV, USA", date: "Aug 30–Sep 7, 2015", emoji: "🔥", type: "Burn", lat: 40.7864, lng: -119.2065 },

  // ── Burns – 2016 ──
  { name: "Burning Bär 2016", venue: "SO36 / Berlin", address: "Berlin, Germany", date: "Feb 25–29, 2016", emoji: "🔥", type: "Burn", lat: 52.5200, lng: 13.4050 },
  { name: "The Borderland 2016", venue: "The Borderland", address: "Denmark", date: "Jul 14–26, 2016", emoji: "🔥", type: "Burn", lat: 55.6761, lng: 12.5683 },
  { name: "Where The Sheep Sleep 2016", venue: "Where The Sheep Sleep", address: "Netherlands", date: "Jul 26–Aug 2, 2016", emoji: "🔥", type: "Burn", lat: 52.5000, lng: 5.7000 },
  { name: "Burning Man 2016", venue: "Black Rock City", address: "Black Rock Desert, NV, USA", date: "Aug 28–Sep 5, 2016", emoji: "🔥", type: "Burn", lat: 40.7864, lng: -119.2065 },

  // ── Burns – 2017 ──
  { name: "What The Farm 2017", venue: "Ferme d'Antioche", address: "Vauxaillon, Aisne, France", date: "May 12–14, 2017", emoji: "🔥", type: "Burn", lat: 49.5592, lng: 3.5308 },
  { name: "KiezBurn 2017", venue: "KiezBurn – Berlin regional burn", address: "Berlin area, Germany", date: "~Jun 2017", emoji: "🔥", type: "Burn", lat: 52.5200, lng: 13.4050 },
  { name: "Nowhere 2017", venue: "Nowhere", address: "near Castejón de Monegros, Zaragoza, Spain", date: "Jul 3–9, 2017", emoji: "🔥", type: "Burn", lat: 41.5936, lng: -0.1536 },
  { name: "The Borderland 2017", venue: "The Borderland", address: "Denmark", date: "Jul 22–Aug 2, 2017", emoji: "🔥", type: "Burn", lat: 55.6761, lng: 12.5683 },
  { name: "Burning Man 2017", venue: "Black Rock City", address: "Black Rock Desert, NV, USA", date: "Aug 27–Sep 4, 2017", emoji: "🔥", type: "Burn", lat: 40.7864, lng: -119.2065 },
  { name: "Dutch Decompression 2017", venue: "Amsterdam", address: "Amsterdam, Netherlands", date: "Nov 2017", emoji: "🔥", type: "Burn", lat: 52.3676, lng: 4.9041 },

  // ── Burns – 2018 ──
  { name: "What The Farm 2018", venue: "Ferme d'Antioche", address: "Vauxaillon, Aisne, France", date: "Jun 8–10, 2018", emoji: "🔥", type: "Burn", lat: 49.5592, lng: 3.5308 },
  { name: "Burning Man 2018", venue: "Black Rock City", address: "Black Rock Desert, NV, USA", date: "Aug 26–Sep 3, 2018", emoji: "🔥", type: "Burn", lat: 40.7864, lng: -119.2065 },
  { name: "Ponyhof 2018", venue: "Ponyhof – German regional burn", address: "Germany", date: "Sep 12–18, 2018", emoji: "🔥", type: "Burn", lat: 52.4500, lng: 12.5000 },
  { name: "Schönburn 2018", venue: "Schloss Wetzlas", address: "Wetzlas, Waldviertel, Lower Austria", date: "Sep 2018 (approximate)", emoji: "🔥", type: "Burn", lat: 48.5100, lng: 15.3900 },

  // ── Burns – 2019 ──
  { name: "Vienna Burning Ball 2019", venue: "Vienna", address: "Vienna, Austria", date: "~Mar 1–2, 2019", emoji: "🔥", type: "Burn", lat: 48.2082, lng: 16.3738 },
  { name: "ZBB / Burning Bar 2019", venue: "Berlin area", address: "Berlin, Germany", date: "Mar 5–12, 2019", emoji: "🔥", type: "Burn", lat: 52.5200, lng: 13.4050 },
  { name: "Dragon Burn 2019", venue: "Dragon Burn", address: "near Shanghai, China", date: "~Late Apr 2019", emoji: "🔥", type: "Burn", lat: 31.2304, lng: 121.4737 },
  { name: "What The Farm 2019", venue: "Ferme d'Antioche", address: "Vauxaillon, Aisne, France", date: "May 31–Jun 2, 2019", emoji: "🔥", type: "Burn", lat: 49.5592, lng: 3.5308 },
  { name: "KiezBurn 2019", venue: "KiezBurn – Berlin regional burn", address: "Berlin area, Germany", date: "~Jun 2019", emoji: "🔥", type: "Burn", lat: 52.5200, lng: 13.4050 },
  { name: "Nowhere 2019", venue: "Nowhere", address: "near Castejón de Monegros, Zaragoza, Spain", date: "~Jul 2–7, 2019", emoji: "🔥", type: "Burn", lat: 41.5936, lng: -0.1536 },
  { name: "Ponyhof 2019", venue: "Ponyhof – German regional burn", address: "Germany", date: "Sep 12–15, 2019", emoji: "🔥", type: "Burn", lat: 52.4500, lng: 12.5000 },
  { name: "Schönburn 2019", venue: "Schloss Wetzlas", address: "Wetzlas, Waldviertel, Lower Austria", date: "~Sep 2019", emoji: "🔥", type: "Burn", lat: 48.5100, lng: 15.3900 },
  { name: "Hamburn 2019", venue: "Hamburn", address: "Hamburg area, Germany", date: "Oct 22–28, 2019", emoji: "🔥", type: "Burn", lat: 53.5753, lng: 10.0153 },

  // ── Burns – 2020 ──
  { name: "Ponyhof 2020", venue: "Ponyhof – German regional burn", address: "Germany", date: "Sep 2020", emoji: "🔥", type: "Burn", lat: 52.4500, lng: 12.5000 },
  { name: "Zum Brennenden Löwen 2020", venue: "Zum Brennenden Löwen", address: "Hamburg area, Germany", date: "Sep 2020", emoji: "🔥", type: "Burn", lat: 53.5753, lng: 10.0153 },
  { name: "Schönburn 2020", venue: "Schloss Wetzlas", address: "Wetzlas, Waldviertel, Lower Austria", date: "~Sep 23–27, 2020", emoji: "🔥", type: "Burn", lat: 48.5100, lng: 15.3900 },

  // ── Burns – 2021 ──
  { name: "Revent 2021", venue: "Revent", address: "Copenhagen, Denmark", date: "Jul 15–27, 2021", emoji: "🔥", type: "Burn", lat: 55.6761, lng: 12.5683 },
  { name: "KiezBurn 2021", venue: "KiezBurn – Berlin regional burn", address: "Berlin area, Germany", date: "~Aug 20–26, 2021", emoji: "🔥", type: "Burn", lat: 52.5200, lng: 13.4050 },
  { name: "Schönburn 2021", venue: "Schloss Wetzlas", address: "Wetzlas, Waldviertel, Lower Austria", date: "Sep 8–12, 2021", emoji: "🔥", type: "Burn", lat: 48.5100, lng: 15.3900 },

  // ── Burns – 2022 ──
  { name: "What The Farm 2022", venue: "Ferme d'Antioche", address: "Vauxaillon, Aisne, France", date: "Apr 14–17, 2022", emoji: "🔥", type: "Burn", lat: 49.5592, lng: 3.5308 },
  { name: "Nowhere 2022", venue: "Nowhere", address: "near Castejón de Monegros, Zaragoza, Spain", date: "~Jul 3–8, 2022", emoji: "🔥", type: "Burn", lat: 41.5936, lng: -0.1536 },
  { name: "KiezBurn 2022", venue: "KiezBurn – Berlin regional burn", address: "Berlin area, Germany", date: "Jul 11–21, 2022", emoji: "🔥", type: "Burn", lat: 52.5200, lng: 13.4050 },
  { name: "The Borderland 2022", venue: "The Borderland", address: "Sweden", date: "Jul 21–Aug 5, 2022", emoji: "🔥", type: "Burn", lat: 57.7089, lng: 11.9746 },
  { name: "Burning Man 2022", venue: "Black Rock City", address: "Black Rock Desert, NV, USA", date: "Aug 28–Sep 5, 2022", emoji: "🔥", type: "Burn", lat: 40.7864, lng: -119.2065 },
  { name: "Schönburn 2022", venue: "Böllerbauer", address: "Böllerbauer, Upper Austria, Austria", date: "Sep ~7–11, 2022", emoji: "🔥", type: "Burn", lat: 48.2524, lng: 13.8304 },

  // ── Burns – 2023 ──
  { name: "Bao Vest 2023", venue: "Swiss Burn – Bao Vest", address: "Zurich area, Switzerland", date: "~Feb 2023", emoji: "🔥", type: "Burn", lat: 47.3769, lng: 8.5417 },
  { name: "What The Farm 2023", venue: "Ferme d'Antioche", address: "Vauxaillon, Aisne, France", date: "May 18–21, 2023", emoji: "🔥", type: "Burn", lat: 49.5592, lng: 3.5308 },
  { name: "Where The Sheep Sleep 2023", venue: "Where The Sheep Sleep", address: "Netherlands", date: "Jun/Jul 2023", emoji: "🔥", type: "Burn", lat: 52.5000, lng: 5.7000 },
  { name: "MayoBurn 2023", venue: "MayoBurn", address: "County Mayo, Ireland", date: "Jul 2023", emoji: "🔥", type: "Burn", lat: 53.8500, lng: -9.3000 },
  { name: "The Borderland 2023", venue: "The Borderland", address: "Sweden", date: "Jul 18–Aug 6, 2023", emoji: "🔥", type: "Burn", lat: 57.7089, lng: 11.9746 },
  { name: "KiezBurn 2023", venue: "KiezBurn – Berlin regional burn", address: "Berlin area, Germany", date: "Aug 2023", emoji: "🔥", type: "Burn", lat: 52.5200, lng: 13.4050 },
  { name: "Burning Man 2023", venue: "Black Rock City", address: "Black Rock Desert, NV, USA", date: "Aug 27–Sep 4, 2023", emoji: "🔥", type: "Burn", lat: 40.7864, lng: -119.2065 },

  // ── Burns – 2024 ──
  { name: "Ignition 2024", venue: "Ignition – NZ regional burn", address: "New Zealand", date: "Jan 2024", emoji: "🔥", type: "Burn", lat: -39.6000, lng: 176.8000 },
  { name: "KiwiBurn 2024", venue: "KiwiBurn", address: "Hunterville, Manawatū-Whanganui, NZ", date: "Jan 2024", emoji: "🔥", type: "Burn", lat: -39.9300, lng: 175.5700 },
  { name: "What The Farm 2024", venue: "Ferme d'Antioche", address: "Vauxaillon, Aisne, France", date: "May 9–12, 2024", emoji: "🔥", type: "Burn", lat: 49.5592, lng: 3.5308 },
  { name: "Burning Nest 2024", venue: "Burning Nest", address: "England, UK", date: "~May 20–27, 2024", emoji: "🔥", type: "Burn", lat: 51.3000, lng: -1.5000 },
  { name: "KiezBurn 2024", venue: "KiezBurn – Berlin regional burn", address: "Berlin area, Germany", date: "Jun/Jul 2024", emoji: "🔥", type: "Burn", lat: 52.5200, lng: 13.4050 },
  { name: "The Borderland 2024", venue: "The Borderland", address: "Sweden", date: "Jul 17–Aug 5, 2024", emoji: "🔥", type: "Burn", lat: 57.7089, lng: 11.9746 },
  { name: "Schönburn 2024", venue: "Böllerbauer", address: "Böllerbauer, Upper Austria, Austria", date: "Aug 7–11, 2024", emoji: "🔥", type: "Burn", lat: 48.2524, lng: 13.8304 },
  { name: "Burning Man 2024", venue: "Black Rock City", address: "Black Rock Desert, NV, USA", date: "Aug 25–Sep 2, 2024", emoji: "🔥", type: "Burn", lat: 40.7864, lng: -119.2065 },
  { name: "Re:Gen 2024", venue: "Re:Gen – NZ regional burn", address: "New Zealand", date: "Nov 2024", emoji: "🔥", type: "Burn", lat: -37.5000, lng: 175.0000 },

  // ── Burns – 2025 ──
  { name: "KiwiBurn 2025", venue: "KiwiBurn", address: "New Zealand", date: "Jan 2025", emoji: "🔥", type: "Burn", lat: -39.9300, lng: 175.5700 },
  { name: "Northern UnBurn 2025", venue: "Northern UnBurn – NZ regional burn", address: "North Island, New Zealand", date: "Apr 2025", emoji: "🔥", type: "Burn", lat: -36.5000, lng: 174.5000 },
  { name: "Burning Nest 2025", venue: "Burning Nest", address: "England, UK", date: "~Jun 2025", emoji: "🔥", type: "Burn", lat: 51.3000, lng: -1.5000 },
  { name: "The Borderland 2025", venue: "The Borderland", address: "Sweden", date: "Jul 16–27, 2025", emoji: "🔥", type: "Burn", lat: 57.7089, lng: 11.9746 },
  { name: "Schönburn 2025", venue: "Böllerbauer", address: "Böllerbauer, Upper Austria, Austria", date: "Aug 6–10, 2025", emoji: "🔥", type: "Burn", lat: 48.2524, lng: 13.8304 },
  { name: "Burning Man 2025 – Tomorrow Today", venue: "Black Rock City", address: "Black Rock Desert, NV 89412, USA", date: "Aug 24–Sep 1, 2025", emoji: "🔥", type: "Burn", lat: 40.7864, lng: -119.2065 },

  // ── Burns – 2026 (upcoming) ──
  { name: "Ignition 2026", venue: "Ignition – NZ regional burn", address: "New Zealand", date: "Jan 2026", emoji: "🔥", type: "Burn", lat: -39.6000, lng: 176.8000 },
  { name: "KiwiBurn 2026", venue: "KiwiBurn", address: "New Zealand", date: "Jan 2026", emoji: "🔥", type: "Burn", lat: -39.9300, lng: 175.5700 },
  { name: "What The Farm VIII (WTF VIII)", venue: "Ferme d'Antioche", address: "Ferme d'Antioche, Vauxaillon, Aisne, France", date: "May 2026", emoji: "🔥", type: "Burn", lat: 49.5592, lng: 3.5308 }
];

// ── Calendar: known stays away from Israel ──
// Gaps between entries = home in Israel. Sorted by 'from'.
const stays = [
  { from:"2005-05-28", to:"2005-07-16", flag:"🇺🇸", country:"United States", city:"Seattle / San Diego" },
  { from:"2005-07-17", to:"2005-07-21", flag:"🇨🇷", country:"Costa Rica", city:"San José – Kabata Hostel, Arenal volcano, Omega canopy" },
  { from:"2005-07-22", to:"2005-09-05", flag:"🇵🇪", country:"Peru", city:"Huaraz / HuayHuash trek / Pisco / Huacachina / Nazca / Cuzco / Machu Picchu" },
  { from:"2005-09-06", to:"2005-09-27", flag:"🇦🇷", country:"Argentina", city:"Buenos Aires / Bariloche / Iguassu Falls" },
  { from:"2005-09-28", to:"2005-10-18", flag:"🇧🇷", country:"Brazil", city:"Iguassu / Salvador / Fortaleza / Jericoacoara / Morro de São Paulo" },
  { from:"2007-10-01", to:"2007-10-08", flag:"🇮🇹", country:"Italy", city:"Como" },
  { from:"2007-10-08", to:"2007-10-12", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam" },
  { from:"2008-06-04", to:"2008-06-12", flag:"🇬🇧", country:"United Kingdom", city:"London / Horsham" },
  { from:"2008-10-02", to:"2008-10-31", flag:"🇮🇳", country:"India", city:"Andaman Islands" },
  { from:"2009-04-28", to:"2009-05-02", flag:"🇪🇬", country:"Egypt", city:"Dahab, Sinai – scuba diving safari, Red Sea" },
  { from:"2009-09-24", to:"2009-10-02", flag:"🇪🇸", country:"Spain", city:"Tenerife Norte (TFN) – El Al LY393 TLV→BCN Sep 24 06:20; JK5234 BCN→TFN Sep 24 11:35" },
  { from:"2009-10-02", to:"2009-10-05", flag:"🇪🇸", country:"Spain", city:"Barcelona – UX9144 TFN→BCN Oct 2 18:50; El Al LY394 BCN→TLV Oct 5 11:25" },
  { from:"2009-12-01", to:"2009-12-08", flag:"🇦🇷", country:"Argentina", city:"Buenos Aires · Córdoba · Rosario – Iberia IB3751+IB6847 TLV→Madrid→Buenos Aires Dec 1" },
  { from:"2009-12-08", to:"2009-12-13", flag:"🇦🇷", country:"Argentina", city:"Salta" },
  { from:"2009-12-13", to:"2009-12-16", flag:"🇧🇴", country:"Bolivia", city:"Villazon border crossing (overland from Salta) → Uyuni – 3-day Salar jeep tour" },
  { from:"2009-12-16", to:"2009-12-21", flag:"🇨🇱", country:"Chile", city:"San Pedro de Atacama – arrived via Salar jeep tour drop-off (border crossing from Bolivia)" },
  { from:"2009-12-21", to:"2009-12-24", flag:"🇨🇱", country:"Chile", city:"Pisco Elqui" },
  { from:"2009-12-24", to:"2009-12-29", flag:"🇨🇱", country:"Chile", city:"Pucon – Villarica volcano" },
  { from:"2009-12-29", to:"2010-01-05", flag:"🇦🇷", country:"Argentina", city:"en route to Bariloche" },
  { from:"2010-01-05", to:"2010-01-10", flag:"🇦🇷", country:"Argentina", city:"Bariloche – NYE 2010" },
  { from:"2010-01-10", to:"2010-01-12", flag:"🇦🇷", country:"Argentina", city:"Ushuaia – Fin del Mundo" },
  { from:"2010-01-12", to:"2010-01-26", flag:"🇦🇶", country:"Antarctica", city:"Ocean Nova cruise – crossed polar circle" },
  { from:"2010-01-26", to:"2010-02-04", flag:"🇦🇷", country:"Argentina", city:"Ushuaia / en route north" },
  { from:"2010-02-04", to:"2010-02-05", flag:"🇨🇱", country:"Chile", city:"Punta Arenas" },
  { from:"2010-02-05", to:"2010-02-13", flag:"🇨🇱", country:"Chile", city:"Torres del Paine – 8-day trek" },
  { from:"2010-02-13", to:"2010-02-18", flag:"🇦🇷", country:"Argentina", city:"El Calafate / El Chalten" },
  { from:"2010-02-18", to:"2010-03-06", flag:"🇨🇱", country:"Chile", city:"Carretera Austral – 12-day hitchhike" },
  { from:"2010-03-06", to:"2010-03-10", flag:"🇦🇷", country:"Argentina", city:"El Bolson" },
  { from:"2010-03-10", to:"2010-03-11", flag:"🇦🇷", country:"Argentina", city:"Buenos Aires" },
  { from:"2010-03-11", to:"2010-03-13", flag:"🇦🇷", country:"Argentina", city:"Puerto Iguazu – Iguazu Falls" },
  { from:"2010-03-13", to:"2010-03-31", flag:"🇧🇷", country:"Brazil", city:"Rio de Janeiro – TAM JJ3186 Iguazu→Rio Mar 13" },
  { from:"2010-03-31", to:"2010-04-28", flag:"🇧🇷", country:"Brazil", city:"Salvador – Nega Maluca Guesthouse; TAM JJ3190 Rio→Salvador Mar 31" },
  { from:"2010-04-28", to:"2010-05-04", flag:"🇧🇷", country:"Brazil", city:"Ribeirao Preto / São Paulo – Avianca 6311 Salvador→São Paulo Apr 28" },
  { from:"2010-05-04", to:"2010-05-09", flag:"🇧🇷", country:"Brazil", city:"Manaus – Amazon region" },
  { from:"2010-05-09", to:"2010-05-24", flag:"🇧🇷", country:"Brazil", city:"Fortaleza / Natal – TAM JJ3307 Natal→São Paulo May 22; LAN LA2764 São Paulo→Lima May 24" },
  { from:"2010-05-24", to:"2010-05-25", flag:"🇵🇪", country:"Peru", city:"Lima – overnight transit; TACA TA138 Lima→Guayaquil May 25" },
  { from:"2010-05-25", to:"2010-06-06", flag:"🇪🇨", country:"Ecuador", city:"Guayaquil & Galapagos – TACA TA138 Lima→GYE May 25; AeroGal GYE→San Cristóbal May 29 / →Quito Jun 5; Iberia IB6464+IB3752 Quito→Madrid→TLV Jun 6–7" },
  { from:"2010-07-02", to:"2010-07-07", flag:"🇮🇹", country:"Italy", city:"Venice" },
  { from:"2010-07-07", to:"2010-07-08", flag:"🇧🇪", country:"Belgium", city:"Brussels Charleroi – Ryanair FR6054 from Venice" },
  { from:"2010-07-08", to:"2010-07-12", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam + Utrecht" },
  { from:"2010-07-12", to:"2010-07-20", flag:"🇬🇧", country:"United Kingdom", city:"London – Eurolines from Amsterdam Jul 12; Oxford Jul 15; Horsham Jul 17–18" },
  { from:"2012-01-15", to:"2012-04-02", flag:"🇺🇸", country:"United States", city:"Palo Alto / San Francisco – UpWest Labs" },
  { from:"2012-11-08", to:"2012-11-18", flag:"🇵🇹", country:"Portugal", city:"Lisbon + road trip" },
  { from:"2013-05-12", to:"2013-05-28", flag:"🇺🇸", country:"United States", city:"San Francisco – Google I/O 2013" },
  { from:"2013-07-20", to:"2013-07-29", flag:"🇭🇺", country:"Hungary", city:"SUN Festival + Budapest" },
  { from:"2014-07-15", to:"2014-07-16", flag:"🇭🇺", country:"Hungary", city:"Budapest – El Al TLV→BUD Jul 15; with Golan" },
  { from:"2014-07-16", to:"2014-07-20", flag:"🇸🇰", country:"Slovakia", city:"Košice & hiking – CouchSurfing side trip from Budapest" },
  { from:"2014-07-20", to:"2014-07-29", flag:"🇭🇺", country:"Hungary", city:"Budapest – with Golan (Corvin Plaza); TAP BUD→LIS Jul 29" },
  { from:"2014-07-29", to:"2014-08-17", flag:"🇵🇹", country:"Portugal", city:"Lisbon + Boom Festival 2014 (Idanha-a-Nova) – TAP BUD→LIS Jul 29" },
  { from:"2014-08-25", to:"2014-09-21", flag:"🇺🇸", country:"United States", city:"Burning Man 2014 / San Francisco – SFMTA Sep 21; overnight SFO→YYZ Sep 21–22 (Air Canada e-ticket booked Aug 18)" },
  { from:"2014-09-22", to:"2014-10-15", flag:"🇨🇦", country:"Canada", city:"Toronto / Vancouver – AC105 YYZ→YVR Sep 22 10:00; US 798 SEA→PHL + US 796 PHL→TLV Oct 15–16" },
  { from:"2014-10-15", to:"2014-10-16", flag:"🇺🇸", country:"United States", city:"Seattle – US 798 SEA→PHL 08:35 + US 796 PHL→TLV 21:10" },
  { from:"2015-08-26", to:"2015-09-27", flag:"🇺🇸", country:"United States", city:"Burning Man 2015 / San Francisco / Reno / Symbiosis" },
  { from:"2016-02-25", to:"2016-02-29", flag:"🇩🇪", country:"Germany", city:"Berlin – Burning Bär – Plug and Play" },
  { from:"2016-07-14", to:"2016-07-26", flag:"🇩🇰", country:"Denmark", city:"Copenhagen + road trip" },
  { from:"2016-07-26", to:"2016-08-02", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam – SAS SK 553 CPH→AMS Jul 26" },
  { from:"2016-08-21", to:"2016-10-03", flag:"🇺🇸", country:"United States", city:"San Francisco / Reno / Symbiosis 2016 (SWISS)" },
  { from:"2016-12-02", to:"2016-12-06", flag:"🇺🇸", country:"United States", city:"Las Vegas" },
  { from:"2016-12-06", to:"2016-12-27", flag:"🇺🇸", country:"United States", city:"San Francisco (Dec 2016)" },
  { from:"2017-05-12", to:"2017-05-14", flag:"🇫🇷", country:"France", city:"What The Farm 2017 – Ferme d'Antioche, Vauxaillon, Aisne (Brussels Airlines SN3294 TLV→BRU May 12; drove to farm; SN3293 BRU→TLV May 14)" },
  { from:"2017-06-21", to:"2017-06-26", flag:"🇩🇪", country:"Germany", city:"Berlin – Air Berlin AB 8383 TLV→TXL Jun 21; KiezBurn 2017 Jun 22–25; AB 8382 TXL→TLV Jun 26" },
  { from:"2017-07-03", to:"2017-07-09", flag:"🇪🇸", country:"Spain", city:"Nowhere 2017 – near Castejón de Monegros, Zaragoza (flight TLV→Spain)" },
  { from:"2017-07-21", to:"2017-07-22", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – Pegasus PC 780+PC 1071 TLV→SAW→CPH Jul 21; Avis car rental CPH" },
  { from:"2017-07-22", to:"2017-08-02", flag:"🇩🇰", country:"Denmark", city:"The Borderland 2017 – drove from Copenhagen with Yulia" },
  { from:"2017-08-02", to:"2017-08-04", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – drove back; A3 811+A3 928 CPH→ATH→TLV Aug 3–4" },
  { from:"2017-08-14", to:"2017-09-10", flag:"🇺🇸", country:"United States", city:"Portland OR / San Francisco / Burning Man 2017" },
  { from:"2017-11-09", to:"2017-11-15", flag:"🇬🇧", country:"United Kingdom", city:"London – London Decompression" },
  { from:"2017-11-15", to:"2017-11-22", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam – Dutch Decompression 2017; BA 2762 LHR→AMS Nov 15 15:45→18:05" },
  { from:"2018-01-11", to:"2018-01-18", flag:"🇧🇪", country:"Belgium", city:"Brussels – business (Brussels Airlines)" },
  { from:"2018-03-28", to:"2018-03-29", flag:"🇨🇦", country:"Canada", city:"Toronto – Air Canada AC85 TLV→YYZ Mar 28 11:45→16:25; AC1810 YYZ→CUN Mar 29" },
  { from:"2018-03-29", to:"2018-04-13", flag:"🇲🇽", country:"Mexico", city:"Cancun – Air Canada AC1810 YYZ→CUN Mar 29; AC1813 (rouge) CUN→YYZ Apr 12 20:35" },
  { from:"2018-04-13", to:"2018-04-13", flag:"🇨🇦", country:"Canada", city:"Toronto – transit; Air Canada AC84 YYZ→TLV Apr 13 16:40→Apr 14 10:00" },
  { from:"2018-06-08", to:"2018-06-10", flag:"🇧🇪", country:"Belgium", city:"Brussels – business (Brussels Airlines SN3294/SN3293)" },
  { from:"2018-06-18", to:"2018-06-30", flag:"🇩🇪", country:"Germany", city:"Berlin – Turkish Airlines TLV→BER Jun 18; KiezBurn 2018; Eurowings EW8526 BER→BCN Jun 30" },
  { from:"2018-06-30", to:"2018-07-10", flag:"🇪🇸", country:"Spain", city:"Barcelona – Eurowings EW8526 BER→BCN Jun 30" },
  { from:"2018-07-21", to:"2018-07-28", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – Borderland 2018" },
  { from:"2018-08-22", to:"2018-09-11", flag:"🇺🇸", country:"United States", city:"San Francisco / Burning Man 2018 – United TLV→SFO Aug 22; departed SFO→YVR Sep 11 (AC8839) + YVR→FRA→BER Sep 12 (AC9637)" },
  { from:"2018-09-12", to:"2018-09-18", flag:"🇩🇪", country:"Germany", city:"Berlin – AC8839 SFO→YVR Sep 11 + AC9637 YVR→FRA→BER Sep 12; with Nadja Schreiber" },
  { from:"2018-09-18", to:"2018-09-24", flag:"🇦🇹", country:"Austria", city:"Vienna – easyJet BER SXF→VIE Sep 18; Wizzair W62811 VIE→TLV Sep 24" },
  { from:"2018-10-07", to:"2018-10-07", flag:"🇩🇪", country:"Germany", city:"Berlin TXL – Aegean A30929 TLV→ATH→BER (with Nadja)" },
  { from:"2018-12-31", to:"2019-01-04", flag:"🇧🇪", country:"Belgium", city:"Brussels" },
  { from:"2019-03-01", to:"2019-03-05", flag:"🇦🇹", country:"Austria", city:"Vienna – Vienna Burning Ball" },
  { from:"2019-03-05", to:"2019-03-12", flag:"🇩🇪", country:"Germany", city:"Berlin – ÖBB Nightjet Wien→BER arr Mar 5; FlixBus BER→ZRH Mar 12" },
  { from:"2019-03-13", to:"2019-03-31", flag:"🇫🇷", country:"France", city:"Chamonix – FlixBus via Zurich, car rental + Chamonix Chalets" },
  { from:"2019-04-24", to:"2019-05-13", flag:"🇨🇳", country:"China", city:"Dragon Burn + Shanghai" },
  { from:"2019-05-30", to:"2019-06-20", flag:"🇨🇭", country:"Switzerland", city:"Zurich / Valais (Salgesch)" },
  { from:"2019-06-20", to:"2019-06-25", flag:"🇩🇪", country:"Germany", city:"Berlin TXL – drove with friend ZRH→BER Jun 22" },
  { from:"2019-07-06", to:"2019-07-19", flag:"🇪🇸", country:"Spain", city:"Madrid + Barcelona + Tarragona – SWISS LX2030 ZRH→MAD Jul 6 (delayed 21:50); arrived from TLV via ZRH" },
  { from:"2019-07-19", to:"2019-07-21", flag:"🇨🇭", country:"Switzerland", city:"Zurich – SWISS LX1959 BCN→ZRH Jul 19 18:35; LX1278 ZRH→CPH Jul 21 21:00" },
  { from:"2019-07-21", to:"2019-07-31", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – Borderland 2019; SWISS LX1278 ZRH→CPH Jul 21" },
  { from:"2019-09-05", to:"2019-09-12", flag:"🇨🇭", country:"Switzerland", city:"Zurich – SWISS TLV→ZRH Sep 5" },
  { from:"2019-09-12", to:"2019-09-15", flag:"🇩🇪", country:"Germany", city:"Ponyhof 2019 regional burn – side trip from Zurich" },
  { from:"2019-09-15", to:"2019-09-16", flag:"🇦🇹", country:"Austria", city:"Vienna – FlixBus side trip; Schönburn 2019" },
  { from:"2019-09-16", to:"2019-09-24", flag:"🇨🇭", country:"Switzerland", city:"Zurich – El Al ZRH→TLV Sep 24" },
  { from:"2019-10-22", to:"2019-10-28", flag:"🇩🇪", country:"Germany", city:"Berlin – PREMIUM Hostel" },
  { from:"2019-10-28", to:"2019-10-28", flag:"🇬🇷", country:"Greece", city:"Athens – Aegean A3 821 TXL→ATH transit; A3 924 ATH→TLV" },
  { from:"2019-11-18", to:"2019-11-26", flag:"🇨🇭", country:"Switzerland", city:"Zurich" },
  { from:"2019-11-26", to:"2019-11-30", flag:"🇲🇹", country:"Malta", city:"Malta – Air Malta KM491" },
  { from:"2019-11-30", to:"2019-12-16", flag:"🇨🇭", country:"Switzerland", city:"Zurich – Air Malta KM 0490 MLA→ZRH Nov 30; departed ZRH→TLV Dec 16" },
  { from:"2020-06-21", to:"2020-06-26", flag:"🇩🇪", country:"Germany", city:"Berlin (+ Frankfurt transit)" },
  { from:"2020-06-26", to:"2020-06-29", flag:"🇨🇭", country:"Switzerland", city:"Zurich – DB BUS42227 München ZOB→Zürich HB Jun 26" },
  { from:"2020-06-29", to:"2020-07-04", flag:"🇦🇹", country:"Austria", city:"Vienna – ÖBB Railjet ZRH→VIE Jun 29; Ryanair FR7161 VIE→TLV Jul 4 13:00" },
  { from:"2020-09-09", to:"2020-09-22", flag:"🇩🇪", country:"Germany", city:"Berlin SXF – Ryanair FR6473" },
  { from:"2020-09-22", to:"2020-09-28", flag:"🇦🇹", country:"Austria", city:"Vienna – drove from Berlin (rental car Sep 21); ÖBB D720 Wien Hbf→München Sep 28" },
  { from:"2020-09-28", to:"2020-09-29", flag:"🇩🇪", country:"Germany", city:"Munich – HI Youth Hostel" },
  { from:"2020-09-29", to:"2020-10-08", flag:"🇩🇪", country:"Germany", city:"Markdorf/Bodensee – Airbnb 'Mitten in Markdorf'; FlixBus BER→MUC→ZRH Oct 8 23:15" },
  { from:"2020-10-09", to:"2020-10-30", flag:"🇨🇭", country:"Switzerland", city:"Zurich – rooftop garden apartment" },
  { from:"2020-10-30", to:"2020-11-03", flag:"🇦🇹", country:"Austria", city:"Vienna – ÖBB Railjet ZRH→VIE Oct 30; ÖBB RJX 564 Wien→Innsbruck→Zürich Nov 3 11:30" },
  { from:"2020-11-03", to:"2020-12-07", flag:"🇨🇭", country:"Switzerland", city:"Zurich – ÖBB from Vienna" },
  { from:"2020-12-08", to:"2021-01-22", flag:"🇸🇨", country:"Seychelles", city:"Mahé – Le Domaine de Bacova (extended to Jan 22 2021)" },
  { from:"2021-07-15", to:"2021-07-27", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – Air France AF1621 TLV→CPH Jul 15" },
  { from:"2021-07-27", to:"2021-08-04", flag:"🇨🇭", country:"Switzerland", city:"Zurich – SWISS LX1267 CPH→ZRH Jul 27 09:30→11:25; SBB trains Aug 3–4" },
  { from:"2021-08-20", to:"2021-08-24", flag:"🇩🇪", country:"Germany", city:"Berlin – Kiez Burn 2021; COVID test Aug 23; Ryanair FR196 BER→BUD Aug 24" },
  { from:"2021-08-24", to:"2021-08-31", flag:"🇭🇺", country:"Hungary", city:"Budapest – Ryanair FR196 BER→BUD Aug 24; Omio Budapest Keleti→Vienna Aug 31" },
  { from:"2021-08-31", to:"2021-09-26", flag:"🇦🇹", country:"Austria", city:"Vienna – DB Bahn Sep 14 Berlin trip; Aegean A3863+A3928 VIE→TLV Sep 26" },
  { from:"2022-01-15", to:"2022-01-26", flag:"🇦🇹", country:"Austria", city:"Vienna – Ryanair FR7161 VIE→TLV Jan 26 (delayed)" },
  { from:"2022-02-07", to:"2022-02-27", flag:"🇦🇹", country:"Austria", city:"Vienna – Ryanair TLV→VIE Feb 7; VIE→TLV Feb 27" },
  { from:"2022-04-12", to:"2022-04-14", flag:"🇧🇪", country:"Belgium", city:"Brussels – Gotogate TLV→IST→BRU Apr 12; rental car BRU Apr 13–19" },
  { from:"2022-04-14", to:"2022-04-17", flag:"🇫🇷", country:"France", city:"What The Farm 2022 – Ferme d'Antioche, Vauxaillon (Gotogate TLV→IST→BRU Apr 12; rental car BRU Apr 13–19)" },
  { from:"2022-04-19", to:"2022-04-25", flag:"🇧🇪", country:"Belgium", city:"Brussels – returned from WTF via rental car Apr 19 (car returned)" },
  { from:"2022-04-25", to:"2022-05-05", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam – train UTAXSX Brussels→Amsterdam Apr 25" },
  { from:"2022-07-01", to:"2022-07-11", flag:"🇪🇸", country:"Spain", city:"Madrid – Air Europa UX1302 TLV→MAD Jul 1; Nowhere 2022" },
  { from:"2022-07-11", to:"2022-07-21", flag:"🇩🇪", country:"Germany", city:"Berlin – Ryanair FR2528 MAD→BER Jul 11; KiezBurn 2022" },
  { from:"2022-07-21", to:"2022-08-05", flag:"🇸🇪", country:"Sweden", city:"Gothenburg – FlixBus from Berlin; The Borderland 2022; Austrian OS326 GOT→VIE Aug 5" },
  { from:"2022-08-05", to:"2022-08-23", flag:"🇦🇹", country:"Austria", city:"Vienna – Austrian GOT→VIE Aug 5" },
  { from:"2022-08-23", to:"2022-09-06", flag:"🇺🇸", country:"United States", city:"San Francisco / Burning Man 2022 – Austrian VIE→MUC→SFO Aug 23; Black Rock City NV" },
  { from:"2022-09-07", to:"2022-09-20", flag:"🇦🇹", country:"Austria", city:"Vienna – Austrian SFO→FRA→VIE Sep 7; Schönburn 2022 ~Sep 7–11 Böllerbauer; Ryanair FR7295 BE1Q4T VIE→TLV Sep 20" },
  { from:"2022-12-27", to:"2023-01-05", flag:"🇦🇹", country:"Austria", city:"Vienna – Ryanair FR7162 PI9QJN TLV→VIE Dec 27; car rental Dec 29–Jan 4; El Al LY362 VIE→TLV Jan 5 2023" },
  { from:"2023-01-19", to:"2023-01-20", flag:"🇿🇦", country:"South Africa", city:"Johannesburg – El Al LY51 TLV→JNB Jan 19" },
  { from:"2023-01-20", to:"2023-02-04", flag:"🇿🇦", country:"South Africa", city:"Hoedspruit (Kruger area) – drove from Johannesburg Jan 20" },
  { from:"2023-02-04", to:"2023-02-05", flag:"🇿🇦", country:"South Africa", city:"Johannesburg – drove back from Hoedspruit Feb 4; El Al LY52 JNB→TLV Feb 5" },
  { from:"2023-02-14", to:"2023-02-23", flag:"🇨🇭", country:"Switzerland", city:"Zurich – SWISS LX253 TLV→ZRH Feb 14; Bao Vest (Swiss Burn) 2023; ÖBB ZRH→VIE Feb 23" },
  { from:"2023-02-23", to:"2023-03-05", flag:"🇦🇹", country:"Austria", city:"Vienna – ÖBB ZRH→VIE Feb 23; Austrian OS857 VIE→TLV Mar 5" },
  { from:"2023-05-15", to:"2023-05-18", flag:"🇧🇪", country:"Belgium", city:"Brussels – Brussels Airlines TLV→BRU May 15; drove to WTF May 18" },
  { from:"2023-05-18", to:"2023-05-21", flag:"🇫🇷", country:"France", city:"What The Farm 2023 – Ferme d'Antioche, Vauxaillon (Brussels Airlines TLV→BRU May 15 via Brussels)" },
  { from:"2023-06-19", to:"2023-07-04", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam – Transavia HV5802 TLV→AMS Jun 19 20:40; Where The Sheep Sleep 2023" },
  { from:"2023-07-04", to:"2023-07-18", flag:"🇮🇪", country:"Ireland", city:"Dublin – Ryanair FR3103 AMS→DUB Jul 4; MayoBurn 2023; FR6070 DUB→GOT Jul 18" },
  { from:"2023-07-18", to:"2023-08-06", flag:"🇸🇪", country:"Sweden", city:"Gothenburg – Ryanair DUB→GOT Jul 18; The Borderland 2023; Airbnb Lerum Jul 31–Aug 5; Eurowings EW8221 GOT→BER Aug 6" },
  { from:"2023-08-06", to:"2023-08-24", flag:"🇩🇪", country:"Germany", city:"Berlin – Eurowings EW8221 GOT→BER Aug 6; BA BA991 BER→LHR Aug 24" },
  { from:"2023-08-24", to:"2023-09-14", flag:"🇺🇸", country:"United States", city:"San Francisco + Burning Man 2023 – BA BA287 LHR→SFO Aug 24 (same-day LHR connection from BER); Black Rock City NV Aug 27–Sep 4; BA286 SFO→LHR Sep 13" },
  { from:"2023-09-14", to:"2023-09-21", flag:"🇩🇪", country:"Germany", city:"Berlin – BA BA986 LHR→BER Sep 14 19:05 (LHR overnight); FlixBus BER→VIE Sep 21" },
  { from:"2023-09-21", to:"2023-09-29", flag:"🇦🇹", country:"Austria", city:"Vienna – FlixBus BER→VIE Sep 21; El Al LY362 VIE→TLV Sep 29" },
  { from:"2023-10-10", to:"2023-10-28", flag:"🇲🇪", country:"Montenegro", city:"Tivat / Kotor / Žabljak / Budva – Israir TLV→TIV Oct 10; Austrian TGD→VIE Oct 28" },
  { from:"2023-10-28", to:"2023-11-01", flag:"🇦🇹", country:"Austria", city:"Vienna – Austrian TGD→VIE Oct 28; Wizzair VIE→LCA Nov 1" },
  { from:"2023-11-01", to:"2023-11-06", flag:"🇨🇾", country:"Cyprus", city:"Larnaca – Wizzair VIE→LCA Nov 1; LCA→TLV Nov 6" },
  { from:"2023-12-31", to:"2024-05-06", flag:"🇳🇿", country:"New Zealand", city:"Auckland & NZ road trip – Etihad TLV→AUH→PVG→AKL Dec 29; Qatar AKL→FRA May 6" },
  { from:"2024-05-06", to:"2024-05-08", flag:"🇩🇪", country:"Germany", city:"Frankfurt – Qatar AKL→FRA via DOH May 6; to France May 8" },
  { from:"2024-05-08", to:"2024-05-16", flag:"🇫🇷", country:"France", city:"WTF event May 8–13 (friend's car from Frankfurt); Normandy May 13–16" },
  { from:"2024-05-16", to:"2024-05-19", flag:"🇧🇪", country:"Belgium", city:"Brussels – arrived from Normandy May 16; FlixBus Brussels-North→London Victoria May 19" },
  { from:"2024-05-19", to:"2024-06-18", flag:"🇬🇧", country:"United Kingdom", city:"London – FlixBus Brussels→London Victoria May 19; BA LHR→BER Jun 18" },
  { from:"2024-06-18", to:"2024-07-17", flag:"🇩🇪", country:"Germany", city:"Berlin – BA BA0988 LHR→BER Brandenburg Jun 18; DB train BER→ZRH Jul 17; SWISS LX1254 ZRH→ARN Jul 17" },
  { from:"2024-07-17", to:"2024-08-05", flag:"🇸🇪", country:"Sweden", city:"Stockholm – SWISS LX1254 ZRH→ARN Jul 17 (delayed to 22:30); The Borderland 2024 (10 days); Ryanair FR756 ARN→VIE Aug 5 08:45" },
  { from:"2024-08-05", to:"2024-08-22", flag:"🇦🇹", country:"Austria", city:"Vienna – Ryanair FR756 ARN→VIE Aug 5; Schönburn 2024 Aug 7–11 Böllerbauer; Austrian VIE→SFO Aug 22" },
  { from:"2024-08-22", to:"2024-09-16", flag:"🇺🇸", country:"United States", city:"San Francisco / Burning Man 2024 / Reno / Lake Tahoe – Austrian VIE→SFO Aug 22; Union Square Hotel Aug 22–24; BM Aug 25–Sep 2; Reno/Tahoe Sep 6–9; United SFO→YYZ Sep 16" },
  { from:"2024-09-16", to:"2024-09-23", flag:"🇨🇦", country:"Canada", city:"Toronto – United SFO→YYZ Sep 16; WestJet YYZ→YVR Sep 23" },
  { from:"2024-09-23", to:"2024-10-12", flag:"🇨🇦", country:"Canada", city:"Vancouver – WestJet YYZ→YVR Sep 23; Nomad Cruise 13 (Holland America) sails Sep 29" },
  { from:"2024-10-13", to:"2024-11-18", flag:"🇯🇵", country:"Japan", city:"Yokohama / Tokyo / Otsu – arrived via Nomad Cruise 13; Air NZ NZ90 NRT→AKL departs Nov 18 18:45" },
  { from:"2024-11-19", to:"2025-05-12", flag:"🇳🇿", country:"New Zealand", city:"New Zealand – Air NZ NZ90 NRT→AKL arrives Nov 19 09:20; Nelson · Tauranga" },
  { from:"2025-05-13", to:"2025-06-20", flag:"🇬🇧", country:"United Kingdom", city:"London – China Eastern MU780 AKL→PVG May 12 21:00 + MU213 PVG→LGW May 13 15:00; Burning Nest 2025 regional burn ~Jun 2025; Loom Club Jun 6; BA LHR→SOF Jun 20" },
  { from:"2025-06-20", to:"2025-07-06", flag:"🇧🇬", country:"Bulgaria", city:"Bansko – BA LHR→SOF Jun 20" },
  { from:"2025-07-07", to:"2025-07-16", flag:"🇩🇪", country:"Germany", city:"Berlin – Ryanair FR1149 SOF→BER Jul 7 08:30" },
  { from:"2025-07-16", to:"2025-07-27", flag:"🇸🇪", country:"Sweden", city:"Stockholm – SAS BER→ARN Jul 16; The Borderland 2025; drove to Vienna Jul 27" },
  { from:"2025-07-27", to:"2025-08-15", flag:"🇦🇹", country:"Austria", city:"Vienna – drove from Stockholm Jul 27; Schönburn 2025 Aug 6–10 Böllerbauer; OS207 VIE→FRA + UA59 FRA→SFO Aug 15" },
  { from:"2025-08-15", to:"2025-09-30", flag:"🇺🇸", country:"United States", city:"San Francisco / Burning Man / Reno – OS207 VIE→FRA + UA59 FRA→SFO Aug 15" },
  { from:"2025-10-01", to:"2025-10-13", flag:"🇨🇦", country:"Canada", city:"Toronto / Barrie – United UA2097 SFO→ORD Sep 30 + UA5293 ORD→YYZ Oct 1" },
  { from:"2025-10-14", to:"2025-10-23", flag:"🇦🇹", country:"Austria", city:"Vienna – SAS Toronto→Copenhagen Oct 13; Austrian CPH→VIE Oct 14; ÖBB RJ 546+EC 430 VIE→ZRH Oct 23" },
  { from:"2025-10-23", to:"2025-10-29", flag:"🇨🇭", country:"Switzerland", city:"Zurich – ÖBB RJ 546+EC 430 VIE→ZRH Oct 23; Eurowings ZRH→CPH Oct 29" },
  { from:"2025-10-29", to:"2025-11-05", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – Eurowings ZRH→CPH Oct 29; KLM CPH→AMS Nov 6" },
  { from:"2025-11-06", to:"2025-11-14", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam – KLM KL1276 CPH→AMS Nov 6; Dutch Decompression FLORASCEND Nov 8 + Playa Echoes afterparty Nov 9 (Radion)" },
  { from:"2025-11-15", to:"2025-11-15", flag:"🇶🇦", country:"Qatar", city:"Doha – DOH transit (Qatar AMS→DOH→AKL)" },
  { from:"2025-11-16", to:"2026-05-05", flag:"🇳🇿", country:"New Zealand", city:"New Zealand – Qatar AMS→DOH→AKL departs Nov 14, arrives Nov 16; Nelson Lakes · Kahurangi" },
  { from:"2026-05-06", to:"2026-06-08", flag:"🇨🇦", country:"Canada", city:"Toronto – Qantas QF3 AKL→JFK→YYZ May 6; Air Transat TS122 YYZ→LGW Jun 8 22:45" },
  { from:"2026-06-09", to:"2026-06-22", flag:"🇬🇧", country:"United Kingdom", city:"London – Air Transat TS122 YYZ→LGW Jun 8 22:45; Brighton Jun 12–14 (hostel); Ryanair BS8PRL FR3466 LTN→VNO Jun 22 06:25" },
  { from:"2026-06-22", to:"2026-07-10", flag:"🇱🇹", country:"Lithuania", city:"Vilnius – Ryanair BS8PRL FR3466 LTN→VNO Jun 22 11:05; SAS Z35NYL VNO→CPH Jul 10" },
];

// "Expected" upcoming stays — confirmed transport bookings for future arrivals.
// from = confirmed arrival date by transport; to = last confirmed date in that country.
// No end date is assumed without a confirmed departure booking.
const expectedStays = [
  { from:"2026-07-10", to:"2026-07-30", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – SAS Z35NYL VNO→CPH Jul 10; Airbnb Nørrebro Jul 27–30" },
  { from:"2026-08-18", to:"2026-08-20", flag:"🇵🇱", country:"Poland", city:"Warsaw (transit) – LOT X3AP4H LO226 VIE→WAW Aug 18 19:30; LO35 WAW→SFO Aug 20 11:00" },
  { from:"2026-08-20", to:"2026-12-31", flag:"🇺🇸", country:"United States", city:"San Francisco – LOT X3AP4H LO35 WAW→SFO Aug 20; Union Hotel SF Aug 20–21; Reno Sep 8–10 (Airbnb)" },
];
