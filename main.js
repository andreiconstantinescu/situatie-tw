var students = [
  {
    name: "ACHIAUA G ANDREI-MARIAN",
    att: 6,
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
    att: 9,
    test: 10,
    p1: 10,
    p2: 10
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
    att: 9,
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
    att: 10,
    test: 10,
    p1: 10,
  },
  {
    name: "NGUYEN S VAN TU",
    att: 12,
    test: 10,
    p1: 10,
    p2: 10
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
    p1: 10,
    test: 0
  },
  {
    name: "PETCULESCU M.C GEORGE-MIHAI",
    att: 8,
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
    att: 10,
    p1: 10
  },
  {
    name: "PURDILA I ANDREI",
    test: 9,
    p1: 10,
    att: 10
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
    att: 8,
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
    att: 3,
    p1: 10,
    test: 10,
    p2: 10
  },
  {
    name: "TOMA BEATRICE RAMONA",
    att: 3,
    p1: 10,
    test: 10,
    p2: 10
  },
  {
    name: "OANCEA COSMIN - ADRIAN",
    att: 2,
    test: 0,
    p1: 9
  }
];

$(document).ready(function () {
  var getNota = function (puntaj) {
    return parseFloat((10 * punctaj) / 50).toFixed(2);
  };

  var table = '<thead>';
  var tableHeader = ['Nr', 'Nume', 'Prezente', 'Proiectul 1', 'Proiectul 2', 'Joc', 'Test', 'Punctaj', 'Nota', 'Nota Finala'];
  for (var i = 0; i < tableHeader.length; i++) {
    table += '<td><strong>' + tableHeader[i] + '</strong></td>';
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


    var p1 = students[i].p1 ? students[i].p1 : 0;
    var p2 = students[i].p2 ? students[i].p2 : 0;
    var p3 = students[i].p3 ? students[i].p3 : 0;
    var test = students[i].test ? students[i].test : 0;
    var prezenta = (students[i].att >= 8 ? 20 : students[i].att);
    var punctaj = (typeof p1 === 'number' ? p1 : 0 ) + (typeof p2 === 'number' ? p2 : 0 ) + (typeof p3 === 'number' ? p3 : 0 ) + test + prezenta;

    var nota = getNota(punctaj);
    var notaFinala = Math.round(nota);
    notaFinala = notaFinala > 0 ? notaFinala : 1;

    var trStart = '<tr class=' + color + '>';
    var tdNrStart = '<td>' + (i+1);
    var tdNrEnd = '.</td>';
    var tdName = '<td>' + students[i].name + '</td>';
    var tdAtt = '<td>' + students[i].att + '</td>';
    var tdP1 = '<td>' + p1 + '</td>';
    var tdP2 = '<td>' + p2 + '</td>';
    var tdP3 = '<td>' + p3 + '</td>';
    var tdTest = '<td>' + students[i].test + '</td>';
    var tdPunctaj = '<td>' + punctaj + ' puncte</td>';
    var tdNota = '<td>' + nota + '</td>';
    var tdNotaFinala = '<td><strong>' + notaFinala + '</strong></td>';
    var trEnd = '</tr>';

    table += trStart + tdNrStart + tdNrEnd + tdName + tdAtt + tdP1 + tdP2 + tdP3 + tdTest + tdPunctaj + tdNota + tdNotaFinala + trEnd ;
  }
  table += '</tbody>';
  $('#tabel-note').html(table);
  $('#tabel-note').stacktable({myClass: 'responsive'});
  $('.more-info').popover({
    html: true
  });
});
