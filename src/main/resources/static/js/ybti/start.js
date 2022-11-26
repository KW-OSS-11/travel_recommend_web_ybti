const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

// 해당 ybti에 대한 설명문
var ybti_desc=""
var ybti=""
var myYbti=-1

const endPoint = 20;
const select = [0, 0, 0, 0, 0, 0, 0, 0];
var tendencies=[0.0, 0.0, 0.0, 0.0]
var weights=[0.0, 0.0, 0.0, 0.0]

function calResult(){ 
  //console.log(tendencies);
  for(let i = 0; i < cities.length; i++){
    cities[i].score+=Math.abs(tendencies[0]-cities[i].activity)*weights[0]
    cities[i].score+=Math.abs(tendencies[1]-cities[i].budget)*weights[1]
    cities[i].score+=Math.abs(tendencies[2]-cities[i].weather)*weights[2]
    cities[i].score+=Math.abs(tendencies[3]-cities[i].cultural)*weights[3]
    console.log(cities[i].score);
  }
  cities=cities.sort(function(city1, city2){ return city1.score>city2.score?1:-1;});
  
  //console.log(cities);
  //ybti appending
  var ybtinum=0;
  tendencies[0]<5?ybti+='H':ybti+='T';
  tendencies[1]<5?ybti+='B':ybti+='L';
  tendencies[2]<5?ybti+='F':ybti+='S';
  tendencies[3]<5?ybti+='C':ybti+='M';
  console.log(ybti);
  console.log(tendencies);

  switch(ybti){
    case "HBFC":num=0;break;
    case "HBFM":num=1;break;
    case "HBSC":num=2;break;
    case "HBSM":num=3;break;
    case "HLFC":num=4;break;
    case "HLFM":num=5;break;
    case "HLSC":num=6;break;
    case "HLSM":num=7;break;
    case "TBFC":num=8;break;
    case "TBFM":num=9;break;
    case "TBSC":num=10;break;
    case "TBSM":num=11;break;
    case "TLFC":num=12;break;
    case "TLFM":num=13;break;
    case "TLSC":num=14;break;
    case "TLSM":num=15;break;
  }
  console.log(num);
  //var result = select.indexOf(Math.max(...select));
  return num;
}

function setResult(){
  let point = calResult();
  myYbti = point;
  ybti_desc = infoList[point].desc;

  const resultName = document.querySelector('.resultname');
  resultName.innerHTML += infoList[point].name;
  resultName.innerHTML += '<br/>';
  resultName.innerHTML += infoList[point].desc;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
//  imgDiv.appendChild(resultImg);

//  const resultDesc = document.querySelector('.resultDesc');
//  resultDesc.innerHTML += infoList[point].desc;

  const bestDesc1 = document.querySelector('.resultDesc');
  bestDesc1.innerHTML += "당신에게 추천드리는 베스트1 도시는?"

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
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
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
      var tg = qnaList[qIdx].a[idx].typ;
      if(qIdx<16)
      {
       tendencies[tg[0]]+=0.5*tg[1];
      }else{
        weights[tg[0]]=tg[1];
      }
      //console.log(tendencies,weights)
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

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
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
    location.href="ybti_transfer?ybti=" + ybti + "&ybti_desc=" + ybti_desc
    + "&best1_index=" + cities[0].index + "&best1_city=" + cities[0].cityKorean + "&best1_nation=" + cities[0].nationKorean
    + "&best2_index=" + cities[1].index + "&best2_city=" + cities[1].cityKorean + "&best2_nation=" + cities[1].nationKorean
    + "&best3_index=" + cities[2].index + "&best3_city=" + cities[2].cityKorean + "&best3_nation=" + cities[2].nationKorean
    + "&ybti_name=" + infoList[myYbti].name;
//               search?type=1&type2=2
}