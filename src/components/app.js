const app = new Vue( {
    el: '#app',
    data(){
        return {
            email : "",
            password : ""
        }
    },
    mounted(){
        const token = localStorage.getItem("token");
        if (token !== null) {
            window.location.href = 'list.html'
        }
    },
    methods: {
        login: function () {
            app.email = this.email;
            app.password = this.password;

            if (app.email.trim() === "" || app.password.trim() === "") {
                alert("Одно из полей пустое!");
                return;
            }

            //have no backend
            /*axios.post(HOST + "/login", {"login": app.email, "password": app.password})
                .then(response => {})
                .catch(err => {})
            */

            //response from backend
            const response = {
                success: true,
                token: "someToken"
            };

            if (response.success === true) {
                localStorage.setItem("token", response.token);
                window.location.href = 'list.html';
            }
        },
        registration: function () {
            window.location.href = 'registration.html'
        }
    }
});