package oss.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Random;

@Controller
public class SelectController {

    // tbti 실행 로직
    @GetMapping("/ybti-select")
    public String ybti() {
        return "select/Ybti-checkBox";
    }

    @PostMapping("/ybti-select/result")
    public String input_ybti() {
        return "recommend/Ybti-recommend";
    }

    @PostMapping("/ybti-select/go_home")
    public String ybti_end() {
        return "redirect:/";
    }

    // mbti 실행 로직
    @GetMapping("/mbti-select")
    public String mbti() {
        return "select/Mbti-checkBox";
    }

    @PostMapping("/mbti-select/result")
    public String input_mbti(MBTIForm form, Model model) {
        String mbti = form.getMbti();
//        System.out.println("value1 = " + value1);
//        model.addAttribute("mbti", "infj");
        model.addAttribute("mbti", mbti);
        return "recommend/Mbti-recommend";
    }

//    @PostMapping("/mbti-select/result")
//    @ResponseBody
//    public String input_mbti(@RequestParam("value1") String value1, @RequestParam("value2") String value2, MBTIForm form, Model model) {
//        String mbti = form.getMbti();
//        System.out.println("value1 = " + value1);
////        model.addAttribute("mbti", "infj");
//        model.addAttribute("mbti", mbti);
//        return "recommend/Mbti-recommend";
//    }

    @PostMapping("/mbti-select/go_home")
    public String mbti_end() {
        return "redirect:/";
    }


    // random 추천
    @GetMapping("/random-recommend")
    public String random(Model model) {
        City cities[]=new City[78];
//        ArrayList<City> cities1 = new ArrayList<>();
//        cities1.add(0, "홍콩", "홍콩");
        int i=0;
        cities[i++]=new City(0,"홍콩","홍콩");
        cities[i++]=new City(1,"방콕","홍콩");
        cities[i++]=new City(2,"런던","영국");
        cities[i++]=new City(3,"싱가포르","싱가포르");
        cities[i++]=new City(4,"마카오","마카오");
        cities[i++]=new City(5,"파리","프랑스");
        cities[i++]=new City(6,"두바이","아랍에미리트");
        cities[i++]=new City(7,"뉴욕시","미국");
        cities[i++]=new City(8,"쿠알라 룸프르","말레이시아");
        cities[i++]=new City(9,"선전","중국");
        cities[i++]=new City(10,"푸켓","태국");
        cities[i++]=new City(11,"이스탄불","튀르키예");
        cities[i++]=new City(12,"델리","인도");
        cities[i++]=new City(13,"도쿄","일본");
        cities[i++]=new City(14,"로마","이탈리아");
        cities[i++]=new City(15,"안탈리아","튀르키예");
        cities[i++]=new City(16,"타이베이","대만");
        cities[i++]=new City(17,"광저우","중국");
        cities[i++]=new City(18,"뭄바이","인도");
        cities[i++]=new City(19,"프라하","체코");
        cities[i++]=new City(20,"메카","사우디아라비아");
        cities[i++]=new City(21,"마이애미","미국");
        cities[i++]=new City(22,"암스테르담","네덜란드");
        cities[i++]=new City(23,"서울","대한민국");
        cities[i++]=new City(24,"파타야","태국");
        cities[i++]=new City(25,"상하이","중국");
        cities[i++]=new City(26,"로스앤젤레스","미국");
        cities[i++]=new City(27,"라스베이거스","미국");
        cities[i++]=new City(28,"아그라","인도");
        cities[i++]=new City(29,"오사카","일본");
        cities[i++]=new City(30,"바르셀로나","스페인");
        cities[i++]=new City(31,"멕시코 시티","멕시코");
        cities[i++]=new City(32,"포르투","포르투갈");
        cities[i++]=new City(33,"퀘벡시","캐나다");
        cities[i++]=new City(34,"베이징","중국");
        cities[i++]=new City(35,"시카고","미국");
        cities[i++]=new City(36,"아부다비","아랍에미리트");
        cities[i++]=new City(37,"마드리드","스페인");
        cities[i++]=new City(38,"시드니","호주");
        cities[i++]=new City(39,"리스본","포르투갈");
        cities[i++]=new City(40,"빈","오스트리아");
        cities[i++]=new City(41,"베를린","독일");
        cities[i++]=new City(42,"베니스","이탈리아");
        cities[i++]=new City(43,"호놀룰루","미국");
        cities[i++]=new City(44,"제주도","대한민국");
        cities[i++]=new City(45,"카이로","이집트");
        cities[i++]=new City(46,"발리","인도네시아");
        cities[i++]=new City(47,"토론토","캐나다");
        cities[i++]=new City(48,"세부","필리핀");
        cities[i++]=new City(49,"집","대한민국");
        cities[i++]=new City(50,"샌프란시스코","미국");
        cities[i++]=new City(51,"워싱턴 D.C.","미국");
        cities[i++]=new City(52,"괌","미국");
        cities[i++]=new City(53,"플로리다","미국");
        cities[i++]=new City(54,"오키나와","일본");
        cities[i++]=new City(55,"교토","일본");
        cities[i++]=new City(56,"요코하마","일본");
        cities[i++]=new City(57,"모스크바","러시아");
        cities[i++]=new City(58,"블라디보스토크","러시아");
        cities[i++]=new City(59,"밀라노","이탈리아");
        cities[i++]=new City(60,"몬트리올","캐나다");
        cities[i++]=new City(61,"밴쿠버","캐나다");
        cities[i++]=new City(62,"오타와","캐나다");
        cities[i++]=new City(63,"세비야","스페인");
        cities[i++]=new City(64,"자카르타","인도네시아");
        cities[i++]=new City(65,"하노이","베트남");
        cities[i++]=new City(66,"다낭","베트남");
        cities[i++]=new City(67,"부산","대한민국");
        cities[i++]=new City(68,"경주","대한민국");
        cities[i++]=new City(69,"전주","대한민국");
        cities[i++]=new City(70,"여수","대한민국");
        cities[i++]=new City(71,"비엔티안","라오스");
        cities[i++]=new City(72,"루앙프라방","라오스");
        cities[i++]=new City(73,"코타키나발루","말레이시아");
        cities[i++]=new City(74,"뮌헨","독일");
        cities[i++]=new City(75,"함부르크","독일");
        cities[i++]=new City(76,"브뤼셀","벨기에");
        cities[i++]=new City(77,"브뤼허","벨기에");

        Random random = new Random();
        int[] rand_num = new int[9];
        String[] rand_nation = new String[9];
        String[] rand_city = new String[9];
        for(int j = 0; j < 9; j++) {
            rand_num[j] = random.nextInt(8) + 8 * j;   // 0~8까지 9개를 뽑는데, 0번은 0~7, 1번은 8~15
            rand_nation[j] = cities[rand_num[j]].getNationKorean();
            rand_city[j] = cities[rand_num[j]].getCityKorean();
        }
        model.addAttribute("rand_num", rand_num);
        model.addAttribute("rand_nation", rand_nation);
        model.addAttribute("rand_city", rand_city);
        return "random-recommend";
    }

