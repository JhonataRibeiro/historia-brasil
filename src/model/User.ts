
export class User {

    static generateAvatar(name){
        var colours = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
        var name = name,
            nameSplit = name.split(" "),
            initials = nameSplit[0].charAt(0).toUpperCase();

        if(nameSplit[1] && nameSplit[1].charAt(0) === 'e'){
            if(nameSplit[2]) initials += nameSplit[2].charAt(0).toUpperCase();
        } else {
            if(nameSplit[1]) initials += nameSplit[1].charAt(0).toUpperCase();
        }

        var charIndex = initials.charCodeAt(0) - 65,
            colourIndex = charIndex % 19;
        var canvas = document.createElement('canvas');
        canvas.width  = 200;
        canvas.height = 200;
        var context = canvas.getContext("2d");
        context.fillStyle = colours[colourIndex];
        context.fillRect (0, 0, canvas.width, canvas.height);
        context.font = "100px Arial";
        context.textAlign = "center";
        context.fillStyle = "#FFF";
        context.fillText(initials, canvas.width / 2, canvas.height / 1.5);
        return canvas.toDataURL();
    }

    constructor(
        public avatar?: string,
        public name?: string,
        public phone?: string,
        public email?:string,
        public token?: string,
        public id?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ){
        if(name) avatar = User.generateAvatar(name);
    }


}
