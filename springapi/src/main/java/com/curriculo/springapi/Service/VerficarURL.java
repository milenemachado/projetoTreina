package com.curriculo.springapi.Service;

import java.net.MalformedURLException;
import java.net.URL;

public class VerficarURL {
    public static boolean isValidUrl(String url) {
        try {
            new URL(url).toURI();
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
