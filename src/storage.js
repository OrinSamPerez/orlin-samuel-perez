

var db = firebase.firestore();
console.log(db)
document.getElementById('contact').addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;
    db.collection("Contact").doc().set({
        name,
        email,
        description
    }
    )
    .then((resp)=>{
        alert('Message sent, you will be answered very soon. Thanks for contacting me')
    })
    .catch(()=>{
        alert('Error sending message, please try again')
    })
 

})