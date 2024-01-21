document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('userin');
  input.select();
});

document.getElementById('userin').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      creations();
  }
});

let mavar = 1;

function test(){
  mavar++;
  return mavar;
}


function friend(){
  mavar+=250;
  return mavar;
}


function creations() {
  // valeur saisie
  var texteSaisi = document.getElementById('userin').value;
  // texte avant le rep
  var nouvelElementP = document.createElement('p');
  nouvelElementP.classList.add('na');
  nouvelElementP.textContent = "C:\\Users\\Wassimdev";

  // texte après rep
  var newS = document.createElement('p');
  newS.classList.add('inputuser');
  // Utilisation de eval() pour évaluer le contenu comme une fonction
  newS.textContent = eval(texteSaisi);
  
  var final = document.createElement('div'); 
  final.classList.add('nv'); // Utilisez un conteneur div pour regrouper les éléments
  final.appendChild(nouvelElementP);
  final.appendChild(newS);

  document.getElementById('consol').appendChild(final);

}

function refresh() {
  location.reload();
}

function available(){
    var dispo = document.createElement('p');
    dispo.textContent = ("test(), friend(), refresh()");
    return dispo.textContent
}
