/**
  * Main JS File
  *
  * @package  hdy
  * @author   Kabolobari Benakole <i@kb.life>
*/

// Re-wrap images and iframes with figure element
new Vue({
    data: {
        contentImages: document.querySelectorAll('[content] p img'),
        iframes: document.querySelectorAll('iframe'),
    },
    created() {
        // Replacing all images with figure and caption...
        if (this.contentImages) {
            this.contentImages.forEach((element, i) => {  
                let parentImg    = element.closest('p'),
                    figure       = document.createElement('figure')
                figure.innerHTML = `
                    <img src="${element.src}" alt="${element.alt}" class="preferred-image-heights">
                    <figcaption>${element.alt}</figcaption>
                `
                parentImg.parentNode.replaceChild(figure, parentImg)
            })
        }
        
        // Replacing all iframes with figure and figcaption...
        if (this.iframes) {
            this.iframes.forEach(element => {
                let figure       = document.createElement('figure')
                figure.classList.add('video-wrapper')    
                figure.innerHTML = `
                    <iframe src="${element.src}" frameborder="0" allowfullscreen></iframe>
                `
                element.parentNode.replaceChild(figure, element)
            })
        }
    },
})
