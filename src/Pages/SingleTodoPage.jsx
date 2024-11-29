import React from 'react'

const SingleTodoPage = () => {
  return (
    <div>
          <div class="container">
      <h1 class="text-1">
        <img class="img-roket" src="img/rocket.png" alt="Rocket icon" />
        Lista de Presença
      </h1>
      <div class="input-f">
        <input
          class="input-field"
          type="text"
          placeholder="Adicione uma nova tarefa"
          id="task-input"
        />
        <button type="button" id="add-task">
          Criar <img src="img/plus.png" height="13px" alt="Add icon" />
        </button>
      </div>
    </div>

    <div class="output-f" id ="">
    <h3 class="cout-text" style="color: #4ea8de">
        <a class="link-page" href="to-do.html?id=${categoryItem.id}">
          ${categoryItem.id}. ${categoryItem.name} <span class="task-count">${tasks.length}</span>
        </a>
      </h3>
      <h3 class="cout-text" style="color: rgba(130, 132, 250, 1)">
        Concluídas <span class="completed-count">${completedTasks}</span>
      </h3>
    


    </div>
      
    </div>
  )
}

export default SingleTodoPage
