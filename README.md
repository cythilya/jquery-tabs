# jQuery Tabs Plugin
Tabs plugin for jquery.

## Features
- Lightweight
- Easy to customize

##Options
- customClass: add custom class.
- selectedNumber: default tab number to show when page loaded. default value: 1.

## Setup
### HTML Snippet

	<div class="tabs">
		<!-- tab nav start -->
	    <ul class="tabs-nav clearfix">
	        <li class="tabs-nav-item selected">
	            <a class="tabs-nav-link" href="#tab-1">tab 1</a>
	        </li>
	        <li class="tabs-nav-item">
	            <a class="tabs-nav-link" href="#tab-2">tab 2</a>
	        </li>
	    </ul>
		<!-- tab nav end -->
		<!-- tab panel start -->
	    <div id="tab-1" class="tab-panel">
	        <div class="tab-content">
	            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam...     
	        </div>
	    </div>
	    <div id="tab-2" class="tab-panel">
	        <div class="tab-content">
	            Sed ut perspiciatis unde omnis...
	        </div>
	    </div>
		<!-- tab panel end -->
	</div>

### JavaScript Snippet

```javascript
	//start
	$(function() {
	    $('.tabs').tabs({
	        customClass: 'custom',
	        selectedNumber: 2
	    });
	});
```

## Requirements
- jQuery v.1.8.2+  

## Browsers
- Google Chrome
- Mozilla Firefox
- Microsoft Internet Explorer 8.0+

## Demo
[Demo](http://cythilya.github.io/jquery-tabs)

## License
Released under the [MIT license](http://opensource.org/licenses/MIT).