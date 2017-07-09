import scores from './scoresData'

var $ = (query) => document.querySelector(query)
var $$ = (query) => document.querySelectorAll(query)

class Hack {
    constructor () {
        this.selectors = {
            karnameKol: '#ctl00_UpdatePanel1 > table > tbody > tr:nth-child(1)',
            printKarname: '#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_lnkBtnPrintTop',
            semesterMenuItems: "#ctl00_ContentPlaceHolder1_TermList1_grdTermList > tbody > tr",
            selectedSemester: ".GridViewSelectedRow",
            semesterLabel: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_lblMessage",
            scoreTableRows: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_GridView1 .GridViewRow, #ctl00_ContentPlaceHolder1_idrizkarnamehuc2_GridView1 .GridViewAlternatingRow",
            sumUnits: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblSelectCourse",
            sumAcceptedUnits: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblAcceptCourse",
            sumAffectedUnits: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblEffective",
            sumScores: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblGrant",
            average: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblAverage"
        }
        this.render()
    }
    calculateTerm () {
        let selected = $(this.selectors.selectedSemester)
        const menuItems = $$(this.selectors.semesterMenuItems)
        if (selected === null) {
            const label = $(this.selectors.semesterLabel).innerHTML
            for (let item of menuItems)
                if (item.querySelector('a') !== null)
                    if(item.querySelector('a').innerHTML == label) selected = item
        }
        let index = -2
        for (let item of menuItems) {
            index++
            if (item === selected) return index
        }
        return -1
    }
    customizeRow (tr, scoreData) {
        const types = [
            'عـــــــــــادي',
            'بلااثر',
            'حــــــذف مازاد',
            'غــــــيبت موجه',
            'غـــيبت غير موجه',
            'حذف مــــاده 35',
        ]
        if (scoreData.name !== undefined) tr.children[2].innerHTML = scoreData.name
        if (scoreData.units !== undefined) tr.children[3].innerHTML = scoreData.units.toFixed(1)
        if (scoreData.practicalUnits !== undefined) tr.children[4].innerHTML = scoreData.practicalUnits.toFixed(1)
        if (scoreData.point !== undefined) tr.children[5].innerHTML = scoreData.point.toFixed(2)
        if (scoreData.type !== undefined) tr.children[6].innerHTML = types[scoreData.type]

        const unitInNum = parseInt(tr.children[4].innerHTML) || 0
        const practicalUnitInNum = parseInt(tr.children[3].innerHTML) || 0
        tr.children[7].innerHTML = ((unitInNum + practicalUnitInNum) * parseFloat(tr.children[5].innerHTML)).toFixed(2)
    }
    getRowData (tr) {
        return {
            name: tr.children[2].innerHTML,
            units: parseInt(tr.children[4].innerHTML) || 0,
            practicalUnit: parseInt(tr.children[3].innerHTML) || 0,
            point: parseFloat(tr.children[5].innerHTML),
            score: parseFloat(tr.children[7].innerHTML)
        }
    }
    putDataIntoTables () {
        const term = this.calculateTerm()
        const rows = $$(this.selectors.scoreTableRows)
        let index = 0;
        let sumUnits = 0, sumAcceptedUnits = 0, sumAffectedUnits = 0, sumScores = 0, average;
        for (let row of rows) {
            if (scores[term][index] !== undefined) this.customizeRow(row, scores[term][index])
            const rowData = this.getRowData(row)
            sumUnits += rowData.units + rowData.practicalUnit
            if (rowData.point >= 10) {
                sumAcceptedUnits += rowData.units + rowData.practicalUnit
                sumAffectedUnits = sumAcceptedUnits
                sumScores = rowData.score
            }
            average = sumScores / sumAffectedUnits
            $(this.selectors.sumUnits).innerHTML = parseInt(sumUnits)
            $(this.selectors.sumAcceptedUnits).innerHTML = parseInt(sumAcceptedUnits)
            $(this.selectors.sumAffectedUnits).innerHTML = parseInt(sumAffectedUnits)
            $(this.selectors.sumScores).innerHTML = sumScores.toFixed(2)
            $(this.selectors.average).innerHTML = average.toFixed(2)
            index++
        }
    }
    removeSomeParts () {
        if ($(this.selectors.karnameKol) !== undefined) $(this.selectors.karnameKol).style.display = 'none'
        if ($(this.selectors.printKarname) !== undefined) $(this.selectors.printKarname).style.display = 'none'
    }
    render () {
        try { this.removeSomeParts() } catch (e) { console.error(e) }
        try { this.putDataIntoTables() } catch (e) { console.error(e) }
        requestAnimationFrame(this.render.bind(this))
    }
}

window.hack = new Hack