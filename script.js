function getBannedMsg() {
    let str = document.getElementById('beforeBanMsg').value;
    str = str.replace(/(?:\r\n|\r|\n| |[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000])/g, ',').replace(/,.{1},/g,',').replace(/,+/g, ',');
    document.getElementById('afterBanMsg').value = str;
}