const input = document.querySelector('.input')
const button = document.querySelector('.button')
const list = document.querySelector('.list')



button.addEventListener('click', createTask)
button.addEventListener('click', cont)
list.addEventListener('click', check)


function createTask(event){
    event.preventDefault()
    //the div that contains the input value and the buttons
    const task = document.createElement('div')
    task.classList.add('task')

    //the text part
    const taskItem = document.createElement('li')
    taskItem.innerText = input.value 
    taskItem.classList.add('task-item')
    task.appendChild(taskItem)

    //the buttons
    const btnCheck = document.createElement('button')
    btnCheck.innerHTML = '<i class="fas fa-check"></i>'
    btnCheck.classList.add('btn-check')
    task.appendChild(btnCheck)
    const btnTrash = document.createElement('button')
    btnTrash.innerHTML = '<i class="fas fa-trash"></i>'
    btnTrash.classList.add('btn-trash')
    task.appendChild(btnTrash)

    //the ul in the html
    list.appendChild(task)

    input.value = ''
    input.focus()


    btnCheck.addEventListener('click', check)
    function check(){
        const text = btnCheck.parentElement // the div task
        text.classList.toggle('check')
    }

    btnTrash.addEventListener('click', trash)
    function trash(){
        const can = btnTrash.parentElement // the div task
        can.classList.add('slide') // sass animation
        can.addEventListener('transitionend', () => { can.remove() })
    }

    
}


