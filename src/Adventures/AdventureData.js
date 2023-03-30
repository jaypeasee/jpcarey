import jacksonLake from './adventureImages/jacksonLake.JPG'
import middleFork from './adventureImages/middleFork.jpg'
import shoshoneLake from './adventureImages/shoshoneLake.jpeg'
import commissaryRidge from './adventureImages/commissaryRidge.jpeg'
import hokkaido from './adventureImages/hokkaido.jpeg'
import grandCanyon18 from './adventureImages/grandCanyon18.JPG'
import baldyKnoll from './adventureImages/baldyKnoll.jpg'
import severnRiver from './adventureImages/severnRiver.jpg'
import asheweigRiver from './adventureImages/asheweigRiver.jpg'
import dumoineRiver from './adventureImages/dumoineRiver.jpg'
import missinaibiRiver from './adventureImages/missinaibiRiver.jpg'
import mistassibiRiver from './adventureImages/mistassibiRiver.jpg'
import petawawaRiver from './adventureImages/petawawaRiver.jpg'
import rupertRiver from './adventureImages/rupertRiver.jpg'
import mainSalmon16 from './adventureImages/mainSalmon16.JPG'
import plummerCanyon from './adventureImages/plummerCanyon.jpg'
import jacksonPeak from './adventureImages/jacksonPeak.jpg'
import selwayRiver from './adventureImages/selwayRiver.jpg'
import grandCanyon22 from './adventureImages/grandCanyon22.jpg';
import mainSalmon17 from './adventureImages/mainSalmon17.JPG'
import fishHook from './adventureImages/fishHook.jpg';

