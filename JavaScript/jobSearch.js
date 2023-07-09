// Defining styles
let candidate = `display: inline-block;
flex-direction: column;
width: 80vw;
min-height: 26vh;
background: #f2f2f2;
justify-content: space-around;
margin: 20px 4vw;
border: 2px solid #000;`

let flex =`display: flex;
justify-content: space-around;
align-items: center;
`;


let image = `
height: 40px;
width: 40px;
margin-top: 20px;
border-radius: 50%;
`;

let btn = `background: #FF814B;
color: white;
padding: 6px 8px;
border: 0;
cursor: pointer;`;

let btnSecondary =`
background: #4287F0;
color: white;
padding: 6px 8px;
border: 0;
cursor: pointer;
`;

// Creating nav bar
const nav =`
<nav style="
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
">
      <a href="#"><img src="images/logo.png" alt="VASTN" style="
      height: 60px;
      width: 60px;"/>
      </a>
        <a href="jobSearch.html" style="
        margin: 0 10px;
        color: #000;
        text-decoration: none;
        font-weight: 700;
        ">Go Back</a>
    </nav>
`;

let apiEndPoint = "https://retoolapi.dev/0HrU3g/data";

function searchCandidate() {
    const role = document.getElementById('jobRole').value;
    const location = document.getElementById('Location').value;

    var html ='';

    if (role && location) {
        
        apiEndPoint+= `?Role=${role}&Location=${location}`;
        fetch(apiEndPoint)
        .then(response => response.json())
        .then( data => {
            console.log(data);
            document.write(nav);
            if(data.length === 0 ) {
                html += `<h2> No Such Data Found!! </h2>`;
                document.write(html);
                return;
            }
            for (let i = 0; i < data.length; i++) {
                html += `
                <section style="${candidate}">
                   <div style="${flex}">
                       <img src="images/heroBg.jpg" alt="" style="${image}"
                       <p>Name:${data[i].Name}</p>
                   </div>
                   <div style="${flex}">
                       <p class="role">Looking For:${data[i].Role}</p>
                       <p class="location">Location: ${data[i].Location}</p>
                   </div>
                   <div style="${flex}"">
                       <button type="button" style="${btn}">View Resume</button>
                       <button type="button" style="${btnSecondary}">Short List</button>
                   </div>
                </section>`;
         document.write(html);
            }
        } );
    }

    if(role) {
        apiEndPoint+= `?Role=${role}`;
        fetch(apiEndPoint)
        .then(response => response.json())
        .then( data => {
            console.log(data);
            document.write(nav);
            if(data.length === 0 ) {
                html += `<h2> No Such Data Found!! </h2>`;
                document.write(html);
                return;
            }
            for (let i = 0; i < data.length; i++) {
                html += `
                <section style="${candidate}">
                   <div style="${flex}">
                       <img src="images/heroBg.jpg" alt="" style="${image}"
                       <p>Name:${data[i].Name}</p>
                   </div>
                   <div style="${flex}">
                       <p class="role">Looking For:${data[i].Role}</p>
                       <p class="location">Location: ${data[i].Location}</p>
                   </div>
                   <div style="${flex}"">
                       <button type="button" style="${btn}">View Resume</button>
                       <button type="button" style="${btnSecondary}">Short List</button>
                   </div>
                </section>`;
             document.write(html);
                }
        } );
        return;
    }

    if(location) {
        apiEndPoint+= `?Location=${location}`;
        fetch(apiEndPoint)
        .then(response => response.json())
        .then( data => {
            console.log(data);
            document.write(nav);
            if(data.length === 0 ) {
                html += `<h2> No Such Data Found!! </h2>`;
                document.write(html);
                return;
            }
            for (let i = 0; i < data.length; i++) {
                html += `
         <section style="${candidate}">
            <div style="${flex}">
                <img src="images/heroBg.jpg" alt="" style="${image}"
                <p>Name:${data[i].Name}</p>
            </div>
            <div style="${flex}">
                <p class="role">Looking For:${data[i].Role}</p>
                <p class="location">Location: ${data[i].Location}</p>
            </div>
            <div style="${flex}"">
                <button type="button" style="${btn}">View Resume</button>
                <button type="button" style="${btnSecondary}">Short List</button>
            </div>
         </section>`;
             document.write(html);
                }
        } );
        return;
    }

}
