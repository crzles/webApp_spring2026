const textarea = document.querySelector('textarea');
const charCount = document.querySelector('.charcount');
const tweetBt = document.querySelector('.tweetbutton');
const maxChars = 160;

textarea.addEventListener('input', function() {
    const remaining = maxChars - textarea.value.length;
    charCount.textContent = remaining + ' chars remaining';

    charCount.classList.remove('warning', 'danger');

    if (remaining < 0) {
        charCount.classList.add('danger');
        tweetBt.disabled = true;
    }
    else if (remaining <= 30) {
        charCount.classList.add('warning');
        tweetBt.disabled =  false;
    }
    else {
        tweetBt.disabled = false;
    }
});