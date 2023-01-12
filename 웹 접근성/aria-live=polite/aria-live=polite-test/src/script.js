 $(document).ready(function(){
   
   $("button").click(function(){
     var btn_id = $(this).attr('id');                             // 클릭한 버튼 아이디 추출
     var cont_num = btn_id.substring(0,btn_id.search('_btn'));    // 추출한 아이디에서 _btn 삭제
     var display_check = $("."+cont_num).css("display");          // 클릭한 버튼의 display 추출
     
     // 클릭한 버튼이 첫 번째 보기 버튼일 때
     if(cont_num == "p_check" && display_check == "block"){
       $("."+ cont_num).css({'display':'none'});
       $("#"+ cont_num +"_btn").html("보기");
     } else if(cont_num == "p_check" && display_check == "none"){
       $("."+ cont_num).css({'display':'block'});
       $("#"+ cont_num +"_btn").html("닫기");
     }
     // 클릭한 버튼이 두 번째 보기 버튼일 때
     else if(cont_num == "p_check2" && display_check == "block"){
       $("."+ cont_num).css({'display':'none'});
       $("#"+ cont_num +"_btn").html("보기");
     } else if(cont_num == "p_check2" && display_check == "none"){
       $("."+ cont_num).css({'display':'block'});
       $("#"+ cont_num +"_btn").html("닫기");
     }
      
     
     // 1. display: none -> block / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_1"){                              
       $("#"+ cont_num +"_text").css({'display':'block'});
       setTimeout(function(){
        $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 2. display: none -> block / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_2"){
       $("#"+ cont_num +"_text").css({'display':'block'});
       $("#"+ cont_num +"_text").html("Text");
     }
     // 3. display: none -> block /
     else if(cont_num == "cont_3"){
       $("#"+ cont_num +"_text").css({'display':'block'});
     }
     // 4. 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_4"){
       setTimeout(function(){
        $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 5. 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_5"){
       $("#"+ cont_num +"_text").html("Text");
     }
     // 6. 없음
     // 7. aria-live 추가 / 딜레이 없음 / display: none -> blcok / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_7"){
       $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       $("#"+ cont_num +"_text").css({'display':'block'});
       setTimeout(function(){
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 8. aria-live 추가 / 딜레이 없음 / display: none -> blcok / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_8"){
       $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       $("#"+ cont_num +"_text").css({'display':'block'});
       $("#"+ cont_num +"_text").html("Text");
     }
     // 9. aria-live 추가 / 딜레이 없음 / display: none -> block /
     else if(cont_num == "cont_9"){
       $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       $("#"+ cont_num +"_text").css({'display':'block'});
     }
     // 10. aria-live 추가 / 딜레이 없음 / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_10"){
       $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       setTimeout(function(){
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 11. aria-live 추가 / 딜레이 없음 / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_11"){
       $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       $("#"+ cont_num +"_text").html("Text");
     }
     // 12. aria-live 추가 / 딜레이 없음
     else if(cont_num == "cont_12"){
       $("#"+ cont_num +"_text").attr('aria-live', 'polite');
     }
     // 13. aria-live 추가 / 딜레이 있음 / display: none -> block / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_13"){
       setTimeout(function(){
         $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       },200);
       $("#"+ cont_num +"_text").css({'display':'block'});
       setTimeout(function(){
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 14. aria-live 추가 / 딜레이 있음 / display: none -> block / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_14"){
       setTimeout(function(){
         $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       },200);
       $("#"+ cont_num +"_text").css({'display':'block'});
       $("#"+ cont_num +"_text").html("Text");
     }
     // 15. aria-live 추가 / 딜레이 있음 / display: none -> blcok /
     else if(cont_num == "cont_15"){
       setTimeout(function(){
         $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       },200);
       $("#"+ cont_num +"_text").css({'display':'block'});
     }
     // 16. aria-live 추가 / 딜레이 있음 / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_16"){
       setTimeout(function(){
         $("#"+ cont_num +"_text").attr('aria-live', 'polite');
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 17. aria-live 추가 / 딜레이 있음 / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_17"){
       setTimeout(function(){
         $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       },200);
       $("#"+ cont_num +"_text").html("Text");
     }
     // 18. aria-live 추가 / 딜레이 있음 /
     else if(cont_num == "cont_18"){
       setTimeout(function(){
         $("#"+ cont_num +"_text").attr('aria-live', 'polite');
       },200);
     }
     // 19. display: none -> block / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_19"){
       $("#"+ cont_num +"_txt").css({'display':'block'});
       setTimeout(function(){
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 20. display: none -> block / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_20"){
       $("#"+ cont_num +"_txt").css({'display':'block'});
       $("#"+ cont_num +"_text").html("Text");
     }
     // 21. display: none -> block / 
     else if(cont_num == "cont_21"){
       $("#"+ cont_num +"_txt").css({'display':'block'});
     }
     // 22. 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_22"){
       setTimeout(function(){
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 23. 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_23"){
       $("#"+ cont_num +"_text").html("Text");
     }
     // 24. 없음
     // 25. 부모 aria-live 추가 / 딜레이 없음/ display: none -> block / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_25"){
       $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       $("#"+ cont_num +"_txt").css({'display':'block'});
       setTimeout(function(){
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 26. 부모 aria-live 추가 / 딜레이 없음 / display: none -> block / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_26"){
       $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       $("#"+ cont_num +"_txt").css({'display':'block'});
       $("#"+ cont_num +"_text").html("Text");
     }
     // 27. 부모 aria-live 추가 / 딜레이 없음 / display: none -> block 
     else if(cont_num == "cont_27"){
       $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       $("#"+ cont_num +"_txt").css({'display':'block'});
     }
     // 28. 부모 aria-live 추가 / 딜레이 없음 / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_28"){
       $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       setTimeout(function(){
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     //29. 부모 aria-live 추가 / 딜레이 없음 / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_29"){
       $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       $("#"+ cont_num +"_text").html("Text");
     }
     // 30. 부모 aria-live 추가 / 딜레이 없음 /
     else if(cont_num == "cont_30"){
       $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
     }
     // 31. 부모 aria-live 추가 / 딜레이 있음 / display:none -> block / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_31"){
       setTimeout(function(){
         $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       },200);
       $("#"+ cont_num +"_txt").css({'display':'block'});
       setTimeout(function(){
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 32. 부모 aria-live 추가 / 딜레이 있음 / display:none -> block / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_32"){
       setTimeout(function(){
         $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       },200);
       $("#"+ cont_num +"_txt").css({'display':'block'});
       $("#"+ cont_num +"_text").html("Text");
     }
     // 33. 부모 aria-live 추가 / 딜레이 있음 / display:none -> block
     else if(cont_num == "cont_33"){
       setTimeout(function(){
         $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       },200);
       $("#"+ cont_num +"_txt").css({'display':'block'});
     }
     // 34. 부모 aria-live 추가 / 딜레이 있음 / 텍스트 추가 / 딜레이 있음
     else if(cont_num == "cont_34"){
       setTimeout(function(){
         $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
         $("#"+ cont_num +"_text").html("Text");
       },200);
     }
     // 35. 부모 aria-live 추가 / 딜레이 있음 / 텍스트 추가 / 딜레이 없음
     else if(cont_num == "cont_35"){
       setTimeout(function(){
         $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       },200);
       $("#"+ cont_num +"_text").html("Text");
     }
     // 36. 부모 aria-live 추가 / 딜레이 있음
     else if(cont_num == "cont_36"){
       setTimeout(function(){
         $("#"+ cont_num +"_txt").attr('aria-live', 'polite');
       },200);
     }
     
     
   });

   
});