export const applyTheme = (theme) => {
    const root = document.documentElement;

    const themes = {
        cherry: {
            primary: "#B30E0E",
            secondary: "#D36464",
            text: "white"
        },
        berry: {
            primary: "#13599A",
            secondary: "#42ade2",
            text: "white"
        },
        pumpkin: {
            primary: "#FF7518",
            secondary: "#FFB974",
            text: "white"
        },
        plum: {
            primary: "#8E4585",
            secondary: "#C88EC4",
            text: "white"
        },
        lime: {
            primary: "#2DA113",
            secondary: "#69C754",
            text: "white"
        }
    };

    const selected = themes[theme];

    root.style.setProperty("--primary-color", selected.primary);
    root.style.setProperty("--secondary-color", selected.secondary);
    root.style.setProperty("--text-color", selected.text);
};

export const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    applyTheme(theme);
};

export const loadSavedTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) {
        applyTheme(saved);
    }
};
