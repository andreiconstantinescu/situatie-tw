$(document).ready(function () {
  var students = [
    {
      name: "ACHIAUA G ANDREI-MARIAN",
      att: 5,
      p1: 10,
      test: 10
    },
    {
      name: "ANITA M LIVIU-BRANCO",
      att: 1,
      p1: 'sa trimita',
      test: 7
    },
    {
      name: "BOBARU I.D DRAGOS",
      att: 3,
      p1: 10,
      test: 10,
    },
    {
      name: "BUNGET M ALEXANDRU-CATALIN",
      att: 0,
      p1: 0,
      test: 0
    },
    {
      name: "CIOBOTARU C MIHAELA-GABRIELA",
      att: 7,
      test: 10,
      p1: 10,
    },
    {
      name: "CIUBUC G FLORIN-MARIAN",
      test: 0,
      p1: 10,
      att: 3
    },
    {
      name: "CRETU M SILVIU-CONSTANTIN",
      test: 10,
      p1: 10,
      att: 3
    },
    {
      name: "DINU F ALEXANDRU",
      att: 8,
      test: 10,
      p1: 10
    },
    {
      name: "DRAGAN G VLAD-MARIUS",
      test: 10,
      p1: 10,
      att: 3,
    },
    {
      name: "DUMITRU V.M EMANUEL-CRISTIAN",
      att: 8,
      test: 10,
      p1: 10
    },
    {
      name: "GRAUR S PETRU-COSTIN",
      att: 4,
      test: 8,
      p1: 10
    },
    {
      name: "ION GH LAURENTIU-CRISTIAN",
      att: 0,
      test: 0,
      p1: 0
    },
    {
      name: "JINGA C COSMIN",
      att: 7,
      test: 10,
      p1: 'sa trimita'
    },
    {
      name: "LAZAR N CATALIN-ALEXANDRU",
      att: 5,
      test: 9,
      p1: 10
    },
    {
      name: "MELEANCA P IONUT-ADRIAN",
      p1: 0,
      test: 0,
      att: 1
    },
    {
      name: "MIU I OVIDIU",
      att: 3,
      test: 8,
      p1: 9
    },
    {
      name: "NABOULSI F MAYA",
      att: 9,
      test: 10,
      p1: 10,
    },
    {
      name: "NGUYEN S VAN TU",
      att: 10,
      test: 10,
      p1: 10,
    },
    {
      name: "NICULAI D DRAGOS-ANDREI",
      att: 2,
      test: 10,
      p1: 10
    },
    {
      name: "NITA V MIHAITA-ALIN",
      att: 0,
      p1: 0,
      test: 0
    },
    {
      name: "PAUCEANU C.F ALEXANDRU",
      att: 0,
      p1: 'sa trimita din nou',
      test: 0
    },
    {
      name: "PETCULESCU M.C GEORGE-MIHAI",
      att: 7,
      p1: 10,
      test: 10
    },
    {
      name: "POPA I VLADUT-IONUT",
      att: 2,
      p1: 10,
      test: 5
    },
    {
      name:"PREDESCU I MARA-CALINA",
      test: 10,
      att: 7,
      p1: 10
    },
    {
      name: "PURDILA I ANDREI",
      test: 9,
      p1: 10,
      att: 9
    },
    {
      name: "RAILEANU A.C LAURA-NICOLETA",
      att: 6,
      test: 8,
      p1: 10
    },
    {
      name: "SAMSON I STEFAN",
      test: 10,
      p1: 10,
      att: 2
    },
    {
      name: "SAVULESCU Z ROBERTO-MARIAN",
      att: 2,
      test: 0,
      p1: 10
    },
    {
      name: "SIMUT V PAVEL",
      test: 5,
      att: 6,
      p1: 10
    },
    {
      name: "TATOMIR V RADU",
      att: 2,
      test: 10,
      p1: 10
    },
    {
      name: "URSU GH ROBERT-ANDREI",
      att: 2,
      p1: 9,
      test: 10
    },
    {
      name: "TOMA BEATRICE RAMONA",
      att: 2,
      p1: 9,
      test: 10
    },
    {
      name: "OANCEA COSMIN - ADRIAN",
      att: 2,
      test: 0,
      p1: 9
    }
  ];

  var table = '<thead>';
  var tableHeader = ['Nr', 'Nume', 'Prezente', 'Proiectul 1', 'Test', 'Punctaj'];
  for (var i = 0; i < tableHeader.length; i++) {
    table += '<td>' + tableHeader[i] + '</td>';
  }
  table += '</thead><tbody>';
  for (i = 0; i < students.length; i++) {
    var color;
    if (students[i].att >= 8)
      color = 'success';
    else if (students[i].att >= 6)
      color = 'info';
      else
        color = '';

    if (students[i].att <= 2 && students[i].test < 5)
      color = 'danger';

    var trStart = '<tr class=' + color + '>';
    var tdNrStart = '<td>' + (i+1);
    var tdNrEnd = '</td>';
    var tdName = '<td>' + students[i].name + '</td>';
    var tdAtt = '<td>' + students[i].att + '</td>';
    var tdP1 = '<td>' + students[i].p1 + '</td>';
    var tdTest = '<td>' + students[i].test + '</td>';
    var tdPunctaj = '<td>' + ((students[i].att >= 8 ? 20 : students[i].att) + (typeof students[i].p1 === "number" ? students[i].p1 : 0) + students[i].test) + ' puncte</td>';
    var trEnd = '</tr>';

    table += trStart + tdNrStart + tdNrEnd + tdName + tdAtt + tdP1 + tdTest + tdPunctaj + trEnd ;
  }
  table += '</tbody>';
  $('#tabel-note').html(table);
  $('.more-info').popover({
    html: true
  });
});
