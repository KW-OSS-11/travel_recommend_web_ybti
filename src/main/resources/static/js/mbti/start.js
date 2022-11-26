const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
var myMbti=-1
var mbtimap=[
  'ISTJ',  'ISFJ',  'INFJ',  'INTJ',  
  'ISTP',  'ISFP',  'INFP',  'INTP',  
  'ESTP',  'ESFP',  'ENFP',  'ENTP',  
  'ESTJ',  'ESFJ',  'ENFJ',  'ENTJ'
  ];
const endPoint = 5;
const select = [0, 0, 0, 0, 0, 0, 0, 0];
var tendencies=[0.0, 0.0, 0.0, 0.0]
var weights=[0.0, 0.0, 0.0, 0.0]

function calResult(){ 
  //console.log(tendencies);
  //make  tendencies random
  tendencies[0]+=(Math.random()*2-1)
  tendencies[1]+=(Math.random()*2-1)
  tendencies[2]+=(Math.random()*2-1)
  tendencies[3]+=(Math.random()*2-1)
  console.log("tendencies: "+tendencies);
  for(let i = 0; i < cities.length; i++){
    cities[i].score+=Math.abs(tendencies[0]-cities[i].activity)*weights[0]
    cities[i].score+=Math.abs(tendencies[1]-cities[i].budget)*weights[1]
    cities[i].score+=Math.abs(tendencies[2]-cities[i].weather)*weights[2]
    cities[i].score+=Math.abs(tendencies[3]-cities[i].cultural)*weights[3]
    console.log(cities[i].score);
  }
  cities=cities.sort(function(city1, city2){ return city1.score>city2.score?1:-1;});
  console.log(cities[0])
  console.log(myMbti)

  localStorage.setItem('myMbti', myMbti);

  //console.log(cities);
  //ybti appending
  // var ybti='';
  // var ybtinum=0;
  // tendencies[0]<5?ybti+='H':ybti+='T';
  // tendencies[1]<5?ybti+='B':ybti+='L';
  // tendencies[2]<5?ybti+='F':ybti+='S';
  // tendencies[3]<5?ybti+='C':ybti+='M';
  // console.log(ybti);
  // console.log(tendencies);

  // switch(ybti){
  //   case "HBFC":num=0;break;
  //   case "HBFM":num=1;break;
  //   case "HBSC":num=2;break;
  //   case "HBSM":num=3;break;
  //   case "HLFC":num=4;break;
  //   case "HLFM":num=5;break;
  //   case "HLSC":num=6;break;
  //   case "HLSM":num=7;break;
  //   case "TBFC":num=8;break;
  //   case "TBFM":num=9;break;
  //   case "TBSC":num=10;break;
  //   case "TBSM":num=11;break;
  //   case "TLFC":num=12;break;
  //   case "TLFM":num=13;break;
  //   case "TLSC":num=14;break;
  //   case "TLSM":num=15;break;
  // }
  // console.log(num);
  //var result = select.indexOf(Math.max(...select));
  return myMbti;
}

//  const resultName2 = document.querySelector('.resultname2');
//  resultName2.innerHTML += mbtiinfoList[point].name;
//  resultName2.innerHTML += '<br/>';
//  resultName2.innerHTML += mbtiinfoList[point].desc;

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML += mbtiinfoList[point].name;
  resultName.innerHTML += '<br/>';
  resultName.innerHTML += mbtiinfoList[point].desc;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
//  imgDiv.appendChild(resultImg);

//  const resultDesc = document.querySelector('.resultDesc');
//  resultDesc.innerHTML += mbtiinfoList[point].desc;

  const bestDesc1 = document.querySelector('.resultDesc');
  bestDesc1.innerHTML += "당신에게 추천드리는 베스트1 도시는? "

// best1 img없애고 결과화면에 띄우기
  var bestImg1 = document.createElement('img');
  const bestimgDiv1 = document.querySelector('#resultImg');
  var bestimgURL1 = 'img/cityimg/' + cities[0].index + '.jpg';
  bestImg1.src = bestimgURL1;
  bestImg1.alt = cities[0].index;
  bestImg1.classList.add('img-fluid');
  bestimgDiv1.appendChild(bestImg1);

  const bestresultDesc1 = document.querySelector('.resultDesc');
  bestresultDesc1.innerHTML += '<br/>';
  bestresultDesc1.innerHTML += cities[0].cityKorean;
  bestresultDesc1.innerHTML +=", "
  bestresultDesc1.innerHTML += cities[0].nationKorean;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');     // class="answerBox"에 mapping
  var answer = document.createElement('button');    // button 만들기
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      //var target = qnaList[qIdx].a[idx].type;
      // for(let i = 0; i < target.length; i++){
      //   select[target[i]] += 1;
      // }
      var tg = mbtiqnaList[qIdx].a[idx].typ;
      if(qIdx==0) //mbti select, update tendency
      {
       myMbti=tg[0]
       tendencies[0]=mbti[tg[0]].activity;
       tendencies[1]=mbti[tg[0]].budget;
       tendencies[2]=mbti[tg[0]].weather;
       tendencies[3]=mbti[tg[0]].cultural;
      }else{
        weights[tg[0]]=tg[1];
      }

      console.log(tendencies,weights)
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');  // qBox가 <div class="qBox my-5 py-3 mx-auto"> 의 class와 연동되고
  q.innerHTML = mbtiqnaList[qIdx].q;        // innerHTML로 그 사이에 html을 넣어주는 것 -> 질문지 하나 띄우고
  for(let i in mbtiqnaList[qIdx].a){        // for문으로 밑에 answer 다 추가해주기
    addAnswer(mbtiqnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

function bkhome(){
    main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
  }

function transfer(){
//    location.href="search?type="+type+"&type2=type"+type2;
    location.href="mbti_transfer?mbti_num=" + myMbti + "&mbti_string=" + mbtimap[myMbti]
    + "&best1_index=" + cities[0].index + "&best1_city=" + cities[0].cityKorean + "&best1_nation=" + cities[0].nationKorean
    + "&best2_index=" + cities[1].index + "&best2_city=" + cities[1].cityKorean + "&best2_nation=" + cities[1].nationKorean
    + "&best3_index=" + cities[2].index + "&best3_city=" + cities[2].cityKorean + "&best3_nation=" + cities[2].nationKorean
    + "&mbti_name=" + mbtiinfoList[myMbti].name + "&mbti_desc=" + mbtiinfoList[myMbti].desc;
//               search?type=1&type2=2
}



//var param = 11;

//function init() {
//             $.ajax({
//                 type : "POST",
//                 url : "mbti-select/result",
//                 data : {
//                    value1 : "테스트"
//                    , value2 : param
//                 },
//                 contentType: "application/json",
//                 dataType: "json",
//                 success : function (data, status) {
//                 },
//                 error : function (status) {
//                 }
//             });
//          }

