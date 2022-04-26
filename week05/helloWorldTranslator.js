
function helloWorld(langCode){
        switch (langCode){
            case "en":
                console.log("Hello world!");
            break;

            case "de":
                console.log("Guten Tag, Welt!");
            break;

            case "lt":
                console.log("Labas pasauli!");
            break;

            case "jp":
                console.log("ハローワールド！");
            break;

            default:    
                console.log("Hello world!");         
        }
}

helloWorld("lt");