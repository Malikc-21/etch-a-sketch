function destroy(){
    const custom = document.querySelector('#custom')

    const crutch = document.querySelector('#container')

    const child = crutch.querySelectorAll('#hi')

    child.forEach((child) => {
        crutch.removeChild(child)
        })
}




function create() {
    const color = document.querySelectorAll('#hi')
    
    
    color.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.cssText = 'width: 40px; height: 40px; margin: 0px; border: 4px solid black; background: black;'
        })
    })
    
    const button = document.querySelector('button')
    
    button.addEventListener ('click', () => {
        color.forEach((div) => {
                div.style.cssText = 'width: 40px; height: 40px; margin: 0px; border: 4px solid black; background: white;'
            })
        })
    
    }


for(i = 0; i < 256; i ++) {
    const container = document.querySelector('#container')
    const hello = document.createElement('div');
    hello.setAttribute('id', 'hi')
    hello.style.cssText = 'width: 40px; height: 40px; margin: 0px; border: 4px solid black;'
    //document.querySelector('#container');
    container.appendChild(hello);
    create()
}






custom.addEventListener ('click', () => {

    destroy()

    let mySize = prompt()

    for(i = 0; i < mySize * mySize; i ++) {
        const container = document.querySelector('#container')
        const hello = document.createElement('div');
        hello.setAttribute('id', 'hi')
        hello.style.cssText = 'width: 40px; height: 40px; margin: 0px; border: 4px solid black;'
        container.appendChild(hello);
        }

    create()


    
    
})

const reset = document.querySelector('#reset')

        reset.addEventListener('click', () => {
            destroy()

            for(i = 0; i < 256; i ++) {
                const container = document.querySelector('#container')
                const hello = document.createElement('div');
                hello.setAttribute('id', 'hi')
                hello.style.cssText = 'width: 40px; height: 40px; margin: 0px; border: 4px solid black;'
                //document.querySelector('#container');
                container.appendChild(hello);
                create()
            }
        })


    
    

    



    

        
    





