class WorkFeatureShareConnection {
    constructor(querySelector, url, title, description, subject) {
        document.querySelector(querySelector).innerHTML = `<a href="https://www.twitter.com/share?url=${url}">Twitter</a>
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=${url}">Linkedin</a>
        <a href="https://www.facebook.com/sharer.php?u=${url}">Facebook</a>`
    }
}