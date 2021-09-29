// const form = document.getElementById("formTable");
// form.addEventListener("submit", function(event) {
//     console.log(event);
//     alert("se detecto envio de formulario")
//     }
// )
// hacer que el navegador no envie datos al server
const form = document.getElementById("formTable");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let formTable = new FormData(form)
    let recordTableSails = document.getElementById("recordTable");
    let newRecord = recordTableSails.insertRow(-1);

    let newCellRecord = newRecord.insertCell(0);
    newCellRecord.textContent = "num"
    newCellRecord = newRecord.insertCell(1);
    newCellRecord.textContent = formTable.get("sailsId")
    newCellRecord = newRecord.insertCell(2);
    newCellRecord.textContent = formTable.get("sailsName")
    newCellRecord = newRecord.insertCell(3);
    newCellRecord.textContent = formTable.get("lastname")
    newCellRecord = newRecord.insertCell(4);
    newCellRecord.textContent = formTable.get("speciality")
    newCellRecord = newRecord.insertCell(5);
    newCellRecord.textContent = formTable.get("phone")
    newCellRecord = newRecord.insertCell(6);
    newCellRecord.textContent = formTable.get("dateOfAdmision")
    newCellRecord = newRecord.insertCell(7);
    newCellRecord.textContent = "icon"


    }
)