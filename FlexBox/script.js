const tambah = document.getElementById('tambah')

const container2 = document.querySelector('.container2')

tambah.addEventListener('click', function (e) {
  const cardBaru = document.createElement('div')
  cardBaru.innerHTML = '<div class="card">1</div>'

  container2.appendChild(cardBaru)
})
