function doGet(){
    return HtmlService
        .createTemplateFromFile("client/index")
        .evaluate()
        .addMetaTag("viewport","width=device-width, initial-scale=1.0")
}
