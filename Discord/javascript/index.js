function search(text) {
    if (event.key === 'Enter') {
        alert(text.value);        
    }
    document.getElementById('inputMessageTextBox').value = null
}