export default class CarouselSlider {
  constructor(el) {
    this.el = document.getElementById(el)
    this.items = this.el.querySelectorAll(".carousel__item")

    this.slideIndex = 1
    this.showDivs(this.slideIndex)

    let self = this
    this.el
      .querySelector(".btn-carousel-left")
      .addEventListener("click", () => self.plusDivs(-1), false)
    this.el
      .querySelector(".btn-carousel-right")
      .addEventListener("click", () => self.plusDivs(1), false)
  }

  plusDivs(n) {
    this.showDivs((this.slideIndex += n))
  }

  showDivs(n) {
    let i
    if (n > this.items.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = this.items.length
    }
    for (i = 0; i < this.items.length; i++) {
      this.items[i].style.display = "none"
    }
    this.items[this.slideIndex - 1].style.display = "block"
  }
}
