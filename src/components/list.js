const list = new Vue( {
    el: '#list',
    data(){
        return {
            items: []
        }
    },
    mounted() {
        //have no backend

        const token = getToken();
        /*axios.post(HOST + "/get_tasks", {"token": token})
            .then(response => {})
            .catch(err => {})
        */

        this.items = [ {"name": "Заявка 1", "text_task": "Текст заявки 1"}, {"name": "Заявка 2", "text_task": "Текст заявки 2"}]
    },
    methods: {
        showModal(){
            const modal = document.getElementById("modal");
            modal.style.display = "block";
        },
        logout() {
            localStorage.removeItem("token");
            window.location.href = 'index.html';
        }
    }
});

const popup = document.getElementById("modal");
const modal = new Vue({
    el: '#modal',
    data(){
        return {
            name:"",
            text_task: ""
        }
    },
    methods: {
        createTask: function () {
            modal.name = this.name;
            modal.text_task = this.text_task;

            if (modal.name.trim() === "" || modal.text_task === "") {
                alert("Одно из полей заявки пустое!")
                return;
            }

            const token = getToken();
            const task_info = {
                name: modal.name,
                text_task: modal.text_task
            };

            //have no backend
            /*axios.post(HOST + "/create_task", {"token": token, "task_info": task_info})
                .then(response => {})
                .catch(err => {})
            */

            //response from backend
            const response = {
                success: true
            };

            //response can contain response code
            //we can check it and alert if it is not 200
            if (response.success === true) {
                list.items.push(task_info);

                modal.name = "";
                modal.text_task = "";

                this.$el.style.display = "none";

                alert("Заявка создана!")
            }
            //we can check it and alert if it is not 200
            else {
                alert("Ошибка создания заявки!")
            }
        }
    }
});

function getToken() {
    const token = localStorage.getItem("token");

    if (token === null) {
        window.location.href = "index.html"
    }

    return token;
}


window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
};