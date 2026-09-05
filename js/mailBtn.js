document.getElementById("mailLink").addEventListener("click", () => {

    navigator.clipboard.writeText("IgSilveiras21@gmail.com");

    const toast = document.getElementById("copy-toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
})