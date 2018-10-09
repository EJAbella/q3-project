package com.ejabella.q3project.service;

import org.springframework.stereotype.Service;

@Service
public class MeetingDTO {

    private String about;
    private String imgUrl;
    private String title;
    private int presenter;

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPresenter() {
        return presenter;
    }

    public void setPresenter(int presenter) {
        this.presenter = presenter;
    }

    @Override
    public String toString() {
        return "MeetingDTO{" +
                "about='" + about + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", title='" + title + '\'' +
                ", presenter=" + presenter +
                '}';
    }
}
