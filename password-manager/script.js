// JSON fornecido
import { data } from "./Contas.js";

// Selecionar o corpo da tabela
const tableBody = document.getElementById("table-body");

// Preencher a tabela
data.Contas.forEach(item => {
const row = document.createElement("tr");

const websiteCell = document.createElement("td");
websiteCell.textContent = item.Website || "";
row.appendChild(websiteCell);

const loginCell = document.createElement("td");
loginCell.textContent = item.LOGIN || "";
row.appendChild(loginCell);

const passwordCell = document.createElement("td");
passwordCell.textContent = item.Password || "";
row.appendChild(passwordCell);

const notesCell = document.createElement("td");
notesCell.textContent = item.Notes || "";
row.appendChild(notesCell);

tableBody.appendChild(row);
});