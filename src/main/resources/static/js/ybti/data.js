/*
AXI = 0
AXJ = 1
AYI = 2
AYJ = 3
BXI = 4
BXJ = 5
BYI = 6
BYJ = 7
*/

const qnaList = [
  {
    q: '1. 여행갈 때 호텔에 있기보다 이곳저곳 갔으면 좋겠다. ',
    a: [
      { answer: '매우 그렇다', typ:[0,5] },
      { answer: '그렇다', typ:[0,4] },
      { answer: '조금 그렇다', typ:[0,3]},
      { answer: '조금 아니다', typ:[0,2]},
      { answer: '아니다', typ:[0,1]},
      { answer: '매우 아니다', typ:[0,0]},
    ],
  },
  {
    q: '2. 해외 여행에서 인당 200만원은 적은 돈이다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,5] },
      { answer: '그렇다', typ:[1,4] },
      { answer: '조금 그렇다', typ:[1,3] },
      { answer: '조금 아니다', typ:[1,2]},
      { answer: '아니다', typ:[1,1] },
      { answer: '매우 아니다', typ:[1,0] },
    ]
  },
  {
    q: '3. 추운듯한 날씨가 좋다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,0] },
      { answer: '그렇다', typ:[2,1]},
      { answer: '조금 그렇다', typ:[2,2]},
      { answer: '조금 아니다', typ:[2,3]},
      { answer: '아니다', typ:[2,4]},
      { answer: '매우 아니다', typ:[2,5] },
    ]
  },
  {
    q: '4. 다른 나라의 역사에 관심이 많다. ',
    a: [
      { answer: '매우 그렇다', typ:[3,0] },
      { answer: '그렇다', typ:[3,1] },
      { answer: '조금 그렇다', typ:[3,2] },
      { answer: '조금 아니다', typ:[3,3] },
      { answer: '아니다', typ:[3,4] },
      { answer: '매우 아니다', typ:[3,5] },
    ]
  },
  {
    q: '5. 놀러갈 때만 되면 기운이 넘친다. ',
    a: [
      { answer: '매우 그렇다', typ:[0,5] },
      { answer: '그렇다', typ:[0,4]},
      { answer: '조금 그렇다', typ:[0,3] },
      { answer: '조금 아니다', typ:[0,2] },
      { answer: '아니다', typ:[0,1] },
      { answer: '매우 아니다', typ:[0,0] },
    ]
  },

  {
    q: '6. 없던 돈이 생기면 일단 지르고 본다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,5] },
      { answer: '그렇다', typ:[1,4]},
      { answer: '조금 그렇다', typ:[1,3] },
      { answer: '조금 아니다', typ:[1,2] },
      { answer: '아니다', typ:[1,1]},
      { answer: '매우 아니다', typ:[1,0]},
    ]
  },
  {
    q: '7. 사계절 중 여름이 제일 좋다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,5] },
      { answer: '그렇다', typ:[2,4] },
      { answer: '조금 그렇다', typ:[2,3] },
      { answer: '조금 아니다', typ:[2,2] },
      { answer: '아니다', typ:[2,1] },
      { answer: '매우 아니다', typ:[2,0] },
    ]
  },
  {
    q: '8. 유적지보다 야경에 관심이 있다. ',
    a: [
      { answer: '매우 그렇다',typ:[3,5] },
      { answer: '그렇다', typ:[3,4]},
      { answer: '조금 그렇다',typ:[3,3]},
      { answer: '조금 아니다', typ:[3,2]},
      { answer: '아니다', typ:[3,1] },
      { answer: '매우 아니다', typ:[3,0] },
    ]
  },
  {
    q: '9. 자연 풍경이 인위적인 건축물보다 좋다.',
    a: [
      { answer: '매우 그렇다', typ:[0,0] },
      { answer: '그렇다', typ:[0,1] },
      { answer: '조금 그렇다',typ:[0,2] },
      { answer: '조금 아니다', typ:[0,3] },
      { answer: '아니다', typ:[0,4] },
      { answer: '매우 아니다', typ:[0,5] },
    ]
  },
  {
    q: '10. 비행기를 탈 때 비즈니스석 이상으로 탄다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,5]},
      { answer: '그렇다', typ:[1,4] },
      { answer: '조금 그렇다', typ:[1,3] },
      { answer: '조금 아니다', typ:[1,2] },
      { answer: '아니다', typ:[1,1] },
      { answer: '매우 아니다', typ:[1,0] },
    ]
  },
  {
    q: '11. 나는 추위를 더위보다 많이 탄다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,5] },
      { answer: '그렇다', typ:[2,4] },
      { answer: '조금 그렇다', typ:[2,3] },
      { answer: '조금 아니다', typ:[2,2]},
      { answer: '아니다', typ:[2,1] },
      { answer: '매우 아니다', typ:[2,0] },
    ]
  },
  {
    q: '12. 현대적 건축물이 문화재보다 더 좋다. ',
    a: [
      { answer: '매우 그렇다',typ:[3,5] },
      { answer: '그렇다', typ:[3,4] },
      { answer: '조금 그렇다', typ:[3,3] },
      { answer: '조금 아니다', typ:[3,2]},
      { answer: '아니다', typ:[3,1] },
      { answer: '매우 아니다', typ:[3,0] },
    ]
  },
  {
    q: '13. 여행은 놀기 보다는 쉬려고 가는 것이다. ',
    a: [
      { answer: '매우 그렇다', typ:[0,0] },
      { answer: '그렇다', typ:[0,1] },
      { answer: '조금 그렇다', typ:[0,2]},
      { answer: '조금 아니다', typ:[0,3]},
      { answer: '아니다', typ:[0,4]},
      { answer: '매우 아니다', typ:[0,5] },
    ]
  },
  {
    q: '14. 여행에서 원하는 것이 있다면 일단 지르고 본다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,5] },
      { answer: '그렇다', typ:[1,4] },
      { answer: '조금 그렇다', typ:[1,3] },
      { answer: '조금 아니다', typ:[1,2] },
      { answer: '아니다', typ:[1,1] },
      { answer: '매우 아니다', typ:[1,0] },
    ]
  },
  {
    q: '15. 낯선 벌레때문에 더운 도시는 피하고 싶다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,0] },
      { answer: '그렇다', typ:[2,1]},
      { answer: '조금 그렇다', typ:[2,2]},
      { answer: '조금 아니다', typ:[2,3]},
      { answer: '아니다', typ:[2,4]},
      { answer: '매우 아니다', typ:[2,5]},
    ]
  },
  {
    q: '16. 여행을 가면 해당 지역 시장 혹은 박물관은 꼭 간다. ',
    a: [
      { answer: '매우 그렇다', typ:[3,0]},
      { answer: '그렇다', typ:[3,1] },
      { answer: '조금 그렇다', typ:[3,2] },
      { answer: '조금 아니다',typ:[3,3] },
      { answer: '아니다', typ:[3,4]},
      { answer: '매우 아니다', typ:[3,5] },
    ]
  },
  {
    q: '17. 여행에서 얼마나 돌아다니느냐가 중요하다. ',
    a: [
      { answer: '매우 그렇다', typ:[0,1.0] },
      { answer: '그렇다', typ:[0,0.8] },
      { answer: '조금 그렇다', typ:[0,0.6] },
      { answer: '조금 아니다', typ:[0,0.4] },
      { answer: '아니다', typ:[0,0.2] },
      { answer: '매우 아니다', typ:[0,0.0] },
    ]
  },
  {
    q: '18. 여행에서 돈을 얼만큼 쓸 지가 중요하다. ',
    a: [
      { answer: '매우 그렇다', typ:[1,1.0] },
      { answer: '그렇다', typ:[1,0.8] },
      { answer: '조금 그렇다', typ:[1,0.6] },
      { answer: '조금 아니다', typ:[1,0.4] },
      { answer: '아니다', typ:[1,0.2] },
      { answer: '매우 아니다', typ:[1,0.0] },
    ]
  },
  {
    q: '19. 나는 기온에 민감하다. ',
    a: [
      { answer: '매우 그렇다', typ:[2,1.0] },
      { answer: '그렇다', typ:[2,0.8] },
      { answer: '조금 그렇다', typ:[2,0.6] },
      { answer: '조금 아니다', typ:[2,0.4]},
      { answer: '아니다', typ:[2,0.2] },
      { answer: '매우 아니다', typ:[2,0.0] },
    ]
  },
  {
    q: '20. 여행 지역의 문화가 중요하다. ',
    a: [
      { answer: '매우 그렇다', typ:[3,1.0] },
      { answer: '그렇다', typ:[3,0.8] },
      { answer: '조금 그렇다', typ:[3,0.6] },
      { answer: '조금 아니다', typ:[3,0.4]},
      { answer: '아니다', typ:[3,0.2] },
      { answer: '매우 아니다', typ:[3,0.0] },
    ]
  },
]

