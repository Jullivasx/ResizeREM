(function(){

    function resize(){
        let width = window.innerWidth
        let height = width / 16 * 9
        if(height > window.innerHeight){
            height = window.innerHeight
            width = height / 9 * 16
        }
        document.documentElement.style.fontSize = width / 1280 + 'px'
    }

    window.addEventListener('load', () => { resize() })
    window.addEventListener('resize', () => { resize() })

})()