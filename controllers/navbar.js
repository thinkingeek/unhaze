angular.module('unHaze')
    .controller('navbarCtrl',['$scope', '$element', '$state', function($scope, $element, $state){
        TabHighlighter.refresh();

        switch($state.current.name){
            case "master.tool.configure":
                TabHighlighter.set($('.tab-controls li a.configure'));
                break;
            case "master.tool.explore":
                TabHighlighter.set($('.tab-controls li a.explore'));
                break;
            case "master.tool.build":
                TabHighlighter.set($('.tab-controls li a.build'));
                break;
            case "master.tool.export":
                TabHighlighter.set($('.tab-controls li a.export'));
                break;
        }

        $element.on('click', '.tab-controls li a.configure', function(){
            TabHighlighter.set($(this));
            $state.go('master.tool.configure');
        });
        $element.on('click', '.tab-controls li a.explore', function(){
            TabHighlighter.set($(this));
            $state.go('master.tool.explore');
        });
        $element.on('click', '.tab-controls li a.build', function(){
            TabHighlighter.set($(this));
            $state.go('master.tool.build');
        });
        $element.on('click', '.tab-controls li a.export', function(){
            TabHighlighter.set($(this));
            $state.go('master.tool.export');
        });
    }]);
/*Textbox Events*/
$(document).on('focusin', '[navbar] input.search-textbox', function(){
    if($(this).val() <= 0){
        var parent = $(this).closest('div.search');
        parent.addClass('focused');
    }
});
$(document).on('focusout', '[navbar] input.search-textbox', function(){
    if($(this).val() <= 0){
        var parent = $(this).closest('div.search');
        parent.removeClass('focused');
    }
});
$(document).on('click', '[navbar] .search', function(){
    $(this).children('input.search-textbox').focus();
});

/*Text Key Events for Animating Icons i.e. .ico-btn*/
$(document).on('keyup', '[navbar] input.search-textbox', function(){
    var parent = $(this).closest('div.search');
    var phrase = $(this).val(),
        phrase_length = phrase.length;

    if(phrase_length >= 2){
        parent.addClass('multi-char');
        if(!parent.hasClass('not-null')){
            parent.addClass('not-null');
        }

    }
    else if(phrase_length == 1){
        parent.addClass('not-null');
        parent.removeClass('multi-char');
    }
    else if(phrase_length <= 0){
        parent.removeClass('not-null');
        parent.removeClass('multi-char');
    }
});

var TabHighlighter = {
    set: function($this){
        $('.tab-highlighter').css({
            'left':  $this.closest('li').offset().left,
            'width': $this.closest('li').outerWidth(),
            'display': 'block'
        });
        $this.closest('li').siblings('.active').removeClass('active');
        $this.closest('li').addClass('active');
    },
    refresh: function(){
        var $this = $('.tabs ul.navbar-body li.active a');
        $('.tab-highlighter').css({
            'left':  $this.closest('li').offset().left,
            'width': $this.closest('li').outerWidth()
        });
    }
};
$(window).resize(function(){
    TabHighlighter.refresh();
});
