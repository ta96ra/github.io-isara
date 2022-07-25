$(function(){
  // 受講の流れのSP時アコーディオン（不完全）
  $('.flow-item').click(function(){
    if(window.matchMedia("(max-width:768px)").matches){
      var $flowItemContent = $(this).find('.flow-item-content');
      if($flowItemContent.hasClass('open')){
        $flowItemContent
          .removeClass('open')
          .slideUp();
        $(this).find('.arrow')
          .css('transform','rotate(-45deg)');
      }else{
        $flowItemContent
          .addClass('open')
          .slideDown();
        $(this).find('.arrow')
          .css('transform','rotate(135deg)');
      }
    }else{
      $('.flow-item-content').show();
    };
  });

  // if(window.matchMedia("(max-width:768px)").matches){
  //   $('h1').text('あああ');
  // }else{
  //   $('.flow-item-content').show();
  // };


  // よくある質問のアコーディオン
  $('.question-item').click(function(){
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer
        .removeClass('open')
        .slideUp();
      $(this).find('.question .arrow')
        .css('transform','translate(-50%,-50%)rotate(-45deg)');  
    }else{
      $answer
        .addClass('open')
        .slideDown();
      $(this).find('.question .arrow')
        .css('transform','translate(-50%,-50%)rotate(135deg)')  
    }
  });  

  // topへ戻るのフェード
  var toTop = $('.to-top');
  toTop.hide();

  $(window).scroll(function(){
    if($(this).scrollTop() > 60){
      toTop.fadeIn();
    }else{
      toTop.fadeOut();
    }
  });

});







