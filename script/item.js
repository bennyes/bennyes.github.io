const rsr=[
    //DAGING DAGINGAN
    {
        id:1,
        nama:'rib meat',
        n_id:'daging iga',
        catg:['hewani','daging'],
        r_lvl:0,
        src:['wolf','deer','fawn','bear','boar','infected','pig'],
        cr:['berburu','menyembelih ternak'],
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway','Assyrian Hills','Camp'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:2,
        nama:'leg meat',
        n_id:'daging paha',
        catg:['hewani','daging'],
        r_lvl:0,
        src:['wolf','deer','fawn','bear','boar','cow'],
        cr:['berburu','menyembelih ternak'],
        reg:['Clear Sky Wheat Field','Fall Forest','Assyrian Hills','Camp','Levin City'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:3,
        nama:'tenderloin',
        n_id:'tenderloin',
        catg:['hewani','daging'],
        r_lvl:0,
        src:['wolf','deer','fawn','bear','boar','sheep'],
        cr:['berburu','menyembelih ternak'],
        reg:['Assyrian Hills','Camp','Levin City'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:4,
        nama:'animal entrails',
        n_id:'jeroan',
        catg:['hewani','daging'],
        r_lvl:0,
        src:['cow'],//xx
        cr:['berburu'],//xx
        reg:['Camp'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    //IKAN
    {
        id:101,
        nama:'catfish',
        n_id:'lele',
        catg:['hewani','ikan'],
        r_lvl:1,
        src:['pemancingan lv.1'],//xx
        cr:['memancing'],//xx
        reg:['semua perairan'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:102,
        nama:'grass carp',
        n_id:'karp rumput (?)',
        catg:['hewani','ikan'],
        r_lvl:1,
        src:['pemancingan lv.1'],//xx
        cr:['memancing'],//xx
        reg:['semua perairan'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:103,
        nama:'eel',
        n_id:'belut',
        catg:['hewani','ikan'],
        r_lvl:1,
        src:['pemancingan lv.1'],//xx
        cr:['memancing'],//xx
        reg:['semua perairan'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:104,
        nama:'carp',
        n_id:'karp',
        catg:['hewani','ikan'],
        r_lvl:1,
        src:['pemancingan lv.1'],//xx
        cr:['memancing'],//xx
        reg:['semua perairan'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:105,
        nama:'river crab',
        n_id:'kepiting air tawar',
        catg:['hewani','ikan'],
        r_lvl:1,
        src:['pemancingan lv.1'],//xx
        cr:['memancing'],//xx
        reg:['semua perairan'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:106,
        nama:'shrimp',
        n_id:'udang',
        catg:['hewani','ikan'],
        r_lvl:1,
        src:['pemancingan lv.1'],//xx
        cr:['memancing'],//xx
        reg:['semua perairan'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:107,
        nama:'puffer fish',
        n_id:'ikan buntal',
        catg:['hewani','ikan'],
        r_lvl:2,
        src:['pemancingan lv.2'],//xx
        cr:['memancing'],//xx
        reg:[''],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    //HEWANI NON DAGING/IKAN
    {
        id:201,
        nama:'milk',
        n_id:'susu',
        catg:['hewani non daging','hewani non ikan'],
        r_lvl:0,
        src:['cow'],
        cr:['memerah susu dari sapi di manor'],
        reg:['Camp'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:202,
        nama:'egg',
        n_id:'telur',
        catg:['hewani non daging','hewani non ikan'],
        r_lvl:0,
        src:['duck','chicken','goose'],
        cr:['beternak unggas'],
        reg:['Camp'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:203,
        nama:'honey',
        n_id:'madu',
        catg:['hewani non daging','hewani non ikan'],
        r_lvl:0,
        src:['sarang lebah (hive)'],
        cr:['menebang pohon'],
        reg:['Fall Forest','Mount Snow'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },

    //HEWANI NON PANGAN
    {
        id:301,
        nama:'bone',
        n_id:'tulang',
        catg:['hewani non pangan'],
        r_lvl:1,
        src:['wolf','deer','fawn','bear','infected'],//xx
        cr:['berburu'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway','Camp'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:302,
        nama:'hide',
        n_id:'kulit binatang',
        catg:['hewani non pangan'],
        r_lvl:1,
        src:['wolf','deer','fawn','bear','infected'],//xx
        cr:['berburu'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway','Camp'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:303,
        nama:'claw',
        n_id:'cakar',
        catg:['hewani non pangan'],
        r_lvl:2,
        src:['wolf','bear','boar','infected'],//xx
        cr:['berburu'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:304,
        nama:'beast tendon',
        n_id:'urat',
        catg:['hewani non pangan'],
        r_lvl:2,
        src:['wolf','bear','boar','infected'],//xx
        cr:['berburu'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:305,
        nama:'grease',
        n_id:'lemak hewani',
        catg:['hewani non pangan'],
        r_lvl:3,
        src:['deer','fawn','bear','wolf','infected'],//xx
        cr:['berburu'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:306,
        nama:'beast horn',
        n_id:'tanduk hewan',
        catg:['hewani non pangan'],
        r_lvl:3,
        src:['deer','fawn','bear','wolf','infected'],//xx
        cr:['berburu'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:307,
        nama:'rugged leather',
        n_id:'kulit keras/kasar',
        catg:['hewani non pangan'],
        r_lvl:3,
        src:['deer','fawn','bear','wolf','infected'],//xx
        cr:['berburu'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:308,
        nama:'beast tooth',
        n_id:'taring',
        catg:['hewani non pangan'],
        r_lvl:4,
        src:['deer','fawn','bear','wolf','infected'],//xx
        cr:['berburu'],//xx
        reg:['River Area','Levin City','Levin City Dawn District','Miska Town','Wolf-Hunting Field','Black Pearl Area'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:309,
        nama:'beast fur',
        n_id:'rambut hewan',
        catg:['hewani non pangan'],
        r_lvl:4,
        src:['deer','fawn','bear','wolf','infected'],//xx
        cr:['berburu'],//xx
        reg:['River Area','Levin City','Levin City Dawn District','Miska Town','Wolf-Hunting Field','Black Pearl Area'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:310,
        nama:'beast blood',
        n_id:'darah hewan',
        catg:['hewani non pangan'],
        r_lvl:5,
        src:['deer','fawn','bear','wolf','infected'],//xx
        cr:['berburu'],//xx
        reg:[''],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:311,
        nama:'rugged tail',
        n_id:'ekor',
        catg:['hewani non pangan'],
        r_lvl:5,
        src:['deer','fawn','bear','wolf','infected'],//xx
        cr:['berburu'],//xx
        reg:[''],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:312,
        nama:'beast hoof',
        n_id:'tapak hewan',
        catg:['hewani non pangan'],
        r_lvl:6,
        src:['deer','fawn','bear','wolf','infected'],//xx
        cr:['berburu'],//xx
        reg:[''],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:313,
        nama:'beast spine',
        n_id:'tulang belakang',
        catg:['hewani non pangan'],
        r_lvl:6,
        src:['deer','fawn','bear','wolf','infected'],//xx
        cr:['berburu'],//xx
        reg:[''],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },

    //BUAH-BUAHAN 61-76
    {
        id:401,
        nama:'berries',
        n_id:'beri',
        catg:['nabati','buah-buahan'],
        r_lvl:0,
        src:['tumbuhan berry','chest'],//xx
        cr:['mengumpulkan','buka chest','berkebun'],//xx
        reg:['semua tempat'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:402,
        nama:'strawberries',
        n_id:'stroberi',
        catg:['nabati','buah-buahan'],
        r_lvl:0,
        src:['tumbuhan stroberi'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Blade Hunter Base','Wolf-Hunting Field'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:403,
        nama:'coconut',
        n_id:'kelapa',
        catg:['nabati','buah-buahan'],
        r_lvl:0,
        src:['pohon kelapa'],//xx
        cr:['tebang pohon kelapa'],//xx
        reg:['Santopany','Storm Shelter Land (camp)'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:404,
        nama:'honeydew melon',
        n_id:'melon madu',
        catg:['nabati','buah-buahan'],
        r_lvl:0,
        src:['tumbuhan melon'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Blade Hunter Base','River Area'],//xx
        ket:[''],
        ssn:['gugur'],
        wh:[''],
    },
    {
        id:405,
        nama:'watermelon',
        n_id:'semangka',
        catg:['nabati','buah-buahan'],
        r_lvl:0,
        src:['tumbuhan melon'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Galaxy Valley','River Area'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },

     //semangka:charles central refuge
    //stroberi:sand shelter land
    //SAYURAN/PALAWIJA/JAMUR 91-
    {
        id:501,
        nama:'rapeseed',
        n_id:'rapeseed / rapa',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['tumbuhan rapeseed'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway','Assyrian Hills'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:502,
        nama:'berries',
        n_id:'beri',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['tumbuhan berry','chest'],//xx
        cr:['mengumpulkan','buka chest'],//xx
        reg:['semua tempat'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:503,
        nama:'mushroom',
        n_id:'jamur',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['jamur warna pink'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Fall Forest'],//xx
        ket:[''],
        ssn:[''],
        wh:['hujan']
    },
    {
        id:504,
        nama:'bamboo shoots',
        n_id:'rebung',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['rebung'],//xx
        cr:['mengumpulkan'],//xx
        reg:['semua tempat'],//xx
        ket:[''],
        wh:[''],
        ssn:['spring']
    },
    {
        id:505,
        nama:'cucumber',
        n_id:'timun',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['tumbuhan timun'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],
        ssn:['summer'],
        ket:[''],
        wh:[''],
        
    },
    {
        id:506,
        nama:'white radish',
        n_id:'lobak',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['tumbuhan lobak'],//xx
        cr:['mengumpulkan'],//xx
        reg:['semua tempat'],
        ssn:['winter'],
        ket:[''],
        wh:[''],
    },
    {
        id:507,
        nama:'pumpkin',
        n_id:'labu',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['tumbuhan labu'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Mount Snow','Farstar City'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:508,
        nama:'matsutake mushroom',
        n_id:'matsutake',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['jamur matsutake'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Mount Snow','Snow Highlands','Snowfield Shelter Land (camp)'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:509,
        nama:'cave mushroom',
        n_id:'jamur goa',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['jamur warna ungu muda'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Mount Snow'],
        ket:['di mulut dan dalam cave (goa)'],//xx
        ssn:[''],
        wh:[''],
    },
    {
        id:510,
        nama:'corn',
        n_id:'jagung',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['tumbuhan jagung'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Mount Apparition','Redwood Town','Wilderness Shelter Land (camp)'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:511,
        nama:'cayenne pepper',
        n_id:'cabe cayenne',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['tumbuhan cayenne pepper'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Lawrence Bay','Santopany','Mouth Town','Blaze Shelter Land (camp)'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:512,
        nama:'carrot',
        n_id:'wortel',
        catg:['nabati','sayuran','palawija','jamur'],
        r_lvl:0,
        src:['tumbuhan wortel'],//xx
        cr:['mengumpulkan'],//xx
        reg:[''],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },

    //NABATI NON PANGAN
    {
        id:601,
        nama:'wood',
        n_id:'kayu',
        catg:['nabati non pangan'],
        r_lvl:0,
        src:['pohon apa saja','chest'],//xx
        cr:['tebang pohon','buka peti','berkebun'],//xx
        reg:['semua tempat'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:602,
        nama:'twig',
        n_id:'ranting',
        catg:['nabati non pangan'],
        r_lvl:1,
        src:['hasil samping pohon','chest'],//xx
        cr:['tebang pohon','buka peti','berkebun'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:603,
        nama:'hardwood vine',
        n_id:'tumbuhan menjalar',
        catg:['nabati non pangan'],
        r_lvl:1,
        src:['pohon'],//xx
        cr:['tebang pohon'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway'],//xx
        wh:['hujan','badai salju (blizzard)'],//xx
        ket:[''],
        ssn:[''],
    },
    {
        id:604,
        nama:'hemp',
        n_id:'rami',
        catg:['nabati non pangan'],
        r_lvl:0,
        src:['tumbuhan hemp'],//xx
        cr:['mengumpulkan'],//xx
        reg:['semua tempat'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:605,
        nama:'plant root',
        n_id:'akar',
        catg:['nabati non pangan'],
        r_lvl:1,
        src:['tumbuhan hemp'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:606,
        nama:'wood core',
        n_id:'wood core (?)',
        catg:['nabati non pangan'],
        r_lvl:2,
        src:['pohon'],//xx
        cr:['tebang pohon'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:607,
        nama:'hemp stem',
        n_id:'batang hemp',
        catg:['nabati non pangan'],
        r_lvl:2,
        src:['tumbuhan hemp'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:608,
        nama:'hemp bast',
        n_id:'serat hemp',
        catg:['nabati non pangan'],
        r_lvl:2,
        src:['tumbuhan hemp'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:609,
        nama:'old cypress',
        n_id:'batang cypress tua',
        catg:['nabati non pangan'],
        r_lvl:3,
        src:['pohon'],//xx
        cr:['tebang pohon'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:610,
        nama:'cypress leaf',
        n_id:'daun cypress',
        catg:['nabati non pangan'],
        r_lvl:3,
        src:['pohon'],//xx
        cr:['tebang pohon'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:611,
        nama:'cracked tough hide',
        n_id:'?',
        catg:['nabati non pangan'],
        r_lvl:3,
        src:['pohon'],//xx
        cr:['tebang pohon'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:612,
        nama:'flax leaf',
        n_id:'daun flaks/daun rami',
        catg:['nabati non pangan'],
        r_lvl:3,
        src:['tumbuhan hemp'],//xx
        cr:['mengumpulkan hemp'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:613,
        nama:'flax petal',
        n_id:'mahkota bunga flaks',
        catg:['nabati non pangan'],
        r_lvl:3,
        src:['tumbuhan hemp'],//xx
        cr:['mengumpulkan hemp'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:614,
        nama:'kenaf leaf',
        n_id:'daun kenaf',
        catg:['nabati non pangan'],
        r_lvl:3,
        src:['tumbuhan hemp'],//xx
        cr:['mengumpulkan hemp'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:615,
        nama:'boxwood',
        n_id:'kayu balok (?)',
        catg:['nabati non pangan'],
        r_lvl:4,
        src:['pohon','chest','Tentara Scientia'],//xx
        cr:['tebang pohon'],//xx
        reg:['Mount Snow','River Area','Levin City','Levin City Dawn District','Miska Town','Wolf-Hunting Field','Black Pearl Area'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:616,
        nama:'broadleaf',
        n_id:'daun lebar (?)',
        catg:['nabati non pangan'],
        r_lvl:4,
        src:['pohon','chest'],//xx
        cr:['tebang pohon'],//xx
        reg:['River Area','Levin City','Levin City Dawn District','Miska Town','Wolf-Hunting Field','Black Pearl Area'],
        ket:['butuh cert "Logger 2"'],//xx
        ssn:[''],
        wh:[''],
    },
    {
        id:617,
        nama:'jute leaf',
        n_id:'daun yute',
        catg:['nabati non pangan'],
        r_lvl:4,
        src:['tumbuhan hemp'],//xx
        cr:['mengumpulkan hemp'],//xx
        reg:['River Area','Levin City','Levin City Dawn District','Miska Town','Wolf-Hunting Field','Black Pearl Area'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:618,
        nama:'old oak',
        n_id:'batang ek tua',
        catg:['nabati non pangan'],
        r_lvl:5,
        src:['pohon'],//xx
        cr:['tebang pohon'],//xx
        reg:['Santopany','Redwood Town','Lesins Port','Miska Town','Mount Apparition'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:619,
        nama:'birch root',
        n_id:'akar betula',
        catg:['nabati non pangan'],
        r_lvl:5,
        src:['pohon'],//xx
        cr:['tebang pohon'],//xx
        reg:['Santopany','Redwood Town','Lesins Port','Miska Town','Mount Apparition'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:619,
        nama:'sisal leaf',
        n_id:'daun sisal',
        catg:['nabati non pangan'],
        r_lvl:5,
        src:['hemp'],//xx
        cr:['mengumpulkan'],//xx
        reg:['Santopany','Redwood Town','Lesins Port','Miska Town','Mount Apparition'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    //BIBIT/BENIH
    {
        id:701,
        nama:'berry seed',
        n_id:'biji beri',
        catg:['bibit','biji','benih'],
        r_lvl:1,
        src:['tumbuhan beri'],//xx
        cr:['mengumpulkan beri'],//xx
        reg:['semua tempat'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:702,
        nama:'sapling',
        n_id:'bibit pohon',
        catg:['bibit','biji','benih'],
        r_lvl:1,
        src:['pohon'],//xx
        cr:['tebang pohon'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway'],//xx
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:703,
        nama:'oak seedling',
        n_id:'benih pohon ek',
        catg:['bibit','biji','benih'],
        r_lvl:2,
        src:['pohon'],//xx
        cr:['tebang pohon lv. 1'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:704,
        nama:'castor seed',
        n_id:'biji jarak',
        catg:['bibit','biji','benih'],
        r_lvl:2,
        src:['hemp'],//xx
        cr:['mengumpulkan hemp lv. 2'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:705,
        nama:'ginkgo seedling',
        n_id:'benih ginkgo',
        catg:['bibit','biji','benih'],
        r_lvl:3,
        src:['pohon'],//xx
        cr:['tebang pohon lv. 3'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },

    
    //HASIL tumbuhan DARI BERKEBUN DI HALAMAN manor
    {
        id:801,
        nama:'little branch',
        n_id:'dahan kecil',
        catg:['kebun manor'],
        r_lvl:2,
        src:['pohon oak'],//xx
        cr:['menanam oak seedling dan menebangnya di halaman manor'],//xx
        reg:['camp'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:802,
        nama:'tree oil',
        n_id:'minyak pohon',
        catg:['kebun manor'],
        r_lvl:3,
        src:['pohon ginkgo'],//xx
        cr:['menanam ginkgo seedling dan menebangnya di halaman manor'],//xx
        reg:['camp'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    //BAHAN PANGAN
    {
        id:901,
        nama:'cooking oil',
        n_id:'minyak goreng',
        catg:['bahan pangan','sembako'],
        r_lvl:0,
        src:['Lafita','Pedagang di Hope 101'],//xx
        cr:['beli'],//xx
        reg:['camp','Hope 101'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:902,
        nama:'sauce',
        n_id:'saus',
        catg:['bahan pangan'],
        r_lvl:0,
        src:['Lafita','Pedagang di Hope 101'],//xx
        cr:['beli'],//xx
        reg:['camp','Hope 101'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:903,
        nama:'leek, ginger, and garlic',
        n_id:'daun bawang/bawang prei, jahe, dan bawang putih',
        catg:['bahan pangan'],
        r_lvl:0,
        src:['Lafita','Pedagang di Hope 101'],//xx
        cr:['beli'],//xx
        reg:['camp','Hope 101'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:904,
        nama:'seasoning',
        n_id:'bumbu/rempah-rempah',
        catg:['bahan pangan'],
        r_lvl:0,
        src:['Lafita','Pedagang di Hope 101'],//xx
        cr:['beli'],//xx
        reg:['camp','Hope 101'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:905,
        nama:'sugar',
        n_id:'gula',
        catg:['bahan pangan','sembako'],
        r_lvl:0,
        src:['Lafita','Pedagang di Hope 101'],//xx
        cr:['beli'],//xx
        reg:['camp','Hope 101'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:906,
        nama:'tofu',
        n_id:'tahu',
        catg:['bahan pangan'],
        r_lvl:0,
        src:['Lafita','Pedagang di Hope 101'],//xx
        cr:['beli'],//xx
        reg:['camp','Hope 101'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:907,
        nama:'vermicelli',
        n_id:'bihun',
        catg:['bahan pangan'],
        r_lvl:0,
        src:['Lafita','Pedagang di Hope 101'],//xx
        cr:['beli'],//xx
        reg:['camp','Hope 101'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:908,
        nama:'ice cubes',
        n_id:'es batu',
        catg:['bahan pangan'],
        r_lvl:0,
        src:['Lafita','bebatuan di area dingin/beku'],//xx
        cr:['beli','menambang bebatuan di area dingin/beku'],//xx
        reg:['camp','Hope 101','Mount Snow','Utz Mine','Snow Highlands','Polar Tjaele'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    //PERLENGKAPAN BERKEBUN
    {
        id:1001,
        nama:'feces fertilizer',
        n_id:'pupuk kandang/pupuk kotoran',
        catg:['perlengkapan berkebun'],
        r_lvl:0,
        src:['toilet'],//xx
        cr:['BAB di toilet manor'],//xx
        reg:['camp'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1002,
        nama:'common fertilizer',
        n_id:'pupuk biasa',
        catg:['perlengkapan berkebun'],
        r_lvl:0,
        src:['chest'],//xx
        cr:['buka chest'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway','Assyrian Hills'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1003,
        nama:'advanced fertilizer',
        n_id:'pupuk bagus',
        catg:['perlengkapan berkebun'],
        r_lvl:0,
        src:['buat sendiri','beli'],//xx
        cr:['buat sendiri','beli di Hope 101 atau trade city'],//xx
        reg:['camp','Hope 101'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    //HASIL TAMBANG
    {
        id:1101,
        nama:'stone',
        n_id:'batu',
        catg:['hasil tambang'],
        r_lvl:0,
        src:['bebatuan','chest'],//xx
        cr:['menambang bebatuan lv. berapapun','buka chest','ekstraksi di tambang halaman manor'],//xx
        reg:['semua tempat'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1102,
        nama:'iron ore',
        n_id:'bijih besi',
        catg:['hasil tambang'],
        r_lvl:1,
        src:['bebatuan'],//xx
        cr:['menambang bebatuan lv. 1','ekstraksi di tambang halaman manor (cast iron drill bit)'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway','camp'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1103,
        nama:'flint',
        n_id:'rijang',
        catg:['hasil tambang'],
        r_lvl:1,
        src:['bebatuan'],//xx
        cr:['menambang bebatuan lv. 1'],//xx
        reg:['Clear Sky Wheat Field','Fall Forest','Summer Rain Highway'],
        wh:['tidak hujan'],
        ket:[''],
        ssn:[''],
    },
    {
        id:1104,
        nama:'tin ore',
        n_id:'bijih timah',
        catg:['hasil tambang'],
        r_lvl:2,
        src:['bebatuan'],//xx
        cr:['menambang bebatuan lv. 2'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1105,
        nama:'sulfur',
        n_id:'belerang',
        catg:['hasil tambang'],
        r_lvl:2,
        src:['bebatuan'],//xx
        cr:['menambang bebatuan lv. 2'],//xx
        reg:['Assyrian Hills','Blade Hunter Base'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1106,
        nama:'aluminum ore',
        n_id:'bijih aluminium / bauksit',
        catg:['hasil tambang'],
        r_lvl:3,
        src:['bebatuan'],//xx
        cr:['menambang bebatuan lv. 3'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1107,
        nama:'malachite',
        n_id:'malasit',
        catg:['hasil tambang'],
        r_lvl:3,
        src:['bebatuan'],//xx
        cr:['menambang bebatuan lv. 3'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1108,
        nama:'kyanite',
        n_id:'kyanit',
        catg:['hasil tambang'],
        r_lvl:3,
        src:['bebatuan'],//xx
        cr:['menambang bebatuan lv. 3'],//xx
        reg:['Galaxy Valley','Mount Snow','Snow Highlands','Utz Mine','Polar Tjaele'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1109,
        nama:'copper ore',
        n_id:'bijih tembaga (kemungkinan kalkopirit)',
        catg:['hasil tambang'],
        r_lvl:4,
        src:['bebatuan','chest'],//xx
        cr:['menambang bebatuan lv. 4','buka chest'],//xx
        reg:['River Area','Levin City','Levin City Dawn District','Miska Town','Wolf-Hunting Field','Black Pearl Area'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1110,
        nama:'silicon',
        n_id:'silikon',
        catg:['hasil tambang'],
        r_lvl:4,
        src:['bebatuan'],//xx
        cr:['menambang bebatuan lv. 4 &#8211; Enriched)'],//xx
        reg:['River Area','Levin City','Levin City Dawn District','Miska Town','Wolf-Hunting Field','Black Pearl Area'],
        ket:['butuh cert "Miner 3"'],
        ssn:[''],
        wh:[''],
    },
    {
        id:1111,
        nama:'silver ore',
        n_id:'bijih perak (akantit/argentit)',
        catg:['hasil tambang'],
        r_lvl:5,
        src:['bebatuan'],//xx
        cr:['menambang bebatuan lv. 5'],//xx
        reg:['Santopany','Redwood Town','Lesins Port','Miska Town','Mount Apparition'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },

    //HASIL TAMBANG DI HALAMAN manor
    {
        id:1201,
        nama:'potassium nitrate',
        n_id:'kalium nitrat',
        catg:['hasil tambang manor'],
        r_lvl:2,
        src:['bebatuan'],//xx
        cr:['ekstraksi di tambang halaman manor (alloy drill bit)'],//xx
        reg:['camp'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },

    //PERLENGKAPAN PERTAMBANGAN
    {
        id:1301,
        nama:'cast iron drill bit',
        n_id:'mata bor dari besi tuang',
        catg:['perlengkapan tambang'],
        r_lvl:1,
        src:['chest'],//xx
        cr:['buka chest'],//xx
        reg:['Fall Forest'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1302,
        nama:'alloy drill bit',
        n_id:'mata bor dari logam campuran',
        catg:['perlengkapan tambang'],
        r_lvl:2,
        src:['chest'],//xx
        cr:['buka chest'],//xx
        reg:['Blade Hunter Base'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1303,
        nama:'diamond drill bit',
        n_id:'mata bor dari permata',
        catg:['perlengkapan tambang'],
        r_lvl:4,
        src:['chest'],//xx
        cr:['buka chest'],//xx
        reg:['Levin City'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1304,
        nama:'carbon steel drill',
        n_id:'bor baja',
        catg:['perlengkapan tambang'],
        r_lvl:0,
        src:['Tex Brandon'],//xx
        cr:['beli dari Tex Brandon'],//xx
        reg:['camp'],
        ket:['butuh cert "Mining Expert"'],
        ssn:[''],
        wh:[''],
    },
    {
        id:1305,
        nama:'drill engine oil',
        n_id:'oli bor',
        catg:['perlengkapan tambang'],
        r_lvl:1,
        src:['chest'],//xx
        cr:['buka chest','Tentara Scientia'],//xx
        reg:['Fall Forest','Mount Snow'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },

    //PERLENGKAPAN BANGUNAN, ARMOR, DAN SENJATA
    {
        id:1401,
        nama:'lime',
        n_id:'kapur',
        catg:['bahan bangunan','bahan armor','bahan senjata'],
        r_lvl:0,
        src:['toko furnitur'],//xx
        cr:['beli'],//xx
        reg:['Hope 101','trade city'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1402,
        nama:'sandstone',
        n_id:'batu pasir',
        catg:['bahan bangunan','bahan armor','bahan senjata'],
        r_lvl:0,
        src:['toko furnitur'],//xx
        cr:['beli'],//xx
        reg:['Hope 101','camp','trade city'],
        ket:[''],
        ssn:[''],
        wh:[''],
    },
    {
        id:1403,
        nama:'granite',
        n_id:'granit',
        catg:['bahan bangunan','bahan armor','bahan senjata'],
        r_lvl:0,
        src:['toko furnitur'],//xx
        cr:['beli'],//xx
        reg:['Hope 101','camp','trade city'],
        ket:['jika ingin beli di camp, camp sudah harus masuk Agricultural period.'],
        ssn:[''],
        wh:[''],
    },


]