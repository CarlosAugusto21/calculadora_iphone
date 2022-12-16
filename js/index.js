function Calculadora() {
  this.display = document.querySelector('.result')

  this.start = () => {
    this.cliqueButons()
  }

  this.cliqueButons = () => {
    document.addEventListener('click', e => {
      const el = e.target

      if (el.classList.contains('btn-number')) this.btnDisplay(el.innerText)
      if (el.classList.contains('btn-clear')) this.btnClear()
      if (el.classList.contains('btn-negative')) this.negative()
      if (el.classList.contains('btn-porcentagem')) this.percent()
      if (el.classList.contains('btn-result')) this.total()
    })
  }

  this.btnDisplay = num => {
    this.display.value += num
  }

  this.negative = () => {
    if (this.display.value != '') this.display.value = -this.display.value
  }

  this.percent = () => {
    if (this.display.value != '') this.display.value = this.display.value / 100
  }

  this.btnClear = () => {
    this.display.value = ''
  }

  this.total = () => {
    let conta = this.display.value
    try {
      conta = eval(conta)

      if (!conta) {
        alert('conta errada!')
        return
      }
      this.display.value = conta
    } catch (e) {
      alert('conta errada!')
      return
    }
  }
}

const calculadora = new Calculadora()
calculadora.start()
