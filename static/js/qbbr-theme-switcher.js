/**
 * Like a procedure style, blad.
 *
 * @type {QbbrThemeSwitcher}
 * @author qbbr
 */
var QbbrThemeSwitcher = (function() {
    var MODE_KEY = 'theme';
    var DATA_THEME = 'data-theme';

    /**
     * @param {HTMLElement} element
     * @constructor
     */
    function QbbrThemeSwitcher(element) {
        element.onclick = function() {
            var mode = invert(getTheme());
            setToLocalStorage(mode);
            setTheme(mode);
        }
        setTheme(getTheme());
    }

    function setTheme(mode) {
        document.documentElement.setAttribute(DATA_THEME, mode);
    }

    function invert(mode) {
        return mode === 'dark' ? 'light' : 'dark';
    }

    function getTheme() {
        var theme = getFromLocalStorage();

        if (!theme) {
            theme = getFromPrefersColorSchema();
        }

        return theme;
    }

    function getFromLocalStorage() {
        return localStorage.getItem(MODE_KEY);
    }

    function setToLocalStorage(mode) {
        localStorage.setItem(MODE_KEY, mode);
    }

    function getFromPrefersColorSchema() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    return QbbrThemeSwitcher;
}());

