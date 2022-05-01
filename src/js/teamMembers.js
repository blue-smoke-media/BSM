import { team } from "../data/team.js";

const root = document.getElementsByClassName("team-bottom")[0];
console.log(root);

const memberMaker = (data) => {
  const member = document.createElement("div");
  member.classList.add("member");

  const img = document.createElement("img");
  img.src = data.image;
  img.loading = "lazy";
  img.alt = "profile img";
  console.log(data);
  const nameDiv = document.createElement("nameDiv");
  const name = document.createElement("span");
  name.innerText = `${data.name}

  ${data.description}`;

  member.append(img, nameDiv);
  // p.append(name, <br />, data.description);
  nameDiv.append(name);
  root.append(member);
};
team.forEach((data) => memberMaker(data));
//   console.log(member)
//   <div className="member">
//     <img src={member.img} loading="lazy" alt="profile img" />
//     <p>
//       <span>{member.name}</span>
//       <br />
//       {member.description}
//     </p>
//   </div>
// console.log(test);

// GO LOOK AT LAMBDA PAST WORK
