function myFunction() {
    var id = document.getElementById("myid").value;
    var flag = false;
	id += ""; 
	if (id.length != 9 || isNaN(id)) {
		flag = false;
	}
	var counter = 0, incNum;
	for (var i in id) {
		incNum = Number(id[i]) * ((i % 2) + 1);
		counter += (incNum > 9) ? incNum - 9 : incNum;
	}
 
    
	if (counter % 10 === 0)
    document.write(id + "\n");
    else
     document.write("ID not correct <br/>");
  
  document.writeln("------------------------------<br/>");
  document.write("Odeya Levi<br/>");
  document.write("orli salari<br/>");
  document.write("shamira cherry<br/>");
  
                 
  
  
 
}
