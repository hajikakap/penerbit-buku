function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

function toggleDropdown(event) {
  if (window.innerWidth <= 768) {
    event.preventDefault();
    event.target.parentElement.classList.toggle('active');
  }
}

function cariBuku() {
  const judulInput = document.getElementById('judul').value.toLowerCase();
  const isbnInput = document.getElementById('isbn').value.toLowerCase();
  const kategoriInput = document.getElementById('kategori').value.toLowerCase();
  const penulisInput = document.getElementById('penulis').value.toLowerCase();

  const semuaBuku = document.querySelectorAll('.buku-card');

  semuaBuku.forEach(buku => {
    const judul = buku.getAttribute('data-judul').toLowerCase();
    const isbn = buku.getAttribute('data-isbn').toLowerCase();
    const kategori = buku.getAttribute('data-kategori').toLowerCase();
    const penulis = buku.getAttribute('data-penulis').toLowerCase();

    const cocok =
      (judul.includes(judulInput) || !judulInput) &&
      (isbn.includes(isbnInput) || !isbnInput) &&
      (kategori.includes(kategoriInput) || !kategoriInput) &&
      (penulis.includes(penulisInput) || !penulisInput);

    buku.style.display = cocok ? "block" : "none";
  });
}

function resetSearch() {
  document.getElementById('judul').value = "";
  document.getElementById('isbn').value = "";
  document.getElementById('kategori').value = "";
  document.getElementById('penulis').value = "";

  const semuaBuku = document.querySelectorAll('.buku-card');
  semuaBuku.forEach(buku => buku.style.display = "block");
}
