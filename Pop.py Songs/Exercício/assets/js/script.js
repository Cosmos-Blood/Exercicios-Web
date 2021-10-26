// susgestoes
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validandoNome(){
let txtNome = window.document.getElementById("txtNome")
    if (nome.value.length < 1){
        txtNome.style.color = "#ff0012"
        txtNome.innerHTML = "Este campo é necessário!"
    }else{
        txtNome.innerHTML = ""
        nomeOk = true
    }
}
function validandoEmail(){
let txtEmail = window.document.getElementById("txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.style.color = "#ff0012"
        txtEmail.innerHTML = "O email digitado não é valido!"
    } else {
        txtEmail.innerHTML = ""
        emailOk = true
    }
}
function validandoAssunto(){
    let txtAssunto = window.document.getElementById("txtAssunto")
        if(assunto.value.length >= 100){
            txtAssunto.style.color = "#ff0012"
            txtAssunto.innerHTML = "São recomendações demais!"
        } else {
            txtAssunto.innerHTML = ""
            assuntoOk = true
        }
    }
function valiandoEnvio(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
       let txtButtom = window.document.getElementById("txtButtom")
    alert ("Sugestão enviada com sucesso!")
    }else{
        alert ("Preencha os campos corretamente!")
    }

}
