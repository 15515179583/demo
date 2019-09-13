//let tds = document.querySelectorAll('td')
let dat = document.querySelector('.date')
let weks = document.querySelector('.weeks')
let wek = document.querySelector('.week')
let timeH = document.querySelector('.time-h')
let span = document.querySelector('span')
let data = [
  {
    id:'11',
    name: '数据库',
    title: '数据库原理与应用',
    row: 1,
    col: 1,
    address: '4204',
    time: [2,3,4,5,6,7,8,9,10]
  },
  {
    id:'11',
    name: '数据库',
    title: '数据库原理与应用(实验)',
    row: 1,
    col: 1,
    address: 'S603',
    time: [11,12,13,14,15,16,17,18]
  },
  {
    id:'21',
    name: '短距离',
    title: '短距离无线通信技术',
    row: 2,
    col: 1,
    address: '4413',
    time: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  },
  {
    id:'22',
    name: '毛概',
    title: '毛泽东思想与中国特色社会主义概论',
    row: 2,
    col: 2,
    address: '1207',
    time: [2,3,4,5,6,7,8,9,11,12,13,14,15,16,18]
  },
  {
    id:'23',
    name: '数据库',
    title: '数据库原理与应用',
    row: 2,
    col: 3,
    address: '4204',
    time: [2,3,4,5,6,7,8,9,10]
  },
  {
    id:'33',
    name: '数据库',
    title: '数据库原理与应用',
    row: 3,
    col: 3,
    address: 'S601',
    time: [11,12,13,14,15,16,17,18]
  },
  {
    id:'14',
    name: '微机原理',
    title: '微机原理与接口技术',
    row: 1,
    col: 4,
    address: '4413',
    time: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  },
  {
    id:'15',
    name: '短距离',
    title: '短距离无线通信技术',
    row: 1,
    col: 5,
    address: 'S609',
    time: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  },
  {
    id:'25',
    name: '毛概',
    title: '毛泽东思想与中国特色社会主义概论',
    row: 2,
    col: 5,
    address: '1207',
    time: [3,5,7,9,11,13,15]
  },
  {
    id:'35',
    name: '微机原理',
    title: '微机原理与接口技术',
    row: 3,
    col: 5,
    address: '4413',
    time: [3,5,7,9,11,13,15,17]
  },
  {
    id:'35',
    name: '微机原理',
    title: '微机原理与接口技术',
    row: 3,
    col: 5,
    address: 'S610',
    time: [2,4,6,8,10,12,14,16,18]
  }
]
function getTime() {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() //0-11
  let days = date.getDate() // 1-31
  let week = date.getDay() //0-6
  let hours = date.getHours() //0-23
  let minutes = date.getMinutes() //0-59
  let seconds = date.getSeconds() //0-59
  time = {
    date: date,
    year: year,
    month: month == 0? 12: month+1,//1-12
    days: days,//1-31
    week: week == 0? 7: week,//1-7
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
  return time
}

function getZero(number) {
  return number < 10? '0' + number: number
}
function getThisClass(time) {
  let place = {row:0,col:0}
  place.col = time.week
  if(time.hours >= 8 && time.hours <9 || time.hours == 9 && time.minutes <50) {
    place.row = 1
  } else if(time.hours >= 11 && time.hours <12 || time.hours == 10 && time.minutes >=10) {
    place.row = 2
  } else if(time.hours >= 14 && time.hours <15 || time.hours == 15 && time.minutes <50) {
    place.row = 3
  } else if(time.hours >= 17 && time.hours <18 || time.hours == 16 && time.minutes >=10) {
    place.row = 4
  }
  return place
}
function showData() {
  time = getTime()
  let startTime = new Date(2019,07,26,00,00,00).getTime()
  let endTime = new Date().getTime()
  let thisWeek = Math.ceil((endTime-startTime)/604800000)

  dat.textContent = time.year + '/' +time.month + '/' + time.days
  weks.textContent = '第'+ thisWeek + '周'
  wek.textContent = '周' + time.week
  timeH.textContent = getZero(time.hours) + ':' + getZero(time.minutes) + ':' + getZero(time.seconds)
  let place = getThisClass(time)
  data.forEach(element => {
    if(element.time.includes(thisWeek)) {
      let td = document.querySelector('#td' + element.id)
      td.title = element.title
      td.innerHTML = element.name + '</br>' + element.address
      td.className = ''
      if(element.row == place.row && element.col == place.col) {
        span.textContent = '上课中'
        span.className = 'busy'
      } else {
        span.textContent = '休息中'
        span.className = 'free'
      }
    }
  })
  document.querySelector('#td' + place.row + '' + place.col).className = 'thisClass'
}
showData()
function changeTime() {
  setInterval(() => {
    showData()
  }, 1000);
}

changeTime()