const toggleMenu = () => {
  document.addEventListener("onclick", () => {
    let menu = document.getElementById("chkMenu");
    menu.className = menu.className === "chkMenu" ? "chkMenuActive" : "chkMenu";
  });
};
