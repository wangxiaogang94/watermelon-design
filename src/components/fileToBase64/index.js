export const fileToBase64 = (file, func) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        const { result } = reader;
        func(result);
    });
    reader.readAsDataURL(file);
};
