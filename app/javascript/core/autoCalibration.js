/*
    WebPlotDigitizer - https://automeris.io/WebPlotDigitizer

    Copyright 2010-2019 Ankit Rohatgi <ankitrohatgi@hotmail.com>

    This file is part of WebPlotDigitizer.

    WebPlotDigitizer is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    WebPlotDigitizer is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with WebPlotDigitizer.  If not, see <http://www.gnu.org/licenses/>.
*/

var wpd = wpd || {};

wpd.autoCal = (function() {
    function start() {
        var points=number_detection;
            var nxy=new Array();
            var nxx=new Array();
            var nxval=new Array();
            var nyy=new Array();
            var nyx=new Array();
            var nyval=new Array();
            cx=occur(points.y) 
//cx is the maximum occurence of a defined position y. 
//This will likely correspond to the position of each label of x aligned on y axis
            cy=occur(points.x)
            //same for cy with x position

            for (i =0; i<points.y.length;i++){
                if(points.y[i]==cx){
                    nxx.push(points.x[i])
                    nxy.push(points.y[i])
                    nxval.push(points.val[i])
                }
                if(points.x[i]==cy){
                    nyx.push(points.x[i])
                    nyy.push(points.y[i])
                    nyval.push(points.val[i])
                }
            }
        
            console.log(nxx[0]+','+nxval[0])
            console.log(nxx[nxx.length-1]+','+nxval[nxval.length-1])
            console.log(nyy[0]+','+nyval[0])
            console.log(nyy[nyy.length-1]+','+nyval[nyval.length-1])
        
        }
        function number_detection(){
            let img = new Image();
            var det_point = {
                x: new Array(), 
                y: new Array(), 
                val: new Array() 
            };
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
                        det_point.x.push((b.x0+b.x1)/2)
                        det_point.y.push((b.y0+b.y1)/2)
                        det_point.val.push(w.text)
                    } 
                })
            })}
            return det_point
        }

        function occur(arr) {
        /* Getting the value of the most frequent occurence*/
            var occ=0;
            var tocc=0;
            var j=0;
            var max=0;
            while ( j < arr.length ) {   
             for ( var i = 0; i < arr.length; i++ ) {
                if(arr[j]==arr[i]){
                    tocc++;
                 }
                }
            if(tocc>occ){
                max=arr[j];
                occ=tocc;
            }
            tocc=0;
            j++;  
            }
            return [max];
        }
})();