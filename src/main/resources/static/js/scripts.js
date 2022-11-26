function transfer(){
//    location.href="search?type="+type+"&type2=type"+type2;
    location.href="transfer?mbti_num=" + myMbti + "&mbti_string=" + mbtimap[myMbti]
    + "&best1_index=" + cities[0].index + "&best1_city=" + cities[0].cityKorean + "&best1_nation=" + cities[0].nationKorean
    + "&best2_index=" + cities[1].index + "&best2_city=" + cities[1].cityKorean + "&best2_nation=" + cities[1].nationKorean
    + "&best3_index=" + cities[2].index + "&best3_city=" + cities[2].cityKorean + "&best3_nation=" + cities[2].nationKorean;
//               search?type=1&type2=2
}