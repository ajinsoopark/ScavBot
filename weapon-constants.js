const guns = {
  MP7A2: {
    name: 'HK MP7A2 4.6x30 submachinegun',
    ammo: '**[Subsonic SX] [AP SX]**: 4.6x30mm HK',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/KaKQAjA&sa=D&ust=1579999495700000&usg=AFQjCNETPIHytuf6MoBPmnZ94k1RwnTL2w',
  },
  'AKS-74N': {
    name: 'AKS-74N 5.45x39 assault rifle',
    ammo: '**[BT (Tracer)] [BS] [7n39]**: 5.45x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/Gkhv8IE&sa=D&ust=1579999495701000&usg=AFQjCNGIPCWPrssNGPydqIhyU2mWDiYvNw',
  },
  'AK-74M': {
    name: 'AK-74M 5.45x39 assault rifle',
    ammo: '**[BT (Tracer)] [BS] [7n39]**: 5.45x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/U2ztyhj&sa=D&ust=1579999495701000&usg=AFQjCNGyCmB6HSd3ogG5QKMojKeY3404pw',
  },
  'AK-105': {
    name: 'AK-105 5.45x39 assault rifle',
    ammo: '**[BT (Tracer)] [BS] [7n39]**: 5.45x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/n2wjDeZ&sa=D&ust=1579999495702000&usg=AFQjCNF4883vi1p1PuPUaslrfCKpWVLc6Q',
  },
  'RPK-16': {
    name: 'RPK-16 5.45x39 light machine gun',
    ammo: '**[BT (Tracer)] [BS] [7n39]**: 5.45x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/Lay5zLq&sa=D&ust=1579999495703000&usg=AFQjCNF-WVhzQMOt9LhZOy3vFf9l9hK56w',
  },
  HK: {
    name: 'HK 416A5 5.56x45 Assault Rifle',
    ammo: '**[M856A1] [M995]**: 5.56x45mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/N7bpBVs&sa=D&ust=1579999495704000&usg=AFQjCNEw_0hYvMUHOq5RSZreWbXFz8wVFQ',
  },
  MDR: {
    name: 'DT MDR 5.56x45 Assault Rifle',
    ammo: '**[M856A1] [M995]**: 5.56x45mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/sAm70k1&sa=D&ust=1579999495704000&usg=AFQjCNEdes6YsNA8w5cfMZVpM46pCTbWHg',
  },
  M4: {
    name: 'Colt M4A1 5.56x45 Assault Rifle',
    ammo: '**[M856A1] [M995]**: 5.56x45mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/k0ce1OA&sa=D&ust=1579999495704000&usg=AFQjCNFeJtLlMDLwu6rn5_7qrBigY095Pg',
  },
  LoneStar: {
    name: 'Lone Star TX-15 DML Rifle',
    ammo: '**[M856A1] [M995]**: 5.56x45mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/QTgnrlA&sa=D&ust=1579999495705000&usg=AFQjCNFiBLSa_yHcFYcJdO2bedF77u0wVg',
  },
  'AK-103': {
    name: 'AK-103 7.62x39 assault rifle',
    ammo: '**[PS] [BP]**: 7.62x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/T0SDicl&sa=D&ust=1579999495705000&usg=AFQjCNHIivTbOj7ZPkonCCfe-l2UZryyGw',
  },
  'AK-104': {
    name: 'AK-104 7.62x39 assault rifle',
    ammo: '**[PS] [BP]**: 7.62x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/RaARsOT&sa=D&ust=1579999495705000&usg=AFQjCNGITOzJAb37lWyFigRIoKoynT1utg',
  },
  AKMN: {
    name: 'AKMN 7.62x39 assault rifle',
    ammo: '**[PS] [BP]**: 7.62x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/ntz6877&sa=D&ust=1579999495706000&usg=AFQjCNE6C5kh113zkRvXO8PDU288gKOijg',
  },
  AKMS: {
    name: 'AKMS 7.62x39 assault rifle',
    ammo: '**[PS] [BP]**: 7.62x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/e2w2BeK&sa=D&ust=1579999495706000&usg=AFQjCNE4MuGeL82MCdvSZmgFskl-OAawzw',
  },
  SKS: {
    name: 'Simonov Semi-Automatic Carbine SKS 7.62x39',
    ammo: '**[PS] [BP]**: 7.62x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/tj0cTuZ&sa=D&ust=1579999495707000&usg=AFQjCNGFBjmJrwNMn-hmvA4mwnqs3fSfew',
  },
  'OP-SKS': {
    name: 'Simonov Semi-Automatic Carbine SKS 7.62x39 Hunting Rifle Version',
    ammo: '**[PS] [BP]**: 7.62x39mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/cIBdSj0&sa=D&ust=1579999495707000&usg=AFQjCNHNPLkEhlRb731c9LpaZz37HjFqag',
  },
  'SA-58': {
    name: 'DS Arms SA-58 7.62x51',
    ammo: '**[M80] [M62] [M61]**: 7.62x51mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/I9UkQJR&sa=D&ust=1579999495708000&usg=AFQjCNF3YUlh6MkdIoQqdcqFW4XZ6D352w',
  },
  M1A: {
    name: 'Springfield Armory M1A 7.62x51',
    ammo: '**[M80] [M62] [M61]**: 7.62x51mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/5eEjP4C&sa=D&ust=1579999495708000&usg=AFQjCNFqeUgW2Up1m70dy5MjC8SZEa9XPw',
  },
  RSASS: {
    name: 'Remington R11 RSASS 7.62x51',
    ammo: '**[M80] [M62] [M61]**: 7.62x51mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/TJQjjYR&sa=D&ust=1579999495708000&usg=AFQjCNHP0qw3Ud4p_2iFp7Ji7mkOy4d0Yw',
  },
  M700: {
    name: 'Remington Model 700 Sniper rifle',
    ammo: '**[M80] [M62] [M61]**: 7.62x51mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/Cr2Ommj&sa=D&ust=1579999495709000&usg=AFQjCNEYhU2Rw5rpbym_jygUXV0GXygVLw',
  },
  'MDR-7.62x51': {
    name: 'DT MDR 7.62x51 Assault Rifle',
    ammo: '**[M80] [M62] [M61]**: 7.62x51mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://i.imgur.com/DssE8he.png&sa=D&ust=1579999495709000&usg=AFQjCNH0jzB0L-j1gI_4MRs0Dmye0Z_Z0g',
  },
  'SR-25': {
    name: 'Knights Armament Company SR-25 7.62x51',
    ammo: '**[M80] [M62] [M61]**: 7.62x51mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/7VFBCN2&sa=D&ust=1579999495709000&usg=AFQjCNGc4muKagw41MhrtcdIoTPrwPhlYg',
  },
  SVDS: {
    name: 'SVDS 7.62x54 Sniper rifle',
    ammo: '**[7N1] [7BT1] [SNB] [7n37]**: 7.62x54mmR',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/7y4CGtf&sa=D&ust=1579999495710000&usg=AFQjCNEB2bp-qawPaWMvbK_oi2mc5rW-6g',
  },
  'SV-98': {
    name: 'SV-98 bolt-action sniper rifle',
    ammo: '**[7N1] [7BT1] [SNB] [7n37]**: 7.62x54mmR',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/rAvYIcc&sa=D&ust=1579999495710000&usg=AFQjCNFzBDgKkc7qbg2lswLvhVnxVhBH1g',
  },
  MPX: {
    name: 'SIG MPX 9x19 Submachine gun',
    ammo: '**[AP 6.3]**: 9x19mm',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/vMwEKYZ&sa=D&ust=1579999495714000&usg=AFQjCNESB2VU-k-idgudp3zZvj1uGaQ1kQ',
  },
  P90: {
    name: 'FN P90 5.7x28 submachinegun',
    ammo: '**[sb193]**: 5.7x28mm FN',
    'recoil-loadout': 'https://www.google.com/url?q=https://imgur.com/ggTKOF6&sa=D&ust=1579999495719000&usg=AFQjCNFRDu3wfeMwpxBo09oohk9UC0PCrA',
  },
};

module.exports = {
  guns,
};
