$('#getStudent').click(() => {
  $.get( "http://localhost:8888/getStudent", function( data ) {
    $( "#result" ).html( data );
    alert( "Load was performed." );
  });
});

$('#checkDomains').click(() => {
  $.get( "http://localhost:8888/file", function( data ) {
    alert(data);
  });
});