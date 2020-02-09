
img = new Array("img/guu.jpg","img/choki.jpg","img/paa.jpg"); //*1
count = -1; //*2
stop = false;
ugoki.style.display ="none";
kaiten();

function kaiten() {
    if(!stop){
	//画像番号
	count++; //*3
	//画像の枚数確認
	if (count == img.length) count = 0; //*4
	//画像出力
	document.ugoki.src = img[count]; //*5
	//次のタイマー呼びだし
    setTimeout("kaiten()",50); //*6
    }
}

$(".pon").on("click", function(){
    $(".pon").fadeOut('fast')
    ugoki.style.display ="block";
})

$(".ugoki").on("click", function(){
    var random = Math.floor( Math.random() *3);
    if(stop){
        stop = false;
            $(".ugoki").html('<img src="img/paa.jpg" name="ugoki">');
            kaiten();
    }else {
    stop = true;
      if(random ==0){
       $(".ugoki").html('<img src="img/guu.jpg">');}
      else if(random ==1){
        $(".ugoki").html('<img src="img/choki.jpg">');}
     else if(random ==2){
        $(".ugoki").html('<img src="img/paa.jpg">');}
    
}})