const infoList = [
  {
    name: '경비 내에서 힐링을 좋아하는 HBFC',
    desc: '\n힐링을 좋아하고(Healing), 가성비를 챙기며(Bang for the bucks), 추운 날씨가 더운 날씨보다 나으며(Frosty), 역사적인 장소를 좋아하는(Cultural) 성격유형입니다!\n'
  },
  {
    name: '낮은 경비로 최고의 효율을 발휘해 힐링하는 HBFM',
    desc: '\n힐링을 좋아하고(Healing), 가성비를 챙기며(Bang for the bucks), 추운 날씨가 더운 날씨보다 나으며(Frosty), 현대적인 장소를 좋아하는(Modern) 성격유형입니다!\n'
  },
  {
    name: '따뜻한 곳에서 여유롭게 힐링하며 추억을 쌓는 HBSC',
    desc: '\n힐링을 좋아하고(Healing), 가성비를 챙기며(Bang for the bucks), 더운 날씨가 추운 날씨보다 나으며(Scorching), 역사적인 장소를 좋아하는(Cultural) 성격유형입니다!\n'
  },
  {
    name: '힐링도 야경도 좋아 HBSM',
    desc: '\n편안한 여행을 추구하고(Healing), 가성비를 챙기며(Bang for the bucks), 더운 날씨가 추운 날씨보다 나으며(Scorching), 현대적인 장소를 좋아하는(Modern) 성격유형입니다!\n'
  },
  {
    name: '멋있는 것 보며 쉬러 떠나자 HLFC',
    desc: '\n편안한 여행을 추구하고(Healing), 호화로운 여행을 즐기고(Luxury), 추운 날씨가 더운 날씨보다 나으며(Frosty), 역사적인 장소를 좋아하는(Cultural) 성격유형입니다!\n'
  },
  {
    name: '일단 질러 힐링하자 HLFM',
    desc: '\n편안한 여행을 추구하고(Healing), 호화로운 여행을 즐기고(Luxury), 추운 날씨가 더운 날씨보다 나으며(Frosty), 현대적인 장소를 좋아하는(Modern) 성격유형입니다!\n'
  },
  {
    name: '돈 쓸 시간이다 기다려 휴양지 HLSC',
    desc: '\n편안한 여행을 추구하고(Healing), 호화로운 여행을 즐기고(Luxury), 더운 날씨가 추운 날씨보다 나으며(Scorching), 역사적인 장소를 좋아하는(Cultural) 성격유형입니다!\n'
  },
  {
    name: '럭셔리 힐링이 뭔지 보여줄게 HLSM',
    desc: '\n편안한 여행을 추구하고(Healing), 호화로운 여행을 즐기고(Luxury), 더운 날씨가 추운 날씨보다 나으며(Scorching), 현대적인 장소를 좋아하는(Modern) 성격유형입니다!\n'
  },
  {
    name: '여기도 저기도 다 갈거야 TBFC',
    desc: '\n이곳저곳 돌아다니기를 좋아하고(Tour), 가성비를 챙기며(Bang for the bucks), 추운 날씨가 더운 날씨보다 나으며(Frosty), 역사적인 장소를 좋아하는(Cultural) 성격유형입니다!\n'
  },
  {
    name: '이곳저곳 너무 멋있잖아 TBFM',
    desc: '\n이곳저곳 돌아다니기를 좋아하고(Tour), 가성비를 챙기며(Bang for the bucks), 추운 날씨가 더운 날씨보다 나으며(Frosty), 현대적인 장소를 좋아하는(Modern) 성격유형입니다!\n'
  },
  {
    name: '여기저기 웅장해지는 TBSC',
    desc: '\n이곳저곳 돌아다니기를 좋아하고(Tour), 가성비를 챙기며(Bang for the bucks), 더운 날씨가 추운 날씨보다 나으며(Scorching), 역사적인 장소를 좋아하는(Cultural) 성격유형입니다!\n'
  },
  {
    name: '알뜰하게 다 돌아다닐 거야 TBSM',
    desc: '\n이곳저곳 돌아다니기를 좋아하고(Tour), 가성비를 챙기며(Bang for the bucks), 더운 날씨가 추운 날씨보다 나으며(Scorching), 현대적인 장소를 좋아하는(Modern) 성격유형입니다!\n'
  },
  {
    name: '여기도 가보고 싶었어 TLFC',
    desc: '\n이곳저곳 돌아다니기를 좋아하고(Tour), 호화로운 여행을 즐기고(Luxury), 추운 날씨가 더운 날씨보다 나으며(Frosty), 역사적인 장소를 좋아하는(Cultural) 성격유형입니다!\n'
  },
  {
    name: '이번 여행은 내가 주도한다 TLFM',
    desc: '\n이곳저곳 돌아다니기를 좋아하고(Tour), 호화로운 여행을 즐기고(Luxury), 추운 날씨가 더운 날씨보다 나으며(Frosty), 현대적인 장소를 좋아하는(Modern) 성격유형입니다!\n'
  },
  {
    name: '거기 알지 일단 가보자 TLSC',
    desc: '\n이곳저곳 돌아다니기를 좋아하고(Tour), 호화로운 여행을 즐기고(Luxury), 더운 날씨가 추운 날씨보다 나으며(Scorching), 역사적인 장소를 좋아하는(Cultural) 성격유형입니다!\n'
  },
  {
    name: '여행에서 난 더 멋져 TLSM',
    desc: '\n이곳저곳 돌아다니기를 좋아하고(Tour), 호화로운 여행을 즐기고(Luxury), 더운 날씨가 추운 날씨보다 나으며(Scorching), 현대적인 장소를 좋아하는(Modern) 성격유형입니다!\n'
  },
]
//
//const infoList = [
//  {
//    name: '편한게 제일 좋아 HBFC',
//    desc: '설명이다아아'
//  },
//  {
//    name: '돌아다니는게 제일 좋아 HBFM',
//    desc: '설명이다아아'
//  },
//  {
//    name: '플렉스가 제일 좋아 HBSC',
//    desc: '설명이다아아'
//  },
//  {
//    name: '알뜰한게 최고야 HBSM',
//    desc: '설명이다아아'
//  },
//  {
//    name: '친구와 함께가 좋아 HLFC',
//    desc: '설명이다아아'
//  },
//  {
//    name: '나 혼자가 좋아 HLFM',
//    desc: '설명이다아아'
//  },
//  {
//    name: '여행은 역시 밤이지 HLSC',
//    desc: '설명이다아아'
//  },
//  {
//    name: '여행은 역시 낮이지 HLSM',
//    desc: '설명이다아아'
//  },
//  {
//    name: '편한게 제일 좋아 TBFC',
//    desc: '설명이다아아'
//  },
//  {
//    name: '돌아다니는게 제일 좋아 TBFM',
//    desc: '설명이다아아'
//  },
//  {
//    name: '플렉스가 제일 좋아 TBSC',
//    desc: '설명이다아아'
//  },
//  {
//    name: '알뜰한게 최고야 TBSM',
//    desc: '설명이다아아'
//  },
//  {
//    name: '친구와 함께가 좋아 TLFC',
//    desc: '설명이다아아'
//  },
//  {
//    name: '나 혼자가 좋아 TLFM',
//    desc: '설명이다아아'
//  },
//  {
//    name: '여행은 역시 밤이지 TLSC',
//    desc: '설명이다아아'
//  },
//  {
//    name: '여행은 역시 낮이지 TLSM',
//    desc: '설명이다아아'
//  },
//]
