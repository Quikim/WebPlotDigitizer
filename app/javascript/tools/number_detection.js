number_detection=function(){
    let img = new Image();
    var xdat= new Array();
    var ydat= new Array();
    var val=new Array();
    img.src = "img/Figure2.png";
    img.onload =function(){
        Tesseract.recognize(img, {
            tessedit_char_whitelist: "-+0123456789.",
        }).progress((progress)=>{
            console.log(progress)
            if(progress.status ==="recognizing text"){
                $('#progress').text(progress.progress*100+"%");
            }
        }).then((result)=>{
        result.words.forEach(function(w){
            var b = w.bbox;
            if(w.confidence>70){
                xdat.push((b.x0+b.x1)/2)
                ydat.push((b.y0+b.y1)/2)
                val.push(w.text)
            } 
        })
    })}

}
newB = {
    i: branches.length,
    x: end.x, 
    y: end.y, 
    a: b.a + da + daR, 
    l: b.l * dl, 
    d: b.d + 1,
    parent: b.i
};