    //    mbti결과창으로 mbti값들 보내기
//    search?type=0&type2=istj
    @RequestMapping(value = "/mbti_transfer", method = RequestMethod.GET)
    public String search(@RequestParam("mbti_num") String mbti_num, @RequestParam("mbti_string") String mbti_string,
                         @RequestParam("best1_index") String best1_index, @RequestParam("best1_city") String best1_city, @RequestParam("best1_nation") String best1_nation,
                         @RequestParam("best2_index") String best2_index, @RequestParam("best2_city") String best2_city, @RequestParam("best2_nation") String best2_nation,
                         @RequestParam("best3_index") String best3_index, @RequestParam("best3_city") String best3_city, @RequestParam("best3_nation") String best3_nation,
                         @RequestParam("mbti_name") String mbti_name, @RequestParam("mbti_desc") String mbti_desc,
                         Model model) {
//        System.out.println("mbti_string = " + mbti_string);
        model.addAttribute("mbti_num", mbti_num);
        model.addAttribute("mbti_string", mbti_string);
        model.addAttribute("best1_index", best1_index);
        model.addAttribute("best1_city", best1_city);
        model.addAttribute("best1_nation", best1_nation);
        model.addAttribute("best2_index", best2_index);
        model.addAttribute("best2_city", best2_city);
        model.addAttribute("best2_nation", best2_nation);
        model.addAttribute("best3_index", best3_index);
        model.addAttribute("best3_city", best3_city);
        model.addAttribute("best3_nation", best3_nation);
        model.addAttribute("mbti_name", mbti_name);
        model.addAttribute("mbti_desc", mbti_desc);
        return "recommend/Mbti-recommend";
    }

    //    ybti결과창으로 ybti값들 보내기
    @RequestMapping(value = "/ybti_transfer", method = RequestMethod.GET)
    public String search2(@RequestParam("ybti") String ybti, @RequestParam("ybti_desc") String ybti_desc,
                         @RequestParam("best1_index") String best1_index, @RequestParam("best1_city") String best1_city, @RequestParam("best1_nation") String best1_nation,
                         @RequestParam("best2_index") String best2_index, @RequestParam("best2_city") String best2_city, @RequestParam("best2_nation") String best2_nation,
                         @RequestParam("best3_index") String best3_index, @RequestParam("best3_city") String best3_city, @RequestParam("best3_nation") String best3_nation,
                          @RequestParam("ybti_name") String ybti_name,
                         Model model) {
//        System.out.println("ybti = " + ybti);
        model.addAttribute("ybti", ybti);
        model.addAttribute("ybti_desc", ybti_desc);
        model.addAttribute("best1_index", best1_index);
        model.addAttribute("best1_city", best1_city);
        model.addAttribute("best1_nation", best1_nation);
        model.addAttribute("best2_index", best2_index);
        model.addAttribute("best2_city", best2_city);
        model.addAttribute("best2_nation", best2_nation);
        model.addAttribute("best3_index", best3_index);
        model.addAttribute("best3_city", best3_city);
        model.addAttribute("best3_nation", best3_nation);
        model.addAttribute("ybti_name", ybti_name);
        return "recommend/Ybti-recommend";
    }
}
