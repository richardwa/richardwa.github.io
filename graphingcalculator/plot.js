
function Plot(canvas) {
    var c = canvas.getContext('2d'),
        r = {
            x:[-10,10],
            y:[-10,10] 
        },
        pxToLineSpace = function(width, min, max){
           return function (px) {
               return px * (max - min) / width + min;
           };
        },
        lineSpaceToPx = function(width,min,max){
            return function (val) {
               return (val + min) * width / (max - min);
            };
        };

    return {
        plot: function(func){
            var i,j,x,y,
                w = canvas.width,
                xTransform = pxToLineSpace(canvas.width,      r.x[0],r.x[1]),
                yTransform = lineSpaceToPx(canvas.height * -1,r.y[0],r.y[1]);
            
            c.beginPath();
            //loop over width of canvas
            for (i=0;i<w;i++){
                //transform width(pixels) to math range
                x = xTransform(i); 
                //get return of function on x
                y = func(x);
                //transform y to pixels
                j = yTransform(y);
                console.log(j);
                c.lineTo(i,j);
            }
            c.stroke();
        },
        clear: function(){
            c.clearRect(0,0,w,h);
        }
    };
}
