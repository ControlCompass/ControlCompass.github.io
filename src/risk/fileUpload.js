document.getElementById('fileUpload')
  .addEventListener('change', getFile)

function getFile(event) {
    const input = event.target
  if ('files' in input && input.files.length > 0) {

      const div_JSONinput = document.getElementById("div_JSONinput")
      const JSONinput = document.getElementById("JSONinput")
      const JSONinput_header_get = document.getElementById("JSONinput_header")

      if (JSONinput) {
        JSONinput.remove()
      }
      if (JSONinput_header_get) {
        JSONinput_header_get.remove()
      }

      const JSONinput_header = document.createElement("h4")
      JSONinput_header.id = "JSONinput_header"
      JSONinput_header.innerHTML = "ATT&CK Navigator Layer (TTPs)"
      JSONinput_header.style.textAlign = "center"
      div_JSONinput.appendChild(JSONinput_header)

      const textarea = document.createElement("textarea")
      textarea.className = "form-control"
      textarea.id = "JSONinput"
      textarea.rows = "10"
      div_JSONinput.appendChild(textarea)

      const JSONinput_final = document.getElementById("JSONinput")

      const output_threat = document.getElementById("output_threat")
      output_threat.innerHTML = 'My Threat Intelligence'

      placeFileContent(
      JSONinput_final,
      input.files[0])

      window.location.href = 'https://controlcompass.github.io/risk#controls'
  }
}

function placeFileContent(target, file) {
    readFileContent(file).then(content => {
    target.textContent = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
    const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}