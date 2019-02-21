$.get( "http://localhost:8888/getStudent", function( data ) {
  $( "#result" ).html( data );
  alert( "Load was performed." );
});