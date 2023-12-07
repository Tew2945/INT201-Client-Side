class Setting { 
    constructor(bgColor = '#ffffff', fontColor = '#000000') {
        this.bgColor = bgColor
        this.fontColor = fontColor
    }

    getBgColor() {
        return this.bgColor
    }

    getFontColor() {
        return this.fontColor
    }
}

export { Setting }