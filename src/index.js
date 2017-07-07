var $ = (query) => document.querySelector(query)
var $$ = (query) => document.querySelectorAll(query)

class Hack {
    constructor () {
        this.selectors = {
            karnameKol: '#ctl00_UpdatePanel1 > table > tbody > tr:nth-child(1)',
            printKarname: '#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_lnkBtnPrintTop'
        }
        this.render()
    }
    render () {
        const selectors = this.selectors
        // do what to do
        $(selectors.karnameKol).style.display = 'none'
        $(selectors.printKarname).style.display = 'none'
        // Loop
        requestAnimationFrame(this.render.bind(this))
    }
}

window.hack = new Hack