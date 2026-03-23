function toggleMenu(id){
  document.querySelectorAll('.dropdown-menu').forEach(menu=>{
    if(menu.id !== id){
      menu.classList.remove('show');
    }
  });

  document.getElementById(id).classList.toggle('show');
}

// outside click close
document.addEventListener("click", function(e){
  if(!e.target.closest(".dropdown")){
    document.querySelectorAll('.dropdown-menu')
      .forEach(menu=>menu.classList.remove('show'));
  }
});