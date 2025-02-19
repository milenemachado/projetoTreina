package com.curriculo.springapi.image;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

public class Image {
    public static String saveImageFromBase64(String base64Data){
        
        try{

        if (base64Data.contains(",")) {
            base64Data = base64Data.split(",")[1];
        }
        
        byte[] imageBytes = Base64.getDecoder().decode(base64Data);
        
        String fileName = "image_" + System.currentTimeMillis() + ".png";
        
        Path destinationPath = Paths.get("img").resolve(fileName).toAbsolutePath();
        Files.createDirectories(destinationPath.getParent());

        Files.write(destinationPath, imageBytes);
        
        return destinationPath.toString();
        } catch (IOException e) {
            return "ERRO AO SALVAR IMAGEM";
        }

    }
}
