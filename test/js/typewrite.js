(function ($){
    $.fn.typewrite = function(options){
        var settings = $.extend({
            speed: 12,
            blinkSpeed: 2,
            showCursor: true,
            blinkingCursor: true,
            cursor: '|',
            selectedBackground: '#F1F1F1',
            selectedText: '#333333'
        }, options);
        settings.blinkSpeed = 1000 / settings.blinkSpeed;
        if(settings.showCursor){
            $(this).html('<span></span><span class="blinkingCursor">' + settings.cursor + '</span>');
            if(settings.blinkingCursor){
                setInterval(function(){
                    $('.blinkingCursor').toggle();
                }, settings.blinkSpeed);
            }
        }else{
            $(this).html('<span></span>');
        }
        settings.el = $(this).children('span')[0];
        settings.speed = 1500 / settings.speed;
        var actions = options.actions;
        actions.forEach(function(element, index){
            if(Object.keys(element)[0] === 'type'){
                if(element.type === '<br>'){
                    newLine();
                }else{
                    var text = $('<div/>').html(element.type).text();
                    typeText(text, settings);
                }
            }
        });
        function typeText(text){
            var chars = text.split('');
            chars.forEach(function(char, index){
                $(settings.el).delay(settings.speed).queue(function (next){
                    var text = $(this).html() + char;
                    $(this).html(text);
                    next();
                    if(index === chars.length - 1){
                        settings.queue = settings.queue - 1;
                        $(settings.mainel).trigger('typewriteTyped', text);
                    }
                });
            }, this);
        }    
    };
}(jQuery));
