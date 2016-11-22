var ripple = function(element, e){
    var color, time;
    if (color == undefined) {
        color = "rgba(0,0,0,0.2)";
    }
    if (time == undefined) {
        time = '500';
    }
    var inkParent = $("<div class='ink-parent'></div>");
    var ink = $("<span class='ink'></span>");
    //Setting inkParent CSS
    var transform = element.css('transform');
    if(transform != undefined){
        inkParent.css({'transform':transform});
    }
    inkParent.css({
       'position':'absolute',
        'z-index': 5
    });
    if(element.css('position') == "relative"){
        inkParent.css({
            left: 0,
            top:0
        });
    }


};

var inq = function(element){
    var $this = this;
    this.AdjustInkParentCSSByLimit = function($element, parent ,limit){
        if(limit != false){
            parent.css({
                width: limit.outerWidth() + 'px',
                height: limit.outerHeight() + 'px',
                'border-radius':limit.css('border-radius'),
                position: 'absolute',
                background: 'none',
                'z-index': '1',
                overflow: 'hidden'
            });
            if(limit.css('position') == undefined){
                parent.css({
                    top: limit.position().top + 'px',
                    left: limit.position().left + 'px'
                });
            }
            else {
                parent.css({
                    top: '0',
                    left: '0'
                });
            }
        }
        else{
            parent.css({
                width: $element.outerWidth(),
                height: $element.outerHeight(),
                'border-radius': $element.css('border-radius'),
                position: 'absolute',
                background: 'none',
                'z-index': '1',
                overflow: 'hidden'

            });

            if($element.css('position') == undefined){
                parent.css({
                    top: $element.position().top + 'px',
                    left: $element.position().left + 'px'
                });
            }
            else {
                parent.css({
                    top: '0',
                    left: '0'
                });
            }
        }

    };
    return function(options){
        $(document).on('mousedown', element, function(){
            //region Declare Variable Given and Assumed Both
            var $element = $(element),
                parent = $("<div class='ink-parent'></div>"),
                ink = $("<span class='ink'></span>"),
                time = options.time != undefined && (typeof options.time).toString() == "number" ? options.time : 500,
                color = options.color != undefined && (typeof options.time).toString() == "string" ? options.color : "rgba(0,0,0,0.1)",
                transform = $element.css('transform');
            if(transform != undefined){
                parent.css({'transform':transform});
            }
            var limit = options.limit != undefined ? $(this).closest(options.limit) : false;
            //endregion

            //region Adjust Parent CSS according to the Limit
            $this.AdjustInkParentCSSByLimit($element, parent, limit);
            //endregion



        });
    };

};