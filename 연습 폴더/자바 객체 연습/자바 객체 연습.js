// function pickRandomNumber(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min
//  }
 
//  function sleep_test(time_to_sleep, wake_to_sleep, wake_to_middle, toss_and_turn, delta_wave, sleep_satisfaction) {
//    this.time_to_sleep = time_to_sleep
//    this.wake_to_sleep = wake_to_sleep
//    this.wake_to_middle = wake_to_middle
//    this.toss_and_turn = toss_and_turn
//    this.delta_wave = delta_wave
//    this.sleep_satisfaction = sleep_satisfaction
//  }
 
//  sleep_test.prototype = {
//    getInfo() {
//      this.time_to_sleep = pickRandomNumber(1, 10)
//      this.wake_to_sleep = pickRandomNumber(1, 10)
//      this.wake_to_middle = pickRandomNumber(1, 5)
//      this.toss_and_turn = pickRandomNumber(1, 10)
//      this.delta_wave = pickRandomNumber(0, 50)
//      this.sleep_satisfaction = this.delta_wave / (this.time_to_sleep * this.wake_to_sleep * this.wake_to_middle * this.toss_and_turn)
//    //   console.log('--- test ---')
//    //   console.log('잠들기까지 걸린 시간:', this.time_to_sleep)
//    //   console.log('잠에서 깨어나는데 걸린 시간:', this.wake_to_sleep)
//    //   console.log('잠자는 동안 중간에 깬 횟수:', this.wake_to_middle)
//    //   console.log('잠자는 동안 뒤척인 횟수:', this.toss_and_turn)
//    //   console.log('델타파 비율:', this.delta_wave)
//    //   console.log('수면만족도:', this.sleep_satisfaction)
//    },
 
//    good_sleep_satisfaction() {
//      if (this.sleep_satisfaction >= 0.37 && this.sleep_satisfaction <= 50) {
//        this.sleep_satisfaction = 'good'
//      }
//    },
 
//    get getPrice() {
//      return this.sleep_satisfaction
//    }
//  }

// const groupA = []
// const groupB = []
// const groupC = []

// function result(group){
//    for(let i = 0; i < 100; i++){
//       const tester = new sleep_test()
//       tester.getInfo()
//       tester.good_sleep_satisfaction() 

//       if(tester.getPrice === 'good'){
//          group.push(tester)
//       }
//    }
// }

// result(groupA)
// result(groupB)
// result(groupC)

// if((groupA>groupB)&&(groupA>groupC)){
//    alert('A bed is chosen to a new bed this year!')
// }
// else if((groupB>groupA)&&(groupB>groupC)){
//    alert('B bed is chosen to a new bed this year!')
// }
// else{
//    alert('C bed is chosen to a new bed this year!')
// }

// console.log('A group cnt ', groupA.length)
// console.log('B group cnt ', groupB.length)
// console.log('C group cnt ', groupC.length)
// 1번

// function train_fare(train_station, latitude, longitude) {
//    this.train_station = train_station
//    this.latitude = latitude
//    this.longitude = longitude
// }

// train_fare.prototype = {
//    getInfo() {
//       console.log('--- 지역 정보 ---')
//       console.log(this.train_station, '역')
//       console.log(this.train_station, '역의 위도:', this.latitude)
//       console.log(this.train_station, '역의 경도:', this.longitude)
//    },

//    distance(second_city) {
//       const earth_R = 6371e3 // 지구의 반지름 (meter)
      
//       // 좌표를 라디안 단위로 변환
//       const φ1 = this.latitude * Math.PI / 180
//       const φ2 = second_city.latitude * Math.PI / 180
//       const Δφ = (second_city.latitude - this.latitude) * Math.PI / 180
//       const Δλ = (second_city.longitude - this.longitude) * Math.PI / 180
      
//       const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//          Math.cos(φ1) * Math.cos(φ2) *
//          Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      
//       const d = Math.round(earth_R * (c / 10)) // meter
      
//       return d
//    }
// }

// const seoul = new train_fare(
//    '서울',
//    37.56654,
//    126.97796
// )
// const daejeon = new train_fare(
//    '대전',
//    36.33251,
//    127.43421
// )
// const daegu = new train_fare(
//    '대구',
//    35.88049,
//    128.62837
// )
// const busan = new train_fare(
//    '부산',
//    35.11661,
//    129.04009
// )

// // seoul.getInfo()
// // daejeon.getInfo()
// // busan.getInfo()


// const result = seoul.distance(daejeon)
// console.log('서울역 - 대전역 =', result)
// const result2 = daejeon.distance(daegu)
// console.log('대전역 - 대구역 =', result2)
// const result3 = daegu.distance(busan)
// console.log('대구역 - 부산역 =', result3)
// 2번

