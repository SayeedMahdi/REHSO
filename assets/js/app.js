$(document).ready(function () {
	$(".refugees-quote").slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});

$(document).ready(function () {
	$(".slick-image").slick({
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});

$(".flip-card").on("click", function () {
	$(this).toggleClass("flipped");
});

$(".nav-search-icon").click(function () {
	$(".search-overlay").css("display", "block");
	$(".search-modal").css("display", "block");
});

$(".fa-solid.fa-xmark").click(function () {
	$(".search-overlay").css("display", "none");
	$(".search-modal").toggle();
});

$(".tab-li.first").hover(
	function () {
		$(".tab-li.first").css("backgroundColor", "#00b8a5");
		$(".secondary-tab.first").css("display", "block");
	},
	function () {
		$(".secondary-tab.first").css("display", "none");
		$(".tab-li.first").css("backgroundColor", "#fff");
	}
);

$(".secondary-tab.first").hover(
	function () {
		$(".tab-li.first").css("backgroundColor", "#00b8a5");
		$(".secondary-tab.first").css("display", "block");
	},
	function () {
		$(".secondary-tab.first").css("display", "none");
		$(".tab-li.first").css("backgroundColor", "#fff");
	}
);

$(".tab-li.second").hover(
	function () {
		$(".tab-li.second").css("backgroundColor", "#00b8a5");
		$(".secondary-tab.second").css("display", "block");
	},
	function () {
		$(".secondary-tab.second").css("display", "none");
		$(".tab-li.second").css("backgroundColor", "#fff");
	}
);

$(".secondary-tab.second").hover(
	function () {
		$(".tab-li.second").css("backgroundColor", "#00b8a5");
		$(".secondary-tab.second").css("display", "block");
	},
	function () {
		$(".secondary-tab.second").css("display", "none");
		$(".tab-li.second").css("backgroundColor", "#fff");
	}
);

$(".tab-li.third").hover(
	function () {
		$(".tab-li.third").css("backgroundColor", "#00b8a5");
		$(".secondary-tab.third").css("display", "block");
	},
	function () {
		$(".secondary-tab.third").css("display", "none");
		$(".tab-li.third").css("backgroundColor", "#fff");
	}
);

$(".secondary-tab.third").hover(
	function () {
		$(".tab-li.third").css("backgroundColor", "#00b8a5");
		$(".secondary-tab.third").css("display", "block");
	},
	function () {
		$(".secondary-tab.third").css("display", "none");
		$(".tab-li.third").css("backgroundColor", "#fff");
	}
);

// $(".tab-li.forth").hover(
// 	function () {
// 		$(".tab-li.forth").css("backgroundColor", "#00b8a5");
// 		$(".secondary-tab.forth").css("display", "block");
// 	},
// 	function () {
// 		$(".secondary-tab.forth").css("display", "none");
// 		$(".tab-li.forth").css("backgroundColor", "#fff");
// 	}
// );

// $(".secondary-tab.forth").hover(
// 	function () {
// 		$(".tab-li.forth").css("backgroundColor", "#00b8a5");
// 		$(".secondary-tab.forth").css("display", "block");
// 	},
// 	function () {
// 		$(".secondary-tab.forth").css("display", "none");
// 		$(".tab-li.forth").css("backgroundColor", "#fff");
// 	}
// );

// $(".tab-li.fiveth").hover(
// 	function () {
// 		$(".tab-li.fiveth").css("backgroundColor", "#00b8a5");
// 		$(".secondary-tab.fiveth").css("display", "block");
// 	},
// 	function () {
// 		$(".secondary-tab.fiveth").css("display", "none");
// 		$(".tab-li.fiveth").css("backgroundColor", "#fff");
// 	}
// );

// $(".secondary-tab.fiveth").hover(
// 	function () {
// 		$(".tab-li.fiveth").css("backgroundColor", "#00b8a5");
// 		$(".secondary-tab.fiveth").css("display", "block");
// 	},
// 	function () {
// 		$(".secondary-tab.fiveth").css("display", "none");
// 		$(".tab-li.fiveth").css("backgroundColor", "#fff");
// 	}
// ); 


///////////////////////////////////////
// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.operations__tab');

	// Guard clause
	if (!clicked) return;

	// Remove active classes
	tabs.forEach(t => t.classList.remove('operations__tab--active'));
	tabsContent.forEach(c => c.classList.remove('operations__content--active'));

	// Activate tab
	clicked.classList.add('operations__tab--active');

	// Activate content area
	document
		.querySelector(`.operations__content--${clicked.dataset.tab}`)
		.classList.add('operations__content--active');
});