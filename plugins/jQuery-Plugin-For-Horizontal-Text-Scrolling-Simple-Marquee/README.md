# Simple-Marquee


Copyright (C) 2016  Fabian Valle 


An easy to implement marquee plugin. I know its easy because even I can use it.


Forked from: https://github.com/conradfeyt/Simple-Marquee


Re-Written by: Fabian Valle (www.fabian-valle.com) (www.obliviocompany.com)



# Sample Usage:
```javascript
$('.simple-marquee-container').SimpleMarquee();
```

#HTML:
```html
<div class="simple-marquee-container">
	<div class="marquee-sibling">
		I am here to iritate you
	</div>
	<div class="marquee">
		<ul class="marquee-content-items">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
			<li>Item 5</li>
		</ul>
	</div>
</div>
```

#Don't forget to include the CSS:
```html
<link rel="stylesheet" href="css/marquee.css" />
```

#Quirk 1: simple-marquee-container DOM created dynamically after an AJAX call
```javascript
//quirky stuff when the DOM for the 
//marquee-container is created dynamically
//after an AJAX call. If the window is focused
//it will not re-trigger the 'focus' upon
//AJAX completion. 
$(".marquee-1").trigger('mouseenter');
$(".marquee-1").trigger('mouseleave');
```
