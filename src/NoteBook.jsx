import { useState } from "react";
import NoteBookList from "./NoteBookList"



const NoteBook = () => {
    const [data, getData] = useState([])
    const [btnData, getBtnData] = useState(data);
    const [error, getError] = useState(false)
    const [clear, getClear] = useState(false)

    // update icon todo state
    const [update, getUpdate] = useState(true)



    const todolist = (e, value) => {
        if (e) {
            getData(e.target.value)
        }
        !e.target.value ? getError(true) : getError(false)
    }
    const click_data = (in_data,index) => {
        if (in_data.length > 0) {
            getData([])
            getBtnData([...btnData, in_data])
            getClear(true)
            console.log(in_data,index);
        } else {
            getError(true)
            getClear(false)
        }
    }
    // delete Todo 
    const deleteTodo = (val, id) => {
        btnData.splice(id, 1)
        getBtnData([...btnData])
    }
    // Update todo 
    const updateTodo = (val, id) => {
        getData(val)
        console.log(val, id);
        getUpdate(false)
    }
    return (
        <>
            <div className="container bg d-flex h-fluid mt-5 flex-column align-items-center">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="d-flex" role="search">
                            <input className="form-control me-2"
                                type="text"
                                value={data}
                                placeholder="Notebook"
                                onChange={todolist}
                            />
                            {update ? (<button className="btn btn-outline-success butn"
                                type="submit"
                                onClick={() => { click_data(data) }}
                            >Add</button>) : (<button className="btn btn-outline-success butn"
                                type="submit"
                                onClick={() => { click_data(data) }}
                            >Edit</button>)}
                        </div>
                    </div>
                </nav>
                {error && <p className="p-text text-danger">Please add some data</p>}
            </div >
            <NoteBookList
                btnData={btnData}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />
            {clear && <div className=" container d-flex justify-content-center clear-all " role="search"
                onClick={() => { getBtnData([]) }}>
                Clear All
            </div>}
        </>
    )
}
export default NoteBook;