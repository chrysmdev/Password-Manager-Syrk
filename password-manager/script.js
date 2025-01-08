function createTable(content) {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var thd = function(i){return (i==0)?"th":"td";};

    for (var i=0; i < content.length;i++) {
        var tr = document.createElement("tr")
        for (var o=0; o < content[i].length; o++){
            var t = document.createElement(thd(i));
            var text = document.createTextNode(content[i][o]);
            t.appendChild(text);
            tr.appendChild(t);
        }
        (i==0)?thead.appendChild(tr):tbody.appendChild(tr)
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    return table
}
document.getElementById("main").appendChild(createTable([
    ["id", "nome",     "idade"],
    [1,    "matheus",  16],
    [2,    "cristian", 16],
    [3,    "pedro",    10],
    [4,    "henrique", 10]
]));