function addDept(id1,dname,loc) {
    var dept = {
        "id": id1,
        "dname": dname,
        "loc": loc
    }
    console.log(dept);
    fetch('http://localhost:3000/dept/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dept)
    }).then((res) => {
        console.log(res);
    })
}

//Updating the Data in db.json using json server
function editDept(did1, ddname,dloc) {
    let dept = {
        "id": did1,
        "dname": ddname,
        "loc": dloc
    }
    fetch("http://localhost:3000/dept/"+dept.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dept)
    }).then((res) => {
        console.log(res);
    })
}

//Deleting Data in db.json using json server
function deleteDept(eid1) {
    fetch("http://localhost:3000/dept/"+eid1, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        console.log(res);
    })
}

//Fetching the Data from db.json using json server
function getDept() {
    fetch("http://localhost:3000/dept").then((res) => {
        return res.json();
    }).then((dept) => {
        console.log(dept);
    })
}