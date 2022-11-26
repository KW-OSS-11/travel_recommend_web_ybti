package oss.project.controller;

public class City {
    int index;
    String cityKorean;
    String nationKorean;

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public String getCityKorean() {
        return cityKorean;
    }

    public void setCityKorean(String cityKorean) {
        this.cityKorean = cityKorean;
    }

    public String getNationKorean() {
        return nationKorean;
    }

    public void setNationKorean(String nationKorean) {
        this.nationKorean = nationKorean;
    }

    City(int index, String cityKorean, String nationKorean){
        this.index=index;
        this.cityKorean=cityKorean;
        this.nationKorean=nationKorean;
    }

}
