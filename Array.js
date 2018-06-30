<html>
<head>
	<title >
	"Array!!!"
	</title>
	<script type = 'text/javascript'>
		var student = new Array ("thuy", "vy", "minh", "ngoc", "viet")
		Array.prototype.displayItem=function(){
			for (i=0; i<this.length;i++) {
				document.write(this[i]+"<br />");
			}
		}
		document.write("student array <br/>");
		student.displayItem();
		document.write("<br /> The number of item in student array is" + this.length+ "<br/");
		document.write("<br/> The Sort of Array <br/>");
		student.sort();
		student.displayItem();
		document.write("<br/> The reverse array <br/>");
		student.reverse();
		student.displayItem();
		document.write("<br/> Remove the last item</br>");
		student.pop();
		student.displayItem();
		document.write("<br/> student add one more item <br/>");
		student.push('NewStuff');
		student.displayItem();
		document.write("test");
	</script>
	
</head>
<body>
</body>

</html>
