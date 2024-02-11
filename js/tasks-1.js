function getFileName(file) {
    if (file.indexOf(`.`) !== -1) {
        return (file.slice(0, file.indexOf(`.`)));
    } else {
        return file;
    }
}
    
  
    
 getFileName("styles.css");// "styles"
 getFileName("app.js");// "app"
 getFileName("app");// "app"
 getFileName("index.js");// "index"
 getFileName("index.html");//"index"
 getFileName("index.css");//"index"
 getFileName("index");//"index"
