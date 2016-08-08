class Ajax {
    get(url) {
        return new Promise(function(resolve, reject) {
            let req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = () => {
                if (req.status === 200) {
                    resolve(req.response); /* PROMISE RESOLVED */
                } else {
                    reject(Error(req.statusText)); /* PROMISE REJECTED */
                }
            };
            req.onerror = function() {
                reject(Error("Network Error"));
            };
            req.send();
        });
    }

    // Get JSON Helper
    getJSON = (url) => {
        return this.get(url).then(JSON.parse);
    }
}

export default Ajax;
