# ✈ 여행지 추천 웹사이트 ✈

자신만의 여행지를 기존의 MBTI를 이용해 알아봅니다. <br>
추가로 YBTI라는 새로운 여행 유형 검사를 실시해 16가지 여행 성격 중 자신이 어떤 유형에 속하는지 알아본 후 여행지를 추천받아봅니다. 

## 기능

* 자신만의 YBTI 찾기
* MBTI를 이용한 여행지 추천
* YBTI를 이용한 여행지 추천
* Random으로 그 날의 여행지 9개 추천

## 👨‍💻 기여 👩‍💻
저희 프로젝트에 관심을 가져주셔서 감사 말씀 드립니다. 여행지 추천시스템에 관심을 가진 누구나 자유롭게 참여하여 퉵사이트 발전에 기여하실 수 있습니다. 

ex) 자신만의 알고리즘을 코드로 녹여내어 추천 방식을 수정  
ex) 다양한 API를 이용해 추가 시스템 구축 

## 💁 사용 가이드 💁 

### 사전 준비
* Java 11 설치 (가급적 JDK 11 버전을 설치해주세요. 다른 버전을 설치하면 정상 동작하지 않을 가능성이 높습니다)
* IntelliJ 설치
   
등록된 파일들을 모두 받은 후, build.gradle 파일로 프로젝트 열기
File -> Setting에 들어간 후, 검색창에 gradle 검색 후, Build and run 창에서 Gradle -> IntelliJ IDEA로 변경(2개) <br>
밑에 있는 Gradle 칸에서 Gradle JVM을 java version 11로 되어있는지 확인
 
 * 프로젝트 JDK 설정
 File -> Project Structure 들어간 후, Project SDK가 version 11로 되어있는지 확인 <br>
 새로 설치했다면, 설치한 자바 11로 지정해줍니다.

  * 파일 경로 
src/main/java/oss/project/controller -> java, controller 파일들 <br>
src/main/resources/templates -> html 파일들 <br>
src/main/resources/templates/static/js -> js 파일들 <br>
src/main/resources/templates/static/css -> css 파일들 <br>
src/main/resources/templates/static/img -> 이미지 파일들 <br>

* 실행 방법
로컬 컴퓨터에서 실행 시, main 파일에서 run 버튼을 누른 후. localhost:8080 에 접근하면 실행 가능합니다

## ‼ License ‼

이 프로젝트는 MIT License를 따릅니다. 

이 소프트웨어를 누구라도 무상으로 제한없이 취급해도 좋다. 단, 저작권 표시 및 이 허가 표시를 소프트웨어의 모든 복제물 또는 중요한 부분에 기재해야 한다.

저자 또는 저작권자는 소프트웨어에 관해서 아무런 책임을 지지 않는다.
