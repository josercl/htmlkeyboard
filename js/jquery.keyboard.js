(function($){
    $.fn.keyboard=function(opts){

        var defaults={
            lang: "es",
            overClass: "over",
            cssPath: "css",
            keyboardPath: "lang"
        }

        var options = $.extend({}, defaults, opts);

        $("<link href=\""+options.cssPath+"/keyboard-"+options.lang+".css\" type=\"text/css\" rel=\"stylesheet\">").appendTo($("head"));
        $(this).addClass("keyboard-container").wrap("<div class='keyboard-wrapper'></div>");
        $(".keyboard-wrapper").append("<a class='keyboard-close' href='#close'>Close X</a>");

        $(".keyboard-close").click(function(){
            $(".keyboard-wrapper").slideUp("fast");
            return false;
        });


        $(this).load(options.keyboardPath+"/keyboard-"+options.lang+".html",function(){

            var theInput=null;
            var shift_pressed=false;
            var caps_pressed=false;
            var alt_pressed=false;

            $("input").focus(function(){
                theInput=$(this);
                $(".keyboard-wrapper").slideDown("fast");
            });

            $("textarea").focus(function(){
                theInput=$(this);
                $(".keyboard-wrapper").slideDown("fast");
            });

            $(".caps").click(function(){
                caps_pressed=!caps_pressed;
                $(".letter").toggleClass("shift_on");
            });

            $(".shift").click(function(){
                $(".letter").toggleClass("shift_on");
                if(!shift_pressed){
                    $(".on").show();
                    $(".off").hide();
                    $(".alt").hide();

                }else{
                    $(".on").hide();
                    $(".off").show();
                    $(".alt").hide();

                }
                shift_pressed=!shift_pressed;
            });

            $(".alt-key").click(function(){
                if(!alt_pressed){
                    $(".on").hide();
                    $(".off").hide();
                    $(".alt").show();
                }else{
                    $(".on").hide();
                    $(".off").show();
                    $(".alt").hide();
                }
                alt_pressed=!alt_pressed;
            });

            $("#keyboard .enter1").hover(function(){
                $("#keyboard .enter2").toggleClass(options.overClass);
            },function(){
                $("#keyboard .enter2").toggleClass(options.overClass);
            });

            $("#keyboard .enter2").hover(function(){
                $("#keyboard .enter1").toggleClass(options.overClass);
            },function(){
                $("#keyboard .enter1").toggleClass(options.overClass);
            });

            $("#keyboard li").hover(function(){
                $(this).toggleClass(options.overClass);
            },function(){
                $(this).toggleClass(options.overClass);
            });

            $("#keyboard .letter").click(function(){
                var texto=$(this).text();
                if(shift_pressed || caps_pressed){
                    texto=texto.toUpperCase();
                }
                $(theInput).val($(theInput).val()+texto);
                $(theInput).focus();
            });

            $("#keyboard .symbol").click(function(){
                var texto="";
                if(shift_pressed){
                    texto=$(this).find(".on").text();
                }else if(alt_pressed){
                    texto=$(this).find(".alt").text();
                }else{
                    texto=$(this).find(".off").text();
                }
                $(theInput).val($(theInput).val()+texto);
                $(theInput).focus();
            });

            $("#keyboard .backspace").click(function(){
                var str=$(theInput).val();
                str=str.substr(0, str.length-1);
                $(theInput).val(str);
                $(theInput).focus();
            });

            $("#keyboard .enter").click(function(){
                $(theInput).val($(theInput).val()+"\n");
                $(theInput).focus();
            });

            $("#keyboard .tab").click(function(){
                $(theInput).val($(theInput).val()+"\t");
                $(theInput).focus();
            });

            $("#keyboard .empty").unbind("click");

        });
    };
})(jQuery);
