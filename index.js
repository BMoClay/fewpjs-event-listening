const input = document.getElementById('input');

input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });

function addingEventListener() {
    input.addEventListener('click', function(event) {
        return('I was clicked!');
    });
}


