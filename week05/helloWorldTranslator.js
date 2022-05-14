let langCode = prompt(`Please input en, "de", "lt" or "jp".`);

if(langCode === "en" || langCode === "de"|| langCode === "lt"|| langCode === "jp") {
    document.write(`Your input is "${langCode}".`);
    document.write("<br>");
}



function helloWorld(){
    
        switch (langCode){
            case "en":
                document.write("Hello world! (in English)");
            break;

            case "de":
                document.write("Guten Tag, Welt! (in German)");
            break;

            case "lt":
                document.write("Labas pasauli! (in Lithuanian)");
            break;

            case "jp":
                document.write("ハローワールド！ (in Japanese)");
            break;

            default:    
                document.write(`Please input "en", "de", "lt" or "jp" without "".`)       
        }
        return
}

helloWorld(langCode);