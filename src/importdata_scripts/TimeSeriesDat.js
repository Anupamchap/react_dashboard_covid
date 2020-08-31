const firebase = require('firebase');

// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCbEtwwMgAaiSFfCVPJLRIBvoVMxRhfUxw',
  authDomain: 'covidtracker-300b6.firebaseapp.com',
  projectId: 'covidtracker-300b6'
});

const db = firebase.firestore();

const caseTimeSeries = [
  {
    dailyconfirmed: '1',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '30 January ',
    totalconfirmed: '1',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '31 January ',
    totalconfirmed: '1',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '01 February ',
    totalconfirmed: '1',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '1',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '02 February ',
    totalconfirmed: '2',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '1',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '03 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '04 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '05 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '06 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '07 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '08 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '09 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '10 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '11 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '12 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '0'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '1',
    date: '13 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '1'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '14 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '1'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '15 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '1'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '1',
    date: '16 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '2'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '17 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '2'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '18 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '2'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '19 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '2'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '1',
    date: '20 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '21 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '22 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '23 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '24 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '25 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '26 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '27 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '28 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '29 February ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '0',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '01 March ',
    totalconfirmed: '3',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '2',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '02 March ',
    totalconfirmed: '5',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '1',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '03 March ',
    totalconfirmed: '6',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '22',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '04 March ',
    totalconfirmed: '28',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '2',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '05 March ',
    totalconfirmed: '30',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '1',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '06 March ',
    totalconfirmed: '31',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '3',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '07 March ',
    totalconfirmed: '34',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '5',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '08 March ',
    totalconfirmed: '39',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '9',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '09 March ',
    totalconfirmed: '48',
    totaldeceased: '0',
    totalrecovered: '3'
  },
  {
    dailyconfirmed: '15',
    dailydeceased: '0',
    dailyrecovered: '1',
    date: '10 March ',
    totalconfirmed: '63',
    totaldeceased: '0',
    totalrecovered: '4'
  },
  {
    dailyconfirmed: '8',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '11 March ',
    totalconfirmed: '71',
    totaldeceased: '0',
    totalrecovered: '4'
  },
  {
    dailyconfirmed: '10',
    dailydeceased: '1',
    dailyrecovered: '0',
    date: '12 March ',
    totalconfirmed: '81',
    totaldeceased: '1',
    totalrecovered: '4'
  },
  {
    dailyconfirmed: '10',
    dailydeceased: '0',
    dailyrecovered: '6',
    date: '13 March ',
    totalconfirmed: '91',
    totaldeceased: '1',
    totalrecovered: '10'
  },
  {
    dailyconfirmed: '11',
    dailydeceased: '1',
    dailyrecovered: '0',
    date: '14 March ',
    totalconfirmed: '102',
    totaldeceased: '2',
    totalrecovered: '10'
  },
  {
    dailyconfirmed: '10',
    dailydeceased: '0',
    dailyrecovered: '3',
    date: '15 March ',
    totalconfirmed: '112',
    totaldeceased: '2',
    totalrecovered: '13'
  },
  {
    dailyconfirmed: '14',
    dailydeceased: '0',
    dailyrecovered: '1',
    date: '16 March ',
    totalconfirmed: '126',
    totaldeceased: '2',
    totalrecovered: '14'
  },
  {
    dailyconfirmed: '20',
    dailydeceased: '1',
    dailyrecovered: '1',
    date: '17 March ',
    totalconfirmed: '146',
    totaldeceased: '3',
    totalrecovered: '15'
  },
  {
    dailyconfirmed: '25',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '18 March ',
    totalconfirmed: '171',
    totaldeceased: '3',
    totalrecovered: '15'
  },
  {
    dailyconfirmed: '27',
    dailydeceased: '1',
    dailyrecovered: '5',
    date: '19 March ',
    totalconfirmed: '198',
    totaldeceased: '4',
    totalrecovered: '20'
  },
  {
    dailyconfirmed: '58',
    dailydeceased: '0',
    dailyrecovered: '3',
    date: '20 March ',
    totalconfirmed: '256',
    totaldeceased: '4',
    totalrecovered: '23'
  },
  {
    dailyconfirmed: '78',
    dailydeceased: '0',
    dailyrecovered: '0',
    date: '21 March ',
    totalconfirmed: '334',
    totaldeceased: '4',
    totalrecovered: '23'
  },
  {
    dailyconfirmed: '69',
    dailydeceased: '3',
    dailyrecovered: '0',
    date: '22 March ',
    totalconfirmed: '403',
    totaldeceased: '7',
    totalrecovered: '23'
  },
  {
    dailyconfirmed: '94',
    dailydeceased: '2',
    dailyrecovered: '2',
    date: '23 March ',
    totalconfirmed: '497',
    totaldeceased: '9',
    totalrecovered: '25'
  },
  {
    dailyconfirmed: '74',
    dailydeceased: '1',
    dailyrecovered: '15',
    date: '24 March ',
    totalconfirmed: '571',
    totaldeceased: '10',
    totalrecovered: '40'
  },
  {
    dailyconfirmed: '86',
    dailydeceased: '1',
    dailyrecovered: '3',
    date: '25 March ',
    totalconfirmed: '657',
    totaldeceased: '11',
    totalrecovered: '43'
  },
  {
    dailyconfirmed: '73',
    dailydeceased: '5',
    dailyrecovered: '7',
    date: '26 March ',
    totalconfirmed: '730',
    totaldeceased: '16',
    totalrecovered: '50'
  },
  {
    dailyconfirmed: '153',
    dailydeceased: '3',
    dailyrecovered: '25',
    date: '27 March ',
    totalconfirmed: '883',
    totaldeceased: '19',
    totalrecovered: '75'
  },
  {
    dailyconfirmed: '136',
    dailydeceased: '5',
    dailyrecovered: '10',
    date: '28 March ',
    totalconfirmed: '1019',
    totaldeceased: '24',
    totalrecovered: '85'
  },
  {
    dailyconfirmed: '120',
    dailydeceased: '3',
    dailyrecovered: '17',
    date: '29 March ',
    totalconfirmed: '1139',
    totaldeceased: '27',
    totalrecovered: '102'
  },
  {
    dailyconfirmed: '187',
    dailydeceased: '14',
    dailyrecovered: '35',
    date: '30 March ',
    totalconfirmed: '1326',
    totaldeceased: '41',
    totalrecovered: '137'
  },
  {
    dailyconfirmed: '309',
    dailydeceased: '6',
    dailyrecovered: '13',
    date: '31 March ',
    totalconfirmed: '1635',
    totaldeceased: '47',
    totalrecovered: '150'
  },
  {
    dailyconfirmed: '424',
    dailydeceased: '6',
    dailyrecovered: '19',
    date: '01 April ',
    totalconfirmed: '2059',
    totaldeceased: '53',
    totalrecovered: '169'
  },
  {
    dailyconfirmed: '486',
    dailydeceased: '16',
    dailyrecovered: '22',
    date: '02 April ',
    totalconfirmed: '2545',
    totaldeceased: '69',
    totalrecovered: '191'
  },
  {
    dailyconfirmed: '560',
    dailydeceased: '14',
    dailyrecovered: '39',
    date: '03 April ',
    totalconfirmed: '3105',
    totaldeceased: '83',
    totalrecovered: '230'
  },
  {
    dailyconfirmed: '579',
    dailydeceased: '13',
    dailyrecovered: '56',
    date: '04 April ',
    totalconfirmed: '3684',
    totaldeceased: '96',
    totalrecovered: '286'
  },
  {
    dailyconfirmed: '609',
    dailydeceased: '22',
    dailyrecovered: '43',
    date: '05 April ',
    totalconfirmed: '4293',
    totaldeceased: '118',
    totalrecovered: '329'
  },
  {
    dailyconfirmed: '484',
    dailydeceased: '16',
    dailyrecovered: '65',
    date: '06 April ',
    totalconfirmed: '4777',
    totaldeceased: '134',
    totalrecovered: '394'
  },
  {
    dailyconfirmed: '573',
    dailydeceased: '27',
    dailyrecovered: '75',
    date: '07 April ',
    totalconfirmed: '5350',
    totaldeceased: '161',
    totalrecovered: '469'
  },
  {
    dailyconfirmed: '565',
    dailydeceased: '20',
    dailyrecovered: '96',
    date: '08 April ',
    totalconfirmed: '5915',
    totaldeceased: '181',
    totalrecovered: '565'
  },
  {
    dailyconfirmed: '813',
    dailydeceased: '46',
    dailyrecovered: '70',
    date: '09 April ',
    totalconfirmed: '6728',
    totaldeceased: '227',
    totalrecovered: '635'
  },
  {
    dailyconfirmed: '871',
    dailydeceased: '22',
    dailyrecovered: '151',
    date: '10 April ',
    totalconfirmed: '7599',
    totaldeceased: '249',
    totalrecovered: '786'
  },
  {
    dailyconfirmed: '854',
    dailydeceased: '41',
    dailyrecovered: '186',
    date: '11 April ',
    totalconfirmed: '8453',
    totaldeceased: '290',
    totalrecovered: '972'
  },
  {
    dailyconfirmed: '758',
    dailydeceased: '42',
    dailyrecovered: '114',
    date: '12 April ',
    totalconfirmed: '9211',
    totaldeceased: '332',
    totalrecovered: '1086'
  },
  {
    dailyconfirmed: '1243',
    dailydeceased: '27',
    dailyrecovered: '112',
    date: '13 April ',
    totalconfirmed: '10454',
    totaldeceased: '359',
    totalrecovered: '1198'
  },
  {
    dailyconfirmed: '1031',
    dailydeceased: '37',
    dailyrecovered: '167',
    date: '14 April ',
    totalconfirmed: '11485',
    totaldeceased: '396',
    totalrecovered: '1365'
  },
  {
    dailyconfirmed: '886',
    dailydeceased: '27',
    dailyrecovered: '144',
    date: '15 April ',
    totalconfirmed: '12371',
    totaldeceased: '423',
    totalrecovered: '1509'
  },
  {
    dailyconfirmed: '1061',
    dailydeceased: '26',
    dailyrecovered: '258',
    date: '16 April ',
    totalconfirmed: '13432',
    totaldeceased: '449',
    totalrecovered: '1767'
  },
  {
    dailyconfirmed: '922',
    dailydeceased: '38',
    dailyrecovered: '273',
    date: '17 April ',
    totalconfirmed: '14354',
    totaldeceased: '487',
    totalrecovered: '2040'
  },
  {
    dailyconfirmed: '1371',
    dailydeceased: '35',
    dailyrecovered: '426',
    date: '18 April ',
    totalconfirmed: '15725',
    totaldeceased: '522',
    totalrecovered: '2466'
  },
  {
    dailyconfirmed: '1580',
    dailydeceased: '38',
    dailyrecovered: '388',
    date: '19 April ',
    totalconfirmed: '17305',
    totaldeceased: '560',
    totalrecovered: '2854'
  },
  {
    dailyconfirmed: '1239',
    dailydeceased: '33',
    dailyrecovered: '419',
    date: '20 April ',
    totalconfirmed: '18544',
    totaldeceased: '593',
    totalrecovered: '3273'
  },
  {
    dailyconfirmed: '1537',
    dailydeceased: '53',
    dailyrecovered: '703',
    date: '21 April ',
    totalconfirmed: '20081',
    totaldeceased: '646',
    totalrecovered: '3976'
  },
  {
    dailyconfirmed: '1292',
    dailydeceased: '36',
    dailyrecovered: '394',
    date: '22 April ',
    totalconfirmed: '21373',
    totaldeceased: '682',
    totalrecovered: '4370'
  },
  {
    dailyconfirmed: '1667',
    dailydeceased: '40',
    dailyrecovered: '642',
    date: '23 April ',
    totalconfirmed: '23040',
    totaldeceased: '722',
    totalrecovered: '5012'
  },
  {
    dailyconfirmed: '1408',
    dailydeceased: '59',
    dailyrecovered: '484',
    date: '24 April ',
    totalconfirmed: '24448',
    totaldeceased: '781',
    totalrecovered: '5496'
  },
  {
    dailyconfirmed: '1835',
    dailydeceased: '44',
    dailyrecovered: '442',
    date: '25 April ',
    totalconfirmed: '26283',
    totaldeceased: '825',
    totalrecovered: '5938'
  },
  {
    dailyconfirmed: '1607',
    dailydeceased: '56',
    dailyrecovered: '585',
    date: '26 April ',
    totalconfirmed: '27890',
    totaldeceased: '881',
    totalrecovered: '6523'
  },
  {
    dailyconfirmed: '1568',
    dailydeceased: '58',
    dailyrecovered: '580',
    date: '27 April ',
    totalconfirmed: '29458',
    totaldeceased: '939',
    totalrecovered: '7103'
  },
  {
    dailyconfirmed: '1902',
    dailydeceased: '69',
    dailyrecovered: '636',
    date: '28 April ',
    totalconfirmed: '31360',
    totaldeceased: '1008',
    totalrecovered: '7739'
  },
  {
    dailyconfirmed: '1705',
    dailydeceased: '71',
    dailyrecovered: '690',
    date: '29 April ',
    totalconfirmed: '33065',
    totaldeceased: '1079',
    totalrecovered: '8429'
  },
  {
    dailyconfirmed: '1801',
    dailydeceased: '75',
    dailyrecovered: '630',
    date: '30 April ',
    totalconfirmed: '34866',
    totaldeceased: '1154',
    totalrecovered: '9059'
  },
  {
    dailyconfirmed: '2396',
    dailydeceased: '77',
    dailyrecovered: '962',
    date: '01 May ',
    totalconfirmed: '37262',
    totaldeceased: '1231',
    totalrecovered: '10021'
  },
  {
    dailyconfirmed: '2564',
    dailydeceased: '92',
    dailyrecovered: '831',
    date: '02 May ',
    totalconfirmed: '39826',
    totaldeceased: '1323',
    totalrecovered: '10852'
  },
  {
    dailyconfirmed: '2952',
    dailydeceased: '140',
    dailyrecovered: '911',
    date: '03 May ',
    totalconfirmed: '42778',
    totaldeceased: '1463',
    totalrecovered: '11763'
  },
  {
    dailyconfirmed: '3656',
    dailydeceased: '103',
    dailyrecovered: '1082',
    date: '04 May ',
    totalconfirmed: '46434',
    totaldeceased: '1566',
    totalrecovered: '12845'
  },
  {
    dailyconfirmed: '2971',
    dailydeceased: '128',
    dailyrecovered: '1295',
    date: '05 May ',
    totalconfirmed: '49405',
    totaldeceased: '1694',
    totalrecovered: '14140'
  },
  {
    dailyconfirmed: '3602',
    dailydeceased: '91',
    dailyrecovered: '1161',
    date: '06 May ',
    totalconfirmed: '53007',
    totaldeceased: '1785',
    totalrecovered: '15301'
  },
  {
    dailyconfirmed: '3344',
    dailydeceased: '104',
    dailyrecovered: '1475',
    date: '07 May ',
    totalconfirmed: '56351',
    totaldeceased: '1889',
    totalrecovered: '16776'
  },
  {
    dailyconfirmed: '3339',
    dailydeceased: '97',
    dailyrecovered: '1111',
    date: '08 May ',
    totalconfirmed: '59690',
    totaldeceased: '1986',
    totalrecovered: '17887'
  },
  {
    dailyconfirmed: '3175',
    dailydeceased: '115',
    dailyrecovered: '1414',
    date: '09 May ',
    totalconfirmed: '62865',
    totaldeceased: '2101',
    totalrecovered: '19301'
  },
  {
    dailyconfirmed: '4311',
    dailydeceased: '112',
    dailyrecovered: '1669',
    date: '10 May ',
    totalconfirmed: '67176',
    totaldeceased: '2213',
    totalrecovered: '20970'
  },
  {
    dailyconfirmed: '3592',
    dailydeceased: '81',
    dailyrecovered: '1579',
    date: '11 May ',
    totalconfirmed: '70768',
    totaldeceased: '2294',
    totalrecovered: '22549'
  },
  {
    dailyconfirmed: '3562',
    dailydeceased: '120',
    dailyrecovered: '1905',
    date: '12 May ',
    totalconfirmed: '74330',
    totaldeceased: '2414',
    totalrecovered: '24454'
  },
  {
    dailyconfirmed: '3726',
    dailydeceased: '137',
    dailyrecovered: '1963',
    date: '13 May ',
    totalconfirmed: '78056',
    totaldeceased: '2551',
    totalrecovered: '26417'
  },
  {
    dailyconfirmed: '3991',
    dailydeceased: '97',
    dailyrecovered: '1594',
    date: '14 May ',
    totalconfirmed: '82047',
    totaldeceased: '2648',
    totalrecovered: '28011'
  },
  {
    dailyconfirmed: '3808',
    dailydeceased: '104',
    dailyrecovered: '2234',
    date: '15 May ',
    totalconfirmed: '85855',
    totaldeceased: '2752',
    totalrecovered: '30245'
  },
  {
    dailyconfirmed: '4794',
    dailydeceased: '120',
    dailyrecovered: '4012',
    date: '16 May ',
    totalconfirmed: '90649',
    totaldeceased: '2872',
    totalrecovered: '34257'
  },
  {
    dailyconfirmed: '5049',
    dailydeceased: '152',
    dailyrecovered: '2538',
    date: '17 May ',
    totalconfirmed: '95698',
    totaldeceased: '3024',
    totalrecovered: '36795'
  },
  {
    dailyconfirmed: '4628',
    dailydeceased: '131',
    dailyrecovered: '2482',
    date: '18 May ',
    totalconfirmed: '100326',
    totaldeceased: '3155',
    totalrecovered: '39277'
  },
  {
    dailyconfirmed: '6154',
    dailydeceased: '146',
    dailyrecovered: '3032',
    date: '19 May ',
    totalconfirmed: '106480',
    totaldeceased: '3301',
    totalrecovered: '42309'
  },
  {
    dailyconfirmed: '5720',
    dailydeceased: '134',
    dailyrecovered: '3113',
    date: '20 May ',
    totalconfirmed: '112200',
    totaldeceased: '3435',
    totalrecovered: '45422'
  },
  {
    dailyconfirmed: '6023',
    dailydeceased: '148',
    dailyrecovered: '3131',
    date: '21 May ',
    totalconfirmed: '118223',
    totaldeceased: '3583',
    totalrecovered: '48553'
  },
  {
    dailyconfirmed: '6536',
    dailydeceased: '142',
    dailyrecovered: '3280',
    date: '22 May ',
    totalconfirmed: '124759',
    totaldeceased: '3725',
    totalrecovered: '51833'
  },
  {
    dailyconfirmed: '6667',
    dailydeceased: '142',
    dailyrecovered: '2576',
    date: '23 May ',
    totalconfirmed: '131424',
    totaldeceased: '3867',
    totalrecovered: '54409'
  },
  {
    dailyconfirmed: '7111',
    dailydeceased: '156',
    dailyrecovered: '3285',
    date: '24 May ',
    totalconfirmed: '138537',
    totaldeceased: '4023',
    totalrecovered: '57694'
  },
  {
    dailyconfirmed: '6414',
    dailydeceased: '150',
    dailyrecovered: '3012',
    date: '25 May ',
    totalconfirmed: '144951',
    totaldeceased: '4173',
    totalrecovered: '60706'
  },
  {
    dailyconfirmed: '5907',
    dailydeceased: '173',
    dailyrecovered: '3585',
    date: '26 May ',
    totalconfirmed: '150858',
    totaldeceased: '4346',
    totalrecovered: '64291'
  },
  {
    dailyconfirmed: '7246',
    dailydeceased: '188',
    dailyrecovered: '3434',
    date: '27 May ',
    totalconfirmed: '158104',
    totaldeceased: '4534',
    totalrecovered: '67725'
  },
  {
    dailyconfirmed: '7254',
    dailydeceased: '176',
    dailyrecovered: '3171',
    date: '28 May ',
    totalconfirmed: '165358',
    totaldeceased: '4710',
    totalrecovered: '70896'
  },
  {
    dailyconfirmed: '8138',
    dailydeceased: '269',
    dailyrecovered: '11735',
    date: '29 May ',
    totalconfirmed: '173496',
    totaldeceased: '4979',
    totalrecovered: '82631'
  },
  {
    dailyconfirmed: '8364',
    dailydeceased: '205',
    dailyrecovered: '4303',
    date: '30 May ',
    totalconfirmed: '181860',
    totaldeceased: '5184',
    totalrecovered: '86934'
  },
  {
    dailyconfirmed: '8789',
    dailydeceased: '222',
    dailyrecovered: '4928',
    date: '31 May ',
    totalconfirmed: '190649',
    totaldeceased: '5406',
    totalrecovered: '91862'
  },
  {
    dailyconfirmed: '7723',
    dailydeceased: '201',
    dailyrecovered: '3882',
    date: '01 June ',
    totalconfirmed: '198372',
    totaldeceased: '5607',
    totalrecovered: '95744'
  },
  {
    dailyconfirmed: '8812',
    dailydeceased: '222',
    dailyrecovered: '4531',
    date: '02 June ',
    totalconfirmed: '207187',
    totaldeceased: '5829',
    totalrecovered: '100275'
  },
  {
    dailyconfirmed: '9689',
    dailydeceased: '259',
    dailyrecovered: '3789',
    date: '03 June ',
    totalconfirmed: '216876',
    totaldeceased: '6088',
    totalrecovered: '104064'
  },
  {
    dailyconfirmed: '9847',
    dailydeceased: '274',
    dailyrecovered: '4390',
    date: '04 June ',
    totalconfirmed: '226723',
    totaldeceased: '6362',
    totalrecovered: '108454'
  },
  {
    dailyconfirmed: '9472',
    dailydeceased: '286',
    dailyrecovered: '4770',
    date: '05 June ',
    totalconfirmed: '236195',
    totaldeceased: '6648',
    totalrecovered: '113224'
  },
  {
    dailyconfirmed: '10408',
    dailydeceased: '297',
    dailyrecovered: '5433',
    date: '06 June ',
    totalconfirmed: '246603',
    totaldeceased: '6945',
    totalrecovered: '118657'
  },
  {
    dailyconfirmed: '10882',
    dailydeceased: '261',
    dailyrecovered: '5191',
    date: '07 June ',
    totalconfirmed: '257485',
    totaldeceased: '7206',
    totalrecovered: '123848'
  },
  {
    dailyconfirmed: '8536',
    dailydeceased: '271',
    dailyrecovered: '5171',
    date: '08 June ',
    totalconfirmed: '266021',
    totaldeceased: '7477',
    totalrecovered: '129019'
  },
  {
    dailyconfirmed: '9981',
    dailydeceased: '272',
    dailyrecovered: '5634',
    date: '09 June ',
    totalconfirmed: '276002',
    totaldeceased: '7749',
    totalrecovered: '134653'
  },
  {
    dailyconfirmed: '11156',
    dailydeceased: '358',
    dailyrecovered: '6275',
    date: '10 June ',
    totalconfirmed: '287158',
    totaldeceased: '8107',
    totalrecovered: '140928'
  },
  {
    dailyconfirmed: '11135',
    dailydeceased: '394',
    dailyrecovered: '6044',
    date: '11 June ',
    totalconfirmed: '298293',
    totaldeceased: '8501',
    totalrecovered: '146972'
  },
  {
    dailyconfirmed: '11306',
    dailydeceased: '388',
    dailyrecovered: '7263',
    date: '12 June ',
    totalconfirmed: '309599',
    totaldeceased: '8889',
    totalrecovered: '154235'
  },
  {
    dailyconfirmed: '12039',
    dailydeceased: '309',
    dailyrecovered: '8092',
    date: '13 June ',
    totalconfirmed: '321638',
    totaldeceased: '9198',
    totalrecovered: '162327'
  },
  {
    dailyconfirmed: '11405',
    dailydeceased: '324',
    dailyrecovered: '7358',
    date: '14 June ',
    totalconfirmed: '333043',
    totaldeceased: '9522',
    totalrecovered: '169685'
  },
  {
    dailyconfirmed: '10032',
    dailydeceased: '396',
    dailyrecovered: '10639',
    date: '15 June ',
    totalconfirmed: '343075',
    totaldeceased: '9918',
    totalrecovered: '180324'
  },
  {
    dailyconfirmed: '11086',
    dailydeceased: '2004',
    dailyrecovered: '7226',
    date: '16 June ',
    totalconfirmed: '354161',
    totaldeceased: '11922',
    totalrecovered: '187550'
  },
  {
    dailyconfirmed: '13108',
    dailydeceased: '341',
    dailyrecovered: '6890',
    date: '17 June ',
    totalconfirmed: '367269',
    totaldeceased: '12263',
    totalrecovered: '194440'
  },
  {
    dailyconfirmed: '13829',
    dailydeceased: '343',
    dailyrecovered: '10741',
    date: '18 June ',
    totalconfirmed: '381098',
    totaldeceased: '12606',
    totalrecovered: '205181'
  },
  {
    dailyconfirmed: '14740',
    dailydeceased: '364',
    dailyrecovered: '9029',
    date: '19 June ',
    totalconfirmed: '395838',
    totaldeceased: '12970',
    totalrecovered: '214210'
  },
  {
    dailyconfirmed: '15918',
    dailydeceased: '308',
    dailyrecovered: '13974',
    date: '20 June ',
    totalconfirmed: '411753',
    totaldeceased: '13278',
    totalrecovered: '228184'
  },
  {
    dailyconfirmed: '15151',
    dailydeceased: '426',
    dailyrecovered: '9075',
    date: '21 June ',
    totalconfirmed: '426904',
    totaldeceased: '13704',
    totalrecovered: '237259'
  },
  {
    dailyconfirmed: '13560',
    dailydeceased: '312',
    dailyrecovered: '10879',
    date: '22 June ',
    totalconfirmed: '440464',
    totaldeceased: '14016',
    totalrecovered: '248138'
  },
  {
    dailyconfirmed: '15656',
    dailydeceased: '468',
    dailyrecovered: '10462',
    date: '23 June ',
    totalconfirmed: '456120',
    totaldeceased: '14484',
    totalrecovered: '258600'
  },
  {
    dailyconfirmed: '16868',
    dailydeceased: '424',
    dailyrecovered: '13089',
    date: '24 June ',
    totalconfirmed: '472988',
    totaldeceased: '14908',
    totalrecovered: '271689'
  },
  {
    dailyconfirmed: '18205',
    dailydeceased: '401',
    dailyrecovered: '13983',
    date: '25 June ',
    totalconfirmed: '491193',
    totaldeceased: '15309',
    totalrecovered: '285672'
  },
  {
    dailyconfirmed: '18255',
    dailydeceased: '381',
    dailyrecovered: '10246',
    date: '26 June ',
    totalconfirmed: '509448',
    totaldeceased: '15690',
    totalrecovered: '295918'
  },
  {
    dailyconfirmed: '20142',
    dailydeceased: '414',
    dailyrecovered: '14229',
    date: '27 June ',
    totalconfirmed: '529590',
    totaldeceased: '16104',
    totalrecovered: '310147'
  },
  {
    dailyconfirmed: '19610',
    dailydeceased: '384',
    dailyrecovered: '11631',
    date: '28 June ',
    totalconfirmed: '549200',
    totaldeceased: '16488',
    totalrecovered: '321778'
  },
  {
    dailyconfirmed: '18339',
    dailydeceased: '417',
    dailyrecovered: '13497',
    date: '29 June ',
    totalconfirmed: '567539',
    totaldeceased: '16905',
    totalrecovered: '335275'
  },
  {
    dailyconfirmed: '18256',
    dailydeceased: '506',
    dailyrecovered: '12565',
    date: '30 June ',
    totalconfirmed: '585795',
    totaldeceased: '17411',
    totalrecovered: '347840'
  },
  {
    dailyconfirmed: '19429',
    dailydeceased: '438',
    dailyrecovered: '12064',
    date: '01 July ',
    totalconfirmed: '605224',
    totaldeceased: '17849',
    totalrecovered: '359904'
  },
  {
    dailyconfirmed: '21947',
    dailydeceased: '378',
    dailyrecovered: '19999',
    date: '02 July ',
    totalconfirmed: '627171',
    totaldeceased: '18227',
    totalrecovered: '379903'
  },
  {
    dailyconfirmed: '22718',
    dailydeceased: '444',
    dailyrecovered: '14417',
    date: '03 July ',
    totalconfirmed: '649889',
    totaldeceased: '18671',
    totalrecovered: '394320'
  },
  {
    dailyconfirmed: '24018',
    dailydeceased: '611',
    dailyrecovered: '14746',
    date: '04 July ',
    totalconfirmed: '673907',
    totaldeceased: '19282',
    totalrecovered: '409066'
  },
  {
    dailyconfirmed: '23942',
    dailydeceased: '421',
    dailyrecovered: '15829',
    date: '05 July ',
    totalconfirmed: '697849',
    totaldeceased: '19703',
    totalrecovered: '424895'
  },
  {
    dailyconfirmed: '22500',
    dailydeceased: '473',
    dailyrecovered: '15315',
    date: '06 July ',
    totalconfirmed: '720349',
    totaldeceased: '20176',
    totalrecovered: '440210'
  },
  {
    dailyconfirmed: '23147',
    dailydeceased: '479',
    dailyrecovered: '16836',
    date: '07 July ',
    totalconfirmed: '743496',
    totaldeceased: '20655',
    totalrecovered: '457046'
  },
  {
    dailyconfirmed: '25561',
    dailydeceased: '492',
    dailyrecovered: '19508',
    date: '08 July ',
    totalconfirmed: '769057',
    totaldeceased: '21147',
    totalrecovered: '476554'
  },
  {
    dailyconfirmed: '25790',
    dailydeceased: '479',
    dailyrecovered: '19408',
    date: '09 July ',
    totalconfirmed: '794847',
    totaldeceased: '21626',
    totalrecovered: '495962'
  },
  {
    dailyconfirmed: '27762',
    dailydeceased: '520',
    dailyrecovered: '20289',
    date: '10 July ',
    totalconfirmed: '822609',
    totaldeceased: '22146',
    totalrecovered: '516251'
  },
  {
    dailyconfirmed: '27757',
    dailydeceased: '543',
    dailyrecovered: '19981',
    date: '11 July ',
    totalconfirmed: '850366',
    totaldeceased: '22689',
    totalrecovered: '536232'
  },
  {
    dailyconfirmed: '29106',
    dailydeceased: '500',
    dailyrecovered: '18198',
    date: '12 July ',
    totalconfirmed: '879472',
    totaldeceased: '23189',
    totalrecovered: '554430'
  },
  {
    dailyconfirmed: '28178',
    dailydeceased: '541',
    dailyrecovered: '17683',
    date: '13 July ',
    totalconfirmed: '907650',
    totaldeceased: '23730',
    totalrecovered: '572113'
  },
  {
    dailyconfirmed: '29917',
    dailydeceased: '587',
    dailyrecovered: '20977',
    date: '14 July ',
    totalconfirmed: '937567',
    totaldeceased: '24317',
    totalrecovered: '593090'
  },
  {
    dailyconfirmed: '32607',
    dailydeceased: '614',
    dailyrecovered: '20646',
    date: '15 July ',
    totalconfirmed: '970174',
    totaldeceased: '24931',
    totalrecovered: '613736'
  },
  {
    dailyconfirmed: '35468',
    dailydeceased: '680',
    dailyrecovered: '22867',
    date: '16 July ',
    totalconfirmed: '1005642',
    totaldeceased: '25611',
    totalrecovered: '636603'
  },
  {
    dailyconfirmed: '34820',
    dailydeceased: '676',
    dailyrecovered: '17476',
    date: '17 July ',
    totalconfirmed: '1040462',
    totaldeceased: '26287',
    totalrecovered: '654079'
  },
  {
    dailyconfirmed: '37411',
    dailydeceased: '543',
    dailyrecovered: '23583',
    date: '18 July ',
    totalconfirmed: '1077873',
    totaldeceased: '26830',
    totalrecovered: '677662'
  },
  {
    dailyconfirmed: '40235',
    dailydeceased: '675',
    dailyrecovered: '22730',
    date: '19 July ',
    totalconfirmed: '1118108',
    totaldeceased: '27505',
    totalrecovered: '700392'
  },
  {
    dailyconfirmed: '36806',
    dailydeceased: '596',
    dailyrecovered: '24303',
    date: '20 July ',
    totalconfirmed: '1154914',
    totaldeceased: '28101',
    totalrecovered: '724695'
  },
  {
    dailyconfirmed: '39170',
    dailydeceased: '671',
    dailyrecovered: '27589',
    date: '21 July ',
    totalconfirmed: '1194084',
    totaldeceased: '28772',
    totalrecovered: '752284'
  },
  {
    dailyconfirmed: '45601',
    dailydeceased: '1130',
    dailyrecovered: '31875',
    date: '22 July ',
    totalconfirmed: '1239685',
    totaldeceased: '29902',
    totalrecovered: '784159'
  },
  {
    dailyconfirmed: '48443',
    dailydeceased: '755',
    dailyrecovered: '33326',
    date: '23 July ',
    totalconfirmed: '1288128',
    totaldeceased: '30657',
    totalrecovered: '817485'
  },
  {
    dailyconfirmed: '48888',
    dailydeceased: '763',
    dailyrecovered: '32514',
    date: '24 July ',
    totalconfirmed: '1337016',
    totaldeceased: '31420',
    totalrecovered: '849999'
  },
  {
    dailyconfirmed: '50072',
    dailydeceased: '703',
    dailyrecovered: '37125',
    date: '25 July ',
    totalconfirmed: '1387088',
    totaldeceased: '32123',
    totalrecovered: '887124'
  },
  {
    dailyconfirmed: '48932',
    dailydeceased: '704',
    dailyrecovered: '31512',
    date: '26 July ',
    totalconfirmed: '1436020',
    totaldeceased: '32827',
    totalrecovered: '918636'
  },
  {
    dailyconfirmed: '46484',
    dailydeceased: '642',
    dailyrecovered: '34354',
    date: '27 July ',
    totalconfirmed: '1482504',
    totaldeceased: '33469',
    totalrecovered: '952990'
  },
  {
    dailyconfirmed: '49631',
    dailydeceased: '774',
    dailyrecovered: '35683',
    date: '28 July ',
    totalconfirmed: '1532135',
    totaldeceased: '34243',
    totalrecovered: '988673'
  },
  {
    dailyconfirmed: '52479',
    dailydeceased: '775',
    dailyrecovered: '32886',
    date: '29 July ',
    totalconfirmed: '1584614',
    totaldeceased: '35018',
    totalrecovered: '1021559'
  },
  {
    dailyconfirmed: '54968',
    dailydeceased: '784',
    dailyrecovered: '37425',
    date: '30 July ',
    totalconfirmed: '1639582',
    totaldeceased: '35802',
    totalrecovered: '1058984'
  },
  {
    dailyconfirmed: '57486',
    dailydeceased: '764',
    dailyrecovered: '36554',
    date: '31 July ',
    totalconfirmed: '1697068',
    totaldeceased: '36566',
    totalrecovered: '1095538'
  },
  {
    dailyconfirmed: '55117',
    dailydeceased: '854',
    dailyrecovered: '51368',
    date: '01 August ',
    totalconfirmed: '1752185',
    totaldeceased: '37420',
    totalrecovered: '1146906'
  },
  {
    dailyconfirmed: '52672',
    dailydeceased: '760',
    dailyrecovered: '40355',
    date: '02 August ',
    totalconfirmed: '1804857',
    totaldeceased: '38180',
    totalrecovered: '1187261'
  },
  {
    dailyconfirmed: '50488',
    dailydeceased: '806',
    dailyrecovered: '43070',
    date: '03 August ',
    totalconfirmed: '1855345',
    totaldeceased: '38986',
    totalrecovered: '1230331'
  },
  {
    dailyconfirmed: '51282',
    dailydeceased: '849',
    dailyrecovered: '51220',
    date: '04 August ',
    totalconfirmed: '1906627',
    totaldeceased: '39835',
    totalrecovered: '1281551'
  },
  {
    dailyconfirmed: '56626',
    dailydeceased: '919',
    dailyrecovered: '45583',
    date: '05 August ',
    totalconfirmed: '1963253',
    totaldeceased: '40754',
    totalrecovered: '1327134'
  },
  {
    dailyconfirmed: '62170',
    dailydeceased: '899',
    dailyrecovered: '50141',
    date: '06 August ',
    totalconfirmed: '2025423',
    totaldeceased: '41653',
    totalrecovered: '1377275'
  },
  {
    dailyconfirmed: '61455',
    dailydeceased: '936',
    dailyrecovered: '50387',
    date: '07 August ',
    totalconfirmed: '2086878',
    totaldeceased: '42589',
    totalrecovered: '1427662'
  },
  {
    dailyconfirmed: '65156',
    dailydeceased: '875',
    dailyrecovered: '52135',
    date: '08 August ',
    totalconfirmed: '2152034',
    totaldeceased: '43464',
    totalrecovered: '1479797'
  },
  {
    dailyconfirmed: '62117',
    dailydeceased: '1013',
    dailyrecovered: '54474',
    date: '09 August ',
    totalconfirmed: '2214151',
    totaldeceased: '44477',
    totalrecovered: '1534271'
  },
  {
    dailyconfirmed: '53016',
    dailydeceased: '887',
    dailyrecovered: '47362',
    date: '10 August ',
    totalconfirmed: '2267167',
    totaldeceased: '45364',
    totalrecovered: '1581633'
  },
  {
    dailyconfirmed: '61252',
    dailydeceased: '835',
    dailyrecovered: '56461',
    date: '11 August ',
    totalconfirmed: '2328419',
    totaldeceased: '46199',
    totalrecovered: '1638094'
  },
  {
    dailyconfirmed: '67066',
    dailydeceased: '950',
    dailyrecovered: '57759',
    date: '12 August ',
    totalconfirmed: '2395485',
    totaldeceased: '47149',
    totalrecovered: '1695853'
  },
  {
    dailyconfirmed: '64141',
    dailydeceased: '1006',
    dailyrecovered: '54776',
    date: '13 August ',
    totalconfirmed: '2459626',
    totaldeceased: '48155',
    totalrecovered: '1750629'
  },
  {
    dailyconfirmed: '65610',
    dailydeceased: '989',
    dailyrecovered: '56920',
    date: '14 August ',
    totalconfirmed: '2525236',
    totaldeceased: '49144',
    totalrecovered: '1807549'
  },
  {
    dailyconfirmed: '63986',
    dailydeceased: '952',
    dailyrecovered: '53116',
    date: '15 August ',
    totalconfirmed: '2589222',
    totaldeceased: '50096',
    totalrecovered: '1860665'
  },
  {
    dailyconfirmed: '58096',
    dailydeceased: '952',
    dailyrecovered: '57404',
    date: '16 August ',
    totalconfirmed: '2647318',
    totaldeceased: '51048',
    totalrecovered: '1918069'
  },
  {
    dailyconfirmed: '54298',
    dailydeceased: '880',
    dailyrecovered: '58172',
    date: '17 August ',
    totalconfirmed: '2701616',
    totaldeceased: '51928',
    totalrecovered: '1976241'
  },
  {
    dailyconfirmed: '65024',
    dailydeceased: '1099',
    dailyrecovered: '60455',
    date: '18 August ',
    totalconfirmed: '2766640',
    totaldeceased: '53027',
    totalrecovered: '2036696'
  },
  {
    dailyconfirmed: '69196',
    dailydeceased: '979',
    dailyrecovered: '59365',
    date: '19 August ',
    totalconfirmed: '2835836',
    totaldeceased: '54006',
    totalrecovered: '2096061'
  },
  {
    dailyconfirmed: '68518',
    dailydeceased: '981',
    dailyrecovered: '61873',
    date: '20 August ',
    totalconfirmed: '2904354',
    totaldeceased: '54987',
    totalrecovered: '2157934'
  },
  {
    dailyconfirmed: '69029',
    dailydeceased: '953',
    dailyrecovered: '62858',
    date: '21 August ',
    totalconfirmed: '2973383',
    totaldeceased: '55940',
    totalrecovered: '2220792'
  },
  {
    dailyconfirmed: '70067',
    dailydeceased: '918',
    dailyrecovered: '59101',
    date: '22 August ',
    totalconfirmed: '3043450',
    totaldeceased: '56858',
    totalrecovered: '2279893'
  },
  {
    dailyconfirmed: '61749',
    dailydeceased: '846',
    dailyrecovered: '56896',
    date: '23 August ',
    totalconfirmed: '3105199',
    totaldeceased: '57704',
    totalrecovered: '2336789'
  },
  {
    dailyconfirmed: '59696',
    dailydeceased: '854',
    dailyrecovered: '66305',
    date: '24 August ',
    totalconfirmed: '3164895',
    totaldeceased: '58558',
    totalrecovered: '2403094'
  }
];

caseTimeSeries.forEach((obj) => {
  db.collection('cases_time_series').add({
    dailyconfirmed: obj.dailyconfirmed,
    dailydeceased: obj.dailydeceased,
    dailyrecovered: obj.dailyrecovered,
    date: firebase.firestore.Timestamp.fromDate(new Date(`${obj.date}2020`)),
    totalconfirmed: obj.totalconfirmed,
    totaldeceased: obj.totaldeceased,
    totalrecovered: obj.totalrecovered,
  }).then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
});