const allAdventures = [
  {
    id: 21,
    tripName: "Fish Hook Hut Trip",
    location: "Sawtooth National Forest, Idaho",
    photo: fishHook,
    days: "4",
    exactDate: "20230312",
    roughDate: "March, 2023",
    searchTerms: ["Ski Trips", "Idaho", "USA"]
  },
  {
    id: 20,
    tripName: "Grand Canyon Raft Trip",
    location: "Grand Canyon National Park, Arizona",
    photo: grandCanyon22,
    days: "18",
    exactDate: "20221025",
    roughDate: "November, 2022",
    searchTerms: ["River Trips", "National Parks", "USA"]
  },
  {
    id: 19,
    tripName: "Selway River Kayaking Trip",
    location: "Selway-Bitterroot Wilderness, Idaho",
    photo: selwayRiver,
    days: "4",
    exactDate: "20220531",
    roughDate: "June, 2022",
    searchTerms: ["Idaho", "River Trips", "USA"]
  },
  {
    id: 18,
    tripName: "Jackson Peak Ski Cabin Trip",
    location: "Gros Ventre Wilderness, Wyoming",
    photo: jacksonPeak,
    days: "3",
    exactDate: "20220226",
    roughDate: "February, 2022",
    searchTerms: ["Ski Trips", "Wyoming", "USA"]
  },
  {
    id: 17,
    tripName: "Plummer Canyon Yurt Trip",
    location: "Bridger Teton National Forest, Wydaho",
    photo: plummerCanyon,
    days: "3",
    exactDate: "20220204",
    roughDate: "February, 2022",
    searchTerms: ["Ski Trips", "Wyoming", "Idaho", "USA"]
  },
  {
    id: 17,
    tripName: "Jackson Lake Canoe Trip",
    location: "Grand Teton National Park, Wyoming",
    photo: jacksonLake,
    days: "3",
    exactDate: "20210917",
    roughDate: "September, 2021",
    searchTerms: ["Canoe Trips", "Wyoming", "National Parks", "USA"]
  },
  {
    id: 15,
    tripName: "Middle Fork Salmon Raft Trip",
    location: "Frank Church Wilderness, Idaho",
    photo: middleFork,
    days: "7",
    exactDate: "20210610",
    roughDate: "June, 2021",
    searchTerms: ["River Trips", "Idaho", "USA"]
  },
  {
    id: 14,
    tripName: "Lewis-Shoshone Canoe Trip",
    location: "Yellowstone National Park, Wyoming",
    photo: shoshoneLake,
    days: "3",
    exactDate: "20200821",
    roughDate: "August, 2020",
    searchTerms: ["Canoe Trips", "National Parks", "Wyoming", "USA"]
  },
  {
    id: 13,
    tripName: "Commissary Ridge Yurt Trip",
    location: "Bridger Teton National Forest, Wydaho",
    photo: commissaryRidge,
    days: "3",
    exactDate: "20200110",
    roughDate: "January, 2020",
    searchTerms: ["Ski Trips", "Wyoming", "Idaho", "USA"]
  },
  {
    id: 12,
    tripName: "Hokkaido Ski Trip",
    location: "Hokkaido, Japan",
    photo: hokkaido,
    days: "14",
    exactDate: "20190121",
    roughDate: "January, 2019",
    searchTerms: ["Ski Trips"]
  },
  {
    id: 11,
    tripName: "Grand Canyon Raft Trip",
    location: "Grand Canyon National Park, Arizona",
    photo: grandCanyon18,
    days: "21",
    exactDate: "20180401",
    roughDate: "April, 2018",
    searchTerms: ["River Trips", "National Parks", "USA"]
  },
  {
    id: 10,
    tripName: "Baldy Knoll Yurt Trip",
    location: "Bridger Teton National Forest, Wydaho",
    photo: baldyKnoll,
    days: "4",
    exactDate: "20180121",
    roughDate: "January, 2018",
    searchTerms: ["Ski Trips", "Wyoming", "Idaho", "USA"]
  },
  {
    id: 9,
    tripName: "Main Salmon Raft Trip",
    location: "Frank Church Wilderness, Idaho",
    photo: mainSalmon17,
    days: "4",
    exactDate: "20170620",
    roughDate: "June, 2017",
    searchTerms: ["Idaho", "River Trips", "USA"],
  },
  {
    id: 8,
    tripName: "Main Salmon Raft Trip",
    location: "Frank Church Wilderness, Idaho",
    photo: mainSalmon16,
    days: "5",
    exactDate: "20160910",
    roughDate: "September, 2016",
    searchTerms: ["Idaho", "River Trips", "USA"]
  },
  {
    id: 7,
    tripName: "Severn River Canoe Trip",
    location: "Fort Severn, Ontario",
    photo: severnRiver,
    days: "37",
    exactDate: "20150705",
    roughDate: "July, 2015",
    searchTerms: ["Canoe Trips", "Ontario", "Canada", "River Trips"]
  },
  {
    id: 6,
    tripName: "Dumoine River Canoe Trip",
    location: "Laniel, Quebec",
    photo: dumoineRiver,
    days: "14",
    exactDate: "20140705",
    roughDate: "July, 2014",
    searchTerms: ["Canoe Trips", "Quebec", "Canada", "River Trips"]
  },
  {
    id: 5,
    tripName: "Asheweig River Canoe Trip",
    location: "Peawanuck, Ontario",
    photo: asheweigRiver,
    days: "32",
    exactDate: "20130709",
    roughDate: "July, 2013",
    searchTerms: ["Canoe Trips", "Ontario", "Canada", "River Trips"]
  },
  {
    id: 4,
    tripName: "Mistassibi River Canoe Trip",
    location: "Dolbeau-Mistassini, Quebec",
    photo: mistassibiRiver,
    days: "6",
    exactDate: "20120520",
    roughDate: "May, 2012",
    searchTerms: ["Canoe Trips", "Quebec", "Canada", "River Trips"]
  },
  {
    id: 3,
    tripName: "Petawawa River Canoe Trip",
    location: "Algonquin Park, Ontario",
    photo: petawawaRiver,
    days: "10",
    exactDate: "20110815",
    roughDate: "August, 2011",
    searchTerms: ["Canoe Trips", "Ontario", "Canada", "River Trips"]
  },
  {
    id: 2,
    tripName: "Missinaibi River Canoe Trip",
    location: "Moosonee, Ontario",
    photo: missinaibiRiver,
    days: "19",
    exactDate: "20110703",
    roughDate: "July, 2011",
    searchTerms: ["Canoe Trips", "Ontario", "Canada", "River Trips"]
  },
  {
    id: 1,
    tripName: "Rupert River Canoe Trip",
    location: "Waskaganish, Quebec",
    photo: rupertRiver,
    days: "25",
    exactDate: "20080714",
    roughDate: "July, 2008",
    searchTerms: ["Canoe Trips", "Quebec", "Canada", "River Trips"]
  },
]

const adventureSearchTerms = [
  "--",
  "Canada",
  "Canoe Trips",
  "Idaho",
  "National Parks",
  "Ontario",
  "Quebec",
  "River Trips",
  "Ski Trips",
  "USA",
  "Wyoming",
]

export { allAdventures, adventureSearchTerms }