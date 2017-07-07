var $ = (query) => document.querySelector(query)
var $$ = (query) => document.querySelectorAll(query)

class Hack {
    constructor () {
        this.render()
    }
    render () {
        $('#ctl00_UpdatePanel1 > table > tbody > tr:nth-child(1)').style.display = 'none'
        $('#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_lnkBtnPrintTop').style.display = 'none'
        requestAnimationFrame(this.render.bind(this))
    }
}

window.hack = new Hack