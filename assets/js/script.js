// Parte 1

Radiologia = [{
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    previcion: 'FONASA',
  },
  {
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    previcion: 'ISAPRE',
  },
  {
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    previcion: 'ISAPRE',
  },
  {
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    previcion: 'FONASA',
  },
  {
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    previcion: 'FONASA',
  },
]

Traumatologia = [

  {
    hora: '08:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    previcion: 'FONASA',
  },

  {
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    previcion: 'ISAPRE',
  },

  {
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    previcion: 'ISAPRE',
  },

  {
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    previcion: 'ISAPRE',
  },

  {
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    previcion: 'FONASA',
  },

  {
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    previcion: 'ISAPRE',
  },

  {
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    previcion: 'ISAPRE',
  },
]

Dental = [{
    hora: '08:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    previcion: 'ISAPRE',
  },
  {
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    previcion: 'ISAPRE',
  },
  {
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    previcion: 'FONASA',
  },
  {
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    previcion: 'FONASA',
  },
  {
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    previcion: 'FONASA',
  },
  {
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    previcion: 'ISAPRE',
  },
]

// Parte 2

// Radiologia
document.write(" Radiologia: <br> Primera Persona: " + Radiologia[0].paciente + " - " + Radiologia[0].previcion + " | Última Persona: " + Radiologia[Radiologia.length - 1].paciente + " - " + Radiologia[Radiologia.length - 1].previcion + "<br><br>")
// Traumatologia
document.write(" Traumatologia: <br> Primera Persona: " + Traumatologia[0].paciente + " - " + Traumatologia[0].previcion + " | Última Persona: " + Traumatologia[Traumatologia.length - 1].paciente + " - " + Traumatologia[Traumatologia.length - 1].previcion + "<br><br>")
// Dental
document.write(" Dental: <br> Primera Persona: " + Dental[0].paciente + " - " + Dental[0].previcion + " | Última Persona: " + Dental[Dental.length - 1].paciente + " - " + Dental[Dental.length - 1].previcion)

// Parte 3

// Tabla Radiología

document.write(`
<div class="container my-5">
<table class="table">
  <thead>
  <h2>Radiología</h2>
    <tr>`)
for (tabla in Radiologia[1]) {
    document.write(`<th scope="col">${tabla}</th>`)
}
document.write(`
</tr>
</thead>
<tbody>
    <tr>`)
for (i = 0; i < Radiologia.length; i++) {
    document.write(`
      <th scope="row">${Radiologia[i].hora}</th>
      <td>${Radiologia[i].especialista}</td>
      <td>${Radiologia[i].paciente}</td>
      <td>${Radiologia[i].rut}</td>
      <td>${Radiologia[i].previcion}</td>
    </tr>`)
}
document.write(`</table>`)

// Tabla Traumatologia

document.write(`
<div class="container my-5">
<table class="table">
  <thead>
  <br>
  <h2>Traumatología</h2>
    <tr>`)
for (tabla in Traumatologia[1]) {
    document.write(`<th scope="col">${tabla}</th>`)
}
document.write(`
</tr>
</thead>
<tbody>
    <tr>`)
for (i = 0; i < Traumatologia.length; i++) {
    document.write(`
      <th scope="row">${Traumatologia[i].hora}</th>
      <td>${Traumatologia[i].especialista}</td>
      <td>${Traumatologia[i].paciente}</td>
      <td>${Traumatologia[i].rut}</td>
      <td>${Traumatologia[i].previcion}</td>
    </tr>`)
}
document.write(`</table>`)


// Tabla Dental

document.write(`
<div class="container my-5">
<table class="table">
  <thead>
  <br>
  <h2>Dental</h2>
    <tr>`)
for (tabla in Dental[1]) {
    document.write(`<th scope="col">${tabla}</th>`)
}
document.write(`
</tr>
</thead>
<tbody>
    <tr>`)
for (i = 0; i < Dental.length; i++) {
    document.write(`
      <th scope="row">${Dental[i].hora}</th>
      <td>${Dental[i].especialista}</td>
      <td>${Dental[i].paciente}</td>
      <td>${Dental[i].rut}</td>
      <td>${Dental[i].previcion}</td>
    </tr>`)
}
document.write(`</table>`)