        function menuAnimate () {
            let targetElement = $('.nav_link ul li'),
                tl = new TimelineMax({});
                
                tl
            
                    .to('.sidemenu_bar', 0.3, {right : 0})
                    .staggerFrom(targetElement, 0.3, {
                        cycle: {
                            x: [-50],
                        },
                        autoAlpha: 0,
                        onComplete: function () {

                        }
                    }, 0.1)

        }
        
                       
//           $(document).ready(function () {
//            $(".nav_bar").click(function () {
//                $(".sidemenu_bar").css({
//                    'right': '0'
//                });
//            });
//
//            $(".close_bar").click(function () {
//                $(".sidemenu_bar").css({
//                    'right': '-400px'
//                });
//            });
//        });
        
        $('.nav_bar').click(function(){
           menuAnimate();
        })
        
        
        $('.close_bar').click(function(){
              let targetElement = $('.nav_link ul li'),
            tl = new TimelineMax({delay : 0.3});
            tl
            .to('.sidemenu_bar', 0.5, {right : -400}, '-=0.3')
            
        })
        