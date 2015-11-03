<!doctype html>
<!--[if lt IE 7]>  <html class="ie ie6 lte9 lte8 lte7"> <![endif]-->
<!--[if IE 7]>     <html class="ie ie7 lte9 lte8 lte7"> <![endif]-->
<!--[if IE 8]>     <html class="ie ie8 lte9 lte8"> <![endif]-->
<!--[if IE 9]>     <html class="ie ie9 lte9"> <![endif]-->
<!--[if gt IE 9]>  <html> <![endif]-->
<!--[if !IE]><!--> 
<html lang="en"><!--<![endif]-->
	<head>
		<meta charset="UTF-8">
		<title>Victory Bake Shop</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<!--link rel="stylesheet" href="bower_components/material-design-lite/material.min.css"-->
		<link rel="stylesheet" href="assets/styles/main.css">
		<!--[if lt IE 9]>
				<script src="html5shiv.js"></script>
		<![endif]-->
	</head>
	<body>
		<header class="header box-shadow">
			<h1>
				<a href="/">
					<img class="logo" src="assets/images/logo.png" alt="Victory Bake Shop">
				</a>
			</h1>
		</header>
		<section class="intro box-shadow">
			<p>Cakes and cupcakes for weddings, birthdays,<br /> special occasions and more.</p>
		</section>
		<div class="container">
			<main>
				<div class="gallery">
					<script id="template" type="x-tmpl-mustache">
						{{#data}}
							<div class="panel">
								<div class="inner-panel box-shadow">
									<div class="likes hearts box-shadow">
										{{likes.count}}
									</div>
									<img src="{{images.standard_resolution.url}}" />
									{{#caption.text}}
										<p>{{caption.text}}</p>
									{{/caption.text}}
								</div>
							</div>
						{{/data}}
					</script>
				</div>
			</main>
		</div>
		<footer id="footer">
			<nav>
				<ul>
					<li><a href="#contact" id="contactLink">Contact</a></li>
					<li><a href="#about" id="aboutLink">about</a></li>
					<li class="close-footer"><a href="#" id="closeFooter">X</a></li>
				</ul>
			</nav>
			<div class="about">
				<p>Victory Bake Shop is a work in progress. I pay very close attention to detail and I feel it's the small precise details that set my cakes apart from the rest.<br /><br /> I would be honored to be your baker and create memorable personalized desserts for all those special celebrations in your life.</p>
				<ul style="clear:both">
					<li><a class="icon email icon-envelop" href="mailto:crissy@victorybakeshop.com" target="_blank">crissy@victorybakeshop.com</a></li>
					<li><a class="icon instagram icon-instagram" href="https://instagram.com/victoryisinthekitchen/" target="_blank">victoryisinthekitchen</a></li>
				</ul>
			</div>
			<section class="contact">
				<form action="contact.php" id="contactForm" method="POST">
					<div>
						<input type="hidden" name="extra">
					</div>
					<div>
						<input name="name" type="text" placeholder="Full Name" class="box-shadow" required>
					</div>
					<div>
						<input name="email" type="email" placeholder="johndoe@test.com"  class="box-shadow" required>
					</div>
					<div>
						<textarea placeholder="Message" name="message" cols="25" rows="10"  class="box-shadow" spellcheck="true" required></textarea>
					</div>
					<div>
						<input name="due-date" type="date" placeholder="When do you need it?" class="box-shadow" required />
					</div>
					<button class="btn submit box-shadow" type="submit" value="Submit">Submit</button>
				</form>
				<ul style="clear:both">
					<li><a class="icon email icon-envelop" href="mailto:crissy@victorybakeshop.com" target="_blank">crissy@victorybakeshop.com</a></li>
					<li><a class="icon instagram icon-instagram" href="https://instagram.com/victoryisinthekitchen/" target="_blank">victoryisinthekitchen</a></li>
				</ul>
			</section>
		</footer>
	</body>
	<script src="bower_components/material-design-lite/material.min.js"></script>
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="bower_components/mustache.js/mustache.min.js"></script>
	<script src="assets/scripts/main.js"></script>
</html>
