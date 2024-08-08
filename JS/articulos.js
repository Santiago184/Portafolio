const d=document
const infoEud=[
    {
        title: "CESDE",
        text: "Técnico Laboral como Asistente en Desarrollo de Software."
    },
    {
        title: "CESDE",
        text: "Técnico Laboral como Asistente en Desarrollo de Videojuegos."
    },
    {
        title: "CESDE",
        text: "Técnico Labora en Electromecánica."
    },
    {
        title: "I.E.Kennedy",
        text: "Bachillerato Técnico en Programación de Software."
    }
]
const infoGamer=[
    {
        title: "Survive Space",
        text: "Es un juego donde tienes que sobrevivir a oleadas de enemigos.",
        listItems: ["Rol", "Programador","Modelador"],
        images: ["IMG/unity.png", "IMG/hola.png","IMG/blender.png"],
        videoSrc: "https://www.youtube.com/embed/xTl--yWvKM8?si=zts53JfIdCBEyjU9"
    },
    {
        title: "Stumble food",
        text: "Es un juego multijugador donde tienes que superar varios obstáculos para llegar a la meta.",
        listItems: ["Rol", "Programador"],
        images: ["IMG/unity.png", "IMG/hola.png"],
        videoSrc: "https://www.youtube.com/embed/7tCRn1Tm61A?si=y0nVl7NCZ3ziy7ds" 
    },
    {
        title: "El Reino De los Elementales",
        text: "Es un juego en el cual tienes que sobrevivir a oleadas ",
        listItems: ["Rol", "Programador"],
        images: ["IMG/unity.png", "IMG/hola.png"],
        videoSrc: "https://www.youtube.com/embed/5eCmdR0YJOY?si=2cSjN7sUUrOBw6G9" 
    }
]
const infoSoftware=[
    {
        title: "Chiquitita",
        text: "Página web de comida",
        images: ["IMG/html-5.png", "IMG/css-3.png"],
        logo: "IMG/logo.png",
        link: "https://chiquititacomida2.000webhostapp.com"
    }
]
function artiSoftware(info) {
    const container =d.getElementById("arti-proyecs-S")

    const arti=d.createElement("article")
    arti.classList.add("gamer")

    const div=d.createElement("div")
    div.classList.add("content-size")
    
    const title=d.createElement("h2")
    title.textContent=info.title
    div.appendChild(title)

    const text=d.createElement("p")
    text.textContent=info.text
    div.appendChild(text)

    /* const ul = d.createElement("ul");
    info.listItems.forEach(item => {
        const li = d.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    div.appendChild(ul); */

    info.images.forEach(imageSrc => {
        const image = d.createElement("img");
        image.src = imageSrc;
        image.alt = "Imagen";
        image.width="25"
        div.appendChild(image);
    });

    const web = d.createElement("a");
    web.href=info.link
    web.target="_blank"

    const logos=d.createElement("img")
    logos.src=info.logo
    logos.classList.add("content-size");
    logos.alt = "Imagen";
    
    web.appendChild(logos)

    arti.appendChild(div)
    arti.appendChild(web)
    container.appendChild(arti)
}
function artiEdu(info) {
    const container =d.getElementById("arti-education")

    const arti=d.createElement("article")
    arti.classList.add("edu")

    const title=d.createElement("h2")
    title.textContent=info.title
    arti.appendChild(title)

    const text=d.createElement("p")
    text.textContent=info.text
    arti.appendChild(text)

    
    container.appendChild(arti)
}

function artiGamer(info) {
    const container =d.getElementById("arti-proyecs-G")

    const arti=d.createElement("article")
    arti.classList.add("gamer")

    const div=d.createElement("div")
    div.classList.add("content-size")
    
    const title=d.createElement("h2")
    title.textContent=info.title
    div.appendChild(title)

    const text=d.createElement("p")
    text.textContent=info.text
    div.appendChild(text)

    const ul = d.createElement("ul");
    info.listItems.forEach(item => {
        const li = d.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    div.appendChild(ul);

    info.images.forEach(imageSrc => {
        const image = d.createElement("img");
        image.src = imageSrc;
        image.alt = "Imagen";
        image.width="25"
        div.appendChild(image);
    });

    const video = d.createElement("iframe");
    video.src = info.videoSrc.replace("watch?v=", "embed/");
    video.classList.add("content-size");
    video.allowfullscreen = true;

    arti.appendChild(div)
    arti.appendChild(video)
    container.appendChild(arti)
}
infoGamer.forEach(artiGamer)
infoSoftware.forEach(artiSoftware)
infoEud.forEach(artiEdu)