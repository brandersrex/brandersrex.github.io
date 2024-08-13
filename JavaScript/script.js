document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var comment = document.getElementById('comment').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/submit_comment.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = '<h5>' + name + ' (' + mail + ')</h5><p>' + comment + '</p>';
            document.getElementById('comments-section').appendChild(newComment);
        }
    };

    xhr.send('name=' + encodeURIComponent(name) + '&mail=' + encodeURIComponent(mail) + '&comment=' + encodeURIComponent(comment));
});
