const sendBtn = document.querySelector('#send-mail')
const form = document.querySelector('#contact-form')


async function sendMail(e){
    e.preventDefault()
    const username = form.elements['name'].value
    const email = form.elements['email'].value
    const option = form.elements['subject'].value
    const subject = getSubject(option)
    const message = form.elements['message'].value
    console.log({username, email, subject, body: message})
    //makepostrequest
    const response = await sendMessage({username, email, subject, body: message})
    console.log(response)
}

async function sendMessage(body){
    const response = await fetch('/mail',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = response.json()
    return data
}


function getSubject(option){
    switch(option){
        case '1': return 'New Admission';
        case '2': return 'Diet Plan';
        case '3': return 'Daily Plan';
        case '4': return 'Kids Progress';
        case '5': return 'Feedback';
        default: return 'Others'
    }
}


sendBtn.addEventListener('click', sendMail)