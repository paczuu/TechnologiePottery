export const loadTemplate = () => {
    return new Promise((resolve, reject) => {
        const app = document.getElementById('app');
        const temporaryContent = document.getElementById('temporaryContent');

        fetch('/template.html')
            .then(response => response.text())
            .then(html => {
                app.innerHTML = html;
                const contentTab = document.getElementById('contentTab');
                contentTab.innerHTML = temporaryContent.innerHTML;
                temporaryContent.innerHTML = null;
                resolve();
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error);
            });
    });
};
