$(window).on('scroll',function(){
  var fig = foo;
  var name ="rob";
  var list=$('article');
  var listArr=makeAnArray(list);
  var scrollDist=$(window).scrollTop();
  var winHeight=$(window).height();
  var winBottom=winHeight+scrollDist;
  var headHeight=$('.header').height();
  var heroHeight=$('.hero').height();
  
  function makeAnArray(obj){
    return [].map.call(obj,function(el){
      return el;
  });
  }
  
   if(scrollDist>heroHeight){
		$('.header').addClass('fixed');
		$('.placeHolder').css('display','block');
		listArr.forEach(function(el,ind){
      		var elTop=$(el).offset().top;
      		var elBottom=elTop + $(el).height();
  				console.log(listArr);
			if(elTop <= (scrollDist + headHeight) && (elBottom>=scrollDist) ){
				$('li.active').removeClass('active');
				$('li').eq(ind).addClass('active');
			}
		});
   		}else{
				$('li .active').removeClass('active'); 
				$('.header').removeClass('fixed');
				$('.placeHolder').css('display','none');
			}  
});
