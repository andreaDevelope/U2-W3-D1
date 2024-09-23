class User {
  constructor(_firstname, _lastname, _age, _location) {
    this.firstname = _firstname;
    this.lastname = _lastname;
    this.age = _age;
    this.location = _location;
  }
  older(otherUser) {
    this.age > otherUser.age
      ? console.log(`${this.firstname} è più grande di ${otherUser.firstname}`)
      : console.log(`${this.firstname} è più piccolo di ${otherUser.firstname}`);
  }
}
const user1 = new User("user1", "user1lastname", 35, "France");
const user2 = new User("user2", "user2lastname", 30, "USA");

// ------------------------------------------------------------------------------------------------------------------------

const submit = document.querySelector("button");
const petName = document.querySelector("#pn");
const ownerName = document.querySelector("#ow");
const species = document.querySelector("#sp");
const breed = document.querySelector("#br");
const petName2 = document.querySelector("#pn2");
const ownerName2 = document.querySelector("#ow2");
const species2 = document.querySelector("#sp2");
const breed2 = document.querySelector("#br2");
const div = document.querySelector("body > div");

user1.older(user2);

class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  isSameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      if (this.ownerName || otherPet.ownerName) {
        return;
      } else {
        return true;
      }
    } else {
      if (this.ownerName || otherPet.ownerName) {
        return;
      } else {
        return false;
      }
    }
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const pet1 = new Pets(petName.value, ownerName.value, species.value, breed.value);
  console.log(pet1);
  const pet2 = new Pets(petName2.value, ownerName2.value, species2.value, breed2.value);
  console.log(pet2);

  const arr = [petName.value, ownerName.value, species.value, breed.value];
  const arr2 = [petName2.value, ownerName2.value, species2.value, breed2.value];

  const ul = document.createElement("ul");
  const h3 = document.createElement("h3");
  h3.innerText = "Pet1";
  ul.appendChild(h3);
  arr.forEach((propieti) => {
    const li = document.createElement("li");
    li.innerText = propieti;
    ul.appendChild(li);
  });
  div.appendChild(ul);

  const ul2 = document.createElement("ul");
  const h32 = document.createElement("h3");
  h32.innerText = "Pet2";
  ul2.appendChild(h32);
  arr2.forEach((propieti) => {
    const li2 = document.createElement("li");
    li2.innerText = propieti;
    ul2.appendChild(li2);
  });
  div.appendChild(ul2);

  if (pet1.isSameOwner(pet2)) {
    const p = document.createElement("p");
    p.innerText = "il propretario è lo stesso";
    div.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.innerText = "i propietari sono persone diverse";
    div.appendChild(p);
  }
});
