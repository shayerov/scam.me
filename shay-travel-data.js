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
      "Dec 29, 2023–May 6, 2024 (Auckland & NZ road trip – Etihad RADO5A EY594 TLV→AUH + EY862 AUH→PVG + Air NZ NZ288 PVG→AKL Dec 29; Kiwiburn, Kahurangi NP, Nelson Lakes, Milford, Coromandel; departed Qatar KXUTUF AKL→FRA May 6)",
      "Nov 19, 2024–May 12, 2025 (Auckland & Nelson·Tauranga – Air NZ TFV6UH NZ90 NRT→AKL Nov 19; departed China Eastern MU780 AKL→PVG May 12)",
      "Nov 16, 2025–May 5, 2026 (Nelson Lakes · Kahurangi – Qatar 9NPLNP AMS→DOH→AKL Nov 16; departed Qantas FGYGAI QF3 AKL→JFK May 6)"
    ],
    note: "Extensive road trip & camping"
  },

  {
    flag: "🇦🇹", name: "Austria", city: "Vienna", region: "europe",
    lat: 48.2082, lng: 16.3738,
    visits: ["Sep 18–24, 2018 (Vienna – Kiwi.com 7937947 easyJet U24733 BER SXF→VIE Sep 18 18:55; Wizzair W62811 VIE→TLV Sep 24 06:05→10:30; with Nadja Schreiber)", "~Mar 1–2, 2019 (Vienna – Vienna Burning Ball)", "Sep 15–16, 2019 (Vienna – FlixBus side trip from Zurich)", "Jun 29–Jul 4, 2020 (Vienna – arrived by FlixBus ~Jun 29; departed Ryanair YCBHXN FR7161 VIE→TLV Jul 4 13:00–17:20)", "Sep ~22–28, 2020 (Vienna – transit from Berlin; departed ÖBB D720 Wien Hbf→München Sep 28)", "Oct 30–Nov 3, 2020 (Vienna – arrived Wiener Linien Airport Lines return ticket Oct 30; departed ÖBB RJX 564 Wien→Innsbruck→Zürich Nov 3 11:30)", "Aug 31–Sep 26, 2021 (Vienna – Omio Budapest→Vienna Aug 31; DB Bahn UUKX7C Sep 14 Berlin trip; Aegean RGUWTJ A3863+A3928 VIE→TLV Sep 26 via Athens)", "Jan 15–26, 2022 (Ryanair CEMR3X FR7161 VIE→TLV Jan 26, delayed 2h+)", "Feb 7–27, 2022 (Ryanair ACU1QQ TLV→VIE Feb 7; VIE→TLV Feb 27)", "Aug 5–23, 2022 (Austrian RSYGVF GOT→VIE Aug 5 19:55)", "Sep 7, 2022–Jan 5, 2023 (Austrian 2ICQOE SFO→FRA→VIE Sep 7; El Al WMCDYI LY362 VIE→TLV Jan 5 2023)", "Feb 23–Mar 5, 2023 (Vienna – ÖBB ZRH→VIE Feb 23; Austrian OS857 VIE→TLV Mar 5)", "Sep 21–29, 2023 (Vienna – FlixBus BER→VIE Sep 21; El Al MW5YK7 VIE→TLV Sep 29)", "Oct 28–Nov 1, 2023 (Vienna – Austrian PQXTNC TGD→VIE Oct 28; Wizzair NE4VTV VIE→LCA Nov 1)", "Aug 2024", "Jul 27–Aug 15, 2025 (Vienna – drove from Stockholm Jul 27; Thrive F-535358 OS207 VIE→FRA + UA59 FRA→SFO Aug 15)", "Oct 14–23, 2025 (Airbnb, 9 nights)", "Aug 5–9, 2026 (Schönburn 2026, Böllerbauer – ticket 79AT9)"],
    note: "Frequent Ryanair TLV ↔ VIE hub"
  },
  {
    flag: "🇫🇷", name: "France", city: "Chamonix / Paris", region: "europe",
    lat: 45.9237, lng: 6.8694,
    visits: ["~Mar 12–31, 2019 (Chamonix – Rentalcars.com #720198114 Mar 12; Chamonix Chalets Ltd payment Mar 12; returned ZRH→TLV Mar 31)", "May 8–16, 2024 (WTF event May 8–13; Normandy May 13–16; drove to Brussels May 16)"],
    note: "Chamonix (Alps, near Mont Blanc) Mar 2019 · WTF event + Normandy May 2024 · SWISS hub via Geneva/Zurich"
  },
  {
    flag: "🇬🇷", name: "Greece", city: "Athens", region: "europe",
    lat: 37.9838, lng: 23.7275,
    visits: ["Oct 28, 2019 (Athens – Aegean Q9CDX5 A3 821 TXL→ATH, A3 924 ATH→TLV – one-day stopover en route from Berlin)"],
    note: "Athens Eleftherios Venizelos Airport (ATH) – Aegean Airlines Oct 2019"
  },
  {
    flag: "🇲🇹", name: "Malta", city: "Valletta / Luqa", region: "europe",
    lat: 35.8997, lng: 14.5147,
    visits: ["Nov 26–30, 2019 (Malta – Air Malta KM491 ZRH→MLA Nov 26 17:40→20:00; returned KM0490 MLA→ZRH Nov 30 14:25→16:50; PNR RYLFML; lastminute.de booking 1525524548)"],
    note: "Air Malta KM491 from Zurich · Malta Luqa International Airport (MLA)"
  },
  {
    flag: "🇨🇳", name: "China", city: "Shanghai / Dragon Burn area", region: "asia",
    lat: 31.2304, lng: 121.4737,
    visits: ["Apr 24–May 13, 2019 (Shanghai + Dragon Burn – Aeroflot KVPOGS: SU507 TLV→SVO Apr 24, SU208 SVO→PVG Apr 25; Dragon Burn regional burn (late Apr); Shanghai Airbnb 'The YongKang Hidden Penthouse' May 5–7; return SU209 PVG→SVO May 13, SU504 SVO→TLV May 13)"],
    note: "Aeroflot via Moscow · Dragon Burn regional burn · Shanghai Pudong (PVG)"
  },
  {
    flag: "🇩🇪", name: "Germany", city: "Berlin / Munich / Frankfurt", region: "europe",
    lat: 52.5200, lng: 13.4050,
    visits: ["Feb 25–29, 2016 (Berlin – EasyJet EZY4784 TLV→BER SXF Feb 25 13:10–16:45 (booking ref EQ7GTM1); Airbnb Feb 25–26; Burning Bär – Plug and Play; car rental TJSILDE28568; Plus Berlin hostel Feb 28–29 (booking.com #479726934))", "Jun 18–30, 2018 (Berlin – Turkish Airlines TFPSTH TLV→IST→BER Jun 18; Kiez Burn regional burn; Eurowings Z95CKF BER→BCN Jun 30)", "Sep 12–18, 2018 (Berlin – United CFJ6P1 SFO→YVR Sep 11 (AC8839) + YVR→FRA→BER TXL Sep 12 (AC9637/Lufthansa CityLine); with Nadja Schreiber; Kiwi.com 7937947; easyJet U24733 BER SXF→VIE Sep 18 18:55)", "Oct 7, 2018 (Berlin TXL – Aegean A30929 TLV→ATH Oct 7 05:30 + A30820 ATH→BER TXL Oct 7 10:35; booking 1252622936/PNR T224DX; with Nadja Schreiber)", "May 30–Jun 25, 2019 (Berlin – SWISS KJXDPI TLV→ZRH May 30; Lufthansa LH185 TXL→FRA→TLV Jun 25)", "Oct 23–28, 2019 (Berlin – Austrian OS858/OS239 TLV→VIE→TXL Oct 22–23; PREMIUM Hostel #3973544257; Aegean Q9CDX5 TXL→ATH Oct 28)", "Jun 21–~26, 2020 (Frankfurt/Berlin – Deutsche Bahn ICE 798 MHVD96 Frankfurt(Main)Süd→Berlin Hbf Jun 21 12:20–16:47; ~4 nights Berlin)", "Sep 9–~21, 2020 (Berlin SXF – Ryanair FR6473 DCIQHH TLV→SXF Sep 9; extended stay)", "Sep 28, 2020 (Munich – ÖBB D720 0130835302982930 Wien Hbf→München Hbf 15:42–21:36; HI Munich Park Youth Hostel)", "Sep 29–Oct ~6, 2020 (Markdorf/Bodensee – Airbnb 'Mitten in Markdorf', Baden-Württemberg; FlixBus onward Oct 1, Oct 6)", "Aug ~20–26, 2021 (Berlin – Kiez Burn 2021; COVID test Aug 23; Dark Matter Berlin Aug 28 exhibition; Ryanair to Budapest ~26–27)", "Jul 2022 (Madrid→Berlin)", "Aug 6–24, 2023 (Berlin – Eurowings ADCIMC EW8221 GOT→BER Aug 6)", "Sep 13–21, 2023 (Berlin – BA SD6A5Y BER→LHR Aug 24 return leg; FlixBus BER→VIE Sep 21)", "May 6–8, 2024 (Frankfurt – Qatar KXUTUF AKL→FRA via DOH May 6)", "Jun 18, 2024 (Berlin – BA RKRRI5 BA0988 LHR→BER Brandenburg Jun 18)", "Jul 7, 2025 (Sofia→Berlin, Ryanair)", "Oct 29, 2025 (Eurowings, Düsseldorf)"],
    note: "Berlin · Frankfurt transit · Düsseldorf"
  },
  {
    flag: "🇨🇭", name: "Switzerland", city: "Zurich", region: "europe",
    lat: 47.3769, lng: 8.5417,
    visits: ["~Mar 2019 (Zurich – SWISS RPAT5C return LX256 ZRH→TLV Mar 31)", "May 30–Jun 25, 2019 (Zurich – SWISS KJXDPI TLV→ZRH May 30; Airbnb Salgesch Valais Jun 8–9)", "Jul 6–21, 2019 (Zurich hub – SWISS TLV→ZRH→MAD Jul 6 booking RX6QQU; then BCN→ZRH→CPH Jul 21)", "Sep 5–24, 2019 (Zurich – SWISS JQH8J7 TLV→ZRH Sep 5; El Al ZRH→TLV Sep 24)", "Nov 18–Dec 16, 2019 (Zurich – SWISS T5HL5N LX253 TLV→ZRH Nov 18 10:10; side trip Malta Nov 26–30 (Air Malta KM491 ZRH→MLA Nov 26; KM0490 MLA→ZRH Nov 30 PNR RYLFML); returned ZRH→TLV Dec 16)", "Jun 26–~29, 2020 (Zurich – DB BUS42227 PSRLPB München ZOB→Zürich HB Jun 26 09:03–12:45)", "Oct 11–30, 2020 (Zurich – rooftop garden apartment booking.com CHF 177.55; SBB Swiss trains Oct 26; Wiener Linien Airport Lines Oct 30)", "Nov 3–Dec 7, 2020 (Zurich – ÖBB RJX 564 + EC 164 Wien Hbf→Innsbruck→Zürich HB Nov 3 11:30–19:20; Turkish TK ZRH→TLV Dec 7)", "Feb 14–23, 2023 (Zurich – SWISS QX8G5U LX253 TLV→ZRH Feb 14 17:45 seat 37A; ÖBB ZRH→VIE Feb 23)", "Oct 2025 (Eurowings ZRH departure)"],
    note: "SWISS Airlines hub"
  },
  {
    flag: "🇩🇰", name: "Denmark", city: "Copenhagen", region: "europe",
    lat: 55.6761, lng: 12.5683,
    visits: ["Jul 14–26, 2016 (Copenhagen – Pegasus TLV→SAW→CPH via Vayama 7THDYA; ~12 days; car rental; road trip)", "Jul 21–Aug 4, 2017 (Copenhagen – Gotogate KISWIK TLV→CPH Jul 21; Airbnb Christianshavn HMP9YXPRYW Jul 21–22 (with Yulia); Avis car rental CPH Jul 21–Aug 3 (Expedia #7281260473670); The Borderland 2017 Sweden Jul 22–Aug 2; returned Aegean A3 WKJMTH CPH→ATH→TLV Aug 3–4 (luggage delayed))", "Jul 21–28, 2018 (Copenhagen – UIA PS780 TLV→KBP Jul 21, PS163 KBP→CPH Jul 21; Borderland 2018 regional burn Jul 24–27)", "Jul 21–31, 2019 (Copenhagen – SWISS LX1278 ZRH→CPH Jul 21 (delayed, with Christina Welter); Borderland 2019 ticket LVEW8; Quality Hotel Høje Taastrup Jul 27; SWISS LX1273 CPH→ZRH + LX256 ZRH→TLV Jul 31)", "Jul 15–27, 2021 (Copenhagen – Air France KEHTV3 AF1621 TLV→CPH Jul 15 direct; Airbnb Store Kongensgade 42A Jul 15–19 (RC5DP2ABCZ); SWISS LX1267 CPH→ZRH Jul 27 booking LJ3EY3)", "Oct 2025 (Eurowings DUS→CPH)", "Nov 4, 2025 (Digital Tech Summit)"],
    note: "SWISS · Lufthansa · Eurowings · UIA"
  },
  {
    flag: "🇬🇧", name: "United Kingdom", city: "London", region: "europe",
    lat: 51.5074, lng: -0.1278,
    visits: ["Jun 4–12, 2008 (London + Horsham – friend's wedding Jun 7; with Yana)", "Jul 12–20, 2010 (London – Eurolines from Amsterdam; side trips to Oxford Jul 15 and Horsham Jul 17–18; left Jul 20)", "Nov 9–15, 2017 (London – UIA PS778 TLV→KBP Nov 9, PS111 KBP→LGW Nov 9; Smart Camden Inn Hostel (#1864784248); London Decompression Nov 11–12; BA2762 LGW→AMS Nov 15)", "Aug 24–Sep 13, 2023 (London – BA SD6A5Y BA991 BER→LHR Aug 24; BA286 LHR→BER Sep 13 delayed)", "May 19, 2024 (FlixBus Brussels→London Victoria)", "Jun 18, 2024 (BA RKRRI5 BA0988 LHR→BER Brandon departure)", "May 2025 (Gatwick→London Victoria, Trainline)", "Jun 2025 (BA XP4Z6P)"],
    note: "London + Horsham (Jun 2008, Jul 2010) · Oxford (Jul 2010) · Eurolines AMS→LON · British Airways · FlixBus"
  },
  {
    flag: "🇧🇪", name: "Belgium", city: "Brussels", region: "europe",
    lat: 50.8503, lng: 4.3517,
    visits: ["Jul 7, 2010 (Brussels Charleroi – Ryanair NHGUJE FR6054 Venice Treviso (TSF)→CRL 08:35–10:10; with Nogah Senecky; 1 night en route to Amsterdam)", "Jan 11–18, 2018 (Brussels Airlines RKQ26Q SN3294 TLV→BRU Jan 11, SN3291 BRU→TLV Jan 18 – business)", "Jun 8–10, 2018 (Brussels – Brussels Airlines SN3294 TLV→BRU Jun 8, SN3293 BRU→TLV Jun 10 – short business trip)", "Dec 2018 / Jan 2019 (Brussels Airlines L3LKK9 – business)", "Apr 24, 2022 (Thalys Brussels-Midi → Amsterdam)", "May 16–19, 2024 (Brussels – arrived from Normandy May 16; FlixBus Brussels-North → London Victoria May 19)"],
    note: "Brussels Airlines · Thalys · FlixBus"
  },
  {
    flag: "🇪🇸", name: "Spain", city: "Barcelona / Madrid", region: "europe",
    lat: 40.4168, lng: -3.7038,
    visits: ["Jun 30–Jul 10, 2018 (Barcelona – Eurowings Z95CKF BER→BCN Jun 30; car rental CTRILES39566; Turkish Airlines TFPSTH BCN→TLV Jul 10)", "Jul 6–21, 2019 (Madrid + Barcelona – SWISS RX6QQU TLV→ZRH→MAD Jul 6 (LX2030 delayed); Tarragona area; Renfe Tarragona→Barcelona-Sants Jul 14; BCN→ZRH Jul 21 (Gotogate KXG8DY/L9GZZF))", "Jul 1–11, 2022 (Madrid – Air Europa UX1302 TLV→MAD Jul 1 16:05→20:20 Travelgenio 21051308/PNR 2I7RRS; Ryanair FR2528 MAD→BER Jul 11 17:25 MBNYHM)"],
    note: "Barcelona Jun 2018 · Madrid+Barcelona Jul 2019 · Madrid Jul 2022"
  },
  {
    flag: "🇭🇺", name: "Hungary", city: "Budapest", region: "europe",
    lat: 47.4979, lng: 19.0402,
    visits: ["Jul 20–29, 2013 (Budapest – Wizz Air W6 2457 BUD→TLV Jul 29 15:45–20:00; SUN Festival; OnTour L9S6WD, 80 EUR Shay's share)", "Jul 15–29, 2014 (Budapest – El Al TLV→BUD Jul 15 (invoice #1851732); Corvin Plaza Apartments & Suites Hotels.com #8043292952265; with Golan (goolix@gmail.com); departed TAP BUD→LIS Jul 29)", "Aug 27–31, 2021 (Budapest – Ryanair from Berlin; Bolt rides Aug 27–31; Omio 0656382873502146 Budapest Keleti→Vienna Central Aug 31)"],
    note: "Budapest · SUN Festival Jul 2013 (OnTour/Wizzair) · Jul 2014 (El Al + Boom trip) · Aug 27–31 2021 (Ryanair Berlin→Budapest; Omio→Vienna Aug 31)"
  },
  {
    flag: "🇮🇪", name: "Ireland", city: "Dublin", region: "europe",
    lat: 53.3498, lng: -6.2603,
    visits: ["Jul 4–18, 2023 (Dublin – Ryanair TKS35A FR3103 AMS→DUB Jul 4 22:00; Ryanair HD5D9V FR6070 DUB→GOT Jul 18 17:15)"],
    note: "Ryanair TKS35A AMS→DUB · HD5D9V DUB→GOT · Jul 2023"
  },
  {
    flag: "🇳🇱", name: "Netherlands", city: "Amsterdam", region: "europe",
    lat: 52.3676, lng: 4.9041,
    visits: ["Oct 2007 (Amsterdam – visited during Europe trip; ~2 days)", "Jul 8–12, 2010 (Amsterdam – 4 days; Utrecht capoeira class with Jorine Jul 9; Eurolines bus AMS→London Jul 12)", "Jul 26–Aug 2, 2016 (Amsterdam – SAS SK553 CPH→AMS Jul 26; Budget Hotel Manofa Aug 1–2; with Itai Indig)", "Nov 15–22, 2017 (Amsterdam – BA2762 LGW→AMS Nov 15; Dutch Decompression 2017 (Radion club, with Yulia); EasyJet ET2PQ39 AMS→TLV Nov 22)", "Jun 19–Jul 4, 2023 (Amsterdam – Transavia HV5802 L83MMF TLV→AMS Jun 19; Ryanair FR3103 AMS→DUB Jul 4)", "Nov 5, 2025 (KLM flight to Amsterdam)"],
    note: "Amsterdam (Oct 2007, Jul 2010) · Utrecht capoeira (Jul 2010) · Eurolines AMS→LON · Ryanair · KLM"
  },
  {
    flag: "🇸🇪", name: "Sweden", city: "Gothenburg / Stockholm", region: "europe",
    lat: 57.7089, lng: 11.9746,
    visits: ["Jul 22–Aug 2, 2017 (The Borderland 2017 – regional Burning Man event at a quarry, Sweden; drove from Copenhagen with Yulia; theborderland.se)", "Jul 21–Aug 5, 2022 (Gothenburg – FlixBus from Berlin Jul 21; Austrian OS326 GOT→VIE Aug 5 19:55 booking RSYGVF)", "Jul 18–Aug 6, 2023 (Gothenburg – Ryanair HD5D9V DUB→GOT Jul 18; Airbnb Lerum Jul 31–Aug 5; Eurowings ADCIMC EW8221 GOT→BER Aug 6)", "Aug 2024 (Ryanair ARN→Vienna, from Stockholm Arlanda)", "Jul 15, 2025 (SAS flight to Stockholm)"],
    note: "Gothenburg (GOT) · Stockholm Arlanda (ARN)"
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
    visits: ["Oct 10–28, 2023 (Tivat – Israir TLV→TIV Oct 10; Airbnb Tivat Oct 10–13; Kotor boat tour Oct 13; Apartmani Momčilo Žabljak Oct 13; Airbnb Prčanj Oct 15–16; SunSea Apartments Budva; Gospostina prima Budva; CroatiaBus CRB-7846181 Budva→Podgorica Oct 28; Austrian PQXTNC TGD→VIE Oct 28)"],
    note: "Tivat (TIV) · Kotor · Žabljak / Durmitor NP · Budva · Podgorica (TGD) · Oct 2023"
  },
  {
    flag: "🇨🇾", name: "Cyprus", city: "Larnaca", region: "europe",
    lat: 34.9229, lng: 33.6233,
    visits: ["Nov 1–6, 2023 (Larnaca – Wizzair NE4VTV VIE→LCA Nov 1; booking 3368464 LCA→TLV Nov 6)"],
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
    visits: ["Dec 8, 2020–Jan 22, 2021 (Mahé – Le Domaine de Bacova villa S-201208-Erov-nic-572821 (SeyVillas); extended to Jan 22 confirmed Dec 22 by Le Domaine de Bacova)"],
    note: "Le Domaine de Bacova · Mahé · Diving with Blue Safari"
  },
  {
    flag: "🇿🇦", name: "South Africa", city: "Johannesburg · Hoedspruit (Kruger area)", region: "africa",
    lat: -26.2041, lng: 28.0473,
    visits: ["Jan 19–Feb 5, 2023 (Johannesburg Jan 19–20 – El Al SW38NB LY51 TLV→JNB Jan 19; Hoedspruit / Kruger area Jan 20–Feb 4 – drove from JNB; Johannesburg Feb 4–5 – drove back; LY52 JNB→TLV Feb 5 11:30→20:15)"],
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
    visits: ["Oct 2007 (Como – met friends, Oktoberfest-style trip; ~1 week)", "Jul 2–7, 2010 (Venice – Alitalia AZ809 TLV→FCO + AZ1463 FCO→VCE Jul 2 eDreams ZQZVTV; with Nogah & Hadar; departed Ryanair NHGUJE FR6054 TSF→CRL Jul 7)"],
    note: "Como (Oct 2007) · Venice (VCE Jul 2010, with Nogah & Hadar) · eDreams ZQZVTV · Ryanair NHGUJE"
  },
  {
    flag: "🇦🇷", name: "Argentina", city: "Buenos Aires / Bariloche / Ushuaia / Patagonia", region: "americas",
    lat: -34.6037, lng: -58.3816,
    visits: [
      "Sep 2005 (Buenos Aires – 2 days, tango show & tango club; 19h bus to Bariloche – 9 days snowboarding Cerro Cathedral, 7 lakes car tour, horseback riding; back to Buenos Aires – Lujan Zoo petting lions; Iguassu Falls – Argentinian side, boat under the falls)",
      "Dec 1, 2009 (Buenos Aires – arrived from TLV on Iberia NQDCVJ; Hostel Clan & YMCA, 912 Alsina St.; 2 days; met Israeli travel companion; then Córdoba, Rosario)",
      "Dec 2009 (Salta – Las Nubes excursion, cable car mirador, asado)",
      "Jan 2010 (Bariloche – Pudu Hostel, NYE 2010, Circuito Chico, Cerro Otto)",
      "Jan 10, 2010 (Ushuaia – Fin del Mundo, national park – 3 buses, 55 hours!)",
      "Feb 14, 2010 (El Calafate – Perito Moreno glacier; El Chalten – Fitz Roy, ice walking)",
      "Mar 6, 2010 (El Bolson – Rey Sol Italian Farm, Bosque Tallado, Cerro Lindo hike)",
      "Mar 10, 2010 (Buenos Aires 2nd – rollerblading with Ky & Nicola)",
      "Mar 15, 2010 (Puerto Iguazu – Iguazu Falls, Great Adventure boat)"
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
    flag: "🇦🇶", name: "Antarctica", city: "Antarctic Peninsula / Drake Passage", region: "americas",
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
      "Apr–May 2010 (Ribeirao Preto – CouchSurfing; São Paulo)",
      "May 4–9, 2010 (Manaus – Amazon region; TAM JJ3746 SP→Manaus, then JJ3859 Manaus→Fortaleza)",
      "May 9–22, 2010 (Fortaleza; Natal – northeast Brazil; TAM JJ3307 Natal→SP)"
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
    visits: ["Nov 8–18, 2012 (Lisbon – Brussels Airlines TLV→BRU→LIS (SN3292/SN6401); 10 days with Metula + Ronen, car rental, road trip around Portugal)", "Jul 29–Aug 17, 2014 (Lisbon + Idanha-a-Nova – TAP BUD→LIS Jul 29; Boom Festival 2014 (Idanha-a-Nova); departed American Airlines 2J5SUJ LIS→SFO Aug 17)"],
    note: "Lisbon · road trip · Brussels Airlines via BRU · rentalcars.com voucher 220116432 · Boom Festival 2014 (Idanha-a-Nova)"
  },
  {
    flag: "🇪🇨", name: "Ecuador", city: "Guayaquil / Galapagos Islands", region: "americas",
    lat: -2.1894, lng: -79.8891,
    visits: ["May 25–Jun 6, 2010 (Guayaquil – Nuca Pacha Hostel; Galapagos Islands – Quasar expedition; flew home from Quito on Iberia IB3752)"],
    note: "Nuca Pacha Hostel · Guayaquil · Galapagos Islands (Quasar EX) · Quito (UIO) departure"
  },
  {
    flag: "🇨🇦", name: "Canada", city: "Toronto / Barrie", region: "americas",
    lat: 43.6511, lng: -79.3470,
    visits: ["Mar 28–29, 2018 (Toronto – Air Canada AC85 TLV→YYZ Mar 28; AC1810 YYZ→CUN Mar 29)", "Apr 13, 2018 (Toronto transit – AC84 YYZ→TLV Apr 13 16:40)", "Sep 22–Oct 15, 2014 (Toronto → Vancouver – Air Canada AC 105 LJCE5R YYZ→YVR Sep 22 10:00–12:03; Canadian West Coast; returned via Seattle SEA→PHL→TLV Oct 15–16)", "Sep 6, 2024 (Lake Tahoe area – Pretty Lights concert, pre-Canada leg)", "Sep 2024 (car rental Toronto Airport YYZ)", "Sep 16–Oct 13, 2025 (Toronto Sep 16–23 – United BX9W53 SFO→YYZ Sep 16; Vancouver Sep 23–Oct 13 – WestJet OYHCDR YYZ→YVR Sep 23; Nomad Cruise 13 sails Sep 29; Barrie Oct 8–9; Legends of Horror Oct 12)", "May 6–Jun 8, 2026 (Toronto – Qantas FGYGAI QF3 AKL→JFK→YYZ May 6; Air Transat M7HXL4 TS122 YYZ→LGW Jun 8)"],
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
    visits: ["May–Jul 2005 (Seattle; San Diego – Ocean Beach International Hostel; New York City)", "Jan–Apr 2, 2012 (Palo Alto / San Francisco – UpWest Labs accelerator, ~3 months; returned via Toronto Apr 2)", "May 12–28, 2013 (San Francisco – United K2KX00: UA91 TLV→EWR May 11, UA216 EWR→SFO May 12; Google I/O 2013 May 15–17; return UA1696+UA90 SFO→EWR→TLV May 28–29)",
      "Aug 25–Sep 21, 2014 (San Francisco – outbound via El Al TLV→BUD Jul 15 + TAP BUD→LIS Jul 29 + AA 2J5SUJ LIS→SFO; HI-SF City Center Hostel #39474; Burning Man Black Rock City NV; car rental Advantage NPRL207CAF SFO Sep 7 18:00–Sep 12 16:00; SFMTA Sep 21; departed US 798 SEA→PHL 08:35 + US 796 PHL→TLV 21:10 Oct 15–16 CDSF0J)", "Aug 26–Sep 27, 2015 (San Francisco – KLM ZFTVS2 KL0605/KL0462 TLV→AMS→SFO Aug 26 (delayed); Burning Man 2015 Black Rock City NV (car rental CTRILUS27013 with Anati); Reno Sep 7 Priceline #137-545-883-82; Symbiosis Gathering 2015 (10yr ReUnion) Sep 17–21; San Diego Sep ∼22–23; Greyhound SAN→SFO Sep 23 ref 69151685; car rental CTRILUS27448; return Air France AF 0085 SFO→CDG Sep 27 + AF 1320 CDG→TLV Sep 28)", "Aug 21–Oct 3, 2016 (San Francisco – SWISS 2KNF8K LX 257 TLV 04:50→ZRH 08:10 + LX 36 ZRH 09:40→SFO 12:50 Aug 21; Reno Sep 5–7 Eldorado booking.com #355250389; car rental TJSILUS31874; Symbiosis Gathering 2016 Sep 22–26 Woodward Reservoir CA; departed LX 39 SFO→ZRH Oct 3 + LX 256 ZRH→TLV Oct 4)", "Dec 2–27, 2016 (Las Vegas + San Francisco – outbound UA955 TLV→SFO Dec 2 00:50–6:00 AM; UA943 SFO→LAS Dec 2 4:22–5:57 PM (CD1JXV); Las Vegas Hostel booking.com #1905590631; UA728 LAS→SFO Dec 6 6:00–7:39 AM; San Francisco Dec 6–27; departed LH459 SFO→MUC Dec 27 20:55 + LH680 MUC→TLV Dec 28 21:50→Dec 29 02:30)", "Aug 14–Sep 10, 2017 (Portland OR + San Francisco + Burning Man 2017 – United JZX095 UA955 TLV→SFO→PDX Aug 14; Black Rock City NV Aug 27–Sep 4; car rental Reno Sep 7; return UA954 SFO→TLV Sep 10)", "Aug 22–Sep 11, 2018 (San Francisco + Burning Man 2018 – United CFJ6P1 TLV→SFO Aug 22; Black Rock City NV; departed SFO→YVR Sep 11 (AC8839) + YVR→FRA→BER TXL Sep 12 (AC9637/Lufthansa CityLine))", "Aug 23–Sep 6, 2022 (San Francisco – Austrian 2ICQOE VIE→MUC→SFO Aug 23 Expedia #72363530006411; SFO→FRA→VIE Sep 6)", "Sep 6, 2024 (Pretty Lights – Lake Tahoe Outdoor Arena, Harveys, Stateline NV)", "Aug 15–24, 2025 (San Francisco – Bartlett Hotel)", "Aug 24–Sep 1, 2025 (Burning Man – Black Rock City, NV 89412)", "Sep 2–4, 2025 (Reno, Nevada – Airbnb)", "Sep 13, 2025 (OTT Live – Public Works, SF)", "Sep 22, 2025 (United M7ZB4N)", "May 2026 (Qantas AKL→JFK – upcoming, New York)"],
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
  { date: "Sep 24–Oct 2, 2009", flag: "🇪🇸", country: "Spain", city: "Tenerife Norte – El Al 3B6VBJ LY393 TLV→BCN→TFN Sep 24; group trip, Yom Kippur in Spain, capoeira, snorkeling", future: false },
  { date: "Oct 2–5, 2009", flag: "🇪🇸", country: "Spain", city: "Barcelona – Dalí museum (Figueres), La Sagrada Família, free walking tour; El Al 3B6VBJ LY394 BCN→TLV Oct 5 11:25", future: false },
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
  { date: "Mar 15, 2010", flag: "🇦🇷", country: "Argentina", city: "Puerto Iguazu – Iguazu Falls, Great Adventure boat, hostel pool party", future: false },
  { date: "Mar 2010", flag: "🇧🇷", country: "Brazil", city: "Foz de Iguaçu – crossed from Argentina; flew to Rio de Janeiro!", future: false },
  { date: "Mar–Apr 2010", flag: "🇧🇷", country: "Brazil", city: "Rio de Janeiro – flew from Foz de Iguaçu", future: false },
  { date: "Mar 31, 2010", flag: "🇧🇷", country: "Brazil", city: "Salvador – Nega Maluca Guesthouse, Pelourinho", future: false },
  { date: "Apr 2010", flag: "🇧🇷", country: "Brazil", city: "Ribeirao Preto – CouchSurfing; São Paulo", future: false },
  { date: "May 4–9, 2010", flag: "🇧🇷", country: "Brazil", city: "Manaus – Amazon region (TAM JJ3746 SP→Manaus, then Manaus→Fortaleza)", future: false },
  { date: "May 9–22, 2010", flag: "🇧🇷", country: "Brazil", city: "Fortaleza · Natal – northeast Brazil (TAM Natal→SP May 22)", future: false },
  { date: "May 25–Jun 5, 2010", flag: "🇪🇨", country: "Ecuador", city: "Guayaquil – Nuca Pacha Hostel + Galapagos Islands (Quasar expedition)", future: false },
  { date: "Jun 6, 2010", flag: "🇪🇨", country: "Ecuador", city: "Quito (UIO) – Iberia IB3752 flight home", future: false },
  { date: "Jul 2–7, 2010", flag: "🇮🇹", country: "Italy", city: "Venice – Alitalia AZ809/AZ1463 TLV→FCO→VCE Jul 2 (eDreams ZQZVTV); with Nogah & Hadar", future: false },
  { date: "Jul 7, 2010", flag: "🇧🇪", country: "Belgium", city: "Brussels Charleroi – Ryanair NHGUJE FR6054 Venice Treviso→CRL 08:35–10:10; 1 night en route Amsterdam", future: false },
  { date: "Jul 8–12, 2010", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – 4 days; Utrecht capoeira with Jorine Jul 9; Eurolines bus to London Jul 12", future: false },
  { date: "Jul 12–20, 2010", flag: "🇬🇧", country: "United Kingdom", city: "London – Eurolines from Amsterdam; Oxford Jul 15; Horsham (Alex Pagel) Jul 17–18", future: false },
  // — 2012 —
  { date: "Jan–Apr 2, 2012", flag: "🇺🇸", country: "United States", city: "Palo Alto / San Francisco – UpWest Labs accelerator (~3 months); returned via Toronto", future: false },
  { date: "Nov 8–18, 2012", flag: "🇵🇹", country: "Portugal", city: "Lisbon – Brussels Airlines SN3292/SN6401 via BRU; with Metula + Ronen, car rental road trip", future: false },
  // — 2013 —
  { date: "May 12–28, 2013", flag: "🇺🇸", country: "United States", city: "San Francisco – United K2KX00: UA91 TLV→EWR→SFO May 11–12; Google I/O 2013 (May 15–17, Moscone Center); returned UA1696+UA90 SFO→EWR→TLV May 28–29", future: false },
  { date: "Jul 20–29, 2013", flag: "🇭🇺", country: "Hungary", city: "Budapest – SUN Festival; Wizz Air W6 2457 BUD→TLV Jul 29 15:45–20:00 (OnTour L9S6WD)", future: false },
  // — 2014 —
  { date: "Jul 15–29, 2014", flag: "🇭🇺", country: "Hungary", city: "Budapest – El Al TLV→BUD Jul 15 (inv #1851732); Corvin Plaza Hotels.com #8043292952265; with Golan; departed TAP BUD→LIS Jul 29", future: false },
  { date: "Jul 29–Aug 17, 2014", flag: "🇵🇹", country: "Portugal", city: "Lisbon + Idanha-a-Nova – TAP BUD→LIS Jul 29; Boom Festival 2014 (Idanha-a-Nova); departed AA 2J5SUJ LIS→SFO Aug 17", future: false },
  { date: "Aug 25–Sep 21, 2014", flag: "🇺🇸", country: "United States", city: "San Francisco – via AA 2J5SUJ LIS→SFO; HI-SF City Center Hostel #39474; Burning Man 2014 Black Rock City NV (car rental Advantage NPRL207CAF SFO Sep 7–12); SFMTA Sep 21; departed US 798 SEA→PHL 08:35 + US 796 PHL→TLV 21:10 Oct 15–16 (CDSF0J)", future: false },
  { date: "Sep 22–Oct 15, 2014", flag: "🇨🇦", country: "Canada", city: "Toronto → Vancouver – Air Canada AC 105 LJCE5R YYZ→YVR Sep 22 10:00–12:03; Canadian West Coast; departed Seattle SEA Oct 15", future: false },
  // — 2015 —
  { date: "Aug 26–Sep 27, 2015", flag: "🇺🇸", country: "United States", city: "San Francisco – KLM ZFTVS2 KL0605/KL0462 TLV→AMS→SFO Aug 26 (delayed); Burning Man 2015 Black Rock City NV (car rental CTRILUS27013 with Anati); Reno Sep 7 (Priceline #137-545-883-82); Symbiosis Gathering 2015 (10yr ReUnion) Sep 17–21; San Diego Sep ∼22–23; Greyhound SAN→SFO Sep 23 ref 69151685; car rental CTRILUS27448; departed AF 0085 SFO→CDG Sep 27 + AF 1320 CDG→TLV Sep 28", future: false },
  // — 2016 —
  { date: "Feb 25–29, 2016", flag: "🇩🇪", country: "Germany", city: "Berlin – EasyJet EZY4784 TLV→BER SXF Feb 25 13:10–16:45 (EQ7GTM1); Airbnb Feb 25–26 (via Mayan); Burning Bär – Plug and Play; car rental TJSILDE28568; Plus Berlin Feb 28–29 (booking.com #479726934)", future: false },
  { date: "Jul 14–26, 2016", flag: "🇩🇰", country: "Denmark", city: "Copenhagen + road trip – Pegasus TLV→SAW→CPH (Vayama 7THDYA); car rental Copenhagen Jul 14; ~12 days", future: false },
  { date: "Jul 26–Aug 2, 2016", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – SAS SK553 CPH→AMS Jul 26 18:10; Budget Hotel Manofa Aug 1–2; Hotel Torenzicht (Itai Indig)", future: false },
  { date: "Aug 21–Oct 3, 2016", flag: "🇺🇸", country: "United States", city: "San Francisco – SWISS 2KNF8K LX 257 TLV→ZRH + LX 36 ZRH→SFO 12:50 Aug 21 (SuperShuttle #4633117); Reno Sep 5–7 Eldorado booking.com #355250389; car rental TJSILUS31874; Symbiosis Gathering 2016 Sep 22–26 Woodward Reservoir CA; departed LX 39 SFO→ZRH Oct 3 + LX 256 ZRH→TLV Oct 4", future: false },
  { date: "Dec 2–6, 2016", flag: "🇺🇸", country: "United States", city: "Las Vegas – inbound UA955 TLV→SFO Dec 2 + UA943 SFO→LAS Dec 2 (CD1JXV); Las Vegas Hostel booking.com #1905590631; UA728 LAS→SFO Dec 6", future: false },
  { date: "Dec 6–27, 2016", flag: "🇺🇸", country: "United States", city: "San Francisco – LH459 SFO→MUC Dec 27 20:55 + LH680 MUC→TLV Dec 28 (CD1JXV)", future: false },
  // — 2017 —
  { date: "Jul 21–Aug 4, 2017", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – Gotogate KISWIK TLV→CPH Jul 21; Airbnb Christianshavn HMP9YXPRYW Jul 21–22 (with Yulia); Avis car rental CPH Jul 21–Aug 3 (Expedia #7281260473670); returned Aegean A3 WKJMTH CPH→ATH→TLV Aug 3–4", future: false },
  { date: "Jul 22–Aug 2, 2017", flag: "🇸🇪", country: "Sweden", city: "The Borderland 2017 – regional burn at a quarry (theborderland.se); with Yulia", future: false },
  { date: "Aug 14–Sep 10, 2017", flag: "🇺🇸", country: "United States", city: "Portland OR + San Francisco + Burning Man 2017 – United JZX095: UA955 TLV→SFO Aug 14, UA1281 SFO→PDX Aug 14; Black Rock City NV Aug 27–Sep 4; car rental Reno Sep 7; return UA954 SFO→TLV Sep 10", future: false },
  { date: "Nov 9–15, 2017", flag: "🇬🇧", country: "United Kingdom", city: "London – UIA PS778 TLV→KBP Nov 9 + PS111 KBP→LGW Nov 9; Smart Camden Inn Hostel (#1864784248); London Decompression Nov 11–12; BA2762 LGW→AMS Nov 15 15:45", future: false },
  { date: "Nov 15–22, 2017", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – BA2762 LGW→AMS Nov 15; Dutch Decompression 2017 (Radion club, with Yulia); EasyJet ET2PQ39 AMS→TLV Nov 22 (ET2PQ39)", future: false },
  // — 2018 —
  { date: "Jan 11–18, 2018", flag: "🇧🇪", country: "Belgium", city: "Brussels – Brussels Airlines RKQ26Q SN3294 TLV→BRU Jan 11, SN3291 BRU→TLV Jan 18 (business trip)", future: false },
  { date: "Jun 8–10, 2018", flag: "🇧🇪", country: "Belgium", city: "Brussels – Brussels Airlines SN3294 TLV→BRU Jun 8, SN3293 BRU→TLV Jun 10 (short business trip)", future: false },
  { date: "Jun 18–30, 2018", flag: "🇩🇪", country: "Germany", city: "Berlin – Turkish Airlines TFPSTH TLV→IST→BER Jun 18; Kiez Burn 2018 regional burn (art installer / Wonderer volunteer); Eurowings Z95CKF BER→BCN Jun 30", future: false },
  { date: "Jun 30–Jul 10, 2018", flag: "🇪🇸", country: "Spain", city: "Barcelona – Eurowings Z95CKF BER→BCN Jun 30; car rental CTRILES39566; Turkish Airlines TFPSTH BCN→TLV Jul 10", future: false },
  { date: "Jul 21–28, 2018", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – UIA PS780 TLV→KBP Jul 21, PS163 KBP→CPH Jul 21; Borderland 2018 regional burn Jul 24–27", future: false },
  { date: "Aug 22–Sep 11, 2018", flag: "🇺🇸", country: "United States", city: "San Francisco – Burning Man 2018 (United CFJ6P1 TLV→SFO Aug 22; departed SFO→YVR Sep 11 AC8839 + YVR→FRA→BER TXL Sep 12 AC9637)", future: false },
  { date: "Sep 12–18, 2018", flag: "🇩🇪", country: "Germany", city: "Berlin – United CFJ6P1 SFO→YVR Sep 11 (AC8839) + YVR→FRA→BER TXL Sep 12 (AC9637/Lufthansa CityLine); with Nadja Schreiber; Kiwi.com 7937947; easyJet U24733 BER SXF→VIE Sep 18 18:55", future: false },
  { date: "Sep 18–24, 2018", flag: "🇦🇹", country: "Austria", city: "Vienna – easyJet U24733 BER SXF→VIE Sep 18 18:55; Wizzair W62811 VIE→TLV Sep 24 06:05→10:30 (with Nadja Schreiber)", future: false },
  { date: "Oct 7, 2018", flag: "🇩🇪", country: "Germany", city: "Berlin TXL – Aegean A30929 TLV→ATH Oct 7 05:30 + A30820 ATH→BER TXL Oct 7 10:35 (booking 1252622936/PNR T224DX; with Nadja Schreiber; return date unknown)", future: false },
  { date: "Dec 2018", flag: "🇧🇪", country: "Belgium", city: "Brussels – Brussels Airlines L3LKK9 (business)", future: false },
  // — 2019 —
  { date: "~Mar 1–2, 2019", flag: "🇦🇹", country: "Austria", city: "Vienna – Vienna Burning Ball (outbound ~late Feb; SWISS RPAT5C return LX256 ZRH→TLV Mar 31)", future: false },
  { date: "~Mar 12–31, 2019", flag: "🇫🇷", country: "France", city: "Chamonix – Rentalcars.com #720198114 Mar 12; Chamonix Chalets Ltd; returned ZRH→TLV Mar 31 via SWISS RPAT5C", future: false },
  { date: "Apr 24–May 13, 2019", flag: "🇨🇳", country: "China", city: "Shanghai + Dragon Burn – Aeroflot KVPOGS: SU507 TLV→SVO Apr 24, SU208 SVO→PVG; Dragon Burn regional burn late Apr; Airbnb 'The YongKang Hidden Penthouse' Shanghai May 5–7; return SU209+SU504 May 13", future: false },
  { date: "May 30–Jun 25, 2019", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS KJXDPI TLV→ZRH May 30; Airbnb Salgesch Valais Jun 8–9; side trip Berlin; Lufthansa LH185/LH694 TXL→FRA→TLV Jun 25", future: false },
  { date: "Jun ~20–25, 2019", flag: "🇩🇪", country: "Germany", city: "Berlin TXL – Lufthansa LH185 TXL→FRA Jun 25, LH694 FRA→TLV Jun 25", future: false },
  { date: "Jul 6–21, 2019", flag: "🇪🇸", country: "Spain", city: "Madrid + Barcelona – SWISS RX6QQU TLV→ZRH→MAD Jul 6 (LX2030 delayed); Tarragona area; Renfe Tarragona→Barcelona-Sants Jul 14; BCN→ZRH Jul 21 (Gotogate KXG8DY/L9GZZF)", future: false },
  { date: "Jul 21–31, 2019", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – SWISS LX1278 ZRH→CPH Jul 21 (delayed, with Christina Welter); Borderland 2019 ticket LVEW8; Quality Hotel Høje Taastrup Jul 27; SWISS LX1273 CPH→ZRH + LX256 ZRH→TLV Jul 31", future: false },
  { date: "Sep 5–24, 2019", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS JQH8J7 TLV→ZRH Sep 5; FlixBus side trip to Vienna Sep 15–16; El Al ZRH→TLV Sep 24", future: false },
  { date: "Sep 15–16, 2019", flag: "🇦🇹", country: "Austria", city: "Vienna – FlixBus side trip from Zurich (two FlixBus bookings #1055091281 + #1055954892)", future: false },
  { date: "Oct 22–28, 2019", flag: "🇩🇪", country: "Germany", city: "Berlin – Austrian OS858 TLV→VIE Oct 22, OS239 VIE→TXL Oct 23 (EasyGo 76868429 / RPNRQY + RFKPRU); PREMIUM Hostel #3973544257; Aegean Q9CDX5 TXL→ATH Oct 28", future: false },
  { date: "Oct 28, 2019", flag: "🇬🇷", country: "Greece", city: "Athens – Aegean Q9CDX5 A3 821 TXL→ATH, A3 924 ATH→TLV (one-day stopover en route from Berlin)", future: false },
  { date: "Nov 18–Dec 16, 2019", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS T5HL5N LX253 TLV→ZRH Nov 18; side trip Malta Nov 26–30 (KM491 ZRH→MLA; KM0490 MLA→ZRH Nov 30 PNR RYLFML); returned ZRH→TLV Dec 16", future: false },
  { date: "Nov 26–30, 2019", flag: "🇲🇹", country: "Malta", city: "Valletta/Malta – Air Malta KM491 ZRH→MLA Nov 26 17:40→20:00; returned KM0490 MLA→ZRH Nov 30 14:25→16:50 (PNR RYLFML; booking 1525524548)", future: false },
  // — 2020 —
  { date: "Jun 21–~26, 2020", flag: "🇩🇪", country: "Germany", city: "Frankfurt + Berlin – Deutsche Bahn ICE 798 MHVD96 Frankfurt(Main)Süd→Berlin Hbf Jun 21 12:20–16:47", future: false },
  { date: "Jun 26, 2020", flag: "🇨🇭", country: "Switzerland", city: "Zurich – DB BUS42227 PSRLPB München ZOB→Zürich HB 09:03–12:45", future: false },
  { date: "Jun 26–~29, 2020", flag: "🇨🇭", country: "Switzerland", city: "Zurich", future: false },
  { date: "Jun 29–Jul 4, 2020", flag: "🇦🇹", country: "Austria", city: "Vienna – departed Ryanair YCBHXN FR7161 VIE→TLV Jul 4 13:00–17:20", future: false },
  { date: "Sep 9–~21, 2020", flag: "🇩🇪", country: "Germany", city: "Berlin SXF – Ryanair FR6473 DCIQHH TLV→SXF Sep 9; extended stay with BVG transit", future: false },
  { date: "Sep ~22–28, 2020", flag: "🇦🇹", country: "Austria", city: "Vienna – transit from Berlin; departed ÖBB Wien Hbf→München Sep 28 15:42", future: false },
  { date: "Sep 28, 2020", flag: "🇩🇪", country: "Germany", city: "Munich – ÖBB D720 Wien→München 15:42–21:36 (booking 0130835302982930); HI Munich Park Youth Hostel", future: false },
  { date: "Sep 29–Oct ~6, 2020", flag: "🇩🇪", country: "Germany", city: "Markdorf/Bodensee – Airbnb 'Mitten in Markdorf' (Baden-Württemberg near Lake Constance)", future: false },
  { date: "Oct 11–~30, 2020", flag: "🇨🇭", country: "Switzerland", city: "Zurich – rooftop garden apartment (booking.com CHF 177.55); SBB Swiss trains Oct 26", future: false },
  { date: "Oct 30–Nov 3, 2020", flag: "🇦🇹", country: "Austria", city: "Vienna – Wiener Linien Airport Lines return ticket Oct 30; Strozzigasse", future: false },
  { date: "Nov 3–Dec 7, 2020", flag: "🇨🇭", country: "Switzerland", city: "Zurich – ÖBB RJX 564 Wien→Innsbruck + EC 164 Innsbruck→Zürich HB Nov 3 11:30–19:20; Turkish TK ZRH→TLV Dec 7", future: false },
  { date: "Dec 7–8, 2020", flag: "🇸🇨", country: "Seychelles", city: "Mahé – departed TLV Dec 7 eve (StudentUniverse, Israel exit report 07/12/2020 20:52)", future: false },
  { date: "Dec 8, 2020–Jan 22, 2021", flag: "🇸🇨", country: "Seychelles", city: "Mahé – Le Domaine de Bacova villa S-201208-Erov-nic-572821 (SeyVillas); stay extended Dec 22 to Jan 22 2021 (50 EUR/night)", future: false },
  // — 2021 —
  { date: "Jul 15–27, 2021", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – Air France KEHTV3 AF1621 TLV→CPH Jul 15 (no Munich stop); SWISS LX1267 CPH→ZRH Jul 27 (LJ3EY3)", future: false },
  { date: "Jul 27–Aug 4, 2021", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS LX1267 CPH→ZRH Jul 27 (booking LJ3EY3); SBB trains Aug 3–4", future: false },
  { date: "Aug ~20–26, 2021", flag: "🇩🇪", country: "Germany", city: "Berlin – Kiez Burn 2021; COVID test Aug 23; Dark Matter Berlin Aug 28 exhibition", future: false },
  { date: "Aug 27–31, 2021", flag: "🇭🇺", country: "Hungary", city: "Budapest – Ryanair from Berlin; Bolt rides Aug 27–31; Omio 0656382873502146 Budapest Keleti→Vienna Central Aug 31", future: false },
  { date: "Aug 31–Sep 26, 2021", flag: "🇦🇹", country: "Austria", city: "Vienna – Omio Budapest→Vienna Aug 31; DB Bahn UUKX7C Sep 14 Berlin trip; Aegean RGUWTJ A3863 VIE→ATH + A3928 ATH→TLV Sep 26", future: false },
  // — 2022 —
  { date: "Jan 15–Feb 27, 2022", flag: "🇦🇹", country: "Austria", city: "Vienna – Ryanair CEMR3X FR7161 VIE→TLV Jan 26 (delayed 2h+); Ryanair ACU1QQ TLV→VIE Feb 7; VIE→TLV Feb 27", future: false },
  { date: "Apr 24, 2022", flag: "🇧🇪", country: "Belgium", city: "Brussels-Midi – Thalys → Amsterdam", future: false },
  { date: "Apr 24, 2022", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam Centraal – Thalys from Brussels", future: false },
  { date: "Jul 1–11, 2022", flag: "🇪🇸", country: "Spain", city: "Madrid – Air Europa UX1302 TLV→MAD Jul 1 16:05 (Travelgenio 21051308/PNR 2I7RRS)", future: false },
  { date: "Jul 11–21, 2022", flag: "🇩🇪", country: "Germany", city: "Berlin – Ryanair FR2528 MAD→BER Jul 11 17:25 (MBNYHM)", future: false },
  { date: "Jul 21–Aug 5, 2022", flag: "🇸🇪", country: "Sweden", city: "Gothenburg – FlixBus from Berlin Jul 21; Austrian OS326 GOT→VIE Aug 5 19:55 (RSYGVF)", future: false },
  { date: "Aug 5–23, 2022", flag: "🇦🇹", country: "Austria", city: "Vienna – Austrian RSYGVF GOT→VIE Aug 5", future: false },
  { date: "Aug 23–Sep 6, 2022", flag: "🇺🇸", country: "United States", city: "San Francisco – Austrian 2ICQOE VIE→MUC→SFO Aug 23 (Expedia #72363530006411); returned SFO→FRA→VIE Sep 6", future: false },
  { date: "Sep 7, 2022–Jan 5, 2023", flag: "🇦🇹", country: "Austria", city: "Vienna – Austrian 2ICQOE SFO→FRA→VIE Sep 7; El Al WMCDYI LY362 VIE→TLV Jan 5 2023", future: false },
  { date: "Jan 19–Feb 5, 2023", flag: "🇿🇦", country: "South Africa", city: "Johannesburg Jan 19–20 + Hoedspruit (Kruger area) Jan 20–Feb 4 + JNB Feb 4–5 – El Al SW38NB LY51 TLV→JNB Jan 19; LY52 JNB→TLV Feb 5", future: false },
  // — 2023 —
  { date: "Feb 14–23, 2023", flag: "🇨🇭", country: "Switzerland", city: "Zurich – SWISS QX8G5U LX253 TLV→ZRH Feb 14 17:45 gate B05 seat 37A; ÖBB ZRH→VIE Feb 23", future: false },
  { date: "Feb 23–Mar 5, 2023", flag: "🇦🇹", country: "Austria", city: "Vienna – ÖBB booking 0634 2692 5610 7558 ZRH→VIE Feb 23; Wiener Linien transit; Austrian OS857 VIE→TLV Mar 5", future: false },
  { date: "Jun 19–Jul 4, 2023", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – Transavia HV5802 L83MMF TLV→AMS Jun 19 20:40 (delayed); Ryanair TKS35A FR3103 AMS→DUB Jul 4", future: false },
  { date: "Jul 4–18, 2023", flag: "🇮🇪", country: "Ireland", city: "Dublin – Ryanair TKS35A FR3103 AMS→DUB Jul 4 22:00; Ryanair HD5D9V FR6070 DUB→GOT Jul 18 17:15", future: false },
  { date: "Jul 18–Aug 6, 2023", flag: "🇸🇪", country: "Sweden", city: "Gothenburg – Ryanair HD5D9V FR6070 DUB→GOT Jul 18 17:15; Airbnb Lerum Jul 31–Aug 5; Eurowings ADCIMC EW8221 GOT→BER Aug 6 19:50 (delayed 30 min)", future: false },
  { date: "Aug 6–24, 2023", flag: "🇩🇪", country: "Germany", city: "Berlin – Eurowings ADCIMC EW8221 GOT→BER Brandenburg Aug 6; BA SD6A5Y BA991 BER→LHR Aug 24", future: false },
  { date: "Aug 24–Sep 13, 2023", flag: "🇬🇧", country: "United Kingdom", city: "London – BA SD6A5Y BA991 BER→LHR Aug 24; BA286 LHR→BER Sep 13 (delayed, arrived Berlin Sep 14)", future: false },
  { date: "Sep 13–21, 2023", flag: "🇩🇪", country: "Germany", city: "Berlin – BA SD6A5Y BA286 delayed arrival Sep 13–14; FlixBus #3107442268 BER central bus station→VIE Erdberg Sep 21 11:00–20:10", future: false },
  { date: "Sep 21–29, 2023", flag: "🇦🇹", country: "Austria", city: "Vienna – FlixBus #3107442268 BER→VIE Sep 21; El Al MW5YK7 LY362 VIE→TLV Sep 29", future: false },
  { date: "Oct 10–28, 2023", flag: "🇲🇪", country: "Montenegro", city: "Tivat / Kotor / Žabljak / Budva / Podgorica – Israir TLV→TIV Oct 10; Airbnb Tivat Oct 10–13; Kotor boat tour Oct 13; Apartmani Momčilo Žabljak Oct 13; Airbnb Prčanj Oct 15–16; SunSea Budva; CroatiaBus CRB-7846181 Budva→Podgorica Oct 28; Austrian PQXTNC TGD→VIE Oct 28", future: false },
  { date: "Oct 28–Nov 1, 2023", flag: "🇦🇹", country: "Austria", city: "Vienna – Austrian PQXTNC TGD→VIE Oct 28; Wiener Linien Oct 28 & 30; Wizzair NE4VTV VIE→LCA Nov 1", future: false },
  { date: "Nov 1–6, 2023", flag: "🇨🇾", country: "Cyprus", city: "Larnaca – Wizzair NE4VTV VIE→LCA Nov 1; booking 3368464 LCA→TLV Nov 6", future: false },
  { date: "Dec 29, 2023", flag: "🇳🇿", country: "New Zealand", city: "Auckland – Etihad RADO5A EY594 TLV→AUH + EY862 AUH→PVG + Air NZ NZ288 PVG→AKL (departed TLV Dec 29, arrived Auckland Dec 31)", future: false },
  // — 2024 —
  { date: "Jan 2024", flag: "🇳🇿", country: "New Zealand", city: "Auckland – NZ road trip, Kiwiburn Hunterville", future: false },
  { date: "Feb 7, 2024", flag: "🇦🇺", country: "Australia", city: "Melbourne – Jetstar EMZQ2D JQ202 AKL→MEL Feb 7", future: false },
  { date: "May 2024", flag: "🇳🇿", country: "New Zealand", city: "Hot Water Beach, Coromandel – back in NZ", future: false },
  { date: "May 10, 2024", flag: "🇳🇿", country: "New Zealand", city: "Auckland – DARKFIELD: FLIGHT + SÉANCE (Aotea Sq)", future: false },
  { date: "May 6, 2024", flag: "🇩🇪", country: "Germany", city: "Frankfurt – Qatar KXUTUF AKL→FRA via DOH May 6; to WTF France May 8", future: false },
  { date: "May 8–16, 2024", flag: "🇫🇷", country: "France", city: "WTF event May 8–13; Normandy May 13–16; drove to Brussels May 16", future: false },
  { date: "May 16–19, 2024", flag: "🇧🇪", country: "Belgium", city: "Brussels – arrived from Normandy May 16; FlixBus Brussels-North → London Victoria May 19", future: false },
  { date: "May 19, 2024", flag: "🇬🇧", country: "United Kingdom", city: "London Victoria – FlixBus from Brussels", future: false },
  { date: "Jun 18, 2024", flag: "🇬🇧", country: "United Kingdom", city: "London – British Airways RKRRI5", future: false },
  { date: "Jun 18, 2024", flag: "🇩🇪", country: "Germany", city: "Berlin – BA RKRRI5 BA0988 LHR→BER Brandenburg Jun 18 19:30", future: false },
  { date: "Aug 2024", flag: "🇸🇪", country: "Sweden", city: "Stockholm Arlanda – Ryanair (ARN→VIE)", future: false },
  { date: "Aug 2024", flag: "🇦🇹", country: "Austria", city: "Vienna – Ryanair ARN→VIE", future: false },
  { date: "Sep 6, 2024", flag: "🇺🇸", country: "United States", city: "Lake Tahoe NV – Pretty Lights, Harveys Resort", future: false },
  { date: "Sep 2024", flag: "🇨🇦", country: "Canada", city: "Toronto – car rental YYZ", future: false },
  { date: "Oct 13–16, 2024", flag: "🇯🇵", country: "Japan", city: "Yokohama – Hotel Resol Sakuragicho", future: false },
  { date: "Oct 17, 2024", flag: "🇯🇵", country: "Japan", city: "Tokyo – SIDI Hub Social Night", future: false },
  { date: "Oct 23–25, 2024", flag: "🇯🇵", country: "Japan", city: "Otsu / Kyoto – Koke Musu Inn", future: false },
  { date: "Nov 25, 2024", flag: "🇳🇿", country: "New Zealand", city: "Domestic NZ – Jetstar JQ239 (from Auckland)", future: false },
  // — 2025 —
  { date: "Jan 2025", flag: "🇳🇿", country: "New Zealand", city: "Nelson · Tauranga McLaren Falls camping", future: false },
  { date: "May 13, 2025", flag: "🇬🇧", country: "United Kingdom", city: "London Gatwick → Victoria – Trainline", future: false },
  { date: "Jun 6, 2025", flag: "🇬🇧", country: "United Kingdom", city: "London – Loom Club, Islington (DICE)", future: false },
  { date: "Jun 20, 2025", flag: "🇬🇧", country: "United Kingdom", city: "London – British Airways XP4Z6P", future: false },
  { date: "Jun 20–Jul 6, 2025", flag: "🇧🇬", country: "Bulgaria", city: "Bansko – Airbnb, 16 nights", future: false },
  { date: "Jul 7, 2025", flag: "🇩🇪", country: "Germany", city: "Berlin – Ryanair FR1149 from Sofia", future: false },
  { date: "Jul 16, 2025", flag: "🇸🇪", country: "Sweden", city: "Stockholm – SAS ZCM7U3", future: false },
  { date: "Jul 27, 2025", flag: "🇦🇹", country: "Austria", city: "Vienna – drove from Stockholm; Thrive F-535358 VIE→FRA→SFO Aug 15", future: false },
  { date: "Aug 15–24, 2025", flag: "🇺🇸", country: "United States", city: "San Francisco – Bartlett Hotel", future: false },
  { date: "Aug 24–Sep 1, 2025", flag: "🇺🇸", country: "United States", city: "Black Rock City NV – Burning Man 2025", future: false },
  { date: "Sep 2–4, 2025", flag: "🇺🇸", country: "United States", city: "Reno, Nevada – Airbnb", future: false },
  { date: "Sep 13, 2025", flag: "🇺🇸", country: "United States", city: "San Francisco – OTT Live at Public Works", future: false },
  { date: "Sep 30, 2025", flag: "🇺🇸", country: "United States", city: "United M7ZB4N UA2097 SFO→ORD→YYZ Toronto", future: false },
  { date: "Oct 1, 2025", flag: "🇨🇦", country: "Canada", city: "Toronto – United M7ZB4N UA2097+UA5293 SFO→ORD→YYZ", future: false },
  { date: "Oct 8–9, 2025", flag: "🇨🇦", country: "Canada", city: "Barrie, Ontario – Airbnb", future: false },
  { date: "Oct 12, 2025", flag: "🇨🇦", country: "Canada", city: "Toronto – Legends of Horror (TicketWeb)", future: false },
  { date: "Oct 14–23, 2025", flag: "🇦🇹", country: "Austria", city: "Vienna – Airbnb, 9 nights", future: false },
  { date: "Oct 26, 2025", flag: "🇳🇱", country: "Netherlands", city: "Playa Echoes – Dutch Decompression at FLORASCEND", future: false },
  { date: "Oct 29, 2025", flag: "🇨🇭", country: "Switzerland", city: "Zurich – Eurowings departure", future: false },
  { date: "Oct 29, 2025", flag: "🇩🇪", country: "Germany", city: "Düsseldorf – Eurowings", future: false },
  { date: "Oct 29, 2025", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – Eurowings", future: false },
  { date: "Nov 4, 2025", flag: "🇩🇰", country: "Denmark", city: "Copenhagen – Digital Tech Summit 2025", future: false },
  { date: "Nov 6, 2025", flag: "🇳🇱", country: "Netherlands", city: "Amsterdam – KLM flight check-in", future: false },
  { date: "Nov 14–16, 2025", flag: "🇳🇿", country: "New Zealand", city: "Auckland – Qatar 9NPLNP AMS→DOH→AKL, departs Nov 14 21:50, arrives Nov 16", future: false },
  // — 2026 (upcoming) —
  { date: "Jan–Apr 2026", flag: "🇳🇿", country: "New Zealand", city: "Nelson Lakes · Kahurangi · Parklands Marina", future: false },
  { date: "May 6, 2026", flag: "🇨🇦", country: "Canada", city: "Toronto – Qantas FGYGAI QF3 AKL→JFK→YYZ", future: false },
  { date: "Aug 5–9, 2026", flag: "🇦🇹", country: "Austria", city: "Schönburn 2026 – Austrian Burn (ticket 79AT9)", future: true },
  { date: "Aug 30–Sep 7, 2026", flag: "🇺🇸", country: "United States", city: "Black Rock City NV – Burning Man 2026", future: true },
];

// Events with confirmed venue addresses
const events = [
  {
    name: "Pretty Lights",
    venue: "Lake Tahoe Outdoor Arena at Harveys",
    address: "Stateline, Nevada, USA",
    date: "Sep 6, 2024",
    emoji: "🎵",
    lat: 38.9658, lng: -119.9366
  },
  {
    name: "SIDI Hub Tokyo – Social Night",
    venue: "Tokyo",
    address: "Tokyo, Japan",
    date: "Oct 17, 2024",
    emoji: "🌏",
    lat: 35.6762, lng: 139.6503
  },
  {
    name: "Loom Turns One (DICE)",
    venue: "Loom Club",
    address: "6 Northampton Street, Islington, London N1 2HY",
    date: "Jun 6, 2025",
    emoji: "🎧",
    lat: 51.5381, lng: -0.1015
  },
  {
    name: "DARKFIELD: FLIGHT + SÉANCE",
    venue: "Aotea Square",
    address: "50 Mayoral Dr, Auckland, NZ 1010",
    date: "May 10, 2025",
    emoji: "🎭",
    lat: -36.8508, lng: 174.7645
  },
  {
    name: "Burning Man 2025 – Tomorrow Today",
    venue: "Black Rock City",
    address: "Black Rock Desert, NV 89412, USA",
    date: "Aug 24–Sep 1, 2025",
    emoji: "🔥",
    lat: 40.7864, lng: -119.2065
  },
  {
    name: "OTT (Live) at Public Works",
    venue: "Public Works",
    address: "San Francisco, CA, USA",
    date: "Sep 13, 2025",
    emoji: "🎵",
    lat: 37.7696, lng: -122.4165
  },
  {
    name: "Legends of Horror",
    venue: "Toronto (TicketWeb.ca)",
    address: "Toronto, Ontario, Canada",
    date: "Oct 12, 2025",
    emoji: "🎃",
    lat: 43.6511, lng: -79.3470
  },
  {
    name: "Playa Echoes – Dutch Decompression",
    venue: "FLORASCEND",
    address: "Netherlands",
    date: "Oct 26, 2025",
    emoji: "🌸",
    lat: 52.3676, lng: 4.9041
  },
  {
    name: "Digital Tech Summit 2025",
    venue: "Copenhagen",
    address: "Copenhagen, Denmark",
    date: "Nov 4, 2025",
    emoji: "💻",
    lat: 55.6761, lng: 12.5683
  },
  {
    name: "Vengaboys – 90's Mania",
    venue: "Auckland Town Hall, Great Hall",
    address: "Greys Ave, Auckland CBD, NZ",
    date: "Jan 28, 2026",
    emoji: "🕺",
    lat: -36.8481, lng: 174.7633
  },
  {
    name: "Breathe | Mauri Ora (VR) – Te Papa",
    venue: "Museum of New Zealand Te Papa Tongarewa",
    address: "55 Cable Street, Wellington, NZ",
    date: "Feb 22, 2026",
    emoji: "🏛️",
    lat: -41.2903, lng: 174.7817
  },
  {
    name: "Schönburn 2026",
    venue: "Schönburn (Austrian Burn)",
    address: "Austria (exact location TBA)",
    date: "2026 (upcoming)",
    emoji: "🔥",
    lat: 47.8095, lng: 13.0550
  },
  {
    name: "What The Farm VIII (WTF VIII)",
    venue: "What The Farm Festival",
    address: "Netherlands (exact farm TBA)",
    date: "May 2026 (upcoming)",
    emoji: "🌾",
    lat: 52.1326, lng: 5.2913
  },
  {
    name: "Burning Man 2026",
    venue: "Black Rock City",
    address: "Black Rock Desert, NV 89412, USA",
    date: "Aug 30–Sep 7, 2026 (upcoming)",
    emoji: "🔥",
    lat: 40.7864, lng: -119.2065
  },
  {
    name: "SideBurn 2026",
    venue: "SideBurn (Canadian Burn)",
    address: "Canada",
    date: "2026 (upcoming)",
    emoji: "🔥",
    lat: 45.4215, lng: -75.6972
  }
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
  { from:"2009-09-24", to:"2009-10-02", flag:"🇪🇸", country:"Spain", city:"Tenerife Norte (TFN) – El Al 3B6VBJ LY393 TLV→BCN Sep 24 06:20; JK5234 BCN→TFN Sep 24 11:35" },
  { from:"2009-10-02", to:"2009-10-05", flag:"🇪🇸", country:"Spain", city:"Barcelona – UX9144 TFN→BCN Oct 2 18:50; El Al 3B6VBJ LY394 BCN→TLV Oct 5 11:25" },
  { from:"2009-12-01", to:"2009-12-08", flag:"🇦🇷", country:"Argentina", city:"Buenos Aires · Córdoba · Rosario" },
  { from:"2009-12-08", to:"2009-12-13", flag:"🇦🇷", country:"Argentina", city:"Salta" },
  { from:"2009-12-13", to:"2009-12-16", flag:"🇧🇴", country:"Bolivia", city:"Salar de Uyuni" },
  { from:"2009-12-16", to:"2009-12-21", flag:"🇨🇱", country:"Chile", city:"San Pedro de Atacama" },
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
  { from:"2010-03-10", to:"2010-03-14", flag:"🇦🇷", country:"Argentina", city:"Buenos Aires" },
  { from:"2010-03-14", to:"2010-03-17", flag:"🇦🇷", country:"Argentina", city:"Puerto Iguazu – Iguazu Falls" },
  { from:"2010-03-17", to:"2010-03-31", flag:"🇧🇷", country:"Brazil", city:"Rio de Janeiro" },
  { from:"2010-03-31", to:"2010-04-20", flag:"🇧🇷", country:"Brazil", city:"Salvador – Nega Maluca Guesthouse" },
  { from:"2010-04-20", to:"2010-05-04", flag:"🇧🇷", country:"Brazil", city:"Ribeirao Preto / São Paulo" },
  { from:"2010-05-04", to:"2010-05-09", flag:"🇧🇷", country:"Brazil", city:"Manaus – Amazon region" },
  { from:"2010-05-09", to:"2010-05-24", flag:"🇧🇷", country:"Brazil", city:"Fortaleza / Natal – northeast Brazil" },
  { from:"2010-05-25", to:"2010-06-06", flag:"🇪🇨", country:"Ecuador", city:"Guayaquil & Galapagos Islands" },
  { from:"2010-07-02", to:"2010-07-07", flag:"🇮🇹", country:"Italy", city:"Venice" },
  { from:"2010-07-07", to:"2010-07-08", flag:"🇧🇪", country:"Belgium", city:"Brussels Charleroi – Ryanair FR6054 from Venice" },
  { from:"2010-07-08", to:"2010-07-12", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam + Utrecht" },
  { from:"2010-07-12", to:"2010-07-20", flag:"🇬🇧", country:"United Kingdom", city:"London + Oxford + Horsham" },
  { from:"2012-01-15", to:"2012-04-02", flag:"🇺🇸", country:"United States", city:"Palo Alto / San Francisco – UpWest Labs" },
  { from:"2012-11-08", to:"2012-11-18", flag:"🇵🇹", country:"Portugal", city:"Lisbon + road trip" },
  { from:"2013-05-12", to:"2013-05-28", flag:"🇺🇸", country:"United States", city:"San Francisco – Google I/O 2013" },
  { from:"2013-07-20", to:"2013-07-29", flag:"🇭🇺", country:"Hungary", city:"SUN Festival + Budapest" },
  { from:"2014-07-15", to:"2014-07-29", flag:"🇭🇺", country:"Hungary", city:"Budapest – with Golan (Corvin Plaza)" },
  { from:"2014-07-29", to:"2014-08-17", flag:"🇵🇹", country:"Portugal", city:"Lisbon + Boom Festival 2014 (Idanha-a-Nova)" },
  { from:"2014-08-25", to:"2014-09-21", flag:"🇺🇸", country:"United States", city:"Burning Man 2014 / San Francisco" },
  { from:"2014-09-22", to:"2014-10-15", flag:"🇨🇦", country:"Canada", city:"Toronto / Vancouver" },
  { from:"2014-10-15", to:"2014-10-16", flag:"🇺🇸", country:"United States", city:"Seattle – US 798 SEA→PHL 08:35 + US 796 PHL→TLV 21:10 (CDSF0J)" },
  { from:"2015-08-26", to:"2015-09-27", flag:"🇺🇸", country:"United States", city:"Burning Man 2015 / San Francisco / Reno / Symbiosis" },
  { from:"2016-02-25", to:"2016-02-29", flag:"🇩🇪", country:"Germany", city:"Berlin – Burning Bär – Plug and Play" },
  { from:"2016-07-14", to:"2016-07-26", flag:"🇩🇰", country:"Denmark", city:"Copenhagen + road trip" },
  { from:"2016-07-26", to:"2016-08-02", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam" },
  { from:"2016-08-21", to:"2016-10-03", flag:"🇺🇸", country:"United States", city:"San Francisco / Reno / Symbiosis 2016 (SWISS 2KNF8K)" },
  { from:"2016-12-02", to:"2016-12-06", flag:"🇺🇸", country:"United States", city:"Las Vegas" },
  { from:"2016-12-06", to:"2016-12-27", flag:"🇺🇸", country:"United States", city:"San Francisco (Dec 2016)" },
  { from:"2017-07-21", to:"2017-08-04", flag:"🇩🇰", country:"Denmark", city:"Copenhagen + The Borderland 2017 (Boesdal Kalkbrud, Denmark)" },
  { from:"2017-08-14", to:"2017-09-10", flag:"🇺🇸", country:"United States", city:"Portland OR / San Francisco / Burning Man 2017" },
  { from:"2017-11-09", to:"2017-11-15", flag:"🇬🇧", country:"United Kingdom", city:"London – London Decompression" },
  { from:"2017-11-15", to:"2017-11-22", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam – Dutch Decompression 2017; BA 2762 LHR→AMS Nov 15 15:45→18:05" },
  { from:"2018-01-11", to:"2018-01-18", flag:"🇧🇪", country:"Belgium", city:"Brussels – business (Brussels Airlines RKQ26Q)" },
  { from:"2018-03-28", to:"2018-03-29", flag:"🇨🇦", country:"Canada", city:"Toronto – Air Canada AC85 TLV→YYZ Mar 28 11:45→16:25; AC1810 YYZ→CUN Mar 29" },
  { from:"2018-03-29", to:"2018-04-13", flag:"🇲🇽", country:"Mexico", city:"Cancun – Air Canada AC1810 YYZ→CUN Mar 29; AC1813 (rouge) CUN→YYZ Apr 12 20:35" },
  { from:"2018-04-13", to:"2018-04-13", flag:"🇨🇦", country:"Canada", city:"Toronto – transit; Air Canada AC84 YYZ→TLV Apr 13 16:40→Apr 14 10:00" },
  { from:"2018-06-08", to:"2018-06-10", flag:"🇧🇪", country:"Belgium", city:"Brussels – business (Brussels Airlines SN3294/SN3293)" },
  { from:"2018-06-18", to:"2018-06-30", flag:"🇩🇪", country:"Germany", city:"Berlin – Kiez Burn 2018" },
  { from:"2018-06-30", to:"2018-07-10", flag:"🇪🇸", country:"Spain", city:"Barcelona – Eurowings Z95CKF EW8526 BER→BCN Jun 30" },
  { from:"2018-07-21", to:"2018-07-28", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – Borderland 2018" },
  { from:"2018-08-22", to:"2018-09-11", flag:"🇺🇸", country:"United States", city:"San Francisco / Burning Man 2018 (departed SFO Sep 11 CFJ6P1)" },
  { from:"2018-09-12", to:"2018-09-18", flag:"🇩🇪", country:"Germany", city:"Berlin (Kiwi.com 7937947; with Nadja Schreiber)" },
  { from:"2018-09-18", to:"2018-09-24", flag:"🇦🇹", country:"Austria", city:"Vienna – easyJet BER SXF→VIE Sep 18; Wizzair W62811 VIE→TLV Sep 24" },
  { from:"2018-10-07", to:"2018-10-07", flag:"🇩🇪", country:"Germany", city:"Berlin TXL – Aegean A30929 TLV→ATH→BER (booking 1252622936, with Nadja)" },
  { from:"2018-12-31", to:"2019-01-04", flag:"🇧🇪", country:"Belgium", city:"Brussels" },
  { from:"2019-03-01", to:"2019-03-05", flag:"🇦🇹", country:"Austria", city:"Vienna – Vienna Burning Ball" },
  { from:"2019-03-05", to:"2019-03-12", flag:"🇩🇪", country:"Germany", city:"Berlin – ÖBB Nightjet Wien→BER arr Mar 5; FlixBus #1029190815 BER→ZRH Mar 12" },
  { from:"2019-03-13", to:"2019-03-31", flag:"🇫🇷", country:"France", city:"Chamonix – FlixBus via Zurich, Rentalcars + Chamonix Chalets" },
  { from:"2019-04-24", to:"2019-05-13", flag:"🇨🇳", country:"China", city:"Dragon Burn + Shanghai" },
  { from:"2019-05-30", to:"2019-06-20", flag:"🇨🇭", country:"Switzerland", city:"Zurich / Valais (Salgesch)" },
  { from:"2019-06-20", to:"2019-06-25", flag:"🇩🇪", country:"Germany", city:"Berlin TXL" },
  { from:"2019-07-06", to:"2019-07-21", flag:"🇪🇸", country:"Spain", city:"Madrid + Barcelona + Tarragona" },
  { from:"2019-07-21", to:"2019-07-31", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – Borderland 2019; SWISS LX1278 ZRH→CPH Jul 21" },
  { from:"2019-09-05", to:"2019-09-24", flag:"🇨🇭", country:"Switzerland", city:"Zurich (incl. Vienna side trip Sep 15–16)" },
  { from:"2019-09-15", to:"2019-09-16", flag:"🇦🇹", country:"Austria", city:"Vienna – FlixBus day trip" },
  { from:"2019-10-22", to:"2019-10-28", flag:"🇩🇪", country:"Germany", city:"Berlin – PREMIUM Hostel" },
  { from:"2019-10-28", to:"2019-10-28", flag:"🇬🇷", country:"Greece", city:"Athens – Aegean Q9CDX5 A3 821 TXL→ATH transit; A3 924 ATH→TLV" },
  { from:"2019-11-18", to:"2019-11-26", flag:"🇨🇭", country:"Switzerland", city:"Zurich" },
  { from:"2019-11-26", to:"2019-11-30", flag:"🇲🇹", country:"Malta", city:"Malta – Air Malta KM491 (PNR RYLFML)" },
  { from:"2019-11-30", to:"2019-12-16", flag:"🇨🇭", country:"Switzerland", city:"Zurich (returned from Malta Nov 30; departed ZRH→TLV Dec 16)" },
  { from:"2020-06-21", to:"2020-06-26", flag:"🇩🇪", country:"Germany", city:"Berlin (+ Frankfurt transit)" },
  { from:"2020-06-26", to:"2020-06-29", flag:"🇨🇭", country:"Switzerland", city:"Zurich – DB BUS42227 München ZOB→Zürich HB (booking PSRLPB) Jun 26" },
  { from:"2020-06-29", to:"2020-07-04", flag:"🇦🇹", country:"Austria", city:"Vienna – ÖBB Railjet ZRH→VIE Jun 29; Ryanair YCBHXN FR7161 VIE→TLV Jul 4 13:00" },
  { from:"2020-09-09", to:"2020-09-22", flag:"🇩🇪", country:"Germany", city:"Berlin SXF – Ryanair FR6473" },
  { from:"2020-09-22", to:"2020-09-28", flag:"🇦🇹", country:"Austria", city:"Vienna – drove from Berlin (rental car Sep 21); ÖBB D720 Wien Hbf→München Sep 28" },
  { from:"2020-09-28", to:"2020-09-29", flag:"🇩🇪", country:"Germany", city:"Munich – HI Youth Hostel" },
  { from:"2020-09-29", to:"2020-10-06", flag:"🇩🇪", country:"Germany", city:"Markdorf/Bodensee – Airbnb 'Mitten in Markdorf'" },
  { from:"2020-10-11", to:"2020-10-30", flag:"🇨🇭", country:"Switzerland", city:"Zurich – rooftop garden apartment" },
  { from:"2020-10-30", to:"2020-11-03", flag:"🇦🇹", country:"Austria", city:"Vienna – ÖBB Railjet ZRH→VIE Oct 30; ÖBB RJX 564 Wien→Innsbruck→Zürich Nov 3 11:30" },
  { from:"2020-11-03", to:"2020-12-07", flag:"🇨🇭", country:"Switzerland", city:"Zurich – ÖBB from Vienna" },
  { from:"2020-12-08", to:"2021-01-22", flag:"🇸🇨", country:"Seychelles", city:"Mahé – Le Domaine de Bacova (extended to Jan 22 2021)" },
  { from:"2021-07-15", to:"2021-07-27", flag:"🇩🇰", country:"Denmark", city:"Copenhagen – Air France KEHTV3 AF1621 TLV→CPH Jul 15" },
  { from:"2021-07-27", to:"2021-08-04", flag:"🇨🇭", country:"Switzerland", city:"Zurich – SWISS LX1267 CPH→ZRH Jul 27 09:30→11:25; SBB trains Aug 3–4" },
  { from:"2021-08-20", to:"2021-08-24", flag:"🇩🇪", country:"Germany", city:"Berlin – Kiez Burn 2021; COVID test Aug 23; Ryanair FR196 BER→BUD Aug 24" },
  { from:"2021-08-24", to:"2021-08-31", flag:"🇭🇺", country:"Hungary", city:"Budapest – Ryanair FR196 BER→BUD Aug 24; Omio 0656382873502146 Budapest Keleti→Vienna Aug 31" },
  { from:"2021-08-31", to:"2021-09-26", flag:"🇦🇹", country:"Austria", city:"Vienna – DB Bahn UUKX7C Sep 14 Berlin trip; Aegean RGUWTJ A3863+A3928 VIE→TLV Sep 26" },
  { from:"2022-01-15", to:"2022-01-26", flag:"🇦🇹", country:"Austria", city:"Vienna – Ryanair CEMR3X FR7161 VIE→TLV Jan 26 (delayed)" },
  { from:"2022-02-07", to:"2022-02-27", flag:"🇦🇹", country:"Austria", city:"Vienna – Ryanair ACU1QQ TLV→VIE Feb 7; VIE→TLV Feb 27" },
  { from:"2022-04-24", to:"2022-04-25", flag:"🇧🇪", country:"Belgium", city:"Brussels" },
  { from:"2022-04-25", to:"2022-05-05", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam – train UTAXSX Brussels→Amsterdam Apr 25" },
  { from:"2022-07-01", to:"2022-07-11", flag:"🇪🇸", country:"Spain", city:"Madrid – Air Europa UX1302 TLV→MAD Jul 1 (Travelgenio 21051308/2I7RRS)" },
  { from:"2022-07-11", to:"2022-07-21", flag:"🇩🇪", country:"Germany", city:"Berlin – Ryanair FR2528 MAD→BER Jul 11 (MBNYHM)" },
  { from:"2022-07-21", to:"2022-08-05", flag:"🇸🇪", country:"Sweden", city:"Gothenburg – FlixBus from Berlin; Austrian OS326 GOT→VIE Aug 5 (RSYGVF)" },
  { from:"2022-08-05", to:"2022-08-23", flag:"🇦🇹", country:"Austria", city:"Vienna – Austrian RSYGVF GOT→VIE Aug 5" },
  { from:"2022-08-23", to:"2022-09-06", flag:"🇺🇸", country:"United States", city:"San Francisco – Austrian 2ICQOE VIE→MUC→SFO Aug 23 (Expedia #72363530006411)" },
  { from:"2022-09-07", to:"2023-01-05", flag:"🇦🇹", country:"Austria", city:"Vienna – Austrian 2ICQOE SFO→FRA→VIE Sep 7; El Al WMCDYI LY362 VIE→TLV Jan 5 2023" },
  { from:"2023-01-19", to:"2023-01-20", flag:"🇿🇦", country:"South Africa", city:"Johannesburg – El Al SW38NB LY51 TLV→JNB Jan 19" },
  { from:"2023-01-20", to:"2023-02-04", flag:"🇿🇦", country:"South Africa", city:"Hoedspruit (Kruger area) – drove from Johannesburg Jan 20" },
  { from:"2023-02-04", to:"2023-02-05", flag:"🇿🇦", country:"South Africa", city:"Johannesburg – drove back from Hoedspruit Feb 4; El Al SW38NB LY52 JNB→TLV Feb 5" },
  { from:"2023-02-14", to:"2023-02-23", flag:"🇨🇭", country:"Switzerland", city:"Zurich – SWISS QX8G5U LX253 TLV→ZRH Feb 14; ÖBB ZRH→VIE Feb 23" },
  { from:"2023-02-23", to:"2023-03-05", flag:"🇦🇹", country:"Austria", city:"Vienna – ÖBB booking 0634 2692 5610 7558 ZRH→VIE Feb 23; Austrian OS857 VIE→TLV Mar 5" },
  { from:"2023-06-19", to:"2023-07-04", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam – Transavia HV5802 L83MMF TLV→AMS Jun 19 20:40" },
  { from:"2023-07-04", to:"2023-07-18", flag:"🇮🇪", country:"Ireland", city:"Dublin – Ryanair TKS35A FR3103 AMS→DUB Jul 4; FR6070 DUB→GOT Jul 18" },
  { from:"2023-07-18", to:"2023-08-06", flag:"🇸🇪", country:"Sweden", city:"Gothenburg – Ryanair DUB→GOT Jul 18; Airbnb Lerum Jul 31–Aug 5; Eurowings ADCIMC EW8221 GOT→BER Aug 6" },
  { from:"2023-08-06", to:"2023-08-24", flag:"🇩🇪", country:"Germany", city:"Berlin – Eurowings ADCIMC EW8221 GOT→BER Aug 6; BA SD6A5Y BA991 BER→LHR Aug 24" },
  { from:"2023-08-24", to:"2023-09-13", flag:"🇬🇧", country:"United Kingdom", city:"London – BA SD6A5Y BA991 BER→LHR Aug 24; BA286 LHR→BER Sep 13 (delayed)" },
  { from:"2023-09-13", to:"2023-09-21", flag:"🇩🇪", country:"Germany", city:"Berlin – BA SD6A5Y BA286 delayed arrival Sep 13–14; FlixBus #3107442268 BER→VIE Sep 21" },
  { from:"2023-09-21", to:"2023-09-29", flag:"🇦🇹", country:"Austria", city:"Vienna – FlixBus #3107442268 BER→VIE Sep 21; El Al MW5YK7 LY362 VIE→TLV Sep 29" },
  { from:"2023-10-10", to:"2023-10-28", flag:"🇲🇪", country:"Montenegro", city:"Tivat / Kotor / Žabljak / Budva – Israir TLV→TIV Oct 10; Austrian PQXTNC TGD→VIE Oct 28" },
  { from:"2023-10-28", to:"2023-11-01", flag:"🇦🇹", country:"Austria", city:"Vienna – Austrian PQXTNC TGD→VIE Oct 28; Wizzair NE4VTV VIE→LCA Nov 1" },
  { from:"2023-11-01", to:"2023-11-06", flag:"🇨🇾", country:"Cyprus", city:"Larnaca – Wizzair NE4VTV VIE→LCA Nov 1; booking 3368464 LCA→TLV Nov 6" },
  { from:"2023-12-31", to:"2024-05-06", flag:"🇳🇿", country:"New Zealand", city:"Auckland & NZ road trip – Etihad RADO5A TLV→AUH→PVG→AKL Dec 29; Qatar KXUTUF AKL→FRA May 6" },
  { from:"2024-05-06", to:"2024-05-08", flag:"🇩🇪", country:"Germany", city:"Frankfurt – Qatar KXUTUF AKL→FRA via DOH May 6; to France May 8" },
  { from:"2024-05-08", to:"2024-05-16", flag:"🇫🇷", country:"France", city:"WTF event May 8–13 (friend's car from Frankfurt); Normandy May 13–16" },
  { from:"2024-05-16", to:"2024-05-19", flag:"🇧🇪", country:"Belgium", city:"Brussels – arrived from Normandy May 16; FlixBus Brussels-North→London Victoria May 19" },
  { from:"2024-05-19", to:"2024-06-18", flag:"🇬🇧", country:"United Kingdom", city:"London – FlixBus Brussels→London Victoria May 19; BA RKRRI5 LHR→BER Jun 18" },
  { from:"2024-06-18", to:"2024-07-17", flag:"🇩🇪", country:"Germany", city:"Berlin – BA RKRRI5 BA0988 LHR→BER Brandenburg Jun 18; DB train 685639023511 BER→ZRH Jul 17; SWISS T5IQBS LX1254 ZRH→ARN Jul 17" },
  { from:"2024-07-17", to:"2024-08-05", flag:"🇸🇪", country:"Sweden", city:"Stockholm – SWISS T5IQBS LX1254 ZRH→ARN Jul 17 (delayed to 22:30); Ryanair CN7YPJ FR756 ARN→VIE Aug 5 08:45" },
  { from:"2024-08-05", to:"2024-08-22", flag:"🇦🇹", country:"Austria", city:"Vienna – Ryanair CN7YPJ FR756 ARN→VIE Aug 5; Austrian TTJ9SQ VIE→SFO Aug 22" },
  { from:"2024-08-22", to:"2024-09-16", flag:"🇺🇸", country:"United States", city:"San Francisco / Burning Man 2024 / Reno / Lake Tahoe – Austrian TTJ9SQ VIE→SFO Aug 22; Union Square Hotel Aug 22–24; BM Aug 25–Sep 2; Reno/Tahoe Sep 6–9; United BX9W53 SFO→YYZ Sep 16" },
  { from:"2024-09-16", to:"2024-09-23", flag:"🇨🇦", country:"Canada", city:"Toronto – United BX9W53 SFO→YYZ Sep 16; WestJet OYHCDR YYZ→YVR Sep 23" },
  { from:"2024-09-23", to:"2024-10-12", flag:"🇨🇦", country:"Canada", city:"Vancouver – WestJet OYHCDR YYZ→YVR Sep 23; Nomad Cruise 13 (Holland America 2D6QVX) sails Sep 29" },
  { from:"2024-10-13", to:"2024-11-18", flag:"🇯🇵", country:"Japan", city:"Yokohama / Tokyo / Otsu – arrived via Nomad Cruise 13; Air NZ TFV6UH NZ90 NRT→AKL departs Nov 18 18:45" },
  { from:"2024-11-19", to:"2024-12-31", flag:"🇳🇿", country:"New Zealand", city:"New Zealand – Air NZ TFV6UH NZ90 NRT→AKL arrives Nov 19 09:20" },
  { from:"2025-01-01", to:"2025-05-12", flag:"🇳🇿", country:"New Zealand", city:"Nelson · Tauranga" },
  { from:"2025-05-13", to:"2025-05-20", flag:"🇬🇧", country:"United Kingdom", city:"London Gatwick – China Eastern MU780 AKL→PVG May 12 21:00 + MU213 PVG→LGW May 13 15:00 (Trip.com 1658103318693706)" },
  { from:"2025-06-06", to:"2025-06-06", flag:"🇬🇧", country:"United Kingdom", city:"London – Loom Club" },
  { from:"2025-06-20", to:"2025-07-06", flag:"🇧🇬", country:"Bulgaria", city:"Bansko – BA XP4Z6P LHR→SOF Jun 20" },
  { from:"2025-07-07", to:"2025-07-16", flag:"🇩🇪", country:"Germany", city:"Berlin – Ryanair QQNHUS FR1149 SOF→BER Jul 7 08:30" },
  { from:"2025-07-16", to:"2025-07-27", flag:"🇸🇪", country:"Sweden", city:"Stockholm – SAS ZCM7U3 BER→ARN Jul 16" },
  { from:"2025-07-27", to:"2025-08-15", flag:"🇦🇹", country:"Austria", city:"Vienna – drove from Stockholm Jul 27; Thrive F-535358 OS207 VIE→FRA + UA59 FRA→SFO Aug 15" },
  { from:"2025-08-15", to:"2025-09-30", flag:"🇺🇸", country:"United States", city:"San Francisco / Burning Man / Reno – OS207 VIE→FRA + UA59 FRA→SFO Aug 15 (Thrive F-535358)" },
  { from:"2025-10-01", to:"2025-10-13", flag:"🇨🇦", country:"Canada", city:"Toronto / Barrie – United M7ZB4N UA2097 SFO→ORD Sep 30 + UA5293 ORD→YYZ Oct 1" },
  { from:"2025-10-14", to:"2025-10-23", flag:"🇦🇹", country:"Austria", city:"Vienna – SAS Toronto→Copenhagen Oct 13; Austrian BJELWU CPH→VIE Oct 14" },
  { from:"2025-10-26", to:"2025-10-27", flag:"🇳🇱", country:"Netherlands", city:"Dutch Decompression" },
  { from:"2025-10-29", to:"2025-11-04", flag:"🇩🇰", country:"Denmark", city:"Copenhagen" },
  { from:"2025-11-06", to:"2025-11-14", flag:"🇳🇱", country:"Netherlands", city:"Amsterdam – KLM CPH→AMS Nov 6" },
  { from:"2025-11-16", to:"2025-12-31", flag:"🇳🇿", country:"New Zealand", city:"New Zealand – Qatar 9NPLNP AMS→DOH→AKL departs Nov 14, arrives Nov 16" },
  { from:"2026-01-01", to:"2026-05-05", flag:"🇳🇿", country:"New Zealand", city:"Nelson Lakes · Kahurangi" },
  { from:"2026-05-06", to:"2026-06-08", flag:"🇨🇦", country:"Canada", city:"Toronto – Qantas FGYGAI QF3 AKL→JFK→YYZ May 6; Air Transat M7HXL4 TS122 YYZ→LGW Jun 8 22:45" },
  { from:"2026-08-05", to:"2026-08-09", flag:"🇦🇹", country:"Austria", city:"Schönburn 2026" },
  { from:"2026-08-30", to:"2026-09-07", flag:"🇺🇸", country:"United States", city:"Black Rock City – Burning Man 2026" },
];

const HOME = { flag:"🇮🇱", country:"Israel", city:"Tel Aviv" };
