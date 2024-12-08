document.getElementById('signInBtn').addEventListener('click', function () {
    showSignInAnimation();
});

document.getElementById('signUpBtn').addEventListener('click', function () {
    showSignUpAnimation();
});

function showSignInAnimation() {
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.style.transform = 'scale(0.8)';
    rightPanel.style.transition = 'transform 0.5s ease-in-out';
    setTimeout(() => {
        rightPanel.style.transform = 'scale(1)';
    }, 500);
}

function showSignUpAnimation() {
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.style.transform = 'rotateY(360deg)';
    rightPanel.style.transition = 'transform 0.5s ease-in-out';
    setTimeout(() => {
        rightPanel.style.transform = 'rotateY(0deg)';
    }, 500);
}
