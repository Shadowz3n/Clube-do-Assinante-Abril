document.addEventListener('deviceready', function(){

	StatusBar.backgroundColorByName("gray");
	StatusBar.styleLightContent();
	StatusBar.overlaysWebView(false);
	StatusBar.show();

	$(document).on("touchend", "#menu", function(){
		$("#menu").toggleClass("menu_back");					
		$("#configs").removeClass("configs_back");
		$(".menu_content_right").removeClass("menu_content_opened");
		$(".menu_content_left").toggleClass("menu_content_opened");
	}).on("touchend", "#configs", function(){
		$("#configs").toggleClass("configs_back");
		$("#menu").removeClass("menu_back");
		$(".menu_content_left").removeClass("menu_content_opened");
		$(".menu_content_right").toggleClass("menu_content_opened");
	});
	
	//PushbotsPlugin.initialize("58121b824a9efaa27c8b4567");
	
	var Pushbots = PushbotsPlugin.initialize("58121b824a9efaa27c8b4567", {"android":{"sender_id":"188976841580"}});
	
	Pushbots.on("registered", function(token){
		console.log("Registration Id:" + token);
	});

	Pushbots.getRegistrationId(function(token){
		console.log("Registration Id:" + token);
	});
	
	
	/*
	var push = PushNotification.init({
		android: {
			senderID:"188976841580"
		},
		browser: {
			pushServiceURL: 'http://push.api.phonegap.com/v1/push'
		},
		ios: {
			alert: "true",
			badge: "true",
			sound: "true"
		},
		windows: {}
	});
	
	
	push.on('registration', function(data){
		// data.registrationId
	});

	push.on('notification', function(data){
		
		// data.message,
		// data.title,
		// data.count,
		// data.sound,
		// data.image,
		// data.additionalData
	});

	push.on('error', function(e){
		alert(e.message);
		// e.message
	});
	*/

	setTimeout(function(){
	
		$("#logo").removeClass("logo_loading");
		$("#header").removeClass("header_hide");
		setTimeout(function(){
			$("#menu").fadeIn(500);
			$(".content").fadeIn(500, function(){
			
				$(document).on("touchend", "#logo", function(){
					$("#menu").removeClass("menu_back");
					$("#configs").removeClass("configs_back");
					$(".menu_content_right").removeClass("menu_content_opened");
					$(".menu_content_left").removeClass("menu_content_opened");
				});
			
				/* Banner rotativo */
				var swiper = new Swiper('.clube_swiper',{
					effect: 'coverflow',
					grabCursor: true,
					centeredSlides: true,
					slidesPerView: 'auto',
					coverflow:{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows : true
					}
				});
				
				/* Menu de categorias */
				var swiperCategorias = new Swiper('.clube_categorias_swiper',{
					scrollbar: '.swiper-scrollbar',
					scrollbarHide: true,
      				slidesPerView: 4,
      				centeredSlides: true,
       				spaceBetween: 30,
				});
			});
			$("#configs").fadeIn(500);
		}, 700);
	}, 3000);
	
}, false);
