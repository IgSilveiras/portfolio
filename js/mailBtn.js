document.getElementById("mailLink").addEventListener("click", () => {

    navigator.clipboard.writeText("IgSilveiras21@gmail.com");

    const toast = document.getElementById("copy-toast");
    toast.textContent = translations[language]["contact.mailToast"];
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 2500);
    setTimeout(() => toast.textContent = "", 2800)
})