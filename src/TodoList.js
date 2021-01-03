import { useState, useEffect } from 'react';

const List = (props) => {
    return (
        <ul>
            {props.todos.map((x) => {
                return (
                    <div >
                        <li style={{ textDecoration: x.completed ? "line-through" : null }}>
                            {x.title}
                            <input type="checkbox"
                                checked={x.completed}
                                onChange={(e) => props.toggleTodo(x)} />
                            <button onClick={() => props.deleteHandler(x)}>Delete</button>
                            <button onClick={() => props.editHandler(x)}>Edit</button>

                        </li>
                    </div>)
            })}

        </ul>
    );
};
const Form = (props) => {
    const [todo, setTodo] = useState("");
    useEffect(() => {
        if (props.editData) setTodo(props.editData.title);
    }, [props.editData]);
    const addTodo = () => {
        const todoItem = {
            title: todo,
            completed: false,
            id: Math.random() * 1000
        }
        props.onAddTodo(todoItem);
        setTodo("")
    };
    const updateTodo = () => {
        const todoItem = {
            title: todo,
            completed: props.editData.completed,
            id: props.editData.id
        }
        props.onUpdateTodo(todoItem);
        setTodo("")
    };
    return (
        <div>
            <input type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
            {props.editData ?
                (<button onClick={() => updateTodo()}>Update Todo</button>)
                : (<button onClick={() => addTodo()}>Add Todo</button>)}
        </div>
    )
}



const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [editData, setEditData] = useState("");
    useEffect(() => {
        getTodos();
    }, []);
    useEffect(() => {
        saveTodos();
    }, [todos]);
    const editHandler = (x) => {
        setEditData(x)
    }
    const deleteHandler = (x) => {
        setTodos(todos.filter((el) => el.id !== x.id))
    };

    const toggleTodo = (x) => {
        const checkedItems = todos.map((el) => {
            if (el.id === x.id) return { ...x, completed: !x.completed };
            else return el;
        });
        setTodos(checkedItems)
    };
    const updateHandler = (data) => {
        const upItems = todos.map((el) => {
            if (el.id === data.id) return data
            else return el;
        });
        setTodos([...upItems])

        setEditData(null)
    }
    const saveTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    const getTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let localtodo = JSON.parse(localStorage.getItem("todos"))
            setTodos(localtodo);
        };
    }
    return (
        <div>
            <Form todos={todos} setTodos={setTodos}
                onAddTodo={(x) => setTodos([...todos, x])}
                editData={editData}
                setEditData={setEditData}
                onUpdateTodo={(data) => updateHandler(data)}
            />
            <List todos={todos}
                deleteHandler={(x) => deleteHandler(x)}
                toggleTodo={(x) => toggleTodo(x)}
                editHandler={(x) => editHandler(x)}
            />
        </div>
    )
}

export default TodoList;

