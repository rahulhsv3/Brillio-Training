function addreg(id1, dname, pname, time) {
    var dept = {
        "id": id1,
        "dname": dname,
        "pname": pname,
        "time": time
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
function editreg(did1, ddname, ppname, dtime) {
    let dept = {
        "id": did1,
        "dname": ddname,
        "pname": ppname,
        "time": dtime
    }
    fetch("http://localhost:3000/dept/" + dept.id, {
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
function deletereg(eid1) {
    fetch("http://localhost:3000/dept/" + eid1, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        console.log(res);
    })
}

//Fetching the Data from db.json using json server
function getreg() {
    fetch("http://localhost:3000/dept").then((res) => {
        return res.json();
    }).then((dept) => {
        console.log(dept);
        var res = JSON.stringify(dept);
        console.log(res);

        let text = "<table border='4'> <tr><th>Patient ID</th><th>Department</th><th>Patient Name</th><th>Timmings</th>";
        for (let x in dept) {
            text +=
                "<tr><td>" + dept[x].id + "</td><td>"
                + dept[x].dname + "</td><td>"
                + dept[x].pname + "</td><td>"
                + dept[x].time + "</td></tr>"
        }
        text += "</table>";
        document.getElementById("return").innerHTML = text;
    })
}