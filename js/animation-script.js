$(document).ready(function(){

		var $panel1 = $("#panel1"),
			$panel2 = $("#panel2"),
			$panel3 = $("#panel3"),
			$panel1Text = $("#panel1 h1"),
			$panel2Text = $("#panel2 h2"),
			$info = $("#info"),
			$list = $("li"),
			$orderNow = $("#orderNow"),    
			tl;

		tl = new TimelineMax({repeat:3, repeatDelay:2});

		tl.from($panel1, 0.5, {opacity:0})
		  .from($panel1Text, 0.5, {scale:0.5, opacity:0, ease:Back.easeOut})
		  .set($panel2, {top:0}, "+=2")
		  .from($panel2, 0.2, {opacity:0, scale:1.5})
		  .from($panel2Text, 0.2, {yPercent:100}, "+=0.5")
		  .to($panel2Text, 0.2, {yPercent:100}, "+=2")
		  .set($panel3, {top:0}, "final")
		  .from($info, 0.5, {yPercent:100}, "final")
		  .to($panel2, 0.5, {y: -60}, "final")
		  .staggerFrom($list, 0.3, {opacity:0, x:50}, 0.1, "+=0.2")
		  .from($orderNow, 0.5, {scale:0, opacity:0, ease:Back.easeOut});


	});