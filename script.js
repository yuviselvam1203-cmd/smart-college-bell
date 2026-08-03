function saveData(){

  const name =
    document.getElementById('name').value;

  const time =
    document.getElementById('time').value;

  document.getElementById('result').innerHTML =
    `Saved: ${name} - ${time}`;
}
