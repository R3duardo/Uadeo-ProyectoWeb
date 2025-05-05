document.addEventListener('DOMContentLoaded',()=>{
    const text = document.querySelector('.text')

    textFont = text.style.fontSize
    textColor = text.style.color
    textBackground = text.style.backgroundColor

    const changeText = (target,size,color,background)=>{
        target.style.fontSize = size;
        target.style.color = color;
        target.style.backgroundColor = background;
    }

    text.addEventListener('mouseenter',e=>{changeText(e.target,'20px','red','yellow')})
    text.addEventListener("mouseleave",e=>{changeText(e.target,textFont,textColor,textBackground)})
    
    document.querySelector('.bMayus').addEventListener('click',()=>{
        text.textContent = text.textContent.toUpperCase()
    })
    document.querySelector('.bMinus').addEventListener('click',()=>{
        text.textContent = text.textContent.toLowerCase()
    })
    
    const input = document.querySelector('.input')
    document.querySelector('.bAgregar').addEventListener('click',()=>{
        text.textContent = text.textContent + input.value
    })
})