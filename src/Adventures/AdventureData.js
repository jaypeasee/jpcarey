import {
  jacksonLakePics,
  middleForkPics,
  shoshonePics,
  commissaryPics, 
  hokkaidoPics, 
  gcPics, 
  baldyPics, 
  severnPics, 
  asheweigPics, 
  dumoinePics,
  missinaibiPics,
  mistassibiPics,
  petPics,
  rupertPics,
  mainSalmonPics,
  plummerCanyonPics,
  jacksonPeakPics
} from './adventureImages/imgImports.js'

const adventureDetails = [
  {
    id: 17,
    tripName: "Jackson Peak Ski Cabin Trip",
    location: "Gros Ventre Wilderness, Wyoming",
    photos: jacksonPeakPics,
    days: "3",
    exactDate: "20220226",
    roughDate: "February, 2022",
    searchTerms: ["Ski Trips", "Wyoming"]
  },
  {
    id: 16,
    tripName: "Plummer Canyon Yurt Trip",
    location: "Bridger Teton National Forest, Wydaho",
    photos: plummerCanyonPics,
    days: "3",
    exactDate: "20220204",
    roughDate: "February, 2022",
    searchTerms: ["Ski Trips", "Wyoming", "Idaho"]
  },
  {
    id: 15,
    tripName: "Jackson Lake Canoe Trip",
    location: "Grand Teton National Park, Wyoming",
    photos: jacksonLakePics,
    days: "3",
    exactDate: "20210917",
    roughDate: "September, 2021",
    searchTerms: ["Canoe Trips", "Wyoming", "National Park"]
  },
  {
    id: 14,
    tripName: "Middle Fork Salmon Raft Trip",
    location: "Frank Church Wilderness, Idaho",
    photos: middleForkPics,
    days: "7",
    exactDate: "20210610",
    roughDate: "June, 2021",
    searchTerms: ["Raft Trips", "Idaho"]
  },
  {
    id: 13,
    tripName: "Lewis-Shoshone Canoe Trip",
    location: "Yellowstone National Park, Wyoming",
    photos: shoshonePics,
    days: "3",
    exactDate: "20200821",
    roughDate: "August, 2020",
    searchTerms: ["Canoe Trips", "National Park", "Wyoming"]
  },
  {
    id: 12,
    tripName: "Commissary Ridge Yurt Trip",
    location: "Bridger Teton National Forest, Wydaho",
    photos: commissaryPics,
    days: "3",
    exactDate: "20200110",
    roughDate: "January, 2020",
    searchTerms: ["Ski Trips", "Wyoming", "Idaho"]
  },
  {
    id: 11,
    tripName: "Hokkaido Ski Trip",
    location: "Hokkaido, Japan",
    photos: hokkaidoPics,
    days: "14",
    exactDate: "20190121",
    roughDate: "January, 2019",
    searchTerms: ["Ski Trips"]
  },
  {
    id: 10,
    tripName: "Grand Canyon Raft Trip",
    location: "Grand Canyon National Park, Arizona",
    photos: gcPics,
    days: "21",
    exactDate: "20180401",
    roughDate: "April, 2018",
    searchTerms: ["Raft Trips", "National Park"]
  },
  {
    id: 9,
    tripName: "Baldy Knoll Yurt Trip",
    location: "Bridger Teton National Forest, Wydaho",
    photos: baldyPics,
    days: "4",
    exactDate: "20180121",
    roughDate: "January, 2018",
    searchTerms: ["Ski Trips", "Wyoming", "Idaho"]
  },
  {
    id: 8,
    tripName: "Main Salmon Raft Trip",
    location: "Frank Church Wilderness, Idaho",
    photos: mainSalmonPics,
    days: "5",
    exactDate: "20160910",
    roughDate: "September, 2016",
    searchTerms: ["Raft Trips", "Idaho"]
  },
  {
    id: 7,
    tripName: "Severn River Canoe Trip",
    location: "Fort Severn, Ontario",
    photos: severnPics,
    days: "37",
    exactDate: "20150705",
    roughDate: "July, 2015",
    searchTerms: ["Canoe Trips", "Ontario", "Canada"]
  },
  {
    id: 6,
    tripName: "Dumoine River Canoe Trip",
    location: "Laniel, Quebec",
    photos: dumoinePics,
    days: "14",
    exactDate: "20140705",
    roughDate: "July, 2014",
    searchTerms: ["Canoe Trips", "Quebec", "Canada"]
  },
  {
    id: 5,
    tripName: "Asheweig River Canoe Trip",
    location: "Peawanuck, Ontario",
    photos: asheweigPics,
    days: "32",
    exactDate: "20130709",
    roughDate: "July, 2013",
    searchTerms: ["Canoe Trips", "Ontario", "Canada"]
  },
  {
    id: 4,
    tripName: "Mistassibi River Canoe Trip",
    location: "Dolbeau-Mistassini, Quebec",
    photos: mistassibiPics,
    days: "6",
    exactDate: "20120520",
    roughDate: "May, 2012",
    searchTerms: ["Canoe Trips", "Quebec", "Canada"]
  },
  {
    id: 3,
    tripName: "Petawawa River Canoe Trip",
    location: "Algonquin Park, Ontario",
    photos: petPics,
    days: "10",
    exactDate: "20110815",
    roughDate: "August, 2011",
    searchTerms: ["Canoe Trips", "Ontario", "Canada"]
  },
  {
    id: 2,
    tripName: "Missinaibi River Canoe Trip",
    location: "Moosonee, Ontario",
    photos: missinaibiPics,
    days: "19",
    exactDate: "20110703",
    roughDate: "July, 2011",
    searchTerms: ["Canoe Trips", "Ontario", "Canada"]
  },
  {
    id: 1,
    tripName: "Rupert River Canoe Trip",
    location: "Waskaganish, Quebec",
    photos: rupertPics,
    days: "25",
    exactDate: "20080714",
    roughDate: "July, 2008",
    searchTerms: ["Canoe Trips", "Quebec", "Canada"]
  },
]

const adventureSearchTerms = [
  "--",
  "Canoe Trips",
  "National Park",
  "Wyoming",
  "Ski Trips",
  "Raft Trips",
  "Idaho",
  "Ontario",
  "Quebec",
  "Canada"
].sort()

export { adventureDetails, adventureSearchTerms }