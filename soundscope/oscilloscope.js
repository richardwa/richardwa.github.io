function Oscilloscope(graph){
    //default settings
    var settings = {
        level:0,
        type:"rising"
    };

    //public method for setting trigger
    this.setTrigger = function(o){
        settings = o;
    };

    function getTrigger(settings, buffer){
        var level = settings.level + 128;
        var condition = {
            rising:  (prev,curr) => prev === true && curr === false,
            falling: (prev,curr) => prev === false && curr === true,
            toggle:  (prev,curr) => prev !== curr
        }[settings.type];

        var previous = buffer[0] < trigger;
        for (var i = 1; i < buffer.length; i++){
            var current = buffer[i] < trigger;
            if (condition(previous, current)){
                return i;
            }
            previous = current;
        }
    }
    

    source.onData(function(buffer){
        var offset = getTrigger(settings, buffer);
        graph.draw(buffer, offset);
    });
}

