function kliko() {
   
    let a = document.getElementById('in1').value;
    let b = document.getElementById('in2').value;

    if (a===""|| b ==="") { document.getElementById('in1').style.borderColor = "red"
        document.getElementById('in2').style.borderColor = "red"

    
        alert('Please fill the form');
    } else {

        document.getElementById('in1').style.borderColor = ""
        document.getElementById('in2').style.borderColor = ""
        document.getElementById('in1').value = ""
        document.getElementById('in2').value = ""
    }
}


function reset(input) {
    document.getElementById(input).style.borderColor = ""
}

function dergo() {
    const contact= document.getElementById('pjesa-login')
    contact.scrollIntoView({behavior: 'smooth'})
}

function dergo1() {
    const contact1= document.getElementById('main1')
    contact1.scrollIntoView({behavior: 'smooth'})
}



const toggleButton = document.getElementById('theme-toggle');
const icon = document.getElementById('icon');
const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.textContent = 'Dark Mode';}



toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.textContent = 'Dark mode'; 
        localStorage.setItem('theme', 'dark');
    } else {
        icon.textContent = 'Light Mode';
        localStorage.setItem('theme', 'light');
    }
});








