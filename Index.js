const keys = document.querySelectorAll('.key');


document.addEventListener("keydown", (event) => {
    playNote(event.key);
    activeAnimation(event.key);
}
);

function playNote(key) {
    switch (key) {
        case "q":
            let c = new Audio("media/sounds/key01.mp3");
            c.play();
            break;
        case "2":
            let cSharp = new Audio("media/sounds/key02.mp3");
            cSharp.play();
            break;
        case "w":
            let d = new Audio("media/sounds/key03.mp3");
            d.play();
            break;
        case "3":
            let dSharp = new Audio("media/sounds/key04.mp3");
            dSharp.play();
            break;
        case "e":
            let e = new Audio("media/sounds/key05.mp3");
            e.play();
            break;
        case "r":
            let f = new Audio("media/sounds/key06.mp3");
            f.play();
            break;
        case "5":
            let fSharp = new Audio("media/sounds/key07.mp3");
            fSharp.play();
            break;
        case "t":
            let g = new Audio("media/sounds/key08.mp3");
            g.play();
            break;
        case "6":
            let gSharp = new Audio("media/sounds/key09.mp3");
            gSharp.play();
            break;
        case "y":
            let a = new Audio("media/sounds/key10.mp3");
            a.play();
            break;
        case "7":
            let aSharp = new Audio("media/sounds/key11.mp3");
            aSharp.play();
            break;
        case "u":
            let b = new Audio("media/sounds/key12.mp3");
            b.play();
            break;
        case "z":
            let c2 = new Audio("media/sounds/key13.mp3");
            c2.play();
            break;
        case "s":
            let cSharp2 = new Audio("media/sounds/key14.mp3");
            cSharp2.play();
            break;
        case "x":
            let d2 = new Audio("media/sounds/key15.mp3");
            d2.play();
            break;
        case "d":
            let dSharp2 = new Audio("media/sounds/key16.mp3");
            dSharp2.play();
            break;
        case "c":
            let e2 = new Audio("media/sounds/key17.mp3");
            e2.play();
            break;
        case "v":
            let f2 = new Audio("media/sounds/key18.mp3");
            f2.play();
            break;
        case "g":
            let fSharp2 = new Audio("media/sounds/key19.mp3");
            fSharp2.play();
            break;
        case "b":
            let g2 = new Audio("media/sounds/key20.mp3");
            g2.play();
            break;
        case "h":
            let gSharp2 = new Audio("media/sounds/key21.mp3");
            gSharp2.play();
            break;
        case "n":
            let a2 = new Audio("media/sounds/key22.mp3");
            a2.play();
            break;
        case "j":
            let aSharp2 = new Audio("media/sounds/key23.mp3");
            aSharp2.play();
            break;
        case "m":
            let b2 = new Audio("media/sounds/key24.mp3");
            b2.play();
            break;

        default:
            break;
    }
}

function activeAnimation(key) {
    const activeKeys = document.querySelector("[data-" + key + "]")
    activeKeys.classList.add("active");

    setTimeout( () => {
        activeKeys.classList.remove("active");
    }, 100);
};