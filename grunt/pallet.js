/**
 * Created by Godfery on 2016/8/23 0023.
 */
/*
 * Color utility functions
 * Source: http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 * Github: https://github.com/mbitson/mcg
 */
function shadeColor(color, percent) {
    var f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

/**
 * 转换16进制
 * @param c
 * @returns {string}
 */
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

/**
 * Rgb=>Hex
 * @param rgb
 * @returns {string}
 */
function rgbToHex(rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
 * 计算系统颜色
 * @param less
 * @param color
 * @param percent (正值表示lighter,负值表示darken)
 */
function pallet(less, color, percent) {
    var colorConfig = {
        '50': 0.9,
        '100': 0.7,
        '200': 0.5,
        '300': 0.333,
        '400': 0.166,
        '500': 0,
        '600': -0.125,
        '700': -0.25,
        '800': -0.375,
        '900': -0.5
    };
    color = rgbToHex(color.rgb);
    percent = colorConfig[percent.value] || percent;
    return shadeColor(color, percent);
}

module.exports = pallet;
