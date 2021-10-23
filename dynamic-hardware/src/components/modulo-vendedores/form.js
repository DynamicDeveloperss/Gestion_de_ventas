const form = document.getElementById("formTable");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let formTable = new FormData(form)
    let DataObj = convertFormData(formTable)
    saveObj(DataObj)
    insertRowInTable(DataObj)
    
})

document.addEventListener("DOMContentLoaded", function(event){
    let DataObArray = JSON.parse(localStorage.getItem("DataOb"))
    DataObArray.forEach(
        function(arrayElement){
            insertRowInTable(arrayElement)
        }
    )

})

function getNewDataId() {
    let lastDataId = localStorage.getItem("lastDataId") || "-1";
    let newDataId = JSON.parse(lastDataId) + 1;
    localStorage.setItem("lastDataId", JSON.stringify(newDataId))
    return newDataId;
}

function convertFormData(formTable){
    let sailsId =formTable.get("sailsId")
    let sailsName =formTable.get("sailsName")
    let lastname =formTable.get("lastname")
    let speciality =formTable.get("speciality")
    let phone =formTable.get("phone")
    let dateOfAdmision =formTable.get("dateOfAdmision")
    let DataId = getNewDataId();
    return {"sailsId": sailsId, "sailsName": sailsName, "lastname": lastname, "speciality": speciality, "phone": phone, "dateOfAdmision": dateOfAdmision, "DataId": DataId}

}

function insertRowInTable(formTable) {
    let recordTableSails = document.getElementById("recordTable");
    let newRecord = recordTableSails.insertRow(-1);
    newRecord.setAttribute("data-id", formTable["DataId"])
    let newCellRecord = newRecord.insertCell(0);
    newCellRecord.textContent = formTable["sailsId"]
    newCellRecord = newRecord.insertCell(1);
    newCellRecord.textContent = formTable["sailsName"]
    newCellRecord = newRecord.insertCell(2);
    newCellRecord.textContent = formTable["lastname"]
    newCellRecord = newRecord.insertCell(3);
    newCellRecord.textContent = formTable["speciality"]
    newCellRecord = newRecord.insertCell(4);
    newCellRecord.textContent = formTable["phone"]
    newCellRecord = newRecord.insertCell(5);
    newCellRecord.textContent = formTable["dateOfAdmision"]
    newCellRecord = newRecord.insertCell(6);
    let trashButton = document.createElement("input")
    trashButton.setAttribute("type", "checkbox")
    trashButton.name = "checkbox"
    newCellRecord.appendChild(trashButton)


    const mainButton = document.getElementById("mainButton");

    trashButton.addEventListener('change', (event) => {
        if (trashButton.checked) {
            delrow = event.target.parentNode.parentNode;
            flag = true;
        } else {
            flag = false;
        }

    });

    mainButton.addEventListener("click", (event) => {
        event.preventDefault();
        if(flag){
            let DataId = delrow.getAttribute("data-id");
            delrow.remove();
            deleteObjArr(DataId);
        }
    
    });

}

function deleteObjArr(DataId){
    let DataObArray = JSON.parse(localStorage.getItem("DataOb"))
    let dataIndexArr = DataObArray.findIndex(element => element.DataId === DataId);
    DataObArray.splice(dataIndexArr, 1)
    let DataObjason = JSON.stringify(dataIndexArr);
    localStorage.setItem("DataOb", DataObjason);

}



function saveObj(DataObj){
    let myArray = JSON.parse(localStorage.getItem("DataOb")) || [];
    myArray.push(DataObj);
    let DataObjason = JSON.stringify(myArray);
    localStorage.setItem("DataOb", DataObjason);
}