const registration = new Vue( {
    el: '#registration',
    data(){
        return {
            email : "",
            password : "",
            password_confirmation : "",
            phone: ""
        }
    },
    methods: {
        register: function () {
            registration.email = this.email;
            registration.password = this.password;
            registration.password_confirmation = this.password_confirmation;
            registration.phone = this.phone;

            if (registration.password !== registration.password_confirmation) {
                alert("Пароли не совпадают!");
                return;
            }
            //have no backend
            /*axios.post(HOST + "/registration", {"login": registration.email, "password": registration.password, "phone": registration.phone})
                .then(response => {})
                .catch(err => {})
            */

            //response from backend
            const response = {
                success: true
            };

            if (response.success === true) {
                window.location.href = 'success_registration.html';
            }
        }
    }
});