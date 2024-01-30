

function destroy(){
    const custom = document.querySelector('#custom')

    const crutch = document.querySelector('#container')

    const child = crutch.querySelectorAll('#hi')

    child.forEach((child) => {
        crutch.removeChild(child)
        })
}




function create(num) {
    const color = document.querySelectorAll('#hi')
    
    
    color.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.cssText ='margin: 0px; border: 1px solid black; background: black;'
            div.style.width = (640/num) - 2 + 'px'
            div.style.height = (640/num) - 2 + 'px'
        })
    })
}


for(i = 0; i < 256; i ++) {
    const container = document.querySelector('#container')
    const hello = document.createElement('div');
    hello.setAttribute('id', 'hi')
    hello.style.cssText = 'margin: 0px; border: 1px solid black;'
    hello.style.width = (640/16) - 2 + 'px'
    hello.style.height = (640/16) - 2 + 'px'
    container.appendChild(hello);
    create(16)
}






custom.addEventListener ('click', () => {

    destroy()

    let mySize = prompt()

    for(i = 0; i < mySize * mySize; i ++) {
        const container = document.querySelector('#container')
        const hello = document.createElement('div');
        hello.setAttribute('id', 'hi')
        hello.style.cssText = 'margin: 0px; border: 1px solid black;'
        hello.style.width = (640/mySize) - 2 + 'px'
        hello.style.height = (640/mySize) - 2 + 'px'
        container.appendChild(hello);
        }

    create(mySize)


    
    
})

const reset = document.querySelector('#reset')

        reset.addEventListener('click', () => {
            destroy()

            for(i = 0; i < 256; i ++) {
                const container = document.querySelector('#container')
                const hello = document.createElement('div');
                hello.setAttribute('id', 'hi')
                hello.style.cssText = 'margin: 0px; border: 1px solid black;'
                hello.style.width = (640/16) - 2 + 'px'
                hello.style.height = (640/16) - 2 + 'px'
                container.appendChild(hello);
                create(16)
            }
        })



    
    

    



    

        
    





