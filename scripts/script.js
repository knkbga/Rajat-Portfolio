$('.insider').css('margin-top',(($(window).height()-500)/2));
$('.insider').show();
$('#tag').css('top',$('.insider').offset().top-40);
$('#tag').css('left',$('.insider').offset().left);
$('#tag').show();
//$('.insider').css('margin-top',);
$(function(){
	$('.purple-square').hide().show("slide", { direction: "left" }, 800 , function(){
		$('#circle-1').fadeIn(100,function(){
			$('#circle-2').fadeIn(100,function(){
				$('#circle-3').fadeIn(100,function(){
					$('#circle-4').fadeIn(100,function(){
						$('#circle-5').fadeIn(100,function(){
							$('#circle-1').animate({ left: 447 , top: 313 }, 500);
							$('#circle-2').animate({ left: 424 , top: 250 }, 500);
							$('#circle-3').animate({ left: 402 , top: 190 }, 500);
							$('#circle-4').animate({ left: 381 , top: 132 }, 500);
							$('#R').fadeIn(800);
							$('.list').fadeIn(800);
						}); 
					});
				});
			});
		});
	});
	
	$('.list a').click(function(){
		var type = $(this).text().toLowerCase();
		$('#portfolio').fadeOut(function(){
			
			switch(type){
				case "about":{
					show_about();
				}
				break;
				case "branding":{
					show_branding();
				}
				break;
				case "illusration":{
					show_illusration();
				}
				break;
				case "interaction":{
					show_interaction();
				}
				break;
				case "posters":{
					show_posters();
				}
				break;
				case "videos":{
					show_videos();
				}
				break;
				case "contact":{
					show_contact();
				}
			};
		});
		// contact();
		
		$('#portfolio_label').css('font-weight',100);
		$('#append_label').text(' | '+$(this).text());
	});

	$('#portfolio_label').click(function(){
		
		
		if($('#about').css('display')!='none'){
			hide_about();
		};
		if($('#branding').css('display')!='none'){
			hide_branding();
		};
		if($('#illustration').css('display')!='none'){
			hide_illsutration();
		};
		if($('#interaction').css('display')!='none'){
			hide_interaction();
		};
		if($('#posters').css('display')!='none'){
			hide_posters();
		};
		if($('#videos').css('display')!='none'){
			hide_videos();
		};
		if($('#contact').css('display')!='none'){
			hide_contact();
		};
		
		$('#append_label').text('');
		$('#portfolio_label').css('font-weight',900);
	});
	
	
	
	
	
	function show_contact(){
		console.log("Show contact function called");
		$('#contact').fadeIn();
		$("#contact_lower_purple").hide().show("slide", { direction: "left" },1400,function(){
			$('.social_circle').fadeIn(500);
		});
	}
	function hide_contact(){
		$('#contact').fadeOut();
		$("#contact_lower_purple").css('display','none');
		$('.social_circle').hide(function(){
			$('.social_circle').fadeOut(function(){
				$('#portfolio').fadeIn();
			});
		});
		
	}
	
	
	function show_videos(){
		
	}function hide_videos(){
		
	}
	
	
	function show_about(){
		
	}function hide_about(){
		
	}
	
	
	function show_branding(){
		
	}function hide_branding(){
		
	}
	
	
	function show_illsutration(){
		
	}function hide_illsutration(){
		
	}
	
	
	function show_interaction(){
		
	}function hide_interaction(){
		
	}
	
	
	function show_posters(){
		$('#posters').fadeIn();
	}function hide_posters(){
		$('#posters').hide();
	}
});

