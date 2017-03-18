$( document ).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDv02ymc8vuJ57vkYMxc5DyxrLFXzk8SNw",
    authDomain: "to-do-list-9b8f9.firebaseapp.com",
    databaseURL: "https://to-do-list-9b8f9.firebaseio.com",
    storageBucket: "to-do-list-9b8f9.appspot.com",
    messagingSenderId: "97555882407"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var newToDo = "";
  var toDoKey = "";

  //grabbing the text the user inputs and making it a var
  $(".button-primary").on("click", function() {
  	 	event.preventDefault() ;
  		newToDo = $("#newItem").val().trim();
  		console.log(newToDo);
  		$("#newItem").val(" ");

  		database.ref().push({
  			newToDo: newToDo,
  			dateAdded: firebase.database.ServerValue.TIMESTAMP
  		})
  });//end on click event listener

  database.ref().on("child_added", function(childSnapshot) {
  	toDoKey = childSnapshot.key;
  	console.log(childSnapshot.val().newToDo);
  	console.log(toDoKey)

  	var li = $("<li>")

  	li.html(childSnapshot.val().newToDo);
  	li.attr("class", toDoKey)
  	$("#list").append(li);


	}, function(errorObject) {
	  console.log("Errors handled: " + errorObject.code);
	});//end of child added listner

  $("li").on("click", function(childSnapshot){

  	//grab the key from the class attribute of the li clicked

  	//use the remove() firebse function to deete that key
  		//ref.child(toDoKey).remove();
  })


});//end doc.ready

