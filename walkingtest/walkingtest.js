<!DOCTYPE html>
<html>
<head>
<title>Walking Test</title>
<script>
function changeit() {
	var spot = document.getElementById("mylist");
	var item1 = spot.firstChild;
	var item2 = item1.nextSibling;
	var item3 = item2.nextSibling;
	var item4 = item3.nextSibling;
	item1.innerHTML = prompt("1st item", "Apple");
	item2.innerHTML = prompt("2nd item", "Banana");
	item3.innerHTML = prompt("3rd item", "Carrot");
	item4.innerHTML = prompt("4th item", "Debino");
	
}
</script>
</head>
<body>
<h1>Changing elements by walking</h1>
<h2>Here's a list of food to buy</h2>
<ul id="mylist"><li>Carrots</li><li>Brussel Sprouts</li><li>Eggplant</li><li>Tofu</li></ul>
<button type="button" onclick="changeit()">
Change the list
</button>
</body>
</html>